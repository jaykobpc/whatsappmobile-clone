<template>
  <div class="callsview">
    <div class="callsview__container">
      <div v-for="calls in callData" :key="calls.id" class="callscard">
        <div class="callscard__imageview">
          <img
            :src="require(`@/Profiles/${calls.img}`)"
            :alt="calls.name"
            class="callscard__imageview--image"
          />
        </div>
        <div class="callscard__textview">
          <div class="callscard__infobox">
            <h3 class="callscard__infobox--title">{{ calls.name }}</h3>
            <div class="callscard__widget">
              <div class="callscard__widget--iconview">
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M20 5.41L18.59 4 7 15.59V9H5v10h10v-2H8.41z" />
                </svg>
              </div>
              <p class="callscard__widget--textselect">{{ calls.time }}</p>
            </div>
          </div>
          <div class="callscard__iconview">
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
              <path d="M0 0h24v24H0z" fill="none" />
              <path
                d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"
              />
            </svg>
          </div>
        </div>
      </div>
      <div class="callsview__iconwidget bg-green">
        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            d="M20 15.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.59l2.2-2.21c.28-.26.36-.65.25-1C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM21 6h-3V3h-2v3h-3v2h3v3h2V8h3z"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CallsContainer",
  data() {
    return {
      callData: [
        {
          id: 1,
          img: "image1.jpeg",
          name: "Alice Whitman",
          time: "April 3, 01:38",
          text: "😉😉 I think it's lunch time",
          counter: 3,
          unread: true
        },
        {
          id: 2,
          img: "image3.jpeg",
          name: "Sheila Bushido",
          time: "April 12, 11:38",
          text: "So we sent the [Package]",
          counter: 2,
          unread: true
        },
        {
          id: 3,
          img: "image8.jpeg",
          name: "Jaykob Zhukov",
          time: "April 15, 22:00",
          text: "So we sent the [Package]",
          counter: 2,
          unread: true
        },
        {
          id: 4,
          img: "image10.jpeg",
          name: "Andrew Wiseman",
          time: "June 3, 01:38",
          text: "So we sent the [Package]",
          counter: 2,
          unread: true
        }
      ]
    };
  }
};
</script>

<style lang="scss">
.callsview {
  position: relative;
  background-color: $color-white;
  height: 100%;
  overflow-y: auto;

  &__container {
    display: flex;
    flex-direction: column;
  }

  &__iconwidget {
      position: fixed;
      bottom: 25px;
      right: 20px;
      width: 5.5rem;
      height: 5.5rem;
      padding: 1.5rem;
      border-radius: 50%;
      text-align: center;
      z-index: 999;
      fill: $color-grey-300;
  }
}

.callscard {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  padding: 0.4rem;

  &__imageview {
    padding: 0.5rem;

    &--image {
      width: 55px;
      height: 55px;
      object-fit: cover;
      border-radius: 50%;
    }
  }

  &__textview {
    padding: 0.8rem 1.1rem;
    width: 100%;
    border-bottom: 0.5px solid $color-grey-300;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-between;
  }

  &__infobox {
    text-overflow: ellipsis;

    &--title {
      font-family: inherit;
      font-size: 1.3rem;
      font-weight: 500;
      color: $color-dark;
      margin-bottom: 0.6rem;
    }
  }

  &__widget {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;

    &--iconview {
      fill: $color-red-500;
    }

    &--textselect {
      font-family: inherit;
      font-size: 1.1rem;
      font-weight: 500;
      color: $color-grey-600;
    }
  }

  &__iconview {
    fill: $color-grey-600;
  }
}
</style>