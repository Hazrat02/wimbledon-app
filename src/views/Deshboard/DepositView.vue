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
                  <option value="BINANCE">BINANCE</option>
                  <option value="MUDREX">MUDREX</option>
                  <option value="TRUST WALLET">TRUST WALLET</option>
                  <option value="BIT PAY">BIT PAY</option>
           
                </select>
                            
                          </div>
                        </div>

                        <div class="mb-3">
                          <label class="me-sm-2">Select Network - (USDT)</label>
                          <div class="input-group mb-3">
                            <div class="input-group-prepend">
                              <label class="input-group-text"
                                ><i class="cc BTC-alt fa fa-network-wired" style="font-size: 38px;"></i
                              ></label>
                            </div>
                            <select
                              class="form-control"
                              id="Account"
                              required
                              v-model="address"
                            >
                              <option selected disabled>Select</option>
                              <option value="trc-20">
                               TRON (TRC-20)
                              </option>
                              <option value="BNB Smart Chain (BEP20)">
                               BNB Smart Chain (BEP20)
                              </option>
                              <option value="Ethereum (ERC-20)">
                               Ethereum (ERC-20)
                              </option>
                              <option value="Solana">
                                Solana
                              </option>
                              <option value="The Open Network (TON)">
                                The Open Network (TON)
                              </option>
                              <option value="Optimism">
                                Optimism
                              </option>
                            </select>
                          </div>
                        </div>


                        <div class="mb-3">
                          <label class="me-sm-2"> Deposit Amount</label>
                          <div class="input-group">
                            <input required
                              type="number"
                             v-model="amount"
                              class="form-control"
                              placeholder="Enter Your Amount."
                              min="10"
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
                  <option value="BINANCE">BINANCE</option>
                  <option value="MUDREX">MUDREX</option>
                  <option value="TRUST WALLET">TRUST WALLET</option>
                  <option value="BIT PAY">BIT PAY</option>
           
                </select>
                            
                          </div>
                        </div>

                        <div class="mb-3">
                          <label class="me-sm-2">Select Network - (USDT)</label>
                          <div class="input-group mb-3">
                            <div class="input-group-prepend">
                              <label class="input-group-text"
                                ><i class="cc BTC-alt fa fa-network-wired" style="font-size: 38px;"></i
                              ></label>
                            </div>
                            <select
                              class="form-control"
                              id="Account"
                              required
                              v-model="address"
                            >
                              <option selected disabled>Select</option>
                              <option value="trc-20">
                               TRON (TRC-20)
                              </option>
                              <option value="BNB Smart Chain (BEP20)">
                               BNB Smart Chain (BEP20)
                              </option>
                              <option value="Ethereum (ERC-20)">
                               Ethereum (ERC-20)
                              </option>
                              <option value="Solana">
                                Solana
                              </option>
                              <option value="The Open Network (TON)">
                                The Open Network (TON)
                              </option>
                              <option value="Optimism">
                                Optimism
                              </option>
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
                              min="10"
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
                          <a >{{ authUser.main_balance }} $</a>
                        </div>
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