import {get as lodashGet} from 'lodash';

export default function computedGetterSetter (path) {
  return {
    get() {
      return lodashGet(this, `$store.state.${path}`);
    },
    set(value) {
      this.$store.commit('setEntry', [path, value]);
    }
  }
}
