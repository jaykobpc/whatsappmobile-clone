<template>
  <div class="chatarea">
    <div class="chatarea__container">

      <div v-for="chat in chatlistdata" :key="chat.id" :class="{ 'align-flex-end': chat.is_sender }" class="chatarea__widget align-flex-start">
        <div class="chatarea__chatitem chat-item-white" :class="{ 'chat-item-green': chat.is_sender }">
          <div class="chatarea__chatitem--icontail" :class="{ 'tail-right': chat.is_sender, 'tail-left': !chat.is_sender }">
            <svg v-if="!chat.is_sender" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 13" width="8" height="13">
              <path
                opacity=".13"
                fill="#0000000"
                d="M1.533 3.568L8 12.193V1H2.812C1.042 1 .474 2.156 1.533 3.568z"
              />
              <path
                fill="currentColor"
                d="M1.533 2.568L8 11.193V0H2.812C1.042 0 .474 1.156 1.533 2.568z"
              />
            </svg>
            <svg v-else-if="chat.is_sender"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 13" width="8" height="13">
              <path opacity=".13" d="M5.188 1H0v11.193l6.467-8.625C7.526 2.156 6.958 1 5.188 1z" />
              <path
                fill="currentColor"
                d="M5.188 0H0v11.193l6.467-8.625C7.526 1.156 6.958 0 5.188 0z"
              />
            </svg>
          </div>
          <div class="chatarea__textview">
            <p class="chatarea__chatitem--text">{{ chat.text }}</p>
            <p v-if="!chat.is_sender" class="chatarea__chatitem--smtext">{{ chat.time }}</p>
            
            <div v-else class="chatarea__flextab">
              <p class="chatarea__chatitem--smtext">20:32</p>
              <div class="chatarea__flextab--icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 15" width="16" height="15">
                  <path
                    fill="currentColor"
                    d="M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.879a.32.32 0 0 1-.484.033l-.358-.325a.319.319 0 0 0-.484.032l-.378.483a.418.418 0 0 0 .036.541l1.32 1.266c.143.14.361.125.484-.033l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.879a.32.32 0 0 1-.484.033L1.891 7.769a.366.366 0 0 0-.515.006l-.423.433a.364.364 0 0 0 .006.514l3.258 3.185c.143.14.361.125.484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z"
                  />
                </svg>
              </div>
            </div>
            
          </div>
        </div>
      </div>

      <!-- <div class="chatarea__widget align-flex-end">
        <div class="chatarea__chatitem chat-item-green">
          <div class="chatarea__chatitem--icontail tail-right">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 13" width="8" height="13">
              <path opacity=".13" d="M5.188 1H0v11.193l6.467-8.625C7.526 2.156 6.958 1 5.188 1z" />
              <path
                fill="currentColor"
                d="M5.188 0H0v11.193l6.467-8.625C7.526 1.156 6.958 0 5.188 0z"
              />
            </svg>
          </div>
          <div class="chatarea__textview">
            <p class="chatarea__chatitem--text">Hello world, from custodian data center</p>
            <div class="chatarea__flextab">
              <p class="chatarea__chatitem--smtext">20:32</p>
              <div class="chatarea__flextab--icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 15" width="16" height="15">
                  <path
                    fill="currentColor"
                    d="M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.879a.32.32 0 0 1-.484.033l-.358-.325a.319.319 0 0 0-.484.032l-.378.483a.418.418 0 0 0 .036.541l1.32 1.266c.143.14.361.125.484-.033l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.879a.32.32 0 0 1-.484.033L1.891 7.769a.366.366 0 0 0-.515.006l-.423.433a.364.364 0 0 0 .006.514l3.258 3.185c.143.14.361.125.484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div> -->

    </div>
  </div>
</template>

<script>
export default {
  name: "ChatArea",
  computed: {
    chatlistdata() {
      return this.$store.state.chatData;
    }
  }
};
</script>

<style lang="scss">
.chatarea {
  position: relative;
  flex: 1 1 0;
  z-index: 1;
  order: 2;

  &__flextab {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;

    &--icon {
      color: $color-blue-500;
      margin-left: 0.3rem;
    }
  }

  &__container {
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
    z-index: 100;
    overflow-y: auto;
    padding-bottom: 0.5rem;
    padding-top: 1.3rem;

    display: flex;
    flex-direction: column;
  }

  &__widget {
    padding: 0rem 1rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }

  &__textview {
    padding: 0.5rem;
  }

  &__chatitem {
    max-width: 23rem;
    position: relative;
    border-bottom-left-radius: 0.6rem;
    border-bottom-right-radius: 0.6rem;
    margin-bottom: 1.5rem;

    &--icontail {
      position: absolute;
      top: 0px;
    }

    &--text {
      font-family: inherit;
      font-size: 1.3rem;
      font-weight: 400;
    }

    &--smtext {
      font-size: 1rem;
      font-weight: 400;
      font-family: inherit;
      text-align: right;
      margin-top: 2px;
    }
  }
}

.align-flex-start {
  align-items: flex-start;
}

.align-flex-end {
  align-items: flex-end;
}

.tail-left {
  left: -8px;
  color: #fff;
}

.tail-right {
  right: -8px;
  color: #dcf8c6;
}

.chat-item-white {
  background-color: #fff;
}

.chat-item-green {
  background-color: #dcf8c6;
}
</style>