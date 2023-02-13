<template lang="">
  <div class="container mt-5">
    <div class="row">
      <div class="col-sm-12">
        <h2>Search item</h2>
        <form v-on:submit.prevent="search()">
          <input type="text" v-model="searchItem" />
          <button type="submit">Submit</button>
        </form>
        {{ searchItem }}
        <hr />
        <div v-for="post in posts" :key="post.id">
          <h2>{{ post.title }}</h2>
          <h5>Title description, Dec 7, 2020</h5>
          <div class="fakeimg">Fake Image</div>
          <p>
            {{ post.body }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      posts: [],
      searchItem: [],
      searchResult: [],
    };
  },
  methods: {
    search() {
      axios.post("", { item: this.searchItem }).then((response) => {
        this.posts = response.data;
        console.log(response.data);
      });
    },
  },
};
</script>
<style lang=""></style>
