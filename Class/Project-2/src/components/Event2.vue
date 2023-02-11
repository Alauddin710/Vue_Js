<template>
  <button @click="warn('Dont click here',$event)"> click Here</button>
</template>

<script>
export default {
data(){
    return{

    }
},
methods: {
  warn(message, event) {
    // now we have access to the native event
    if (event) {
      event.preventDefault()
    }
    alert(message)
  }
}
};

</script>

<style>

</style>