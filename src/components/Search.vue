<template>
  <div class="container">
    <div class="input-group">
      <input type="text" placeholder="Enter a Todo's" class="form-control" v-model="title">
      <button @click="submit" class="btn btn-outline-primary">Save</button>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Search",
  data() {
    return {
      title: ""
    };
  },
  methods: {
    ...mapActions(["addTodo"]),
    submit() {
      this.addTodo(this.title);
    }
  }
};
</script>

<style scoped>
</style>
