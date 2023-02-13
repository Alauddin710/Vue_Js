<template>
  <div>Counter:{{ count }}</div>
  <button @click="increase(1)">increase1</button>
  <button @click="decrement(1)">decrement</button> <br />
  <button @click="increase(2)">increase2</button>
  <button @click="decrement(2)">decrement2</button>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    increase(amount) {
      this.count = this.count + amount;
    },
    decrement(amount) {
      this.count = this.count - amount;
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
</style>
