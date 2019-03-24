<template>
  <div id="app">
    <p class="display-3">
      {{ title }}
      using
      <u>Vuex</u>
    </p>
    <hr>
    <Search></Search>
    <filter-todos></filter-todos>
    <ul class="todos">
      <li v-for="todo in todos" :key="todo.id" class="container todo">
        <p class="todo">
          {{ todo.title }}
          <i class="fas fa-trash" @click="deleteTodo(todo.id)"></i>
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Search from "./components/Search.vue";
import FilterTodos from "./components/Filter.vue";

export default {
  name: "app",
  components: {
    Search,
    FilterTodos
  },
  methods: {
    ...mapActions(["fetchTodos", "deleteTodo"])
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

i {
  margin-left: 22px;
  color: #fff;
  cursor: pointer;
}

.todos {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
  margin-top: 22px;
}
.todo {
  border: 1px solid #ccc;
  background: #2c3e50;
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
  position: relative;
  cursor: pointer;
  color: white;
}
</style>
