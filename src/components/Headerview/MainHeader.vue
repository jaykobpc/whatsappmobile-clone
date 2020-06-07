<template>
  <div class="mainheader">
      <top-header />
      <tab-header />
  </div>
</template>

<script>
import TopHeader from './TopHeader.vue';
import TabHeader from './TabHeader.vue';

export default {
    name: 'MainHeader',
    components: {
        TopHeader,
        TabHeader
    },
    data() {
        return {

        }
    }
}
</script>

<style lang="scss">
.mainheader {
    position: fixed;
    width: 100%;
    z-index: 999;
}
</style>