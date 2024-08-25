import getDiffObject from './getDiffObject.js';

const getDiff = (objectTo, objectFrom) => {
  const diffObject = getDiffObject(objectTo, objectFrom);

  const diffTransformStr = diffObject.join('\n\t').trimEnd();

  return `{\n\t${diffTransformStr}\n}`;
};

export default getDiff;
