import Vue from 'vue';
import isIndex from './helper/isIndex';

export default {
  setEntry(stateFromStore, [pathParam, value]) {
    console.log('setEntry');
    // convert array like syntax to dot syntax
    let pathModified = pathParam.replace(/\["/g, '.');
    pathModified = pathModified.replace(/\['/g, '.');
    pathModified = pathModified.replace(/\[/g, '.');
    pathModified = pathModified.replace(/"]/g, '');
    pathModified = pathModified.replace(/']/g, '');
    pathModified = pathModified.replace(/]/g, '');

    // Split path
    const pathSplit = pathModified.split('.');
    const field = pathSplit.pop();

    // Object
    let storeEntry = stateFromStore;
    _.forEach(pathSplit, (key, index) => {
      console.log(key);
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