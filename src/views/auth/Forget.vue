
<template>
  <body>
    <!-- ======= Header ======= -->

    <main id="main">
      <div>
        <HomeLayout>
          <section id="contact" class="s-contact2">
            <div class="overlay"></div>
            <div class="contact__line"></div>

            <div class="row1 section-header"  >
              <div class="col-full">
                <h3 class="subhead">Reset Pass</h3>
                <h1 class="display-2 display-2--light">
                  Our Portfolio
Managers and Research.
                </h1>
              </div>
            </div>

            <div class="row1 contact-content"  >
              <div class="contact-primary">
                <h3 class="h6">Fill this form for reset Password</h3>

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
                          class="full-width"
                        />
                      </div>
                      <div class="form-field">
                        <button
                          class="full-width btn goldrose-btn"
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
                          class="full-width"
                        />
                      </div>
                      <div class="form-field">
                        <button
                          class="full-width btn goldrose-btn"
                          type="submit"
                          @click="codeMatch"
                        >
                          Reset
                        </button>
                      </div>
                    </div>

                    <div v-if="showReset">
                      <div class="form-field">
                        <input
                          placeholder="Enter Your New Pass"
                          v-model="password"
                          type="password"
                          id="password"
                          required
                          class="full-width"
                        />
                      </div>
                      <div class="form-field">
                        <input
                          placeholder="Retype Your New Pass"
                          v-model="password_confirmation"
                          id="password_confirmation"
                          type="password"
                          required
                          class="full-width"
                        />
                      </div>
                      <div class="form-field">
                        <button class="full-width btn goldrose-btn" type="submit">
                          Forget
                        </button>
                      </div>
                    </div>
                    
                  </fieldset>
                </form>
                <div class="form-field">
                      <router-link class="full-width  btn goldrose-btn" to="/login">
                        LogIn
                      </router-link>
                    </div>
              </div>
              <!-- end contact-primary -->
            </div>
            <!-- end contact-content -->
          </section>
        
        </HomeLayout>
      </div>
    </main>

    <!-- Scroll Top Button -->

    <!-- Preloader -->
  </body>
  <!-- <template v-slot:bodytext ></template> -->
</template>


<script>
import axios from "axios";
import { login } from "../../midleware/auth.js";
import { useAuthUserStore } from "../../store/user";

export default {
  data() {
    return {
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
