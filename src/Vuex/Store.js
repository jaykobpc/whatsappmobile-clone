import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import state from './State';

export default new Vuex.Store({
    state,
});