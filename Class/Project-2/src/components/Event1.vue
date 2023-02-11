<template>
  <div>
{{ name }} <br>
<button  @click="name='Karim'">Clic Here</button> 
<button @click="setName('alo')">Name Chang with Methods</button>
<button @mouseover="setName('alo')">Name Chang with Methods</button>
  </div>
  <hr> <br>

<h1 @mouseover="count++">{{ count }}</h1> <br>
<h1 @mouseover="count">{{ count }}</h1>
<div>{{ count }}</div>
<button @mouseover="count++">Count + 1</button>
<button @mouseover="count--">Count  -1</button>
<button @mouseover="count +=5">Count +5</button>
<button @mouseover="count -=5">Count +5</button> <br><br>
<button @click="greet">Greet</button>
</template>

<script>
export default {
data(){
    return{
        name:"Alauddin",
        count:0
    }
   
},
methods: {
        setName(x){
            this.name=x;
        }, 
        greet(event){
        alert(`Hello ${this.name}`);    
        } 

    },
}
</script>

<style>

</style>