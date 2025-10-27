<template>
  <DeshboardLayout>
    <div class="page_title"></div>

    <div class="container-fluid">
      <div class="row">
        <div class="col-xl-3 col-lg-4 col-xxl-4">
          <div class="card balance-widget">
            <div class="card-header border-0 py-0">
              <h4 class="card-title">Authorised Partner Portal</h4>
            </div>
            <div class="card-body pt-0">
              <div class="balance-widget">
                <div class="total-balance">
                  <h3>${{ sumBal }}</h3>
                  <h6>All Users Balance</h6>
                </div>
                <ul class="list-unstyled">
          
                  <li class="d-flex">
                    <i class="cc BTC me-3"></i>
                    <div class="flex-grow-1">
                      <h5 class="m-0">Commissions Rate</h5>
                    </div>
                    <div class="text-end">
                      <h5>{{ commission }}%</h5>
                      <!-- <span>users</span> -->
                    </div>
                  </li>
                  <li class="d-flex">
                    <i class="cc BTC me-3"></i>
                    <div class="flex-grow-1">
                      <h5 class="m-0">Net Commissions</h5>
                    </div>
                    <div class="text-end">
<h5>{{ claimable_amount.toFixed(1) }} $</h5>                      <span>{{ (claimable_amount*this.bank.ex_rate).toFixed(1) }}₹</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="col-xl-6 col-lg-8 col-xxl-8">
          <div class="card profile_chart">
            <!-- <div class="card-header py-0">
                <div class="duration-option">
                  <a
                    id="all"
                    @click.prevent="updateChart('0')"
                    :class="{
                      active: this.button === '0',
                    }"
                    >ALL</a
                  >
                  <a
                    @click.prevent="updateChart('1')"
                    class=""
                    :class="{
                      active: this.button === '1',
                    }"
                    >1M</a
                  >
                  <a
                    @click.prevent="updateChart('2')"
                    :class="{
                      active: this.button === '2',
                    }"
                    >6M</a
                  >
                  <a
                    @click.prevent="updateChart('3')"
                    :class="{
                      active: this.button === '3',
                    }"
                    >1Y</a
                  >
                  <a
                    @click.prevent="updateChart('4')"
                    :class="{
                      active: this.button === '4',
                    }"
                    class="d-none d-md-inline"
                    >YTD</a
                  >
                </div>
              </div> -->
            <div class="col-xl-6">
              <div class="">
                <div class="card-header">
                  <h4 class="card-title">
                    Invite details
                    <i
                      style="cursor: pointer"
                      class="fa fa-info-circle"
                      @click="download"
                    ></i>
                  </h4>
                 <button  @click="rewardClaim" class="btn btn-primary">
   Withdraw
  </button>
               
                </div>
                <div class="card-body balance-widget">
                  <ul class="list-unstyled">

                      <li class="d-flex">
                      <i class="cc BTC me-3"></i>
                      <div class="flex-grow-1">
                        <h5 class="m-0">Invite Link</h5>
                      </div>
                      <div class="text-end">
                        <span style="  overflow-wrap: anywhere;   /* allow break anywhere if needed */
  word-break: break-word;    /* fallback behavior for some browsers */
  hyphens: auto;    ">
                          {{ invite_link }}
                          <i
                            class="fa fa-copy"
                            @click="copyLink('invite_link')"
                            style="
                              margin-left: 5px;
                              font-size: 18px;
                              cursor: pointer;
                            "
                          ></i
                        ></span>
                      </div>
                    </li>
                            <li class="d-flex">
                    <i class="cc BTC me-3"></i>
                    <div class="flex-grow-1">
                      <h5 class="m-0">Total Refferal</h5>
                    </div>
                    <div class="text-end">
                      <h5>{{ refferal_users.length }}</h5>
                      <span>users</span>
                    </div>
                  </li>
                    <li class="d-flex">
                      <i class="cc BTC me-3"></i>
                      <div class="flex-grow-1">
                        <h5 class="m-0">Affiliate Partner ID</h5>
                      </div>
                      <div class="text-end">
                        <h5>
                          {{ code }}
                          <i
                            @click="copyLink('code')"
                            class="fa fa-copy"
                            style="
                              margin-left: 5px;
                              font-size: 18px;
                              cursor: pointer;
                            "
                          ></i>
                        </h5>
                      </div>
                    </li>

                  
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="container">
          <div class="card">
            <div class="card-header border-0 py-0">
              <h4 class="card-title">Refferal Users</h4>
            </div>
            <div class="card-body">
              <div class="transaction-table">
                <div class="table-responsive">
                  <table class="table mb-0 table-responsive-sm">
                    <tbody>
                      <tr
                        v-for="(transactionItem, index) in refferal_users"
                        :key="index"
                      >
                        <td>
                          {{ transactionItem.name }}
                        </td>

                        <td>
                          {{ transactionItem.email }}
                        </td>
                        <td>{{ transactionItem.main_balance }} $</td>
                        <td>
                          {{ transactionItem.created_at.substring(0, 10) }}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </DeshboardLayout>
</template>
  

  
<script>
import { useAuthUserStore } from "../../store/user";
import { transactionStore } from "../../store/transaction";
import axios from "axios";
import { Chart } from "chart.js/auto";
import { RouterLink } from "vue-router";

export default {
  data() {
    return {
      nextClaim: null,
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      countdownInterval: null,
      button: "0",
      authUser: [],
      bank: [],
      page: "deposit",
      code: "21323v23",
      invite_link:
        "https://dashboard.wimbledoninvestments.com/register?ref=4343434",
      amount: "",
      address: "Select",
      method: "Select",
      refferal_users: [],
      chart: null,
      earningsTiers: [
        { commission: 1.0, min_balance: 0, max_balance: 10000 }, // 1% upto 10 Lakh
        { commission: 1.25, min_balance: 10000, max_balance: 20000 }, // 1.25% 10L-20L
        { commission: 1.5, min_balance: 20000, max_balance: 30000 }, // 1.5% 20L-30L
        { commission: 1.75, min_balance: 30000, max_balance: 40000 }, // 1.75% 30L-40L
        { commission: 2.0, min_balance: 40000, max_balance: Infinity }, // 2% 40L+
      ],
    };
  },
  methods: {
    copyLink(payload) {
      if (payload == "invite_link") {
        navigator.clipboard.writeText(this.invite_link);
      } else {
        navigator.clipboard.writeText(this.code);
      }

      this.$notify({
        title: "",
        text: "Copied to clipboard!",
        type: "sucsess",
      });
    },

    download() {
      // ✅ Import the image from your assets folder
      const imgPath = new URL(
        "./../../assets/deshboard/img/partner.jfif",
        import.meta.url
      ).href;

      // ✅ Create a hidden link and trigger download
      const link = document.createElement("a");
      link.href = imgPath;
      link.download = "affiliate.jfif"; // rename as needed
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    },

    startCountdown() {
      this.countdownInterval = setInterval(() => {
        const now = new Date();
        const diff = this.nextClaim - now;

        if (diff <= 0) {
          this.days = 0;
          this.hours = 0;
          this.minutes = 0;
          this.seconds = 0;
          clearInterval(this.countdownInterval);
          return;
        }

        const totalSeconds = Math.floor(diff / 1000);
        this.days = Math.floor(totalSeconds / (3600 * 24));
        this.hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
        this.minutes = Math.floor((totalSeconds % 3600) / 60);
        this.seconds = totalSeconds % 60;
      }, 1000);
    },

    async rewardClaim(){
     
    this.$setLoading(true);

    try {
      const data = {
        amount: this.claimable_amount,
      };

      const response = await axios.post("/api/claim", data);

      // Success: update local user data if needed
      if (response.data.user) {
        this.authUser = response.data.user;
      }
       this.$notify({
              title: "message",
              text: response.data.message,
              type: "success",
            });
      // Optional: show toast
    } catch (error) {
      // Handle error message from API
      if (error.response && error.response.data && error.response.data.message) {
         this.$notify({
              title: "message",
              text: error.response.data.message,
              type: "error",
            });
      } else {
             this.$notify({
              title: "message",
              text: "Something went wrong!",
              type: "error",
            });
      }
    } finally {
      this.$setLoading(false);
    }
  } },

  computed: {
      canClaim() {
      if (!this.nextClaim) return false;
      return new Date() >= this.nextClaim;
    },
    sumBal() {
      // Ensure it's an array
      const users = Array.isArray(this.refferal_users)
        ? this.refferal_users
        : Object.values(this.refferal_users);

      // Sum all main_balance values
      const total = users.reduce((sum, user) => {
        return sum + Number(user.main_balance || 0);
      }, 0);

      return total;
    },
    commission() {
      const tier = this.earningsTiers.find(
        (t) => this.sumBal >= t.min_balance && this.sumBal < t.max_balance
      );

      return tier.commission;
    },
    claimable_amount() {
      
      return (this.sumBal / 100) * this.commission;
    },
  },
  beforeUnmount() {
    clearInterval(this.countdownInterval);
  },
  async created() {
    const userStore = useAuthUserStore();
    const authUser = userStore.authUser;

    if (authUser) {
      this.authUser = authUser;
    } else {
      // userStore.reSetAuthUser();
      this.authUser = await userStore.reSetAuthUser();
    }
    
      try {
        const response = await axios.get("/api/platform");

        this.bank = response.data.bank[0];
      } catch (error) {
        console.log(error);
      }

    if (this.authUser.role != 3) {
      this.$setLoading(false);

      this.$notify({
        title: "message",
        text: "You are not a Agent",
        type: "error",
      });

      // Change the authenticated value to false

      this.$router.push("/");
    }
    if (this.authUser.last_claim) {
      const lastClaim = new Date(this.authUser.last_claim);
      this.nextClaim = new Date(lastClaim);
      // this.nextClaim.setDate(this.nextClaim.getDate());

      this.startCountdown();
    }
    this.code = this.authUser.my_ref;

    this.invite_link =
      window.location.origin + "/register?ref=" + this.authUser.my_ref;

    try {
      const response = await axios.get("/api/ref", {
        params: { ref_code: this.authUser.my_ref },
      });
      this.refferal_users = response.data.users;
    } catch (error) {
      console.log(error.data);
    }

    this.$setLoading(false);
  },
};
</script>
<style>
canvas {
  width: 100%;
  height: 300px !important;
}
</style>