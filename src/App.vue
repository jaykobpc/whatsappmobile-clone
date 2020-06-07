<template>
  <div id="app">
    <hello-world />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
/**
* reset css
*/
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
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
  font-family: 'Open Sans', sans-serif, Arial, Helvetica;
  -webkit-tap-highlight-color: transparent;
}

</style>
