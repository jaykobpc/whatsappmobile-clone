<template>
  <div>
    <main-header />
    <main-view />
  </div>
</template>

<script>
import MainHeader from './Headerview/MainHeader';
import MainView from './Mainview/MainContainer';

export default {
  name: 'HelloWorld',
  components: {
    MainHeader,
    MainView
  },
  data() {
    return {
      
    }
  }
}
</script>

<style>

</style>
