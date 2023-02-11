<template> 
<div>{{ firstName }} {{ lastName }}</div>
<div>{{ fullName }}</div>

<button v-on:click="fullName('alo')">Click Here</button>
</template>


<script>

export default {
  data() {
    return {
      firstName: 'John',
      lastName: 'Doe'
    }
  },
  computed: {
    fullName: {
      // getter
      get() {
        return this.firstName + ' ' + this.lastName
      },
      // setter
      set(newValue) {
        // Note: we are using destructuring assignment syntax here.
        [this.firstName, this.lastName] = newValue.split(' ')
      }
    }
  }
}

</script>

  
<style>

</style>