import { createApp } from "vue"; //CreateApp
import App from "./App.vue"; //main component
import { createRouter, createWebHistory } from "vue-router";
import Home from "./pages/Home.vue";
import About from "./pages/About.vue";
import Contact from "./pages/Contact.vue";
import News from "./pages/News.vue";
import Products from "./pages/Products.vue";
import Search from "./pages/Search.vue";
import { createStore } from "vuex";
import Cart from "./pages/Cart.vue";
const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
  { path: "/contact", component: Contact },
  { path: "/news", component: News },
  { path: "/products", component: Products },
  { path: "/search", component: Search },
  { path: "/cart", component: Cart },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: "active",
});

// configure the store
const store = createStore({
  state() {
    return {
      counter: 0,
    };
  },
  mutations: {
    increment(state, payLoad) {
      state.counter = state.counter + payLoad;
    },
  },
  getters: {
    getCounter(state) {
      return state.counter;
    },
    getNormalizedCounter(state, getter) {
      // get the getCounter() return
      // value from the object
      if (getter.getCounter >= 50) {
        return 50;
      }
      return getter.getCounter;
    },
  },
});

const app = createApp(App);
app.use(store);
app.use(router);
app.mount("#app");

//****** */
// import App from "./App1.vue";
// import App from "./Reactive.vue";
// import App from "./Reactive1.vue";
// import App from "./Reactive3.vue";
// import App from "./Computed1.vue";
// import App from "./Computed2.vue";
// import App from "./Style_binding1.vue";
// import App from "./Conditional Rendering1.vue";
// import App from "./For.vue";
// import App from "./Event1.vue";
// import App from "./Event2.vue";
// import App from "./components/Form1.vue";
//**** */
