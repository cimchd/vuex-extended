import computedGetterSetter from './computedGetterSetter';

export default function mapSingleEntry(path, aliases) {
  // check parameter
  if (typeof aliases !== 'object') throw Error('Wrong parameter');
  if (Object.keys(aliases).length > 1) throw Error('Wrong parameter');

  // set alias and path
  const alias = Object.keys(aliases)[0];
  if (!path) path = aliases[alias];
  else path += `.${aliases[alias]}`;

  // return computed getter and setter
  const returnObject = {};
  returnObject[alias] = computedGetterSetter(path);
  return returnObject;
}
