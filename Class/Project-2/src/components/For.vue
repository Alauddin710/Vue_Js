<template>
  <ol>
    <li v-for="(fr,i) in fruits" :key="i"> {{i}}->{{fr}}</li>
  </ol>
</template>

<script>
export default {
data(){
    return{
        fruits: ["mango","Orange","Apple","Grape"]
    }
}
}
</script>

<style>

</style>