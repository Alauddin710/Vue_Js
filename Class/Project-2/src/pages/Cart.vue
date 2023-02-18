<template lang="">
  <div class="container mt-5">
    <div class="row">
      <div class="col-sm-8">
        <h2>Shoping Cart</h2>

        <p>Counter: {{ $store.getters.getCounter }}</p>
        <p>Normalized: {{ $store.getters.getNormalizedCounter }}</p>
        <h1>{{ $store.state.counter }}</h1>
        <button @click="$store.commit('increment', 10)">Clic Here</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang=""></style>
