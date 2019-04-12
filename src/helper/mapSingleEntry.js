import { get as lodashGet } from 'lodash';

export default function mapSingleEntry(path, alias) {
  // create computed getter and setter
  const returnObject = {};
  returnObject[alias] = {
    get() {
      return lodashGet(this, `$store.state.${path}`);
    },
    set(value) {
      this.$store.commit('setEntry', [path, value]);
    }
  };

  // return computed getter and setter
  return returnObject;
}