<!-- <template>
  <p>{{ greeting() }}</p>
</template>

<script>
export default {
  data() {
    return {
      username: "John",
    };
  },
  methods: {
    greeting() {
      return "Hello there " + this.username;
    },
  },
};
</script> -->

<!-- <template>
  <p>{{ greeting("Alo", " How are You?") }}</p>
</template> -->

<!-- <script>
export default {
//   methods: {
//     greeting(name) {
//       return "Help us " + name;
//     },
//   },
// };

// export default {
//   methods: {
//     greeting: (x, y) => {
//       return "Hello " + x + y;
//     },
//   },
// };
</script> -->

<template>
  <p>{{ thisInArrowFunc("alauddin") }}</p>
  <p>{{ thisInRegularFunc() }}</p>
</template>

<script>
export default {
  data() {
    return {
      username: "Enamul",
    };
  },
  methods: {
    thisInArrowFunc: (name) => {
      return "Help us " + name; // no 'this' binding
    },

    thisInRegularFunc() {
      return "Help us " + this.username; // global 'this'
    },
  },
};
</script>
