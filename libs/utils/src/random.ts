export const randomString = (
  len: number,
  charSet?: string
): Promise<string> => {
  charSet =
    charSet || 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let randomString = '';
  for (let i = 0; i < len; i++) {
    const randomPoz = Math.floor(Math.random() * charSet.length);
    randomString += charSet.substring(randomPoz, randomPoz + 1);
  }
  return Promise.resolve(randomString);
};

export const randomNumber = (min: number, max: number): Promise<number> => {
  const randomInt: number = Math.floor(Math.random() * (max - min + 1) + min);
  return Promise.resolve(randomInt);
};

export const randomDateString = (format: string): Promise<string> => {
  const year = Math.floor(Math.random() * (2100 - 1900 + 1)) + 1900;
  const month = Math.floor(Math.random() * 12) + 1;
  const day = Math.floor(Math.random() * 28) + 1;

  // Create a Date object with the generated values
  const dt = new Date(year, month - 1, day);

  // Format the Date object using the specified format
  const formattedDt = format
    .replace('YYYY', dt.getFullYear().toString())
    .replace('MM', (dt.getMonth() + 1).toString().padStart(2, '0'))
    .replace('DD', dt.getDate().toString().padStart(2, '0'));

  return Promise.resolve(formattedDt);
};

export const getCurrentLocaleDateString = (): Promise<string> => {
  const now = new Date();
  return Promise.resolve(now.toLocaleDateString());
};
