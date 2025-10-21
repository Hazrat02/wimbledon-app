

<template>
  <div id="main-wrapper">
    <!-- Spinner Start -->
    <div
      v-if="this.$isLoading()"
      id="spinner"
      style="background-color:  rgba(168, 165, 165, 0.036);z-index: 1;"
      class="show position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center"
    >
      <div
        class="spinner-border text-primary"
        style="width: 3rem; height: 3rem"
        role="status"
      >
        <span class="sr-only">Loading...</span>
      </div>
    </div>

    <div>
      <div class="header">
        <div class="container-fluid">
          <div class="row">
            <div class="col-xl-12">
              <nav
                class="navbar navbar-expand-lg navbar-light px-0 justify-content-between"
              >
              
                <div class="navbar-brand menuIcon">
                  <i
                    class="fa white "
                    :class="{
                      'fa-bars': this.menuShow == false,
                      'fa-close': this.menuShow == true,
                    }"
                    style="font-size: 30px; color: white;"
                    @click="menuIs"
                  ></i>
              
                </div>
                <router-link to="/" class="navbar-brand">
                    <img
                 
                 src="./../../public/w.png"
                 alt=""
               />
                    <span style="margin-left: 0%;">IMBLEDON</span></router-link
                  >
                <!-- <router-link to="/" class="">
                    
                  <img
                 style="width: 100px;"
                 src="./../../public/logo1.png"
                 alt="">
               </router-link> -->
                <div class="dashboard_log my-2">
                  <div class="d-flex align-items-center">
                    <div class="account_money d-none d-md-block">
                      <ul>
                        <li class="usd">
                          <span
                            >{{
                              Number(authUser.main_balance)
                            }}
                            USD</span
                          >
                        </li>
                      </ul>
                    </div>
                    <div
                      class="profile_log dropdown"
                      :class="{
                        show: this.sidebarOpen === true,
                      }"
                    >
                      <div class="user" @click="toggleSidebar">
                        <span class="thumb"><i class="fa fa-user"></i></span>
                        <span class="name">{{ String(authUser.name).substring(0, 6) }}</span>
                        <span class="arrow"
                          ><i class="fa fa-angle-down"></i
                        ></span>
                      </div>
                      <div
                        class="dropdown-menu dropdown-menu-right"
                        :class="{
                          show: this.sidebarOpen === true,
                        }"
                      >
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

      <div
        class="sidebar"
        :class="{
          sideShow: this.menuShow == true,
          'sideShow-0': this.menuShow == false,
        }"
      >
        <div class="menu">
          <ul>
            <li>
              <router-link
                to="/"
                :class="{
                  active: this.$route.path === '/',
                }"
              >
                <span><i class="fa fa-igloo me-2"> </i></span> HOME
              </router-link>
            </li>
            <li>
              <router-link
                to="/deposit"
                :class="{
                  active:
                    this.$route.path === '/deposit' ||
                    this.$route.path === '/withdraw',
                }"
              >
                <span><i class="fa fa-exchange-alt me-0"></i></span> PAYMENT
              </router-link>
            </li>
            <li>
              <router-link
                to="/account"
                :class="{
                  active: this.$route.path === '/account',
                }"
              >
                <span><i class="fa fa-user me-1"></i></span> PROFILE
              </router-link>
            </li>

               <li>
              <router-link
                to="/commission"
                :class="{
                  active: this.$route.path === '/commission',
                }"
              >
                <span><i class="fa fa-money me-2"></i></span>EARN
              </router-link>
            </li>
            <li>
              <router-link
                to="/kyc"
                :class="{
                  active: this.$route.path === '/kyc',
                }"
              >
                <span><i class="fa fa-id-card me-2"></i></span> KYC
              </router-link>
            </li>
         
          </ul>
        </div>
      </div>

      <div
        class=""
        :class="{
          'body-0': this.menuShow == false,
          'body-150': this.menuShow == true,
        }"
      >
        <slot />
      </div>
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
      menuShow: false,
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
    menuIs() {
      this.menuShow = !this.menuShow;
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

<style>
.header {
  padding: 0px 0px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1111;
  transition: all 0.3s ease-in;
  background: linear-gradient(
    to bottom,
    rgb(18, 3, 3) 0%,
    rgba(20, 18, 0, 0.9) 50%,
    rgb(52, 54, 0) 100%
  );
  backdrop-filter: blur(10px);
  box-shadow: 4px 0 10px rgba(255, 255, 255, 0.632) !important; /* Soft shadow for depth */
}

.sidebar {
  background: linear-gradient(
    to bottom,
    rgba(25, 25, 25, 1) 0%,
    rgb(43, 40, 1) 50%,
    rgba(0, 0, 0, 1) 100%
  );
  box-shadow: 0px 0px 10px rgba(255, 255, 255, 0.429) !important;
  position: fixed;
  left: 0;
  height: 100%;
  width: 150px;
  top: 50px;
  z-index: 3;
  /* border-right:solid 1px yellow ; */
}

.menu ul li a:hover,
.menu ul li a:focus,
.menu ul li a:active {
  background: rgba(65, 53, 1, 0.69);
  color: #fff;
}
.menu ul li a.active {
  background: rgba(65, 53, 1, 0.69);
  color: #fff;
}
.menu ul li a.active i {
  color: #ffb700;
}
.menu ul li a i {
  color: #fff;
  font-size: 24px;
}



</style>

