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
    border-bottom: 0.5px solid $color-grey-300;

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
</style>