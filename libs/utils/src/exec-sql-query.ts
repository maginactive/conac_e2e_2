import { connectToMySql } from './connect-mysql';

export async function execSqlQuery(query: string) {
  const connection = await connectToMySql();
  return connection.query(query);
}
