<template>
  <DeshboardLayout>
    <div class="page_title"></div>

    <div class="content-body">
      <div class="container-fluid">
        <div class="row">
          <div class="container">
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
                      <form
                        class="currency_validate"
                        @submit.prevent="depositNow"
                      >
                        <div class="mb-3">
                          <label class="me-sm-2">Payment Platform</label>
                          <div class="input-group mb-3">
                            <div class="input-group-prepend">
                              <label class="input-group-text"
                                ><i
                                  class="fa fa-credit-card"
                                  style="font-size: 38px"
                                ></i
                              ></label>
                            </div>

                            <select
                              class="form-control"
                              v-model="method"
                              required
                            >
                              <option selected disabled>Select</option>
                              <option
                                v-for="(item, index) in allPlatform"
                                :key="index"
                                :value="item.name"
                              >
                                {{ item.name }}
                              </option>
                              <option
                                v-for="(item, index) in bank"
                                :key="index"
                                :value="item.method_name"
                              >
                                {{ item.method_name }}
                              </option>
                            </select>
                          </div>
                        </div>

                        <div class="mb-3" v-if="allPlatform.some(p => p.name === method)">
                          <label class="me-sm-2">Select Network - (USDT)</label>
                          <div class="input-group mb-3">
                            <div class="input-group-prepend">
                              <label class="input-group-text"
                                ><i
                                  class="cc BTC-alt fa fa-network-wired"
                                  style="font-size: 38px"
                                ></i
                              ></label>
                            </div>
                            <select
                              class="form-control"
                              id="Account"
                              required
                              v-model="address"
                            >
                              <option selected disabled>Select</option>
                              <option
                                v-for="(net, index) in filteredNetworks"
                                :key="index"
                                :value="net.method"
                              >
                                {{ net.method }}
                              </option>
                            </select>
                          </div>
                        </div>
                        <div class="mb-3" v-if="!this.bank.some(p => p.method_name === method)">
                          <label class="me-sm-2"
                            >Deposit Amount (Min-10 USD)</label
                          >
                          <div class="input-group mb-1">
                            <div class="input-group-prepend">
                              <label class="input-group-text"
                                ><i
                                  class="cc BTC-alt fa fa-money"
                                  style="font-size: 38px"
                                ></i
                              ></label>
                            </div>
                            <input
                              required
                              type="number"
                              v-model="amount"
                              class="form-control"
                              placeholder="Enter Your Amount.(USD)"
                              min="10"
                            />
                            <br />
                          </div>
                          <div style="margin-left: 80px">
                            {{ convertedINR }}
                          </div>
                        </div>
                        <div class="mb-3" v-if="this.bank.some(p => p.method_name === method)">
                          <label class="me-sm-2"
                            >Deposit Amount (Min-{{
                              this.bank[0].ex_rate * 10
                            }}
                            INR)</label
                          >
                          <div class="input-group mb-1">
                            <div class="input-group-prepend">
                              <label class="input-group-text"
                                ><i
                                  class="cc BTC-alt fa fa-money"
                                  style="font-size: 38px"
                                ></i
                              ></label>
                            </div>
                            <input
                              required
                              type="number"
                              v-model="inr"
                              class="form-control"
                              placeholder="Enter Your Amount.(INR)"
                              :min="this.bank.ex_rate * 10"
                            />
                            <br />
                          </div>
                          <div style="margin-left: 80px">
                            {{ convertedUSD }}
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
                      <form
                        class="currency_validate"
                        @submit.prevent="withdrawNow"
                      >
                        <div v-if="!authUser.platform" class="mb-3">
                          <label class="me-sm-2">Payment Platform</label>
                          <div class="input-group mb-3">
                            <div class="input-group-prepend">
                              <label class="input-group-text"
                                ><i
                                  class="fa fa-credit-card"
                                  style="font-size: 38px"
                                ></i
                              ></label>
                            </div>

                            <select
                              class="form-control"
                              v-model="method"
                              required
                            >
                              <option selected disabled>Select</option>
                              <option
                                v-for="(item, index) in allPlatform"
                                :key="index"
                                :value="item.name"
                              >
                                {{ item.name }}
                              </option>
                            </select>
                          </div>
                        </div>

                        <div class="mb-3" v-if="!authUser.platform">
                          <label class="me-sm-2">Select Network - (USDT)</label>
                          <div class="input-group mb-3">
                            <div class="input-group-prepend">
                              <label class="input-group-text"
                                ><i
                                  class="cc BTC-alt fa fa-network-wired"
                                  style="font-size: 38px"
                                ></i
                              ></label>
                            </div>
                            <select
                              class="form-control"
                              id="Account"
                              required
                              v-model="address"
                            >
                              <option selected disabled>Select</option>
                              <option
                                v-for="(net, index) in filteredNetworks"
                                :key="index"
                                :value="net.method"
                              >
                                {{ net.method }}
                              </option>
                            </select>
                          </div>
                        </div>

                        <div v-if="authUser.platform" class="mb-3">
                          <label class="me-sm-2">Payment Platform</label>
                          <div class="input-group mb-3">
                            <div class="input-group-prepend">
                              <label class="input-group-text"
                                ><i
                                  class="fa fa-credit-card"
                                  style="font-size: 38px"
                                ></i
                              ></label>
                            </div>

                            <select class="form-control">
                              <option selected disabled>
                                {{ authUser.platform }}
                              </option>
                            </select>
                          </div>
                        </div>

                        <div
                          v-if="
                            authUser.platform &&   !this.bank.some(p => p.method_name === authUser.platform)
                          "
                          class="mb-3"
                        >
                          <label class="me-sm-2">Select Network - (USDT)</label>
                          <div class="input-group mb-3">
                            <div class="input-group-prepend">
                              <label class="input-group-text"
                                ><i
                                  class="cc BTC-alt fa fa-network-wired"
                                  style="font-size: 38px"
                                ></i
                              ></label>
                            </div>
                            <select class="form-control" id="Account">
                              <option selected disabled>
                                {{ authUser.network }}
                              </option>
                            </select>
                          </div>
                        </div>

                        <div class="mb-3" v-if="!this.bank.some(p => p.method_name === authUser.platform)">
                          <label class="me-sm-2"
                            >Withdraw Amount (Min-10 USD)</label
                          >
                          <div class="input-group mb-1">
                            <div class="input-group-prepend">
                              <label class="input-group-text"
                                ><i
                                  class="cc BTC-alt fa fa-money"
                                  style="font-size: 38px"
                                ></i
                              ></label>
                            </div>
                            <input
                              required
                              type="number"
                              v-model="amount"
                              class="form-control"
                              placeholder="Enter Your Amount.(USD)"
                              min="10"
                            />
                            <br />
                          </div>
                          <div style="margin-left: 80px">
                            {{ widCon }}
                          </div>
                        </div>
                        <div class="mb-3" v-if="this.bank.some(p => p.method_name === authUser.platform)">
                          <label class="me-sm-2"
                            >Withdraw Amount (Min-{{
                                   this.bank[0].ex_rate * 10
                            }}
                            INR)</label
                          >
                          <div class="input-group mb-1">
                            <div class="input-group-prepend">
                              <label class="input-group-text"
                                ><i
                                  class="cc BTC-alt fa fa-money"
                                  style="font-size: 38px"
                                ></i
                              ></label>
                            </div>
                            <input
                              required
                              type="number"
                              v-model="inr"
                              class="form-control"
                              placeholder="Enter Your Amount.(INR)"
                              :min="this.bank.ex_rate * 10"
                            />
                            <br />
                          </div>
                          <div style="margin-left: 80px">
                            {{ widCon }}
                          </div>
                        </div>

                        <!-- <div class="mb-3">
                          <label class="me-sm-2"> Withdraw Amount</label>
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
                          <div style="margin-left: 80px">
                            {{ widCon }}
                          </div>
                        </div> -->
                        <button
                          v-if="authUser.platform"
                          type="submit"
                          name="submit"
                          class="btn btn-danger btn-block"
                        >
                          Withdraw Now
                        </button>
                        <button
                          v-else
                          @click="setWid"
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
      allPlatform: [],
      allNetwork: [],

      page: "deposit",
      authUser: [],
      amount: "",
      bank: [],
      inr: "",
      address: "Select",
      method: "Select",
      dep_address: "",
      buttonText: "",
      buttonIcon: "fa fa-copy",
      widTrx: "",
      trxid: "",
    };
  },
  methods: {
    setWid() {
      this.$router.push("/account");

      // transactionStore===================================

      this.$notify({
        title: "message",
        text: "Before submitting a withdrawal request, please set up your withdrawal wallet.",
        type: "error",
      });
    },
    async copyToClipboard() {
      try {
        await navigator.clipboard.writeText(this.filteredAddress);
        this.buttonText = "Copied!";
        this.buttonIcon = "fa fa-check";

        // Reset button after 2 seconds
        setTimeout(() => {
          this.buttonText = "";
          this.buttonIcon = "fa fa-copy";
        }, 2000);
      } catch (err) {
        console.error("Failed to copy:", err);
      }
    },
    generateTRXId() {
      const prefix = "TRX";
      const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
      let trxId = prefix;

      for (let i = 0; i < 10; i++) {
        trxId += characters.charAt(
          Math.floor(Math.random() * characters.length)
        );
      }

      this.widTrx = trxId;
    },
    async depositNow() {
      this.$setLoading(true);

      const data = {
        status: "pending",
        method: this.method,
        type: "deposit",
        amount:  this.bank.some(p => p.method_name === this.method) ? this.inr / this.bank.find(b => b.method_name === this.method).ex_rate : this.amount,
        address: this.address,
        dep_address: this.filteredAddress,
        trxid: this.widTrx,
      };

      await axios
        .post("api/deposit", data)
        .then((response) => {
          this.$setLoading(false);
          // transactionStore===================================
          this.$router.push("/transaction");
          console.log(response.data);
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
        status: "pending",
        method: this.authUser.platform,
        type: "withdraw",
        
        amount: this.bank.some(p => p.method_name === this.authUser.platform) ? this.inr / this.bank.find(b => b.method_name === this.authUser.platform).ex_rate : this.amount,
        address: this.authUser.network,
        trxid: this.widTrx,
        dep_address: this.authUser.wallet,
      };

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
            console.log(error);

            this.$notify({
              title: "Error message",
              text: error.response.data.message,
              type: "error",
            });
          });
      }
    },
  },
  computed: {
    widCon() {
      if (this.bank.some(p => p.method_name === this.authUser.platform)) {
        return `₹${this.inr} INR = ${(this.inr / this.bank['0'].ex_rate).toFixed(
          2
        )} USD`;
      } else {
        return `${this.amount} USD = ₹${(
          this.amount *  this.bank[0]?.ex_rate || 0
        ).toFixed(2)} INR`;
      }
    },
    convertedINR() {
      // Find the matching bank object based on the selected method
      const rate = this.bank[0]?.ex_rate || 1;
  // Return the formatted string
  return `${this.amount} USD = ₹${(this.amount * rate).toFixed(2)} INR`;


    },
    convertedUSD() {


    const match = this.bank.find(b => b.method_name === this.method);
  
  const rate = match ? match.ex_rate : 1;


      return `₹${this.inr} INR = ${(this.inr / rate).toFixed(
        2
      )} USD`;
      



      
        },
    filteredNetworks() {
      // Find the selected platform and return its networks
      const platform = this.allPlatform.find((p) => p.name == this.method);

      return platform ? platform.network : [];
    },
    filteredAddress() {
      // Find the selected platform by name
      const platform = this.allPlatform.find(
        (item) => item.name === this.method
      );

      // Ensure platform and network exist before searching for the address
      if (!platform || !Array.isArray(platform.network)) return null;

      // Find the matching network based on method
      const network = platform.network.find(
        (net) => net.method === this.address
      );

      // Return only the wallet_address or null if not found
      return network ? network.wallet_address : null;
    },
  },

  async created() {
    if (isAuthenticated() == true) {
      // auth user data +++++++++++++++++++++++++++++

      const userStore = useAuthUserStore();
      const authUser = userStore.authUser;

      try {
        const response = await axios.get("/api/platform");

        this.allPlatform = response.data.platform;
        this.bank = response.data.bank;
      } catch (error) {
        console.log(error);
      }
      this.generateTRXId();
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