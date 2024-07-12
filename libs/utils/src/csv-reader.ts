import * as fs from 'fs';
import csvParser from 'csv-parser';
import * as iconv from 'iconv-lite';

//Magnus
export function convertCsvToArray(filePath: string) {
  console.log('Loading file from path:', filePath); // Add this line to log the file path
  return new Promise<Record<string, unknown>[]>((resolve, reject) => {
    const dataArray: Record<string, unknown>[] = [];

    // Ensure the file stream is correctly set up to read Shift_JIS and convert it to UTF-8.
    const fileStream = fs
      .createReadStream(filePath)
      .pipe(iconv.decodeStream('utf-8')); // Sử dụng iconv-lite để decode sang UTF-8
    // .pipe(iconv.decodeStream('Shift_JIS')) // Decode from Shift_JIS.
    // .pipe(iconv.encodeStream('UTF-8')); // Encode to UTF-8.

    fileStream
      .pipe(csvParser())
      .on('data', (data) => dataArray.push(data))
      .on('end', () => {
        console.log('CSV file successfully converted to array');
        resolve(dataArray);
      })
      .on('error', (error) => {
        console.error('Error converting CSV file to array:', error);
        reject(error);
      });
  });
}

// export function convertCsvToArray(filePath: string) {
//   return new Promise<Record<string, unknown>[]>((resolve, reject) => {
//     const dataArray: Record<string, unknown>[] = [];

//     const fileStream = fs
//       .createReadStream(filePath)
//       .pipe(iconv.decodeStream('Shift_JIS'))
//       .pipe(iconv.encodeStream('utf-8'));

//     fileStream
//       .pipe(csvParser())
//       .on('data', (data) => {
//         dataArray.push(data);
//       })
//       .on('end', () => {
//         console.log('CSV file successfully converted to array');
//         resolve(dataArray);
//       })
//       .on('error', (error) => {
//         console.error('Error converting CSV file to array:', error);
//         reject(error);
//       });
//   });
// }
