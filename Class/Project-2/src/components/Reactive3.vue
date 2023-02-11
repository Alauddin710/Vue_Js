<template>
  {{ obj.nested.count }}
  <p>{{ obj.arr }}</p>
<button v-on:click="mutateDeeply">Click Here</button>
</template>


<script>
export default {
  data() {
    return {
      obj: {
        nested: { count: 0 },
        arr: ['foo', 'bar']
      }
    }
  },
  methods: {
    mutateDeeply() {
      // these will work as expected.
      this.obj.nested.count++
    //   this.obj.arr.push('baz')
      this.obj.arr.push('baz')
    }
  }
}
</script>

<style>

</style>