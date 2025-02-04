import { defineStore } from 'pinia';
import axios from 'axios';
const LOCAL_STORAGE_KEY = 'user_data';

export const useAuthUserStore = defineStore('authUser', {
  state: () => ({
    authUser: null,
    allUser:'',
    refferUser:''
  }),
  actions: {
    setAuthUser(newUser) {
      this.authUser = newUser;
      this.saveUserToLocalStorage(newUser);
    },
    setAllUser(newUser) {
      this.allUser = newUser;
    },
    async getUser(){
      try {
        const response = await axios.post("/api/auth/me");
        this.setAuthUser(response.data.authUser);
        return response.data; // Return the fetched data
      } catch (error) {
        console.log(error);
      }
   
    },
    async getAllUser(){
      try {
        const response = await axios.get("/api/all.user");
        this.setAllUser(response.data.alluser);
       return  response.data.alluser
      } catch (error) {
        console.log(error);
      }
   
    },
    async getRefferUser(){
      try {
        const response = await axios.get("/api/reffer.user");
        this.refferUser=response.data.alluser;
       return  response.data.alluser
      } catch (error) {
        console.log(error);
      }
   
    },
    async reSetAuthUser() {
      await this.getUser(); // Wait for the data to be fetched
      const data = this.authUser;
   
      return data;
    },

    deleteUser(id) {
      
      this.allUser = this.allUser.filter((item) => item.id !== id);


      return this.allUser
      
    },









    clearAuthUser() {
      this.user = null;
      this.saveUserToLocalStorage(null);
    },
    loadUserFromLocalStorage() {
      const savedUser = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
      if (savedUser) {
        this.user = savedUser;
      }
    },
    saveUserToLocalStorage(user) {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(user));
    },
  },
});
