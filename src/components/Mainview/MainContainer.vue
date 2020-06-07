<template>
  <div class="mainview">
    <keep-alive>
      <component :is="selected_view"></component>
    </keep-alive>
  </div>
</template>

<script>
import EventBus from "../EventBus/EventBus";
import ChatContainer from "./ChatsContainer";
import StatusContainer from "./StatusContainer";
import CallsContainer from "./CallsContainer";

export default {
  name: "MainContainer",
  components: {
    ChatContainer,
    StatusContainer,
    CallsContainer
  },
  mounted() {
    EventBus.$on("selectedtab", this.selectView);
  },
  beforeDestroy() {
    EventBus.$off("selectedtab", this.selectView);
  },
  methods: {
    selectView(value) {
      this.selected_view = value;
    }
  },
  data() {
    return {
      selected_view: "CallsContainer"
    };
  }
};
</script>

<style lang="scss">
.mainview {
  padding-top: 9rem;
}
</style>