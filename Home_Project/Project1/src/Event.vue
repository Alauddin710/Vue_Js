<template>
  <form @submit="handleForSubmit">
    <h1>Enter Your Name</h1>
    <input type="text" @keyup.enter="handleKeyup" />
    <h2>Welcome:{{ name }}</h2>
    <button type="submit">ok</button> <br /><br />
    <div class="card" @click="handleCardClick"></div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      name: "",
    };
  },
  methods: {
    handleKeyup(e) {
      this.name = e.target.value;
    },
    handleForSubmit(e) {
      e.preventDefault();
    },
    handleCardClick(e) {
      console.log(e);
    },
  },
};
</script>

<style>
#title {
  color: red;
}
#name {
  color: green;
}

#age {
  color: yellow;
}
.card {
  height: 100px;
  width: 100px;
  border: 1px solid;
}
</style>
