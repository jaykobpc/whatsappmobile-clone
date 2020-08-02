<template>
  <div class="chatview">
    <div class="chatview__imagebox"></div>
    <div class="chatview__container">
      <ChatHeader />
      <ChatArea />
      <ChatInput />
    </div>
  </div>
</template>

<script>
import ChatHeader from "./ChatHeader";
import ChatArea from "./ChatArea";
import ChatInput from "./ChatInput";

export default {
  name: "Chatview",
  components: {
    ChatHeader,
    ChatArea,
    ChatInput
  }
};
</script>

<style lang="scss">
.chatview {
  background-color: #e5ddd5;
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;

  &__imagebox {
    background-image: url("../../assets/whatsappbg.png");
    background-repeat: repeat;
    opacity: 0.06;

    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    z-index: 0;
  }

  &__container {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
}
</style>