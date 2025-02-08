

<template>
  <div id="main-wrapper">
    <!-- Spinner Start -->
    <div
      v-if="this.$isLoading()"
      id="spinner" style="background-color: #292444e1;"
      class="show  position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center"
    >
      <div
        class="spinner-border text-primary"
        style="width: 3rem; height: 3rem"
        role="status"
      >
        <span class="sr-only">Loading...</span>
      </div>
    </div>

    <div >
      <div class="header">
        <div class="container-fluid">
          <div class="row">
            <div class="col-xl-12">
              <nav
                class="navbar navbar-expand-lg navbar-light px-0 justify-content-between"
              >
                <router-link to="/" class="navbar-brand"
                  >
                  <span>Wimbledon</span></router-link
                >

                <div class="dashboard_log my-2">
                  <div class="d-flex align-items-center">
                    <div class="account_money">
                      <ul>
                        <li class="crypto">
                          <span>${{ Number(authUser.live_balance)}}</span>
                          <i class="cc BTC-alt"></i>
                        </li>
                        <li class="usd">
                          <span>{{ Number(authUser.main_balance) + Number(authUser.live_balance) }} USD</span>
                        </li>
                      </ul>
                    </div>
                    <div class="profile_log dropdown" :class="{
              show: this.sidebarOpen === true,
            }">
                      <div class="user" @click="toggleSidebar">
                        <span class="thumb"><i class="fa fa-user"></i></span>
                        <span class="name">{{ authUser.name }}</span>
                        <span class="arrow"
                          ><i class="fa fa-angle-down"></i
                        ></span>
                      </div>
                      <div class="dropdown-menu dropdown-menu-right" :class="{
              show: this.sidebarOpen === true,
            }">
                        <router-link to="/account" class="dropdown-item">
                          <i class="fa fa-user"></i> Account
                        </router-link>
                        <router-link to="/transaction" class="dropdown-item">
                          <i class="fa fa-book"></i> History
                        </router-link>
                        <router-link to="/kyc" class="dropdown-item">
                          <i class="fa fa-id-badge"></i> Kyc
                        </router-link>
                      
                        <a @click="logout" class="dropdown-item logout">
                          <i class="fa fa-sign-out"></i> Logout
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <div class="sidebar">
        <div class="menu">
          <ul>
            <li>
              <router-link to="/"  :class="{
              active: this.$route.path === '/',
            }">
                <span><i class="fa fa-igloo"></i></span>
              </router-link>
            </li>
            <li>
              <router-link to="/deposit" :class="{active:
                this.$route.path === '/deposit' ||
                this.$route.path === '/withdraw' 

            }" 
                
              >
                <span><i class="fa fa-exchange-alt"></i></span>
              </router-link>
            </li>
            <li>
              <router-link to="/account"
              :class="{
              active: this.$route.path === '/account',
            }"
            
              >
                <span><i class="fa fa-user"></i></span>
              </router-link>
            </li>
            <li>
              <router-link to="/kyc"
                
          
              >
                <span><i class="fa fa-id-card"></i></span>
              </router-link>
            </li>
          </ul>
        </div>
      </div>

      <slot />
    </div>
    
  </div>
</template>



<script>
import isAuthenticated from "./../midleware/auth";
import { logout } from "./../midleware/auth";
import axios from "axios";
import { useAuthUserStore } from "../store/user";


export default {
  data() {
    return {
      sidebarOpen: false,
      sidebar: false,
      isAuthenticated: false,
      authUser: [],
    };
  },
  async created() {
    if (isAuthenticated()) {
      this.isAuthenticated = true;
    }

    const userStore = useAuthUserStore();
    const authUser = userStore.authUser;

    if (authUser) {
      this.authUser = authUser;
    } else {
      // userStore.reSetAuthUser();
      this.authUser = await userStore.reSetAuthUser();
    }
   
  },
  methods: {
    toggleSidebar() {
      this.sidebarOpen = !this.sidebarOpen;
    },
    // toggleSidebar() {
    //   this.sidebar = !this.sidebar;
    // },
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
</script>

