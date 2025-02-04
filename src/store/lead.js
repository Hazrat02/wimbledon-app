import { defineStore } from "pinia";
import axios from "axios";

export const leadStore = defineStore("lead", {
  state: () => ({
    lead: "",
    lead_page: true,
    
  }),
  actions: {
    setlead(payload) {
      this.lead = payload;
    },
    leadfalse() {
      this.lead_page = false;
    },
  
   
    async getlead() {
      try {
        const response = await axios.get(
          "/api/leads"
        );
        this.setlead(response.data.lead);
        return response.data.lead; // Return the fetched data
      } catch (error) {
      }
    },
   
    
  },
});
