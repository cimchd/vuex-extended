# Vuex extended

## Description

short package to extend vuex with some additional mappers

## Install

### NPM
```
npm i vuex-extended
```

### Yarn
```
yarn add vuex-extended
```

## Vuex store preparation
Add the setEntry mutation to your store 
```js
import { createSetEntryMutation } from 'vuex-extended';

export const mutations = {
  ...createSetEntryMutation,
  // your other mutations
};

```

## Usage
Now you can use all vuex mappers and the additional mappers in your Vue components
```js
import { mapEntry, mapActions } from 'vuex-extended'

Vue.component({
    computed: {
        ...mapEntry('path.to.my.entry')
    },
    methods: {
        ...mapActions('myAction')
    }
})
```