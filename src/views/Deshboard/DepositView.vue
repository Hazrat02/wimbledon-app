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
                            </select>
                          </div>
                        </div>

                        <div class="mb-3">
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

                        <div class="mb-3">
                          <label class="me-sm-2"> Deposit Amount</label>
                          <div class="input-group">
                            <input
                              required
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
                        <div class="mb-3">
                          <label class="me-sm-2">TRXID</label>
                          <div class="input-group">
                            <input
                              required
                              type="text"
                              v-model="trxid"
                              class="form-control"
                              placeholder="Enter Your TRXID."
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
                      <form
                        class="currency_validate"
                        @submit.prevent="withdrawNow"
                      >
                        <div  v-if="!authUser.platform" class="mb-3">
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

                        <div class="mb-3"  v-if="!authUser.platform">
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

                            <select
                              class="form-control"
                           
                            >
                              <option selected disabled>{{ authUser.platform }}</option>
                              
                            </select>
                          </div>
                        </div>

                        <div v-if="authUser.platform" class="mb-3">
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
                             
                            >
                              <option selected disabled>{{ authUser.network }}</option>
                        
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
                        <button  v-if="authUser.platform"
                          type="submit"
                          name="submit"
                          class="btn btn-danger btn-block"
                        >
                          Withdraw Now
                        </button>
                        <button v-else
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
            <!-- <p class="p-4">
              Note: Always double-check the wallet address before proceeding
              with any transaction. Sending funds to the wrong wallet is
              irreversible, and lost funds cannot be recovered. Ensure accuracy
              to avoid financial loss.
            </p> -->
          </div>
          <div class="col-xl-7 col-lg-7 col-md-12">
            <div class="card">
              <div class="card-body">
                <div class="buyer-seller">
                  <div class="d-flex justify-content-between">
                    <div class="buyer-info">
                      <div class="d-flex align-items-center">
                        <img
                          style="border-radius: 10px"
                          class="me-3"
                          src="https://img.freepik.com/premium-vector/wallet-icon-outline-wallet-vector-icon-web-design-isolated-white-background_775815-285.jpg?w=740"
                          alt=""
                          width="50"
                        />
                        <div class="flex-grow-1">
                          <h4>Balance</h4>
                          <a>{{ authUser.main_balance }} $</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="table-responsive">
                    <table class="table">
                      <tbody v-if="this.page == 'deposit'">
                        <tr>
                          <td>
                            <span class="text-primary"
                              >You are {{ this.page }}ing</span
                            >
                          </td>
                          <td>
                            <span class="text-primary"
                              >{{ Number(this.amount) + 0 }} USDT</span
                            >
                          </td>
                        </tr>
                        <tr>
                          <td>Platform</td>
                          <td>{{ this.method }}</td>
                        </tr>

                        <tr>
                          <td>Network</td>
                          <td>{{ this.address }}</td>
                        </tr>
                        <tr >
                          <td>Deposit Address</td>
                          <td   v-if="filteredAddress">
                            {{ filteredAddress }}
                            <i
                              style="color: white"
                            
                              :class="buttonIcon"
                              @click="copyToClipboard"
                            >
                              {{ buttonText }}</i
                            >
                          </td>
                          <td   v-else>
                            Please select platform and network
                          </td>
                        </tr>

                        <tr>
                          <td></td>
                          <td>
                            <div class="text-danger">
                              If you want to deposit USDT, copy the deposit
                              address above and proceed to your selected
                              platform. Complete the transaction using your
                              chosen network, then copy the Transaction ID
                              (TXID) and submit it here.
                            </div>
                          </td>
                        </tr>
                      </tbody>
                      <tbody v-else>
                        <tr>
                          <td>
                            <span class="text-primary"
                              >You are {{ this.page }}ing</span
                            >
                          </td>
                          <td>
                            <span class="text-primary"
                              >{{ Number(this.amount) + 0 }} USDT</span
                            >
                          </td>
                        </tr>
                        <tr>
                          <td>Platform</td>
                          <td v-if="authUser.platform">{{ authUser.platform }}</td>
                          <td v-else>Not Set</td>
                        </tr>

                        <tr>
                          <td>Network</td>
                          <td v-if="authUser.platform">{{ authUser.network }}</td>
                          <td v-else>Not Set</td>
                        </tr>
                        <tr >
                          <td>Withdraw Address</td>
               
                            <td v-if="authUser.platform">{{ authUser.wallet }}</td>
                            <td v-else>Not Set</td>
                          
                        </tr>

                        <tr>
                          <td>Note</td>
                          <td>
                            <div class="text-danger">
                              If you want to withdraw USDT, please set up your withdrawal wallet in the profile section. Ensure that you have selected the correct network and address. Our system will automatically send USDT to the specified network address.
                            </div>
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
      // platform: "Select Platform",
      // network: "Select",
      // method: "Select",
      page: "deposit",
      authUser: [],
      amount: "",
      address: "Select",
      method: "Select",
      buttonText: "",
      buttonIcon: "fa fa-copy",
      widTrx:'',
      trxid:'',
    };
  },
  methods: {

    setWid(){
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
        trxId += characters.charAt(Math.floor(Math.random() * characters.length));
      }

      this.widTrx = trxId;
    },
    async depositNow() {
      this.$setLoading(true);

      const data = {
        status: "pending",
        method: this.method,
        type: "deposit",
        amount: this.amount,
        address: this.address,
        trxid: this.trxid,
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
        status: "pending",
        method: this.authUser.platform,
        type: "withdraw",
        amount: this.amount,
        address: this.authUser.network,
        trxid: this.widTrx,
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

        this.allPlatform = response.data;
      } catch (error) {
        console.log(error);
      }
      this.generateTRXId()
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