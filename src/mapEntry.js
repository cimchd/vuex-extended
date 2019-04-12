import { get as lodashGet } from 'lodash';
import mapSingleEntry from './helper/mapSingleEntry';

export default function mapEntry(path, aliasesParam = null) {
  const aliases = [];
  // if no aliases are given, map only last entry of path
  if (!aliasesParam) {
    const pathParts = path.split('.');
    // only add alias if path consists of more than one part
    if (pathParts.length > 1) {
      aliases.push(pathParts[pathParts.length - 1]);
    }
  }

  // if only a string is given for aliases, assume it's a single alias
  if (typeof aliasesParam === 'string') {
    aliases.push(aliasesParam);
  }

  // init empty returnObject for computed getters and setters
  let returnObject = {};

  aliases.forEach(alias => {
    returnObject = {...returnObject, ...mapSingleEntry(path, alias)}
  });

  return returnObject;
}