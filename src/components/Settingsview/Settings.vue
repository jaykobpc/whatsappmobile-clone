<template>
  <div class="settingsview">
    <div class="settingsview__container">
      <div class="settingsview__navbar">
        <div @click="back_home" class="settingsview__navbar--iconview">
          <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M21 11H6.83l3.58-3.59L9 6l-6 6 6 6 1.41-1.41L6.83 13H21z" />
          </svg>
        </div>
        <h3 class="settingsview__navbar--title">Settings</h3>
      </div>
      <div class="settingsview__widgetview">
        <div class="settingsview__imagebox">
          <img src="../../Profiles/image4.jpeg" alt="sudo" class="settingsview__imagebox--image" />
        </div>
        <div class="settingsview__textview">
          <h3 class="settingsview__textview--title">Jaykob's byte</h3>
          <p class="settingsview__textview--smtext">Just another $programmer$ on steroids 😎😎</p>
        </div>
      </div>
      <div class="settingsview__listview">
        <div class="settingsview__tabview">
          <div class="settingsview__tabview--iconview">
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
              <path d="M0 0h24v24H0z" fill="none" />
              <path
                d="M12.65 10C11.83 7.67 9.61 6 7 6c-3.31 0-6 2.69-6 6s2.69 6 6 6c2.61 0 4.83-1.67 5.65-4H17v4h4v-4h2v-4H12.65zM7 14c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"
              />
            </svg>
          </div>
          <div class="settingsview__textlayout">
            <h3 class="settingsview__textlayout--title">Account</h3>
            <p class="settingsview__textlayout--smtext">Privacy, security, change number</p>
          </div>
        </div>
        <div class="settingsview__tabview">
          <div class="settingsview__tabview--iconview">
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
              <path d="M0 0h24v24H0z" fill="none" />
              <path
                d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"
              />
            </svg>
          </div>
          <div class="settingsview__textlayout">
            <h3 class="settingsview__textlayout--title">Chats</h3>
            <p class="settingsview__textlayout--smtext">Theme, wallpapers, chat history</p>
          </div>
        </div>
        <div class="settingsview__tabview">
          <div class="settingsview__tabview--iconview">
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
              <path
                d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"
              />
            </svg>
          </div>
          <div class="settingsview__textlayout">
            <h3 class="settingsview__textlayout--title">Notifications</h3>
            <p class="settingsview__textlayout--smtext">Message, group &amp; call tones</p>
          </div>
        </div>
        <div class="settingsview__tabview">
          <div class="settingsview__tabview--iconview">
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
              <path d="M0 0h24v24H0z" fill="none" />
              <path
                d="M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z"
              />
            </svg>
          </div>
          <div class="settingsview__textlayout">
            <h3 class="settingsview__textlayout--title">Data and storage usage</h3>
            <p class="settingsview__textlayout--smtext">Network usage, auto-download</p>
          </div>
        </div>
        <div class="settingsview__tabview">
          <div class="settingsview__tabview--iconview">
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
              <path d="M0 0h24v24H0z" fill="none" />
              <path
                d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z"
              />
            </svg>
          </div>
          <div class="settingsview__textlayout">
            <h3 class="settingsview__textlayout--title">Help</h3>
            <p class="settingsview__textlayout--smtext">FAQ, contact us, privacy policy</p>
          </div>
        </div>
      </div>
      <div class="settingsview__tabview">
        <div class="settingsview__tabview--iconview">
          <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
            <path d="M0 0h24v24H0z" fill="none" />
            <path
              d="M16.5 12c1.38 0 2.49-1.12 2.49-2.5S17.88 7 16.5 7C15.12 7 14 8.12 14 9.5s1.12 2.5 2.5 2.5zM9 11c1.66 0 2.99-1.34 2.99-3S10.66 5 9 5C7.34 5 6 6.34 6 8s1.34 3 3 3zm7.5 3c-1.83 0-5.5.92-5.5 2.75V19h11v-2.25c0-1.83-3.67-2.75-5.5-2.75zM9 13c-2.33 0-7 1.17-7 3.5V19h7v-2.25c0-.85.33-2.34 2.37-3.47C10.5 13.1 9.66 13 9 13z"
            />
          </svg>
        </div>
        <div class="settingsview__textlayout">
          <h3 class="settingsview__textlayout--title">Invite a friend</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Settingsview",
  data() {
    return {};
  },
  methods: {
    back_home() {
      this.$router.push("/");
    }
  }
};
</script>

<style lang="scss">
.settingsview {
  position: relative;
  top: 0;

  &__container {
    background-color: $color-white;
  }

  &__navbar {
    background-color: #075e54;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0.6rem;
    position: fixed;
    width: 100%;
    top: 0;

    &--iconview {
      fill: $color-grey-300;
      width: 3.5rem;
      height: 3.5rem;
      border-radius: 50%;
      text-align: center;
      padding: 0.6rem;
    }

    &--title {
      font-family: inherit;
      font-size: 1.5rem;
      font-weight: 500;
      color: $color-grey-300;
      margin-left: 0.5rem;
    }
  }

  &__widgetview {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 1.1rem;
    border-bottom: 1px solid $color-grey-200;
    margin-top: 5rem;
  }

  &__imagebox {
    padding: 0.3rem;

    &--image {
      width: 75px;
      height: 75px;
      object-fit: cover;
      border-radius: 50%;
    }
  }

  &__textview {
    margin-left: 0.7rem;

    &--title {
      font-family: inherit;
      font-size: 1.5rem;
      font-weight: 600;
      color: $color-dark;
      margin-bottom: 0.5rem;
    }

    &--smtext {
      font-family: inherit;
      font-size: 1.3rem;
      font-weight: 400;
      color: $color-grey-600;
      text-overflow: ellipsis;
    }
  }

  &__listview {
    margin-top: 1.5rem;
    padding-bottom: 1.5rem;
    border-bottom: 1px solid $color-grey-200;
  }

  &__tabview {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0.8rem;

    &--iconview {
      width: 5.5rem;
      height: 5.5rem;
      border-radius: 50%;
      background-color: $color-white;
      text-align: center;
      fill: #00bfa5;
      padding: 1.3rem;
    }
  }

  &__textlayout {
    margin-left: 1.5rem;

    &--title {
      font-family: inherit;
      font-size: 1.3rem;
      font-weight: 400;
      color: $color-dark;
      margin-bottom: 0.5rem;
    }

    &--smtext {
      font-family: inherit;
      font-size: 1.1rem;
      font-weight: 400;
      color: $color-grey-600;
    }
  }
}
</style>