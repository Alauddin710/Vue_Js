<template>
  {{ count }}

<button v-on:click="increment">click</button>

</template>


<script>
export default {
  data() {
    return {
      count: 0
    }
  },
  methods: {
    increment() {
      this.count++
    }
  },
  mounted() {
    // methods can be called in lifecycle hooks, or other methods!
    this.increment()
    // console.log(this.count)
  }
}
</script>

<style>

</style>