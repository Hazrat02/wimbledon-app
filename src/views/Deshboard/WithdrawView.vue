<template>
  <div>
    <DeshboardLayout>
      <div class="bg-dash-dark-2 py-4 mb-4">
        <div class="container-fluid">
          <h1 class=" mb-0">Withdraw Funds</h1>
        </div>
      </div>
      <div class="container-fluid pt-4 px-4">
        <div class="row g-4">
          <div class="col-sm-6 col-xl-6">
            <div
              class="bg-secondary rounded d-flex align-items-center justify-content-between p-4"
            >
              <i class="fa fa-chart-line fa-3x text-primary"></i>
              <div class="ms-3">
                <p class="mb-2">Wallet Account Balance</p>
                <h2 class="mb-0">${{ authUser.main_balance }}</h2>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-xl-6">
            <div
              class="bg-secondary rounded d-flex align-items-center justify-content-between p-4"
            >
              <i class="fa fa-chart-bar fa-3x text-primary"></i>
              <div class="ms-3">
                <p class="mb-2">Live Account Balance</p>
                <h2 class="mb-0">${{ authUser.live_balance }}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
     
      <div class="container-fluid pt-4 px-4 mb-5">
        <div class="">
          <div class="bg-secondary rounded h-100 p-4">
            <h3 class="mb-4">Deposit Now</h3>
            <form  @submit.prevent="withdrawNow" class="row">
              <div class="mb-3 col-md-12 col-lg-6">
                <label for="exampleInputEmail1" class="form-label"
                  >Account Category</label
                >

                <select
                  class="form-select"
                  id="Account"
                          required
                          v-model="address"
                >
                <option selected disabled>Select</option>
                          <option value="Wallet">
                            Wallet Account (${{ authUser.main_balance }})
                          </option>
                          <option value="live">
                            Live Account (${{ authUser.live_balance }})
                          </option>
                </select>
              </div>
              <div class="mb-3 col-md-12 col-lg-6">
                <label class="form-label" for="Amount">Withdrawals Amount</label>
                <div class="input-group">
                  <div class="input-group-text">$</div>
                  <input
                  required
                            v-model="amount"
                            class="form-control"
                            id="Amount"
                            type="number"
                            placeholder="Min 10"
                  />
                </div>
              </div>
              <div class="col-lg-6">
                <label class="" for="inlineFormSelectPref"
                  >Payment Method</label
                >
                <select
                  class="form-select"
                  id="inlineFormSelectPref"
                  v-model="method"
                  required
                >
                <option selected disabled>Select</option>
                          <option value="btc">Bitcoin</option>
                          <option value="bnb">BNB</option>
                          <option value="ltc">Lite Coin</option>
                          <option value="Trust Wallet">Trust Wallet</option>
                          <option value="Bit Pay">Bit Pay</option>
                </select>
              </div>
              <div class="mt-4">
                <button class="btn btn-success" type="submit">
                  Withdraw Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    
    </DeshboardLayout>
  </div>
</template>
  
<script>
import { useAuthUserStore } from "../../store/user";
import isAuthenticated from "./../../midleware/auth";
import { transactionStore } from "./../../store/transaction";

import axios from "axios";
export default {
  data() {
    return {
      authUser: [],
      amount: "",
      address: "Select",
      method: "Select",
    };
  },
  methods: {
    async withdrawNow() {
      this.$setLoading(true);

      const data = {
        status:'pending',
        method: this.method,
        type: "withdraw",
        amount: this.amount,
        address: this.address,
      };

      if (this.address === "Wallet" || this.address === "wallet") {
        if (this.amount > this.authUser.main_balance) {
          this.$setLoading(false);
          this.$notify({
            title: "Message",
            text: `Your balance is too low. Current balance: ${this.authUser.main_balance} $`,
            type: "error",
          });
          this.$setLoading(false);
        } else {
          await axios
            .post("api/deposit", data)
            .then((response) => {
              this.$setLoading(false);
              this.authUser.main_balance =
                this.authUser.main_balance - this.amount;
              this.$router.push("/transaction");

              // transactionStore===================================

              this.$notify({
                title: "message",
                text: response.data.message,
                type: "success",
              });
              const getTransaction = transactionStore();

              getTransaction.addTransaction(response.data);
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
        }
      } else {
        if (this.amount > this.authUser.live_balance) {
          this.$setLoading(false);
          this.$notify({
            title: "message",
            text: `Your balance is too low. Current balance: ${this.authUser.live_balance} $`,
            type: "error",
          });
        } else {
          await axios
            .post("api/deposit", data)
            .then((response) => {
              this.$setLoading(false);
              this.authUser.live_balance=this.authUser.live_balance - this.amount;
                

              this.$router.push("/transaction");

              // transactionStore===================================

              this.$notify({
                title: "message",
                text: response.data.message,
                type: "success",
              });
              const getTransaction = transactionStore();

              getTransaction.addTransaction(response.data);
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
        }
      }
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

    this.$setLoading(false);
  },
};
</script>
  
