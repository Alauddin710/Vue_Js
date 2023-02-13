<template lang="">
  <Header />
  <Navbar />

  <router-view></router-view>

  <Footer />
</template>
<script>
import Header from "./layouts/Header.vue";
import Navbar from "./layouts/Navbar.vue";
import Footer from "./layouts/Footer.vue";

export default {
  components: {
    Header,
    Navbar,
    Footer,
  },
};
</script>
<style></style>
