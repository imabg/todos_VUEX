import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    title: "Todo's Application",
    todos: []
  },
  getters: {
    allTodos: state => {
      return state.todos;
    }
  },
  mutations: {
    setTodos: (state, todos) => {
      state.todos = todos;
    }
  },
  actions: {
    async fetchTodos({ commit }) {
      const todos = await axios.get(
        'https://jsonplaceholder.typicode.com/todos'
      );
      commit('setTodos', todos.data);
    }
  }
});
