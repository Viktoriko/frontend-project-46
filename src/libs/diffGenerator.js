import _ from 'lodash';

const diffGenerator = (objectTo, objectFrom) => {
  const keysTo = Object.keys(objectTo);
  const keysFrom = Object.keys(objectFrom);

  const diffObject = {};

  keysTo.forEach((key) => {
    if (!Object.hasOwn(objectFrom, key)) {
      diffObject[key] = 'deleted';
    } else if (objectFrom[key] !== objectTo[key]) {
      diffObject[key] = 'changed';
    } else if (objectFrom[key] === objectTo[key]) {
      diffObject[key] = 'unchanged';
    }
  });

  keysFrom.forEach((key) => {
    if (!Object.hasOwn(objectTo, key)) {
      diffObject[key] = 'added';
    }
  });

  return _.sortBy(Object.entries(diffObject));
};

export default diffGenerator;
