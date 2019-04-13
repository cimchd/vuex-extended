import {isArray as lodashIsArray, isObject as lodashIsObject} from 'lodash';
import convertPathToDotNotation from './convertPathToDotNotation';

export default function normalizeParams(path, aliases) {
  // convert path to dot notation
  path = convertPathToDotNotation(path);

  const pathParts = path.split('.');
  const lastPart = pathParts[pathParts.length - 1];

  // if no aliases are given, map only last entry of path
  if (!aliases) aliases = lastPart;

  // if only a string is given for aliases, assume it's a single alias
  if (typeof aliases === 'string') {
    const obj = {};
    obj[aliases] = lastPart;
    aliases = [obj];

    // adjust path
    if (pathParts.length > 1) {
      pathParts.splice(-1, 1);
      path = pathParts.join('.');
    } else {
      path = '';
    }
  }

  // array is given
  else if (lodashIsArray(aliases)) {
    // aliases is an array and should be ok, check if parameters are ok
    aliases.forEach((alias, index) => {
      if (lodashIsObject(alias)) {
        if (Object.keys(alias).length > 1) throw Error('Wrong parameter');
      } else if (typeof alias === 'string') {
        const obj = {};
        obj[alias] = alias;
        aliases[index] = obj;
      } else  {
        throw Error('wrong parameter');
      }
    });
  }
  else throw Error('wrong parameter');

  return {
    path,
    aliases
  }
}
