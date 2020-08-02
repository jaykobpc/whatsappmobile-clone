<template>
  <div class="contactview">
      <div class="contactview__container">
          
          <div class="contactview__navtab">
            <div class="contactview__navbar">
                <div @click="back_home" class="contactview__navbar--iconview">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M21 11H6.83l3.58-3.59L9 6l-6 6 6 6 1.41-1.41L6.83 13H21z"/></svg>
                </div>
                <div class="contactview__textview">
                    <h3 class="contactview__textview--title">Select contact</h3>
                    <p class="contactview__textview--smtext">{{ get_list_length() }} contacts</p>
                </div>
            </div>
            <div class="contactview__widgets">
                <div class="contactview__widgets--iconview">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
                </div>
                <div class="contactview__widgets--iconview">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></svg>
                </div>
            </div>
        </div>

        <div class="contactview__listview">
            <div class="contactview__groupview">
                <div class="contactview__card">
                    <div class="contactview__card--iconview">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M16.5 12c1.38 0 2.49-1.12 2.49-2.5S17.88 7 16.5 7C15.12 7 14 8.12 14 9.5s1.12 2.5 2.5 2.5zM9 11c1.66 0 2.99-1.34 2.99-3S10.66 5 9 5C7.34 5 6 6.34 6 8s1.34 3 3 3zm7.5 3c-1.83 0-5.5.92-5.5 2.75V19h11v-2.25c0-1.83-3.67-2.75-5.5-2.75zM9 13c-2.33 0-7 1.17-7 3.5V19h7v-2.25c0-.85.33-2.34 2.37-3.47C10.5 13.1 9.66 13 9 13z"/></svg>
                    </div>
                    <div class="contactview__card--textview">New group</div>
                </div>
                <div class="contactview__card">
                    <div class="contactview__card--iconview">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm-9-2V7H4v3H1v2h3v3h2v-3h3v-2H6zm9 4c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
                    </div>
                    <div class="contactview__card--textview">New contact</div>
                </div>
            </div>
            <div v-for="contact in contactList" :key="contact.id" class="contactview__cardlist">
                <div class="contactview__cardselect">
                    <img :src="require(`@/Profiles/${contact.img}`)" :alt="contact.name" class="contactview__cardselect--image">
                </div>
                <div class="contactview__textselect">
                    <h3 class="contactview__textselect--title">{{ contact.name }}</h3>
                    <p class="contactview__textselect--text">{{ contact.text }}</p>
                </div>
            </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
    name: "Contactview",
    data() {
        return {
            contactList: [
                {
                    id: 1,
                    img: "image1.jpeg",
                    name: "Natasha Whitman",
                    time: "13:05 PM",
                    text: "This is just a console message i logged @miko",
                },
                {
                    id: 2,
                    img: "image2.jpeg",
                    name: "Jaykob Wiseman",
                    time: "13:05 PM",
                    text: "Just coding!",
                },
                {
                    id: 3,
                    img: "image3.jpeg",
                    name: "Andrew Kitkat",
                    time: "13:05 PM",
                    text: "Just another kitkat!",
                },
                {
                    id: 4,
                    img: "image4.jpeg",
                    name: "Sarah Webber",
                    time: "13:05 PM",
                    text: "",
                },
                {
                    id: 5,
                    img: "image1.jpeg",
                    name: "Sheila Bushido",
                    time: "13:05 PM",
                    text: "<Sheila />",
                },
                {
                    id: 6,
                    img: "image6.jpeg",
                    name: "James Pearson",
                    time: "13:05 PM",
                    text: "😎😎 Real Apollo Mission!",
                },
                {
                    id: 7,
                    img: "image7.jpeg",
                    name: "Andrew Boozeman",
                    time: "13:05 PM",
                    text: "Just my personal thinking capabilities",
                },
                {
                    id: 8,
                    img: "image8.jpeg",
                    name: "Monica Monaco",
                    time: "13:05 PM",
                    text: "Hi there, Am using Whats my app!",
                },
                {
                    id: 9,
                    img: "image12.jpeg",
                    name: "Alex Android",
                    time: "13:05 PM",
                    text: "😎😎😎😎😎",
                },
                {
                    id: 10,
                    img: "image10.jpeg",
                    name: "Fawaz Anwar",
                    time: "13:05 PM",
                    text: "✌️✌️✌️✌️✌️✌️",
                },
            ]
        }
    },
    methods: {
        back_home() {
            this.$router.push('/');
        },
        get_list_length() {
            var listLength = this.contactList.length;
            return listLength;
        }
    }
}
</script>

<style lang="scss">
.contactview {

    &__container {
        position: relative;
        top: 0;
        background-color: $color-white;
    }

    &__navtab {
        padding: 1.1rem 0.7rem;
        background-color: #075e54;
        display: flex;
        align-items: center;
        justify-content: space-between;
        position: fixed;
        width: 100%;
        top: 0;
        z-index: 999;
    }

    &__navbar {
        display: flex;
        flex-direction: row;
        align-items: center;

        &--iconview {
            fill: $color-grey-300;
            width: 3.5rem;
            height: 3.5rem;
            border-radius: 50%;
            text-align: center;
            padding: 0.5rem;
        }
    }

    &__textview {
        margin-left: 0.3rem;

        &--title {
            font-family: inherit;
            font-size: 1.3rem;
            font-weight: 600;
            color: $color-grey-300;
            margin-bottom: 0.3rem;
        }

        &--smtext {
            font-family: inherit;
            font-size: 1.1rem;
            font-weight: 400;
            color: $color-grey-300;
        }
    }

    &__widgets {
        display: flex;
        flex-direction: row;
        align-items: center;

        &--iconview {
            fill: $color-grey-300;
            width: 3.5rem;
            height: 3.5rem;
            border-radius: 50%;
            text-align: center;
            padding: 0.5rem;
        }
    }

    &__listview {
        margin-top: 6rem;
        width: 100%;
    }

    &__groupview {
        position: relative;
        margin-bottom: 0.7rem;
    }

    &__card {
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 1.1rem;

        &--iconview {
            fill: $color-white;
            width: 3.5rem;
            height: 3.5rem;
            border-radius: 50%;
            padding: 0.4rem;
            background-color: $color-green-800;
        }

        &--textview {
            margin-left: 1.1rem;
            font-family: inherit;
            font-size: 1.3rem;
            font-weight: 500;
            color: $color-dark;
        }
    }

    &__cardlist {
        width: 100%;
        background-color: $color-white;
        display: flex;
        align-items: center;
        flex-direction: row;
        padding: 0.8rem;
    }

    &__cardselect {
        will-change: inherit;

        &--image {
            width: 55px;
            height: 55px;
            object-fit: cover;
            border-radius: 50%;
        }
    }

    &__textselect {
        margin-left: 1rem;

        &--title {
            font-family: inherit;
            font-size: 1.3rem;
            font-weight: 600;
            color: $color-dark;
            margin-bottom: 0.5rem;
        }

        &--text {
            font-family: inherit;
            font-size: 1.1rem;
            font-weight: 400;
            color: $color-grey-600;
        }
    }
}
</style>