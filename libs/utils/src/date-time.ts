//Magnus
export async function getFormattedDate(): Promise<string> {
  const currentDate = new Date();

  // Create a new Date object for JST
  const jstOffset = 9 * 60; // 9 hours in minutes
  const jstDate = new Date(
    currentDate.getTime() +
      (currentDate.getTimezoneOffset() + jstOffset) * 60 * 1000
  );

  const year = jstDate.getFullYear();
  const month = String(jstDate.getMonth() + 1).padStart(2, '0');
  const day = String(jstDate.getDate()).padStart(2, '0');

  return `${year}${month}${day}`;
}


// export async function getFormattedDate(): Promise<string> {
//   const currentDate = new Date();
//   const year = currentDate.getFullYear();
//   const month = String(currentDate.getMonth() + 1).padStart(2, '0');
//   const day = String(currentDate.getDate()).padStart(2, '0');

//   return `${year}${month}${day}`;
// }
