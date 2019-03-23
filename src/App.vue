<template>
  <div id="app">
    <p class="display-3">
      {{ title }}
      using Vuex
    </p>
    <hr>
    <Search></Search>
    <ul>
      <li v-for="todo in todos" :key="todo.id" class="container">
        <p class="todo">{{ todo.title }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Search from "./components/Search.vue";

export default {
  name: "app",
  components: {
    Search
  },
  methods: {
    ...mapActions(["fetchTodos"])
  },
  computed: {
    ...mapState(["title", "todos"])
  },
  created() {
    this.fetchTodos();
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

li {
  list-style: none;
  background-color: #2c3e50;
  color: white;
  width: 60%;
  border-radius: 32px;
}

.todo {
  padding: 12px;
  margin: 22px;
}
</style>
