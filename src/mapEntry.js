import { get as lodashGet } from 'lodash';

export default function mapEntry(path, alias) {
  const returnObject = {};
  returnObject[alias] = {
    get() {
      console.log('get');
      console.log({...this.$store.state});
      console.log(`$store.state.${path}`);
      return lodashGet(this, `$store.state.${path}`);
    },
    set(value) {
      console.log('set');
      this.$store.commit('setEntry', [path, value]);
    }
  };

  return returnObject;
}