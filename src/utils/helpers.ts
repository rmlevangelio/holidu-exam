export function chunkArray(arr: Array<any>, chunkSize: number): Array<any> {
  const newArray = [];

  while (arr.length) {
    newArray.push(arr.splice(0, chunkSize));
  }

  return newArray;
}
