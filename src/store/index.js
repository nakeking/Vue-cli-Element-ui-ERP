import Vue from 'vue';
import Vuex from 'vuex';

import state from './state';
import mutations from './mutations';
import * as getters from './getters';
import * as actions from './actions';

const debug = process.env.NODE_ENV !== 'production'

Vue.use(Vuex)

export default new Vuex.Store({
	state,
	mutations,
	getters,
	actions,
	strict: debug
})