<template>
  <div class="tabheader">
    <div class="tabheader__container">
      <div
        :class="{ 'selected_tab': selectedview == 'ChatContainer' }"
        @click="selectTab('ChatContainer')"
        class="tabheader__tabview"
      >
        <h3 class="tabheader__tabview--text">Chats</h3>
      </div>
      <div
        :class="{ 'selected_tab': selectedview == 'StatusContainer' }"
        @click="selectTab('StatusContainer')"
        class="tabheader__tabview"
      >
        <h3 class="tabheader__tabview--text">Status</h3>
      </div>
      <div
        :class="{ 'selected_tab': selectedview == 'CallsContainer' }"
        @click="selectTab('CallsContainer')"
        class="tabheader__tabview"
      >
        <h3 class="tabheader__tabview--text">Calls</h3>
      </div>
    </div>
  </div>
</template>

<script>
import EventBus from "../EventBus/EventBus";

export default {
  name: "Tabheader",
  data() {
    return {
      selectedview: "ChatContainer"
    };
  },
  mounted() {
    EventBus.$on("selectedtab", this.selected_tab);
  },
  methods: {
    selectTab(value) {
      if (!value) return "";
      EventBus.$emit("selectedtab", value);
    },
    selected_tab(value) {
      if (!value) return "";
      this.selectedview = value;
    }
  }
};
</script>

<style lang="scss">
.tabheader {
  position: relative;
  top: 0;
  background-color: #075e54;

  &__container {
    display: flex;
    flex-direction: row;
  }

  &__tabview {
    flex-grow: 1;
    text-align: center;
    padding: 1rem;
    color: $color-grey-400;
    transition: all 0.3s;
    cursor: pointer;

    &:hover {
      background-color: #0d5c53;
    }

    &--text {
      font-family: inherit;
      font-size: 1.3rem;
      font-weight: 400;
      text-transform: uppercase;
      color: inherit;
    }
  }
}

.selected_tab {
  color: $color-grey-200;
  //border-bottom: 3px solid $color-grey-100;
}
</style>