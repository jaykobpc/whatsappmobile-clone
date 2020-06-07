<template>
  <div class="topheader">
    <div class="topheader__container">
      <div class="topheader__titlebox">
        <h3 class="topheader__titlebox--text">WhatsApp</h3>
      </div>
      <div class="topheader__widgets">
        <div class="topheader__widgets--iconview">
          <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
            <path d="M0 0h24v24H0z" fill="none" />
            <path
              d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
            />
          </svg>
        </div>
        <div class="topheader__widgets--iconview">
          <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
            <path d="M0 0h24v24H0z" fill="none" />
            <path
              d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
            />
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Topheader",
  data() {
    return {};
  }
};
</script>

<style lang="scss">
.topheader {
  position: relative;
  top: 0;
  background-color: #075e54;
  padding: 0.8rem;

  &__container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    flex-wrap: nowrap;
  }

  &__titlebox {
    overflow: hidden;

    &--text {
      font-family: inherit;
      font-size: 1.6rem;
      font-weight: 600;
      color: $color-grey-200;
    }
  }

  &__widgets {
    display: flex;
    align-items: center;
    flex-direction: row;
    flex-wrap: nowrap;

    &--iconview {
      fill: $color-grey-200;
      width: 3.5rem;
      height: 3.5rem;
      padding: 0.5rem;
      border-radius: 50%;
      text-align: center;
    }
  }
}
</style>