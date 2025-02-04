
<template>

  <body>


    <slot />


  
  </body>
</template>


<!-- <script>
import isAuthenticated from "./../midleware/auth";
import { logout } from "./../midleware/auth";
import axios from "axios";
import { useAuthUserStore } from "./../store/user";

export default {

  data() {
    return {
      authUser: [],
      bot: false,
      showChat: false,
      isOpen: false,

      messages: [
        { type: "in", sender: "Bot", text: "How can I help you?" },
        // Add more messages as needed
      ],
      newMessageText: "",
      smsloading: false,
    };
  },

  async created() {
    if (isAuthenticated() == true) {
      // auth user data +++++++++++++++++++++++++++++

      const userStore = useAuthUserStore();
      const authUser = userStore.authUser;

      if (authUser) {
        this.authUser = authUser;
      } else {
        // userStore.reSetAuthUser();
        this.authUser = await userStore.reSetAuthUser();
      }
    } else {
      this.authUser = "";
    }
  },
  mounted() {
    // Handle clicking outside the menu to close it
    document.addEventListener("click", this.handleClickOutside);
  },
  beforeDestroy() {
    // Remove the event listener when the component is destroyed
    document.removeEventListener("click", this.handleClickOutside);
  },

  methods: {
    handleChatClose(value) {
      this.showChat = value; // Update the showChat value based on close event
    },
    handleClickOutside(event) {
      const menu = document.querySelector(".header-nav");
      const toggle = document.querySelector(".header-menu-toggle");
      if (!menu.contains(event.target) && !toggle.contains(event.target)) {
        this.closeMenu();
      }
    },
    toggleMenu() {
      this.isOpen = !this.isOpen;
    },
    closeMenu() {
      this.isOpen = false;
    },
    toggleBot() {
      this.bot = !this.bot; // Toggle the value of sidebar between true and false
    },
    sendMessage() {
      // Add a new outgoing message
      this.messages.push({
        type: "out",
        sender: "You", // Change the sender as needed
        text: this.newMessageText,
        avatar: "https://bootdey.com/img/Content/avatar/avatar6.png",
      });

      this.smsloading = true;

      this.newMessageText = "";

      if (this.messages.length == "2") {
        setTimeout(() => {
          this.messages.push({
            type: "in",
            sender: "bot",
            text: "Thank you!What is your name?",
          });
          this.smsloading = false;
        }, 2000); // 5000 milliseconds = 5 seconds
      }
      if (this.messages.length == "4") {
        setTimeout(() => {
          this.messages.push({
            type: "in",
            sender: "bot",
            text: "Give us email for solve your problem",
          });
          this.smsloading = false;
        }, 2000); // 5000 milliseconds = 5 seconds
      }

      // Clear the input field after sending the message
    },
    async logout() {
      this.$setLoading(true);
      logout();
      await axios
        .post("api/auth/logout")
        .then((response) => {
          this.$setLoading(false);

          this.$notify({
            title: "message",
            text: response.data.message,
            type: "success",
          });

          // Change the authenticated value to false

          this.$router.push("/login");
        })
        .catch((error) => {
          this.$setLoading(false);
          this.$notify({
            title: "Error message",
            text: error.response.data.message,
            type: "error",
          });
        });
      this.$setLoading(false);
    },
  },
};
</script> -->
