<template>
            <HomeLayout>

  <body>
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
                  <h4 class="card-title">Sign in</h4>
                </div>
                <div class="card-body">
                  <form @submit.prevent="login"
                 
                    name="myform"
                    class="signin_validate"
                 
                  >
                    <div class="mb-3">
                      <label>Email</label>
                      <input v-model="email"
                        type="email"
                        class="form-control"
                        placeholder="hello@example.com"
                        name="email"
                      />
                    </div>
                    <div class="mb-3">
                      <label>Password</label>
                      <input
                        v-model="password"
                        :type="passwordFieldType"
                        class="form-control"
                        placeholder="Password"
                        name="password"
                      />
                    </div>
                    <div class="d-flex justify-content-between mt-4 mb-2">
                      <div class="">
                        <label class="toggle">
                          <input class="toggle-checkbox" v-model="showPassword" type="checkbox" />
                          <div class="toggle-switch"></div>
                          <span class="toggle-label">Show Password</span>
                        </label>
                      </div>
                      <div class="">
                        <label class="toggle">
                          
                    
                          <router-link to="/forget" class="toggle-label">forgot password</router-link>
                        </label>
                      </div>
                    </div>
                    <div class="text-center">
                      <button type="submit" class="btn btn-success btn-block">
                        Sign in
                      </button>
                    </div>
                  </form>
                  <div class="new-account mt-3">
                    <p>
                      Don't have an account?
                      <RouterLink class="text-primary" to="/register"
                        >Sign up</RouterLink
                      >
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!--removeIf(production)-->
      <!--**********************************
    Right sidebar start
***********************************-->
      <!-- <div class="sidebar-right">
    <a class="sidebar-right-trigger" href="javascript:void(0)">
        <span><i class="fa fa-cog fa-spin"></i></span>
    </a>
    <div class="sidebar-right-inner">
        <div class="admin-settings">
            <div class="opt-background">
                <p>Font Family</p>
                <select class="form-control" name="theme_font" id="theme_font">
                    <option value="nunito">Nunito</option>
                    <option value="opensans">Open Sans</option>

                </select>
            </div>
            <div>
                <p>Primary Color</p>
                <div class="opt-nav-header-color">
                    <span>
                        <input type="radio" name="navigation_header" value="color_1"
                            class="filled-in chk-col-primary" id="nav_header_color_1" />
                        <label for="nav_header_color_1"></label>
                    </span>
                    <span>
                        <input type="radio" name="navigation_header" value="color_2"
                            class="filled-in chk-col-primary" id="nav_header_color_2" />
                        <label for="nav_header_color_2"></label>
                    </span>
                    <span>
                        <input type="radio" name="navigation_header" value="color_3"
                            class="filled-in chk-col-primary" id="nav_header_color_3" />
                        <label for="nav_header_color_3"></label>
                    </span>
                    <span>
                        <input type="radio" name="navigation_header" value="color_4"
                            class="filled-in chk-col-primary" id="nav_header_color_4" />
                        <label for="nav_header_color_4"></label>
                    </span>
                    <span>
                        <input type="radio" name="navigation_header" value="color_5"
                            class="filled-in chk-col-primary" id="nav_header_color_5" />
                        <label for="nav_header_color_5"></label>
                    </span>
                </div>
            </div>
            <div class="opt-header-color">
                <p>Background Color</p>
                <div>
                    <span>
                        <input type="radio" name="header_bg" value="color_1" class="filled-in chk-col-primary"
                            id="header_color_1">
                        <label for="header_color_1"></label>
                    </span>
                    <span>
                        <input type="radio" name="header_bg" value="color_2" class="filled-in chk-col-primary"
                            id="header_color_2">
                        <label for="header_color_2"></label>
                    </span>
                    <span>
                        <input type="radio" name="header_bg" value="color_3" class="filled-in chk-col-primary"
                            id="header_color_3">
                        <label for="header_color_3"></label>
                    </span>
                    <span>
                        <input type="radio" name="header_bg" value="color_4" class="filled-in chk-col-primary"
                            id="header_color_4">
                        <label for="header_color_4"></label>
                    </span>
                    <span>
                        <input type="radio" name="header_bg" value="color_5" class="filled-in chk-col-primary"
                            id="header_color_5">
                        <label for="header_color_5"></label>
                    </span>
                </div>
            </div>
        </div>
    </div>
</div> -->
      <!--**********************************
    Right sidebar end
***********************************-->
      <!--endRemoveIf(production)-->
    </div>
  </body>
  </HomeLayout>
</template>





<script>
import axios from "axios";
import { login } from "../../midleware/auth.js";
import { useAuthUserStore } from "../../store/user";

// import { notify } from 'vue3-notify'
export default {
  data() {
    return {
      showicon: true,
      showPassword: false,
      email: "",
      password: "",
    };
  },
  computed: {
    passwordFieldType() {
      return this.showPassword ? "text" : "password";
    },
    icon() {
      return this.showicon ? "fa-eye-slash" : "fa-eye";
    },
  },
  created() {
    this.$setLoading(false);
  },

  methods: {
    togglePasswordVisibility() {
      this.showPassword = !this.showPassword;
      this.showicon = !this.showicon;
    },
    showNotification() {
      this.$notify({
        title: "Important message",
        text: "Hello user!",
      });
    },
    async login() {
      this.$setLoading(true);
      const data = {
        email: this.email,
        password: this.password,
      };

      await axios
        .post("/api/auth/login", data)
        .then((response) => {
          login(response.data.authorisation.token);

          const userStore = useAuthUserStore();

          userStore.setAuthUser(response.data.user);
          if (response.data.user.role == "0") {
            this.$router.push("/");
          } else {
            this.$router.push("/");
          }

          this.$setLoading(false);
          this.$notify({
            title: "message",
            text: "User succesfully login",
            type: "success",
          });
        })
        .catch((error) => {
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
  },
};
</script>

