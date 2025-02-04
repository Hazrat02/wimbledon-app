import { defineStore } from "pinia";
import axios from "axios";

export const contactStore = defineStore("contact", {
  state: () => ({
    contact: "",
    
  }),
  actions: {
    setContact(payload) {
      this.contact = payload;
    },
  
   
    async getContact() {
      try {
        const response = await axios.get(
          "/api/contact.us"
        );
        this.setContact(response.data.contact);
        return response.data.contact; // Return the fetched data
      } catch (error) {
      }
    },
   
    
  },
});
