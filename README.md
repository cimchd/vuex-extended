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
Add the setEntry mutation to your store. If you are using store modules,
make sure to insert in at root level of the store.
```js
import { createSetEntryMutation } from 'vuex-extended';

export const mutations = {
  ...createSetEntryMutation,
  // your other mutations
};

```

## Usage
Now you can use all vuex mappers and the additional mappers in your Vue components.
```js
import { mapEntry, mapActions } from 'vuex-extended'

Vue.component('my-component', {
    computed: {
        ...mapEntry('path.to.my.entry')
    },
    methods: {
        ...mapActions('myAction')
    }
})
```

## Additional mappers

### mapEntry
mapEntry adds computed getters and setters for the given store entries. This is especially usefull
for handling form data with v-model.

#### Syntax
There are multiple ways to use mapEntry:

```js
Vue.component('my-component', {
    computed: {
        // map a single entry
        ...mapEntry('path.to.my.entry'),
        
        // map a single entry under an alias name
        ...mapEntry('path.to.my.entry', 'alias'),
        
        // map map a single entry with array syntax
        ...mapEntry('path.to.my', ['entry']),
        
        // map a single entry with array syntax and alias
        ...mapEntry('path.to.my', [{'alias': 'entry'}]),
        
        // map multiple entries with array syntax
        ...mapEntry('path.to.my', ['entry', 'anotherEntry']),
        
        // map multiple entries with array syntax and aliases
        ...mapEntry('path.to.my', [{'alias': 'entry'}, {'anotherAlias': 'anotherEntry'}]),
        
        // map multiple entries with mixed syntax with and without alias
        ...mapEntry('path.to.my', [{'alias': 'entry'}, 'anotherEntry']),
    }
});
```

You can use dot notation, slash notation and bracket notation for the path.

```js
Vue.component('my-component', {
    computed: {
        // dot notation
        ...mapEntry('path.to.my.entry'),
        
        // slash notation
        ...mapEntry('path/to/my/entry'),
        
        // bracket notation
        ...mapEntry('path["to"]["my"]["entry"]'),
        
        // mix dot, slash and bracket notation
        ...mapEntry('path/to.my["entry"]'),
        
        // also works for array elements
        ...mapEntry('path.to.my[0].entry'),
    }
});
```
