import { isArray as lodashIsArray } from 'lodash';

import mapSingleEntry from './helper/mapSingleEntry';
import normalizeParams from './helper/normalizeParams';

export default function mapEntry(path, aliases = null) {
  const options = normalizeParams(path, aliases);

  // init empty returnObject for computed getters and setters
  let returnObject = {};

  options.aliases.forEach(alias => {
    returnObject = {...returnObject, ...mapSingleEntry(options.path, alias)}
  });

  return returnObject;
}
