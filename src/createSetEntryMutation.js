import Vue from 'vue';
import isIndex from './helper/isIndex';
import convertPathToDotNotation from './helper/convertPathToDotNotation';
import { isString as lodashIsString } from 'lodash';

export default {
  setEntry(stateFromStore, [pathParam, value]) {
    // check for right parameter syntax
    if (!lodashIsString(pathParam)) throw Error('Wrong parameters in setEntry. Call it with an array of path and value.');

    const pathModified = convertPathToDotNotation(pathParam);

    // Split path
    const pathSplit = pathModified.split('.');
    const field = pathSplit.pop();

    // Object
    let storeEntry = stateFromStore;
    _.forEach(pathSplit, (key, index) => {
      if (!storeEntry[key]) {
        // init empty objects
        if ((pathSplit.length > index + 1) && (isIndex(pathSplit[index + 1]))) {
          Vue.set(storeEntry, key, []);
        } else {
          Vue.set(storeEntry, key, {});
        }
        storeEntry = storeEntry[key];
      }
    });
    // set reactivity
    Vue.set(storeEntry, field, value);
  }
}