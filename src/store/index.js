import Vue from "vue";
import _state from "./state";
import store from "storejs";

const state = Vue.observable(_state)
const mutations = {
  toggle() {
    state.darkMode = !state.darkMode
    store.set('darkMode', state.darkMode)
  },
};

export default {
  state,
  mutations,
}