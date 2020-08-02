<template>
  <div class="chatheader">
    <div @click="backhome" class="chatheader__iconback">
      <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M21 11H6.83l3.58-3.59L9 6l-6 6 6 6 1.41-1.41L6.83 13H21z" />
      </svg>
    </div>
    <div class="chatheader__imageview">
      <img
        draggable="false"
        src="@/Profiles/image4.jpeg"
        alt="user"
        class="chatheader__imageview--image"
      />
    </div>
    <div class="chatheader__textview">
      <h3 class="chatheader__textview--title">Sarah webber</h3>
      <p class="chatheader__textview--smtext">Last seen today at 21:03</p>
    </div>
    <div class="chatheader__iconview">
      <div title="Start video" class="chatheader__iconview--icon">
        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z"
          />
        </svg>
      </div>
      <div title="Start call" class="chatheader__iconview--icon">
        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"
          />
        </svg>
      </div>
      <div title="List view" class="chatheader__iconview--icon">
        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChatHeader",
  methods: {
      backhome() {
          this.$router.push('/');
      }
  }
};
</script>

<style lang="scss">
.chatheader {
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: #075e54;
    z-index: 1000;
    padding: 1rem 0rem;
    box-shadow: 0px 1px 5px rgba(0,0,0,0.3);

    &__iconback {
        fill: $color-white;
        height: 3rem;
        width: 3rem;
        border-radius: 50%;
        padding: 0.2rem 0.3rem;
        text-align: center;
        background-color: inherit;
        cursor: pointer;
    }

    &__imageview {
        padding-right: 1rem;
        padding-left: 0.1rem;
        cursor: pointer;

        &--image {
            object-fit: cover;
            width: 3.5rem;
            height: 3.5rem;
            border-radius: 50%;
        }
    }

    &__textview {
        flex: 1;
        cursor: pointer;

        &--title {
            font-family: inherit;
            font-size: 1.3rem;
            font-weight: 500;
            color: $color-white;
            line-height: 2.3rem;
        }

        &--smtext {
            font-family: inherit;
            font-size: 1rem;
            font-weight: 400;
            color: $color-white;
        }
    }

    &__iconview {
        display: flex;
        flex-direction: row;
        align-items: center;

        &--icon {
            fill: $color-white;
            width: 3.5rem;
            height: 3.5rem;
            border-radius: 50%;
            padding: 0.4rem 0.5rem;
            text-align: center;
            margin-left: 0.5rem;
            cursor: pointer;
        }
    }
}
</style>