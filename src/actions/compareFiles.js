import getFileData from '../libs/getFileData.js';
import getDiff from '../libs/getDiff.js';

const compareFiles = (filepath1, filepath2) => {
  const fileData1 = getFileData(filepath1);
  const fileData2 = getFileData(filepath2);

  const diff = getDiff(fileData1, fileData2);

  console.log(diff);

  return diff;
};

export default compareFiles;
