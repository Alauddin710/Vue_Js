<!-- <template>
  <p
    v-bind:class="{
      bold: true,
      italic: true,
      valid: isValid,
      invalid: !isValid,
    }"
  >
    Lorem ipsum dolor
  </p>
</template>

<script>
export default {
  data() {
    return {
      isValid: false,
    };
  },
};
</script>

<style>
.bold {
  font-weight: bolder;
}
.italic {
  font-style: italic;
}
.valid {
  color: forestgreen;
}
.invalid {
  color: orangered;
}
</style> -->

<!--  -->
<template>
  <p>Moustache syntax wraps the data property in double curly braces.</p>
  <p v-html="name"></p>

  <p>The resulting output will be the value of the data property.</p>
  <p>Example: {{ name }}</p>
</template>

<script>
export default {
  data() {
    return {
      name: "<i>John Doe</i>",
    };
  },
};
</script>
