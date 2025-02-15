import { defineStore } from "pinia";
import axios from "axios";

export const useNomineeStore = defineStore("nominee", {
  state: () => ({
    nominee: "",
   
    
  }),
  actions: {
    setlead(payload) {
      this.nominee = payload;
    },
    leadfalse() {
      this.lead_page = false;
    },
  
   
    async getlead() {
      try {
        const response = await axios.get(
          "/api/nominee"
        );
        this.setlead(response.data);
        return response.data; // Return the fetched data
      } catch (error) {
      }
    },
   
    
  },
});
