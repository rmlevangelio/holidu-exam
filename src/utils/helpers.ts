export const chunkArray = (arr: Array<any>, chunkSize: number) => {
  const newArray = [];

  while (arr.length) {
    newArray.push(arr.splice(0, chunkSize));
  }

  return newArray;
};
