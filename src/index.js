// import Vuex mapper
import {
  mapActions as mapActionsFunction,
  mapGetters as mapGettersFunction,
  mapMutations as mapMutationsFunction,
  mapState as mapStateFunction,
  createNamespacedHelpers as createNamespacedHelpersFunction
} from 'vuex';

// additional mappers
import createSetEntryMutationFunction from './createSetEntryMutation';
import mapEntryComputed from './mapEntry';

// Vuex
export const mapActions = mapActionsFunction;
export const mapGetters = mapGettersFunction;
export const mapMutations = mapMutationsFunction;
export const mapState = mapStateFunction;
export const createNamespacedHelpers = createNamespacedHelpersFunction;

// additional functions
export const createSetEntryMutation = createSetEntryMutationFunction;
export const mapEntry = mapEntryComputed;