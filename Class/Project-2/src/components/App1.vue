<template>
  <h1>Hello {{ name }}</h1>
  <p>Age: {{ age }},Address: {{ address }}</p>
  <p v-text="address"></p>
  <div>Collge: {{ college }}</div>
  <div v-html="college"></div>
  <div v-bind:id="'dynamicId'">{{ address }}</div>
  <div v-bind:class="{ active: ifActive, error: !ifActive }">{{ address }}</div>
</template>
<script>
export default {
  data() {
    return {
      name: "Alo",
      age: 22,
      address: "Kushtia",
      college: "Kushtia Gov College",
      ifActive: true,
      // ifActive:false
    };
  },
};
</script>

<style>
.active {
  color: blue;
}
.error {
  color: red;
}
#dynamicId {
  color: aqua;
}
</style>
