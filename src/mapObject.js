import { get as lodashGet } from 'lodash';

export default function mapObject(path, alias, depth = 10) {
  const returnObject = {};
  returnObject[alias] = {
    get() {
      return lodashGet(this, `$store.state.${path}`);
    },
    set(value) {
      this.$store.commit('setEntry', [path, value]);
    }
  };

  return returnObject;
}