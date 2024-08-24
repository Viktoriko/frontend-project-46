import path from 'node:path';
import { cwd } from 'node:process';
import { readFileSync } from 'node:fs';

const getFileData = (pathFile) => {
  const correctPath = path.resolve(cwd(), pathFile);
  const file = readFileSync(correctPath);

  if (pathFile.endsWith('json')) {
    return JSON.parse(file);
  }

  return file;
};

export default getFileData;
