<template>
  <div class="chatinput">
    <div class="chatinput__container">
      <div class="chatinput__flexview">
        <div class="chatinput__iconview">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
            <path
              fill="currentColor"
              d="M9.153 11.603c.795 0 1.439-.879 1.439-1.962s-.644-1.962-1.439-1.962-1.439.879-1.439 1.962.644 1.962 1.439 1.962zm-3.204 1.362c-.026-.307-.131 5.218 6.063 5.551 6.066-.25 6.066-5.551 6.066-5.551-6.078 1.416-12.129 0-12.129 0zm11.363 1.108s-.669 1.959-5.051 1.959c-3.505 0-5.388-1.164-5.607-1.959 0 0 5.912 1.055 10.658 0zM11.804 1.011C5.609 1.011.978 6.033.978 12.228s4.826 10.761 11.021 10.761S23.02 18.423 23.02 12.228c.001-6.195-5.021-11.217-11.216-11.217zM12 21.354c-5.273 0-9.381-3.886-9.381-9.159s3.942-9.548 9.215-9.548 9.548 4.275 9.548 9.548c-.001 5.272-4.109 9.159-9.382 9.159zm3.108-9.751c.795 0 1.439-.879 1.439-1.962s-.644-1.962-1.439-1.962-1.439.879-1.439 1.962.644 1.962 1.439 1.962z"
            />
          </svg>
        </div>
        <input type="text" placeholder="Type a message" class="chatinput__inputview" />
        <div class="chatinput__iconview">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
            <path
              fill="currentColor"
              d="M1.816 15.556v.002c0 1.502.584 2.912 1.646 3.972s2.472 1.647 3.974 1.647a5.58 5.58 0 0 0 3.972-1.645l9.547-9.548c.769-.768 1.147-1.767 1.058-2.817-.079-.968-.548-1.927-1.319-2.698-1.594-1.592-4.068-1.711-5.517-.262l-7.916 7.915c-.881.881-.792 2.25.214 3.261.959.958 2.423 1.053 3.263.215l5.511-5.512c.28-.28.267-.722.053-.936l-.244-.244c-.191-.191-.567-.349-.957.04l-5.506 5.506c-.18.18-.635.127-.976-.214-.098-.097-.576-.613-.213-.973l7.915-7.917c.818-.817 2.267-.699 3.23.262.5.501.802 1.1.849 1.685.051.573-.156 1.111-.589 1.543l-9.547 9.549a3.97 3.97 0 0 1-2.829 1.171 3.975 3.975 0 0 1-2.83-1.173 3.973 3.973 0 0 1-1.172-2.828c0-1.071.415-2.076 1.172-2.83l7.209-7.211c.157-.157.264-.579.028-.814L11.5 4.36a.572.572 0 0 0-.834.018l-7.205 7.207a5.577 5.577 0 0 0-1.645 3.971z"
            />
          </svg>
        </div>
        <div class="chatinput__iconview">
          <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
            <path d="M0 0h24v24H0z" fill="none" />
            <circle cx="12" cy="12" r="3.2" />
            <path
              d="M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"
            />
          </svg>
        </div>
      </div>
      <div class="chatinput__iconselect">
        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            d="M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChatInput"
};
</script>

<style lang="scss">
.chatinput {
  position: relative;
  padding: 0.5rem 0.3rem 1.5rem 0.3rem;
  order: 3;
  width: 100%;

  &__container {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  &__flexview {
    display: flex;
    flex-direction: row;
    align-items: center;
    flex: 1;
    padding: 0rem 0.8rem;
    background-color: $color-white;
    border-radius: 1.8rem;
  }

  &__inputview {
    width: 100%;
    border: none;
    outline: none;
    background-color: $color-white;
    font-family: inherit;
    font-size: 1.3rem;
    font-weight: 400;
    padding: 1.4rem 0.5rem;
  }

  &__iconview {
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    text-align: center;
    padding: 0.3rem 0.5rem;
    fill: $color-grey-600;
    color: $color-grey-600;
  }

  &__iconselect {
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    text-align: center;
    background-color: #075e54;
    padding: 0.7rem 0.5rem;
    fill: $color-white;
    margin-left: 0.2rem;
  }
}
</style>