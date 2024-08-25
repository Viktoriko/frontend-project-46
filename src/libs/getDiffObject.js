import diffGenerator from './diffGenerator.js';

const getDiffObject = (objectTo, objectFrom) => {
  const diffGenerated = diffGenerator(objectTo, objectFrom);

  return diffGenerated.reduce((acc, [key, value]) => {
    if (value === 'deleted' || value === 'changed') {
      acc.push(`- ${key}: ${objectTo[key]}`);
    }
    if (value === 'unchanged') {
      acc.push(`  ${key}: ${objectTo[key]}`);
    }
    if (value === 'added' || value === 'changed') {
      acc.push(`+ ${key}: ${objectFrom[key]}`);
    }
    return acc;
  }, []);
};

export default getDiffObject;
