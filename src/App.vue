<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  mounted() {
    this.preventImageSelect();
    this.preventContextMenu();
  },
  data() {
    return {};
  },
  methods: {
    preventImageSelect() {
      var imageview = document.querySelectorAll("img");
      imageview.forEach(imageView => {
        imageView.addEventListener("contextmenu", e => {
          e.preventDefault();
        });
      });
    },
    preventContextMenu() {
      window.addEventListener("contextmenu", e => {
        e.preventDefault();
      });
    }
  }
};
</script>

<style>
/**
* reset css
*/
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  user-select: none;
}

html {
  scroll-behavior: smooth;
  font-size: 62.5%;
}

img {
  display: block;
  width: 100%;
}

body {
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  font-family: "Open Sans", sans-serif, Arial, Helvetica;
  -webkit-tap-highlight-color: transparent;
}

@media only screen and (min-width: 900px) {
  ::-webkit-scrollbar {
    width: 6px !important;
    height: 6px !important;
  }

  ::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.2);
  }

  ::-webkit-scrollbar-track {
    background: hsla(0, 0%, 100%, 0.1);
  }
}
</style>
