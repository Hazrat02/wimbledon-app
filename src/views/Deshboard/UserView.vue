<template>
  <div>
    <DeshboardLayout>
      <div class="bg-dash-dark-2 py-4">
        <div class="container-fluid">
          <h2 class=" mb-0">Profile Information</h2>
        </div>
      </div>

      <section class="container">
        <div class="container py-5 ">
      

          <div class="row">
            <div class="col-lg-4 ">
              <div class="card mb-4 bg-secondary">
                <div class="card-body text-center">
                  <img v-if="authUser.profile"
                        class="rounded-circle img-fluid"
                        :src="authUser.profile"
                        style="width: 150px ;height: 150px;"

                        alt="Richard Nevoreski"
                      />
                      <img v-else
                        class="rounded-circle img-fluid"
                        style="width: 150px ;height: 150px"

                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                        alt="Richard Nevoreski"
                      />
                 
                  <h5 class="my-3">{{ authUser.name }}</h5>
                  <p class="text-muted mb-1">Email: {{ authUser.email }}</p>
                  <p class="text-muted mb-4">Client ID: {{ authUser.id }}</p>
                  <div class="d-flex justify-content-center mb-2">
                    <router-link to="/account" type="button" class="btn btn-primary">
                      Account
                    </router-link>

                    <button
                        class="btn btn-outline-success ms-1"
                        type="button"
                        data-bs-toggle="modal"
                        data-bs-target="#myModal"
                      >
                      Update
                      </button>
                  </div>
                </div>
              </div>
              <div class="card bg-secondary mb-4 mb-lg-0 ">
                <div class="card-body  p-0">
                  <ul class="list-group list-group-flush rounded-3">
                    <li
                      class="list-group-item d-flex justify-content-between align-items-center p-3"
                    >
                      <p class="text-warning">{{authUser.id_kyc}}</p>
                      <p class="mb-0">Proof of ID approved</p>
                    </li>
                    <li
                      class="list-group-item d-flex justify-content-between align-items-center p-3"
                    >
                    <p class="text-success">{{authUser.ad_kyc}}</p>
                      <p class="mb-0"> Proof of Address approved</p>
                    </li>
                    <li
                      class="list-group-item d-flex justify-content-between align-items-center p-3"
                    >
                      <p
                        style="color: #55acee"
                      >
                      {{authUser.ec_kyc}}
                  </p>
                      <p class="mb-0">Economic Profile approved</p>
                    </li>
            
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-lg-8">
              <div class="card mb-4 bg-secondary">
                <div class="card-body">
                  <div class="row">
                    <div class="col-sm-3">
                      <p class="mb-0">Full Name</p>
                    </div>
                    <div class="col-sm-9">
                      <p class="text-muted mb-0">{{ authUser.name }}</p>
                    </div>
                  </div>
                  <hr />
                  <div class="row">
                    <div class="col-sm-3">
                      <p class="mb-0">Email</p>
                    </div>
                    <div class="col-sm-9">
                      <p class="text-muted mb-0">{{ authUser.email }}</p>
                    </div>
                  </div>
                  <hr />
                  <div class="row">
                    <div class="col-sm-3">
                      <p class="mb-0">Phone</p>
                    </div>
                    <div class="col-sm-9">
                      <p class="text-muted mb-0">{{ authUser.Phone }}</p>
                    </div>
                  </div>
                  <hr />
                  <div class="row">
                    <div class="col-sm-3">
                      <p class="mb-0">Communication Language</p>
                    </div>
                    <div class="col-sm-9">
                      <p class="text-muted mb-0">English</p>
                    </div>
                  </div>
                  <hr />
                  <div class="row">
                    <div class="col-sm-3">
                      <p class="mb-0">Address</p>
                    </div>
                    <div class="col-sm-9">
                      <p class="text-muted mb-0">{{ authUser.country }}</p>
                    </div>
                  </div>
                  <hr />
                  <div class="row">
                    <div class="col-sm-3">
                      <p class="mb-0">Password</p>
                    </div>
                    <div class="col-sm-9">
                      <p class="text-muted mb-0">Hidden</p>
                    </div>
                  </div>
                  <hr />
                  <div class="row">
                    <div class="col-sm-3">
                      <p class="mb-0">Wallet</p>
                    </div>
                    <div class="col-sm-9">
                      <p class="text-muted mb-0">{{authUser.wallet}}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <div class="card mb-4 mb-md-0 bg-secondary">
                    <div class="card-body">
                      <p class="mb-4">
                        <span class="text-primary font-italic me-1"
                          >Account</span
                        >
                         Status
                      </p>
                      <p class="mb-1" style="font-size: 0.77rem">Proof of ID approved</p>
                      <div class="progress rounded" style="height: 5px;">
                        <div
                          class="progress-bar"
                          role="progressbar"
                          style="width: 80%;"
                          aria-valuenow="80"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      <p class="mt-3 mb-1" style="font-size: 0.77rem">
                        Proof of ID approved
                      </p>
                      <div class="progress rounded" style="height: 5px">
                        <div
                          class="progress-bar"
                          role="progressbar"
                          style="width: 72%"
                          aria-valuenow="72"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      <p class="mt-3 mb-1" style="font-size: 0.77rem">
                        One Page
                      </p>
                      <div class="progress rounded" style="height: 5px">
                        <div
                          class="progress-bar"
                          role="progressbar"
                          style="width: 89%"
                          aria-valuenow="89"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      <p class="mt-3 mb-1" style="font-size: 0.77rem">
                        Backend API
                      </p>
                      <div class="progress rounded mb-2" style="height: 5px">
                        <div
                          class="progress-bar"
                          role="progressbar"
                          style="width: 66%"
                          aria-valuenow="66"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="card mb-4 mb-md-0 bg-secondary">
                    <div class="card-body">
                      <p class="mb-4">
                        <span class="text-primary font-italic me-1"
                          >assigment</span
                        >
                        Project Status
                      </p>
                      <p class="mb-1" style="font-size: 0.77rem">Web Design</p>
                      <div class="progress rounded" style="height: 5px">
                        <div
                          class="progress-bar"
                          role="progressbar"
                          style="width: 80%"
                          aria-valuenow="80"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      <p class="mt-3 mb-1" style="font-size: 0.77rem">
                        Website Markup
                      </p>
                      <div class="progress rounded" style="height: 5px">
                        <div
                          class="progress-bar"
                          role="progressbar"
                          style="width: 72%"
                          aria-valuenow="72"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      <p class="mt-3 mb-1" style="font-size: 0.77rem">
                        One Page
                      </p>
                      <div class="progress rounded" style="height: 5px">
                        <div
                          class="progress-bar"
                          role="progressbar"
                          style="width: 89%"
                          aria-valuenow="89"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      <p class="mt-3 mb-1" style="font-size: 0.77rem">
                        Mobile Template
                      </p>
                      <div class="progress rounded" style="height: 5px">
                        <div
                          class="progress-bar"
                          role="progressbar"
                          style="width: 55%"
                          aria-valuenow="55"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
     
      <div
        class="modal fade text-start"
        id="myModal"
        tabindex="-1"
        aria-labelledby="myModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content bg-secondary">
            <div class="modal-header">
              <h5 class="modal-title" id="myModalLabel">Update Profile</h5>
              <button
                class="btn-close btn-close-white"
                type="button"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form enctype="multipart/form-data" @submit.prevent="userUpdate">
                <div class="mb-3">
                  <label class=" " for="modalInputEmail1">Date of birth</label>
                  <input
                    class="form-control"
                    id="modalInputEmail1"
                    type="date"
                    v-model="birth"
                  />
                </div>
                <div class="mb-3">
                  <label class=" " for="mobile">Mobile Number</label>
                  <input
                    class="form-control"
                    id="mobile"
                    type="text"
                    v-model="phone"
                  />
                </div>
                <div class="mb-3">
                  <label class="" for="profile">Profile</label>
                  <input
                    @change="image"
                    class="form-control"
                    id="profile"
                    type="file"
                  />
                </div>
                <div class="form-check mt-1 mb-3">
                  <input
                    class="form-check-input"
                    id="defaultCheck1"
                    type="checkbox"
                    v-model="checkbox"
                  />
                  <label class="form-check-label" for="defaultCheck1"
                    >I Need Change Password</label
                  >
                </div>
                <div v-if="checkbox" class="">
                  <div class="mb-3">
                    <label class=" " for="modalInputPassword1"
                      >New Password</label
                    >
                    <input
                      class="form-control"
                      id="modalInputPassword1"
                      type="password"
                      v-model="password"
                    />
                  </div>
                  <div class="mb-3">
                    <label class=" " for="modalInputPassword2"
                      >Confirm Password</label
                    >
                    <input
                      v-model="password_confirmation"
                      class="form-control"
                      id="modalInputPassword2"
                      type="password"
                    />
                  </div>
                </div>
                <button class="btn btn-primary mt-3" type="submit">
                  Save changes
                </button>
              </form>
            </div>
            <div class="modal-footer">
              <button
                class="btn btn-secondary"
                type="button"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </DeshboardLayout>
  </div>
</template>
    
  <script>
import { RouterLink } from "vue-router";

import { useAuthUserStore } from "../../store/user";
import isAuthenticated from "./../../midleware/auth";

import axios from "axios";

export default {

  data() {
    return {
      authUser: [],
      checkbox: "",

      password: "",
      password_confirmation: "",
      profile: "",
      birth: "545",
      phone: "2323",
    };
  },
  methods: {
    image(event) {
      this.profile = event.target.files[0];
    },
    async userUpdate() {
      this.$setLoading(true);

      const formData = new FormData(); // Create a FormData object
      formData.append("birth", this.birth);
      formData.append("phone", this.phone);
      formData.append("password", this.password);
      formData.append("password_confirmation", this.password_confirmation);
      formData.append("profile", this.profile); // Append the file to the FormData object

      await axios
        .post("/api/user/edit", formData, {
          headers: {
            "Content-Type": "multipart/form-data", // Set content type for file upload
          },
        })
        .then((response) => {
          (this.authUser = response.data.user),
            this.$notify({
              title: "message",
              text: response.data.message,
              type: "success",
            });
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

    this.birth = this.authUser.birth;
    this.phone = this.authUser.Phone;

    this.$setLoading(false);
  },
};
</script>
 
