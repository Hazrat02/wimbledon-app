<template>
  <DeshboardLayout>
    <div class="page_title"></div>

    <div class="content-body">
      <div class="container-fluid">
        <div class="row">
          <div class="col-xl-5 col-lg-5 col-md-12">
            <div class="card">
              <div class="card-body">
                <div class="buy-sell-widget">
                  <ul class="nav nav-tabs">
                    <li class="nav-item">
                      <button
                        class="nav-link"
                        @click="page = 'deposit'"
                        :class="{ active: page === 'deposit' }"
                      >
                        Deposit
                      </button>
                    </li>
                    <li class="nav-item">
                      <button
                        class="nav-link"
                        :class="{ active: page === 'withdraw' }"
                        @click="page = 'withdraw'"
                      >
                        Withdraw
                      </button>
                    </li>
                  </ul>
                  <div class="tab-content tab-content-default">
                    <div
                      class="tab-pane fade"
                      :class="{ 'active show': page === 'deposit' }"
                    >
                      <form class="currency_validate"  @submit.prevent="depositNow">
                        <div class="mb-3">
                          <label class="me-sm-2">Account Category</label>
                          <div class="input-group mb-3">
                            <div class="input-group-prepend">
                              <label class="input-group-text"
                                ><i class="cc BTC-alt fa fa-address-card" style="font-size: 38px;"></i
                              ></label>
                            </div>
                            <select
                              class="form-control"
                              id="Account"
                              required
                              v-model="address"
                            >
                              <option selected disabled>Select</option>
                              <option value="Wallet">
                                Wallet Account (${{ authUser.main_balance }})
                              </option>
                              <option value="Live">
                                Live Account (${{ authUser.live_balance }})
                              </option>
                            </select>
                          </div>
                        </div>

                        <div class="mb-3">
                          <label class="me-sm-2">Payment Method</label>
                          <div class="input-group mb-3">
                            <div class="input-group-prepend">
                              <label class="input-group-text"
                                ><i class="fa fa-credit-card" style="font-size: 38px;"></i
                              ></label>
                            </div>
                            <select
                  class="form-control"
                
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
                        </div>

                        <div class="mb-3">
                          <label class="me-sm-2"> Deposit Amount</label>
                          <div class="input-group">
                            <input
                              type="number"
                             v-model="amount"
                              class="form-control"
                              placeholder="Enter Your Amount."
                            />
                            <input
                              type="text"
                              name="usd_amount"
                              class="form-control"
                              placeholder="Min-10 USD"
                              disabled
                            />
                          </div>
                         
                        </div>
                        <button
                          type="submit"
                          name="submit"
                          class="btn btn-success btn-block"
                        >
                          Deposit Now
                        </button>
                      </form>
                    </div>
                    <div
                      class="tab-pane fade"
                      :class="{ 'active show': page === 'withdraw' }"
                    >
                    <form class="currency_validate"  @submit.prevent="withdrawNow">
                        <div class="mb-3">
                          <label class="me-sm-2">Account Category</label>
                          <div class="input-group mb-3">
                            <div class="input-group-prepend">
                              <label class="input-group-text"
                                ><i class="cc BTC-alt fa fa-address-card" style="font-size: 38px;"></i
                              ></label>
                            </div>
                            <select
                              class="form-control"
                              id="Account"
                              required
                              v-model="address"
                            >
                              <option selected disabled>Select</option>
                              <option value="Wallet">
                                Wallet Account (${{ authUser.main_balance }})
                              </option>
                              <option value="Live">
                                Live Account (${{ authUser.live_balance }})
                              </option>
                            </select>
                          </div>
                        </div>

                        <div class="mb-3">
                          <label class="me-sm-2">Payment Method</label>
                          <div class="input-group mb-3">
                            <div class="input-group-prepend">
                              <label class="input-group-text"
                                ><i class="fa fa-credit-card" style="font-size: 38px;"></i
                              ></label>
                            </div>
                            <select
                  class="form-control"
                
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
                        </div>

                        <div class="mb-3">
                          <label class="me-sm-2"> Deposit Amount</label>
                          <div class="input-group">
                            <input
                              type="number"
                             v-model="amount"
                              class="form-control"
                              placeholder="Enter Your Amount."
                            />
                            <input
                              type="text"
                              name="usd_amount"
                              class="form-control"
                              placeholder="Min-10 USD"
                              disabled
                            />
                          </div>
                         
                        </div>
                        <button
                          type="submit"
                          name="submit"
                          class="btn btn-danger btn-block"
                        >
                          Withdraw Now
                        </button>
                      </form>
                 
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p class="p-4">
              Note: Always double-check the wallet address before proceeding with any transaction. Sending funds to the wrong wallet is irreversible, and lost funds cannot be recovered. Ensure accuracy to avoid financial loss.
            </p>
          </div>
          <div class="col-xl-7 col-lg-7 col-md-12">
            <div class="card">
              <div class="card-body">
                <div class="buyer-seller">
                  <div class="d-flex justify-content-between mb-3">
                    <div class="buyer-info">
                      <div class="d-flex align-items-center">
                        <img
                        style="border-radius: 10px;"
                          class="me-3"
                          src="https://img.freepik.com/premium-vector/wallet-icon-outline-wallet-vector-icon-web-design-isolated-white-background_775815-285.jpg?w=740"
                          alt=""
                          width="50"
                        />
                        <div class="flex-grow-1">
                          <h4>Balance</h4>
                          <h5>Main Wallet</h5>
                          <a >{{ authUser.main_balance }} $</a>
                        </div>
                      </div>
                    </div>
                    <div class="seller-info text-end">
                      <div class="d-flex align-items-center">
                        <div class="flex-grow-1">
                          <h4>Balance</h4>
                          <h5>Live Wallet</h5>
                          <a>{{authUser.live_balance}} $</a>
                        </div>
                        <img style="border-radius: 10px;"
                          class="ms-3"
                          src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRr1UFDxfwDlcZ7nQdOhOc8lz4IrfVwTAN7gcigohmGr_kqrksw"
                          alt=""
                          width="50"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="table-responsive">
                    <table class="table">
                      <tbody>
                        <tr>
                          <td>
                            <span class="text-primary">You are {{this.page}}ing</span>
                          </td>
                          <td><span class="text-primary">{{ Number(this.amount) + 0 }} USC</span></td>
                        </tr>
                        <tr>
                          <td>Payment Method</td>
                          <td>{{this.method}}</td>
                        </tr>
                       
                        <tr>
                          <td>Fee</td>
                          <td>$0.00 USD</td>
                        </tr>
                     
                        <tr>
                          <td>Vat</td>
                          <td>
                            <div class="text-danger">$0.00 USD</div>
                          </td>
                        </tr>
                        <tr>
                          <td>Total</td>
                          <td>${{ Number(this.amount) + 0 }} USD</td>
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
    </div>

    <!-- <div class="bg-dash-dark-2 py-4 mb-4">
        <div class="container-fluid">
          <h2 class="mb-0">Deposit Funds</h2>
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
            <form @submit.prevent="depositNow" class="row">
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
                  <option value="Live">
                    Live Account (${{ authUser.live_balance }})
                  </option>
                </select>
              </div>
              <div class="mb-3 col-md-12 col-lg-6">
                <label class="form-label" for="Amount">Deposit Amount</label>
                <div class="input-group">
                  <div class="input-group-text">$</div>
                  <input
                    required
                    v-model="amount"
                    class="form-control"
                    id="Amount"
                    type="text"
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
                  Deposit Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </div> -->
  </DeshboardLayout>
</template>
  
<script>
import { useAuthUserStore } from "../../store/user";
import isAuthenticated from "./../../midleware/auth";
import { transactionStore } from "./../../store/transaction";

import axios from "axios";
export default {
  data() {
    return {
      page: "deposit",
      authUser: [],
      amount: "",
      address: "Select",
      method: "Select",
    };
  },
  methods: {
    generateTRXId() {
    return "TRX-" + Math.floor(Math.random() * 1000000);
  },
    async depositNow() {
      this.$setLoading(true);

      const data = {
        status: "pending",
        method: this.method,
        type: "deposit",
        amount: this.amount,
        address: this.address,
        trx: this.generateTRXId(),
      };

      await axios
        .post("api/deposit", data)
        .then((response) => {
          this.$setLoading(false);
          // transactionStore===================================
          this.$router.push("/transaction");

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
    },
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

<style>
/* .form-control{
  background-color: black !important;
} */
</style>