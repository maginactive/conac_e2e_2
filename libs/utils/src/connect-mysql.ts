import * as fs from 'fs';
import * as mysql from 'mysql2/promise';
import { Client, ConnectConfig } from 'ssh2';

export function connectToMySql(): Promise<mysql.Connection> {
  const sshClient = new Client();
  const dbServer: mysql.ConnectionOptions = {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  };
  const sshTunnelConfig: ConnectConfig = {
    host: process.env.SSH_HOST,
    port: +process.env.SSH_PORT,
    username: process.env.SSH_USER,
    privateKey: process.env.SSH_PRIVATE_KEY_PATH
      ? fs.readFileSync(process.env.SSH_PRIVATE_KEY_PATH)
      : null,
  };

  const forwardConfig = {
    srcHost: '127.0.0.1',
    srcPort: +dbServer.port,
    dstHost: dbServer.host,
    dstPort: +dbServer.port,
  };
  const createMySQLConnection = (config?: mysql.ConnectionOptions) => {
    return mysql.createConnection({
      ...dbServer,
      ...config,
    });
  };

  return new Promise((resolve, reject) => {
    if (!process.env.SSH_PRIVATE_KEY_PATH) {
      createMySQLConnection().then(resolve).catch(reject);
      return;
    }
    sshClient
      .on('ready', () => {
        console.log('success');
        sshClient.forwardOut(
          forwardConfig.srcHost,
          forwardConfig.srcPort,
          forwardConfig.dstHost,
          forwardConfig.dstPort,
          async (sshError, stream) => {
            if (sshError) {
              reject(sshError);
            }
            try {
              resolve(await createMySQLConnection({ stream }));
            } catch (error) {
              reject(error);
            }
          }
        );
      })
      .on('error', (e) => {
        console.log(e);
      })
      .connect(sshTunnelConfig);
  });
}
