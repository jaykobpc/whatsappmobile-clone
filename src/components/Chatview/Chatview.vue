<template>
  <div class="chatviews">
    <div class="chatviews__container">
      <header class="chatviews__header">
        <div class="chatviews__headerbox">
          <div @click="backHome" class="chatviews__headerbox--iconview">
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M21 11H6.83l3.58-3.59L9 6l-6 6 6 6 1.41-1.41L6.83 13H21z" />
            </svg>
          </div>
          <div class="chatviews__wxboxview">
            <div class="chatviews__imagebox">
              <img src="../../Profiles/image4.jpeg" alt="user" class="chatviews__imagebox--image" />
            </div>
            <div class="chatviews__fxbox">
              <h3 class="chatviews__fxbox--title">Sarah webber</h3>
              <p class="chatviews__fxbox--smtitle">Online</p>
            </div>
          </div>
        </div>

        <div class="chatviews__widgets">
          <div class="chatviews__widgets--iconview">
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
              <path d="M0 0h24v24H0z" fill="none" />
              <path
                d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z"
              />
            </svg>
          </div>
          <div class="chatviews__widgets--iconview">
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
              <path d="M0 0h24v24H0z" fill="none" />
              <path
                d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"
              />
            </svg>
          </div>
          <div class="chatviews__widgets--iconview">
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
              <path d="M0 0h24v24H0z" fill="none" />
              <path
                d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
              />
            </svg>
          </div>
        </div>
      </header>
      <div class="chatviews__chatarea">
        <div class="chatarea">
          <div class="chatarea__container">
            <p>chat area</p>
          </div>
        </div>
      </div>
      <footer class="chatviews__chatwidget">
        <div class="chatwd">
          <div class="chatwd__textview">
            <div class="chatwd__iconbox">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                <path
                  fill="currentColor"
                  d="M9.153 11.603c.795 0 1.439-.879 1.439-1.962s-.644-1.962-1.439-1.962-1.439.879-1.439 1.962.644 1.962 1.439 1.962zm-3.204 1.362c-.026-.307-.131 5.218 6.063 5.551 6.066-.25 6.066-5.551 6.066-5.551-6.078 1.416-12.129 0-12.129 0zm11.363 1.108s-.669 1.959-5.051 1.959c-3.505 0-5.388-1.164-5.607-1.959 0 0 5.912 1.055 10.658 0zM11.804 1.011C5.609 1.011.978 6.033.978 12.228s4.826 10.761 11.021 10.761S23.02 18.423 23.02 12.228c.001-6.195-5.021-11.217-11.216-11.217zM12 21.354c-5.273 0-9.381-3.886-9.381-9.159s3.942-9.548 9.215-9.548 9.548 4.275 9.548 9.548c-.001 5.272-4.109 9.159-9.382 9.159zm3.108-9.751c.795 0 1.439-.879 1.439-1.962s-.644-1.962-1.439-1.962-1.439.879-1.439 1.962.644 1.962 1.439 1.962z"
                />
              </svg>
            </div>
            <input type="text" placeholder="Type a message" name="text" id class="chatwd__textarea" />
            <div class="chatwd__widgetsview">
              <div class="chatwd__iconselect">
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path
                    d="M16.5 6v11.5c0 2.21-1.79 4-4 4s-4-1.79-4-4V5c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5v10.5c0 .55-.45 1-1 1s-1-.45-1-1V6H10v9.5c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5V5c0-2.21-1.79-4-4-4S7 2.79 7 5v12.5c0 3.04 2.46 5.5 5.5 5.5s5.5-2.46 5.5-5.5V6h-1.5z"
                  />
                </svg>
              </div>
              <div class="chatwd__iconselect">
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                  <path d="M0 0h24v24H0z" fill="none" />
                  <circle cx="12" cy="12" r="3.2" />
                  <path
                    d="M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div class="chatwd__micview">
            <div class="chatwd__micview--iconview">
              <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                <path d="M0 0h24v24H0z" fill="none" />
                <path
                  d="M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z"
                />
              </svg>
            </div>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: "Chatview",
  data() {
    return {};
  },
  methods: {
    backHome() {
      this.$router.push("/");
    }
  }
};
</script>

<style lang="scss">
.chatviews {
  background-color: $color-white;

  &__container {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    flex-wrap: nowrap;
    background-color: #075e54;
    padding: 0.8rem 0.4rem;
    width: 100%;
    position: relative;
    z-index: 99;
  }

  &__headerbox {
    display: flex;
    align-items: center;
    flex-direction: row;

    &--iconview {
      fill: $color-grey-200;
    }
  }

  &__wxboxview {
    display: flex;
    align-items: center;
    flex-direction: row;
  }

  &__imagebox {
    margin-left: 0.5rem;

    &--image {
      object-fit: cover;
      width: 4rem;
      height: 4rem;
      border-radius: 50%;
    }
  }

  &__fxbox {
    margin-left: 0.3rem;
    padding: 0.4rem;

    &--title {
      font-family: inherit;
      font-size: 1.3rem;
      font-weight: 600;
      color: $color-grey-300;
      margin-bottom: 0.3rem;
    }

    &--smtitle {
      font-family: inherit;
      font-size: 1.1rem;
      font-weight: 400;
      color: $color-grey-300;
    }
  }

  &__widgets {
    display: flex;
    align-items: center;
    flex-direction: row;
    margin-top: 0.4rem;

    &--iconview {
      fill: $color-grey-300;
      width: 4rem;
      height: 4rem;
      text-align: center;
      border-radius: 50%;
      padding: 0.6rem;
      background-color: inherit;
    }
  }

  &__chatwidget {
    position: relative;
    order: 3;
    width: 100%;
    z-index: 1;
    flex: none;
  }
}

.chatarea {
  flex: 1 1 0;
  order: 2;
  position: relative;
  z-index: 1;
  height: 75vh;

  &__container {
    background-color: #e5ddd5;
    overflow-y: auto;
    background-image: url("../../Profiles/chatbg.png");
    background-position: center;
    background-repeat: repeat;
    opacity: 0.06;
    height: 100%;
  }
}

.chatwd {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    background-color: #e5ddd5;
    background-image: linear-gradient(
        rgba(#e5ddd5, 0.9),
        rgba(#e5ddd5, 0.9)),
        url("../../Profiles/chatbg.png");
    background-position: center;
    background-repeat: repeat;
    padding: 0.6rem;

    &__textview {
        width: 100%;
        display: flex;
        align-items: center;
        flex-direction: row;
        background-color: $color-white;
        padding: 0.8rem;
        border-radius: 35px;
    }

    &__iconbox {
        fill: $color-grey-600;
        margin-right: 0.2rem;
    }

    &__textarea {
        display: block;
        width: 100%;
        font-family: inherit;
        font-size: 1.3rem;
        font-weight: 400;
        padding: 0.5rem;
        border: none;
        outline: none;
        color: $color-dark;
    }

    &__widgetsview {
        display: flex;
        align-items: center;
        flex-direction: row;
    }

    &__iconselect {
        fill: $color-grey-600;
        margin: 0.3rem;
    }

    &__micview {
        margin-left: 0.3rem;
        width: 4rem;
        height: 4rem;
        background-color: #075e54;
        border-radius: 50%;
        text-align: center;
        padding: 0.7rem;

        &--iconview {
            fill: $color-white;
        }
    }
}
</style>