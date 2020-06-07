<template>
  <div class="chatsview">
    <div class="chatsview__container">
      <div @click="openChats" v-for="profile in profileData" :key="profile.id" class="chatcard">
        <div class="chatcard__imageview">
          <img
            :src="require(`../../Profiles/${profile.img}`)"
            :alt="profile.name"
            class="chatcard__imageview--image"
          />
        </div>
        <div class="chatsview__textview">
          <div class="chatsview__viewbox">
            <h3 class="chatsview__viewbox--title">{{ profile.name }}</h3>
            <p
              :class="{ 'text-green': profile.unread }"
              class="chatsview__viewbox--smtext"
            >{{ profile.time }}</p>
          </div>
          <div class="chatsview__widget">
            <p
              :class="{ 'text-unread': profile.unread }"
              class="chatsview__widget--text"
            >{{ profile.text }}</p>
            <p v-if="profile.counter" class="chatsview__widget--counter">{{ profile.counter }}</p>
          </div>
        </div>
      </div>
      <div class="chatsview__chatwidget">
        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChatContainer",
  data() {
    return {
      profileData: [
        {
          id: 1,
          img: "image1.jpeg",
          name: "Natasha Whitman",
          time: "13:05 PM",
          text: "😉😉 I think it's lunch time",
          counter: 3,
          unread: true
        },
        {
          id: 2,
          img: "image2.jpeg",
          name: "Jaykob Wiseman",
          time: "12:45 PM",
          text: "So we sent the [Package]",
          counter: 2,
          unread: true
        },
        {
          id: 3,
          img: "image3.jpeg",
          name: "Andrew Kitkat",
          time: "12:30 PM",
          text: "Meeting in the afternoon?",
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
        },
        {
          id: 5,
          img: "image5.jpeg",
          name: "Sheila Bushido",
          time: "11:45 AM",
          text: "You: I think the code worked today!",
          counter: null,
          unread: false
        },
        {
          id: 6,
          img: "image6.jpeg",
          name: "{ The Code Gang Group }",
          time: "11:30 AM",
          text: "Fred: Code meetup today @1500hrs",
          counter: 5,
          unread: true
        },
        {
          id: 7,
          img: "image7.jpeg",
          name: "Friends of Idiots Group",
          time: "11:28 AM",
          text: "You: I guess y'all idiots",
          counter: null,
          unread: false
        },
        {
          id: 8,
          img: "image9.jpeg",
          name: "Jane Pearson",
          time: "10:05 AM",
          text: "😚😚😚 Dinner in the evening?",
          counter: 1,
          unread: true
        },
        {
          id: 9,
          img: "image8.jpeg",
          name: "Andrew Boozeman",
          time: "Yesterday",
          text: "You: $$Yo! Friday's coming up!",
          counter: null,
          unread: false
        },
        {
          id: 10,
          img: "image10.jpeg",
          name: "Monica Monaco",
          time: "Yesterday",
          text: "Am moving to Adelide next month",
          counter: null,
          unread: false
        },
        {
          id: 11,
          img: "image11.jpeg",
          name: "Alex Android",
          time: "Yesterday",
          text: "You: It's not working!",
          counter: null,
          unread: false
        },
        {
          id: 12,
          img: "image12.jpeg",
          name: "Natasha Worker",
          time: "Yesterday",
          text: "We have it installed.",
          counter: null,
          unread: false
        },
        {
          id: 13,
          img: "image13.jpeg",
          name: "Monica Monaco",
          time: "Yesterday",
          text: "Am moving to Adelide next month",
          counter: null,
          unread: false
        },
        {
          id: 14,
          img: "image14.jpeg",
          name: "[ The Drivers Group ]",
          time: "Yesterday",
          text: "Sheila: Guys, I just bought a car",
          counter: null,
          unread: false
        },
        {
          id: 15,
          img: "image15.jpeg",
          name: "Fawaz Anwar",
          time: "6/5/20",
          text: "We are working overtime",
          counter: null,
          unread: false
        }
      ]
    };
  },
  methods: {
    openChats() {
      this.$router.push('/chats');
    }
  },
};
</script>

<style lang="scss">
.chatsview {
  position: relative;
  background-color: $color-white;
  height: 100%;
  overflow-y: auto;

  &__container {
    display: flex;
    flex-direction: column;
    height: 100%;
    overflow-y: auto;
  }
}

.chatcard {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  background-color: $color-white;
  cursor: pointer;

  &__imageview {
    padding: 0.5rem;

    &--image {
      width: 55px;
      height: 55px;
      border-radius: 50%;
      object-fit: cover;
    }
  }
}

.chatsview__textview {
  width: 100%;
  padding: 1.3rem;
  border-bottom: 0.5px solid $color-grey-300;
}

.chatsview__viewbox {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.5rem;

  &--title {
    font-family: inherit;
    font-size: 1.3rem;
    font-weight: 600;
    color: $color-dark;
  }

  &--smtext {
    font-family: inherit;
    font-size: 1.1rem;
    font-weight: 400;
    color: $color-grey-500;
  }
}

.chatsview__widget {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.5rem;

  &--text {
    font-family: inherit;
    font-size: 1.3rem;
    font-weight: 400;
    text-overflow: ellipsis;
    color: $color-grey-600;
  }

  &--counter {
    font-family: inherit;
    font-size: 1.2rem;
    padding: 0.1rem;
    font-weight: 400;
    color: $color-white;
    width: 2rem;
    height: 2rem;
    background-color: $color-green-500;
    border-radius: 50%;
    text-align: center;
  }
}

.chatsview__chatwidget {
  position: fixed;
  bottom: 25px;
  right: 20px;
  width: 5.5rem;
  height: 5.5rem;
  padding: 1.5rem;
  border-radius: 50%;
  background-color: #25d366;
  text-align: center;
  z-index: 999;
  fill: $color-grey-300;
}

.text-green {
  color: $color-green-500;
  font-weight: 600;
}

.text-unread {
  font-weight: 600;
}
</style>