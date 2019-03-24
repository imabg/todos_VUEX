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
    },
    postTodos: (state, todo) => {
      state.todos.unshift(todo);
    },
    filterTodos: (state, todos) => {
      return (state.todos = todos);
    },
    removeTodo: (state, id) =>
      (state.todos = state.todos.filter(todo => todo.id !== id))
  },
  actions: {
    async fetchTodos({ commit }) {
      const todos = await axios.get(
        'https://jsonplaceholder.typicode.com/todos'
      );
      commit('setTodos', todos.data);
    },

    async addTodo({ commit }, title) {
      const response = await axios.post(
        'https://jsonplaceholder.typicode.com/todos',
        { title, completed: false }
      );
      commit('postTodos', response.data);
    },

    async filterTodos({ commit }, e) {
      const limit = parseInt(
        e.target.options[e.target.options.selectedIndex].innerText
      );
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/todos?_limit=${limit}`
      );
      commit('filterTodos', response.data);
    },

    async deleteTodo({ commit }, id) {
      await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
      commit('removeTodo', id);
    }
  }
});
