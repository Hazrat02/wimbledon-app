import { defineStore } from "pinia";
import axios from "axios";

export const workStore = defineStore("work", {
  state: () => ({
    work: "",
    
  }),
  actions: {
    setWork(payload) {
      this.work = payload;
    },
    addWork(data) {
      
      const dataArray = Array.isArray(data) ? data : [data];
      
      // Adds the elements of dataArray to the end of the authTransaction array
      this.work.unshift(...dataArray);
      return this.work
      
    },
   
    deletework(id) {
      
      this.work = this.work.filter((item) => item.id !== id);


      return this.work
      
    },
    async getWork() {
      try {
        const response = await axios.get(
          "/api/work"
        );
        this.setWork(response.data.economic);
        return this.work; // Return the fetched data
      } catch (error) {
        console.log(error);
      }
    },
    
    
  },
});
