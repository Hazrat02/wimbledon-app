
<template>

          <HomeLayout>

            <div id="main-wrapper">
      <div class="authincation section-padding">
        <div class="container h-100">
          <div class="row justify-content-center h-100 align-items-center">
            <div class="col-lg-8 col-xl-6">
              <div class="mini-logo text-center my-5">
            
                <img src="./../../../public/logo1.png" alt="" style="width: 150px;" />
              </div>
              <div class="auth-form card">
                <div class="card-header justify-content-center">
                  <h4 class="card-title">Reset Password</h4>
                </div>
                <div class="card-body">
                  <form
                    @submit.prevent="forget"
                    name="contactForm"
                    id="contactForm"
                    method="post"
                    action=""
                    novalidate="novalidate"
                  >
                    <fieldset>
                      <div v-if="showEmail">
                        <div class="form-field">
                          <input
                            name="email"
                            placeholder="Enter Your Email"
                            v-model="email"
                            type="email"
                            id="form3Example3"
                            required
                            class="form-control"
                          />
                        </div>
                        <div class="form-field">
                          <button
                            class="btn btn-success btn-block mt-4"
                            type="button"
                            @click="next"
                          >
                            Next
                          </button>
                        </div>
                      </div>
                      <div v-if="showCode">
                        <div class="form-field">
                          <input
                            placeholder="Enter Your Code"
                            v-model="userCode"
                            type="text"
                            id="userCode"
                            required
                            class="form-control"
                          />
                        </div>
                        <div class="form-field mt-4">
                          <button
                            class="btn btn-success btn-block"
                            type="submit"
                            @click="codeMatch"
                          >
                            Reset
                          </button>
                        </div>
                      </div>
  
                      <div v-if="showReset">
                        <div class="mb-1" >
                      <label for="password">Password</label>
                      <input
                        name="password"
                        placeholder="Enter Your Pass"
                        v-model="password"
                        :type="passwordFieldType"
                        id="password"
                        required
                        class="form-control"
                      />
                      
                    </div>
                    <div class="mb-1" >
                      <label for="">Retype Password</label>
                      <input
                     
                        placeholder="Retype  Pass"
                        name="password_confirmation"
                            :type="passwordFieldType"
                            v-model="password_confirmation"
                            required
                        class="form-control"
                      />
                     
                    </div>


                    <div class="row d-flex justify-content-between mt-4 mb-2">
                      <div class="mb-1">
                        <label class="toggle">
                          <input class="toggle-checkbox" v-model="showPassword" type="checkbox" />
                          <div class="toggle-switch"></div>
                          <span class="toggle-label">Show Password</span>
                        </label>
                      </div>
                    </div>
                        <div class="mt-4">
                          <button class="btn btn-success btn-block" type="submit">
                            Forget
                          </button>
                        </div>
                      </div>
                      
                    </fieldset>
                  </form>
                  <div class="new-account mt-3">
                    <p>
                      Don't want you to forget?
                      <RouterLink class="text-primary" to="/login"
                        >LOGIN</RouterLink
                      >
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>
         
          
          </HomeLayout>

  


  </template>
  
  
  <script>
  import axios from "axios";
  import { login } from "../../midleware/auth.js";
  import { useAuthUserStore } from "../../store/user";
  
  export default {
    data() {
      return {
        showPassword: false,
        oldCode: "55555555555555534534434",
        userCode: "",
        showReset: false,
        showCode: false,
        showEmail: true,
        email: "",
        password: "",
        password_confirmation: "",
      };
    },
  
    created() {
      this.$setLoading(false);
    },
    computed: {
    passwordFieldType() {
      return this.showPassword ? "text" : "password";
    },},
  
    methods: {

      codeMatch() {
        this.$setLoading(true);
        if (this.oldCode == this.userCode) {
          this.showReset = true;
          this.showCode = false;
          this.showEmail = false;
        } else {
          this.$notify({
            title: "Warning",
            text: "Code do not match!",
            type: "error",
          });
        }
        this.$setLoading(false);
      },
      showNotification() {
        this.$notify({
          title: "Important message",
          text: "Hello user!",
        });
      },
      async next() {
        this.$setLoading(true);
  
        const data = {
          type: "forget",
          email: this.email,
          sub: "wimbeldoninvestments Forget code",
          bodytext: "Your wimbeldon forget code is:",
          footertext: "Do not share our code anyone.It is very importent",
          btn: "",
        };
        await axios
          .post("/api/auth/forgetcode", data)
          .then((response) => {
            this.showCode = true;
            this.showEmail = false;
            this.oldCode = response.data.code;
          })
          .catch((error) => {
            this.showCode = false;
            this.showEmail = true;
            // Handle the error
            this.$setLoading(false);
            this.$notify({
              title: "Error message",
              text: error.response.data.message,
              type: "error",
            });
          });
        this.$setLoading(false);
      },
      async forget() {
        this.$setLoading(true);
        const data = {
          email: this.email,
          password: this.password,
          password_confirmation: this.password_confirmation,
        };
  
        await axios
          .post("/api/auth/forget", data)
          .then((response) => {
            this.$router.push("/login");
            this.$notify({
              title: "message",
              text: response.data.message,
              type: "success",
            });
          })
          .catch((error) => {
            // Handle the error
  
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
  </script>
  
  
  <style scoped>

  </style>