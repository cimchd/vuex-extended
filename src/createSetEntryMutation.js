import Vue from 'vue';
import isIndex from './helper/isIndex';
import convertPathToDotNotation from './helper/convertPathToDotNotation';

export default {
  setEntry(stateFromStore, [pathParam, value]) {
    const pathModified = convertPathToDotNotation(pathParam);

    // Split path
    const pathSplit = pathModified.split('.');
    const field = pathSplit.pop();

    // Object
    let storeEntry = stateFromStore;
    _.forEach(pathSplit, (key, index) => {
      storeEntry = storeEntry[key];
      if (!storeEntry) {
        // init empty objects
        if ((pathSplit.length > index + 1) && (isIndex(pathSplit[index + 1]))) {
          storeEntry = [];
        } else {
          storeEntry = {};
        }
      }
    });
    // set reactivity
    Vue.set(storeEntry, field, value);
  }
}