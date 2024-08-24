import getFileData from '../getFileData.js';

const readFile = (filepath1, filepath2) => {
  const fileData1 = getFileData(filepath1);
  const fileData2 = getFileData(filepath2);

  console.log(fileData1);
  console.log(fileData2);
};

export default readFile;
