<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-sm-12">
        <h2>Search Item</h2>
        <form v-on:submit.prevent="search()" method="post">
          <input type="text" v-model="searchItem" />
          <button type="submit">Search</button>
        </form>
        With {{ searchItem }} total {{ searchResult.length }} result Fund
        <hr />
        <ol>
          <li v-for="item in searchResult" :key="item.id">
            <h2>{{ item.product_name }}</h2>
            <p>
              {{ item.product_details }}
            </p>
          </li>
        </ol>
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
      searchItem: "",
      searchResult: [],
    };
  },
  methods: {
    search() {
      axios
        .post("http://127.0.0.1:8000/api/search", { item: this.searchItem })
        .then((response) => {
          // this.posts = response.data;
          this.searchResult = response.data;
          // console.log(response.data);
        });
    },
  },
};
</script>
<style></style>
