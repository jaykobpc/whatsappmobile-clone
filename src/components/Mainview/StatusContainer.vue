<template>
  <div class="statusview">
    <div class="statusview__container">
      <div class="statuscard">
        <div class="statuscard__imageview">
          <img
            draggable="false"
            src="../../Profiles/image2.jpeg"
            alt="status"
            class="statuscard__imageview--image"
          />
        </div>
        <div class="statuscard__textview">
          <h3 class="statuscard__textview--title">My Status</h3>
          <p class="statuscard__textview--smtext">Yesterday: 20:41</p>
        </div>
      </div>
      <div class="statusview__groupview">
        <h3 class="statusview__groupview--title">Recent updates</h3>
        <div class="statusview__listview">
          <div v-for="profile in RecentData" :key="profile.id" class="statuscard">
            <div class="statuscard__imageview">
              <img
                draggable="false"
                :src="require(`../../Profiles/${profile.img}`)"
                :alt="profile.name"
                class="statuscard__imageview--image"
              />
            </div>
            <div class="statuscard__textview">
              <h3 class="statuscard__textview--title">{{ profile.name }}</h3>
              <p class="statuscard__textview--smtext">Yesterday: 20:41</p>
            </div>
          </div>
        </div>
      </div>
      <div class="statusview__groupview">
        <h3 class="statusview__groupview--title">Viewed updates</h3>
        <div class="statusview__listview">
          <div v-for="profile in ViewedData" :key="profile.id" class="statuscard">
            <div class="statuscard__imageview">
              <img
                draggable="false"
                :src="require(`../../Profiles/${profile.img}`)"
                :alt="profile.name"
                class="statuscard__imageview--image"
              />
            </div>
            <div class="statuscard__textview">
              <h3 class="statuscard__textview--title">{{ profile.name }}</h3>
              <p class="statuscard__textview--smtext">Yesterday: 20:41</p>
            </div>
          </div>
        </div>
      </div>
      <!--widgets-->
      <div class="statusview__iconwidget bg-grey">
        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"
          />
        </svg>
      </div>
      <div class="statusview__iconwidget bg-green">
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
</template>

<script>
export default {
  name: "Statusview",
  data() {
    return {
      RecentData: [
        {
          id: 1,
          img: "image1.jpeg",
          name: "Alice Whitman",
          time: "13:00 PM",
          text: "😉😉 I think it's lunch time",
          counter: 3,
          unread: true
        },
        {
          id: 2,
          img: "image6.jpeg",
          name: "Jaykob Watenga",
          time: "12:45 PM",
          text: "So we sent the [Package]",
          counter: 2,
          unread: true
        },
        {
          id: 3,
          img: "image3.jpeg",
          name: "Andrew Wiseman",
          time: "12:30 PM",
          text: "You: Meeting in the afternoon?",
          counter: 1,
          unread: true
        },
        {
          id: 4,
          img: "image4.jpeg",
          name: "Sarah webber",
          time: "12:05 PM",
          text: "Am just bored!",
          counter: null,
          unread: false
        }
      ],
      ViewedData: [
        {
          id: 1,
          img: "image10.jpeg",
          name: "Alice Whitman",
          time: "13:00 PM",
          text: "😉😉 I think it's lunch time",
          counter: 3,
          unread: true
        },
        {
          id: 2,
          img: "image9.jpeg",
          name: "Jaykob Watenga",
          time: "12:45 PM",
          text: "So we sent the [Package]",
          counter: 2,
          unread: true
        },
        {
          id: 3,
          img: "image7.jpeg",
          name: "Andrew Wiseman",
          time: "12:30 PM",
          text: "You: Meeting in the afternoon?",
          counter: 1,
          unread: true
        }
      ]
    };
  }
};
</script>

<style lang="scss">
.statusview {
  position: relative;
  background-color: $color-white;
  height: 100%;
  overflow-y: auto;

  &__container {
    display: flex;
    flex-direction: column;
  }

  &__groupview {
    margin-top: 1.1rem;

    &--title {
      font-family: inherit;
      font-size: 1.3rem;
      font-weight: 500;
      color: $color-grey-500;
      margin-bottom: 0.7rem;
      padding-left: 0.5rem;
      padding-top: 0.4rem;
      padding-bottom: 0.4rem;
      background-color: $color-grey-200;
    }
  }

  &__iconwidget {
      position: fixed;
      right: 20px;
      width: 5.5rem;
      height: 5.5rem;
      padding: 1.5rem;
      border-radius: 50%;
      text-align: center;
      z-index: 999;
  }
}

.statuscard {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  padding: 0.8rem;
  width: 100%;
  background-color: $color-white;

  &__imageview {
    &--image {
      object-fit: cover;
      width: 55px;
      height: 55px;
      border-radius: 50%;
    }
  }

  &__textview {
    width: 100%;
    padding: 0.5rem 1rem;
    //border-bottom: 0.5px solid $color-grey-300;

    &:not(:last-child) {
      border-bottom: none;
    }

    &--title {
      font-family: inherit;
      font-size: 1.5rem;
      font-weight: 500;
      color: $color-dark;
      margin-bottom: 0.5rem;
    }

    &--smtext {
      font-family: inherit;
      font-size: 1.3rem;
      font-weight: 400;
      color: $color-grey-600;
      margin-bottom: 0.5rem;
    }
  }
}

.bg-green {
   background-color: #25d366;
   fill: $color-grey-200;
   bottom: 25px;
}

.bg-grey {
  background-color: $color-grey-200;
  fill: $color-grey-600;
  bottom: 95px;
}
</style>