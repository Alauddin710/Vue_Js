<template> 
<div :class="classObject">Hello</div>

<button @click="toggleActive">Toggle</button>
</template>


<script>
export default{
    data() {
  return {
    isActive: true,
    error: null
  }
},
computed: {
  classObject() {
    return {
      active: this.isActive && !this.error,
      'text-danger': this.error && this.error.type === 'fatal'
    }
  }
},
methods:{
    toggleActive(){
        this.isActive= !this.isActive;
    }
}

}


</script>

  
<style>
.active{
 background-color: green;
 
}
</style>