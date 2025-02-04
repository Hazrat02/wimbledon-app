<template>
  <div>
    <DeshboardLayout>
      <div class="bg-dash-dark-2 py-4 mb-4 d-flex justify-content-between px-3">
        <div class="">
          <h3 class=" mb-0">Upload Payment Details</h3>
        </div>
        <div class="">
          <button
            v-if="authPayment"
            class="btn btn-outline-success"
            data-bs-toggle="modal"
            data-bs-target="#myModal"
          >
            Edit
          </button>
        </div>
      </div>
      <!-- Breadcrumb-->
      <section class="pt-0" v-if="!authPayment">
        <div class="container-fluid">
          <div class="row gy-4">
            <div class="col-lg-12">
              <div class="col-lg-12">
                <div class="card bg-secondary">
                  <div class="card-header"></div>
                  <div class="card-body pt-0">
                    <form
                      class="row g-3 align-items-center"
                      @submit.prevent="payment"
                      enctype="multipart/form-data"
                    >
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
                          <option value="bank">Bankwire</option>
                          <option value="crypto">Crypto Currency</option>
                        </select>
                      </div>
                      <div class="col-lg-6" v-if="method == 'crypto'">
                        <label class="" for="Amount">Wallet Address</label>
                        <div class="input-group">
                          <input
                            required
                            v-model="wallet_address"
                            class="form-control"
                            id="Amount"
                            type="text"
                            placeholder="1x23dfsdf4re43"
                          />
                        </div>
                      </div>
                      <div class="col-lg-6" v-if="method == 'crypto'">
                        <label class="" for="Amount">Currency</label>
                        <div class="input-group">
                          <input
                            style="color: black"
                            disabled
                            class="form-control"
                            id="Amount"
                            type="text"
                            value="Usdt"
                          />
                        </div>
                      </div>
                      <div class="col-lg-6" v-if="method == 'crypto'">
                        <label class="" for="Amount"
                          >Wallet Tag Number for XRP and BNB currency</label
                        >
                        <div class="input-group">
                          <input
                            class="form-control"
                            id="Amount"
                            type="text"
                            v-model="tag"
                            placeholder="Wallet Tag Number for XRP and BNB currency"
                          />
                        </div>
                      </div>
                      <div class="col-lg-6" v-if="method == 'crypto'">
                        <label class="" for="Amount">Address QR</label>
                        <div class="input-group">
                          <input
                            style="color: black"
                            @change="qrimage"
                            class="form-control"
                            id="Amount"
                            type="file"
                          />
                        </div>
                      </div>
                      <div class="col-lg-6" v-if="method == 'bank'">
                        <label class="" for="Amount">Bank Holder Name</label>
                        <div class="input-group">
                          <input
                            class="form-control"
                            id="Amount"
                            type="text"
                            v-model="holder"
                            placeholder="Bank Holder Name"
                          />
                        </div>
                      </div>
                      <div class="col-lg-6" v-if="method == 'bank'">
                        <label class="" for="Amount">Account Number</label>
                        <div class="input-group">
                          <input
                            class="form-control"
                            id="Amount"
                            type="text"
                            v-model="bank_address"
                            placeholder="Account Number"
                          />
                        </div>
                      </div>
                      <div class="col-lg-6" v-if="method == 'bank'">
                        <label class="" for="Amount">Recipient Bank Name</label>
                        <div class="input-group">
                          <input
                            class="form-control"
                            id="Amount"
                            type="text"
                            v-model="bank_name"
                            placeholder="Recipient Bank Name"
                          />
                        </div>
                      </div>
                      <div class="col-lg-6" v-if="method == 'bank'">
                        <label class="" for="Amount">Recipient Bank IFSC</label>
                        <div class="input-group">
                          <input
                            placeholder="Recipient Bank IFSC"
                            class="form-control"
                            id="Amount"
                            type="text"
                            v-model="ifsc"
                          />
                        </div>
                      </div>
                      <div class="col-lg-6" v-if="method == 'bank'">
                        <label class="" for="Amount">Document</label>
                        <div class="input-group">
                          <input
                            @change="docimage"
                            class="form-control"
                            id="Amount"
                            type="file"
                          />
                        </div>
                      </div>
                      <div class="">
                        <button class="btn btn-primary" type="submit">
                          Submit
                        </button>
                      </div>
                    </form>
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
              <h5 class="modal-title" id="myModalLabel">Update Payment</h5>
              <button
                class="btn-close btn-close-white"
                type="button"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form
                class="row g-3 align-items-center"
                @submit.prevent="paymentEdit"
                enctype="multipart/form-data"
              >
                <div class="">
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
                    <option value="bank">Bankwire</option>
                    <option value="crypto">Crypto Currency</option>
                  </select>
                </div>
                <div class="" v-if="method == 'crypto'">
                  <label class="" for="Amount">Wallet Address</label>
                  <div class="input-group">
                    <input
                      required
                      v-model="wallet_address"
                      class="form-control"
                      id="Amount"
                      type="text"
                      placeholder="1x23dfsdf4re43"
                    />
                  </div>
                </div>
                <div class="" v-if="method == 'crypto'">
                  <label class="" for="Amount">Currency</label>
                  <div class="input-group">
                    <input
                      style="color: black"
                      disabled
                      class="form-control"
                      id="Amount"
                      type="text"
                      value="Usdt"
                    />
                  </div>
                </div>
                <div class="" v-if="method == 'crypto'">
                  <label class="" for="Amount"
                    >Wallet Tag Number for XRP and BNB currency</label
                  >
                  <div class="input-group">
                    <input
                      class="form-control"
                      id="Amount"
                      type="text"
                      v-model="tag"
                      placeholder="Wallet Tag Number for XRP and BNB currency"
                    />
                  </div>
                </div>
                <div class="" v-if="method == 'crypto'">
                  <label class="" for="Amount">Address QR</label>
                  <div class="input-group">
                    <input
                      style="color: black"
                      @change="qrimage"
                      class="form-control"
                      id="Amount"
                      type="file"
                    />
                  </div>
                </div>
                <div class="" v-if="method == 'bank'">
                  <label class="" for="Amount">Bank Holder Name</label>
                  <div class="input-group">
                    <input
                      class="form-control"
                      id="Amount"
                      type="text"
                      v-model="holder"
                      placeholder="Bank Holder Name"
                    />
                  </div>
                </div>
                <div class="" v-if="method == 'bank'">
                  <label class="" for="Amount">Account Number</label>
                  <div class="input-group">
                    <input
                      class="form-control"
                      id="Amount"
                      type="text"
                      v-model="bank_address"
                      placeholder="Account Number"
                    />
                  </div>
                </div>
                <div class="" v-if="method == 'bank'">
                  <label class="" for="Amount">Recipient Bank Name</label>
                  <div class="input-group">
                    <input
                      class="form-control"
                      id="Amount"
                      type="text"
                      v-model="bank_name"
                      placeholder="Recipient Bank Name"
                    />
                  </div>
                </div>
                <div class="" v-if="method == 'bank'">
                  <label class="" for="Amount">Recipient Bank IFSC</label>
                  <div class="input-group">
                    <input
                      placeholder="Recipient Bank IFSC"
                      class="form-control"
                      id="Amount"
                      type="text"
                      v-model="ifsc"
                    />
                  </div>
                </div>
                <div class="" v-if="method == 'bank'">
                  <label class="" for="Amount">Document</label>
                  <div class="input-group">
                    <input
                      @change="docimage"
                      class="form-control"
                      id="Amount"
                      type="file"
                    />
                  </div>
                </div>
                <div class="">
                  <button class="btn btn-primary" type="submit">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      
      <section class="container" v-if="authPayment">
        <div class="card bg-secondary p-4">
          <div
            class="card-body row justify-content-evenly"
            v-if="authPayment.method == 'bank'"
          >
            <div class="col-lg-8">
              <div class="row">
                <div class="col-sm-3">
                  <p class="mb-0">Payment Method</p>
                </div>
                <div class="col-sm-9">
                  <p class="text-muted mb-0">{{ authPayment.method }}</p>
                </div>
              </div>
              <hr />
              <div class="row">
                <div class="col-sm-3">
                  <p class="mb-0">Bank Holder Name</p>
                </div>
                <div class="col-sm-9">
                  <p class="text-muted mb-0">{{ authPayment.holder }}</p>
                </div>
              </div>
              <hr />
              <div class="row">
                <div class="col-sm-3">
                  <p class="mb-0">Account Number</p>
                </div>
                <div class="col-sm-9">
                  <p class="text-muted mb-0">{{ authPayment.bank_address }}</p>
                </div>
              </div>
              <hr />
              <div class="row">
                <div class="col-sm-3">
                  <p class="mb-0">Recipient Bank Name</p>
                </div>
                <div class="col-sm-9">
                  <p class="text-muted mb-0">{{ authPayment.bank_name }}</p>
                </div>
              </div>
              <hr />
              <div class="row">
                <div class="col-sm-3">
                  <p class="mb-0">Recipient Bank IFSC</p>
                </div>
                <div class="col-sm-9">
                  <p class="text-muted mb-0">{{ authPayment.ifsc }}</p>
                </div>
              </div>
            </div>
            <div class="col-lg-4" style="object-fit: cover">
              <img
                v-if="authPayment.doc"
                class="img-fluid"
                :src="authPayment.doc"
                alt=""
              />
              <img
                v-else
                class="img-fluid"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW_80vVH0RghGLTxWZjz0EYc9JanOzT-m0wEUvdU0caY6bKU5n8oF5hbOHZlU9GVUM1dQ&usqp=CAU"
                alt=""
              />
            </div>
          </div>
          <div
            class="card-body row justify-content-evenly"
            v-if="authPayment.method == 'crypto'"
          >
            <div class="col-lg-8">
              <div class="row">
                <div class="col-sm-3">
                  <p class="mb-0">Payment Method</p>
                </div>
                <div class="col-sm-9">
                  <p class="text-muted mb-0">{{ authPayment.method }}</p>
                </div>
              </div>
              <hr />
              <div class="row">
                <div class="col-sm-3">
                  <p class="mb-0">Wallet Address:</p>
      
                </div>
                <div class="col-sm-9">
                  <p class="text-muted mb-0">{{ authPayment.wallet_address }}</p>
                </div>
              </div>
              <hr />
              <div class="row">
                <div class="col-sm-3">
                  <p class="mb-0">Currency:</p>

    
                </div>
                <div class="col-sm-9">
                  <p class="text-muted mb-0">USDT</p>
                </div>
              </div>
              <hr />
              <div class="row">
                <div class="col-sm-3">
                  <p class="mb-0">Wallet Tag Number:</p>
                </div>
                <div class="col-sm-9">
                  <p class="text-muted mb-0">{{ authPayment.tag }}</p>
                </div>
              </div>
             
            </div>
            <div class="col-lg-4" style="object-fit: cover">
              <img
                                  v-if="authPayment.qr"
                                  class="img-fluid"
                                  :src="authPayment.qr"
                                  alt=""
                                />
                                <img
                                  v-else
                                  class="img-fluid"
                                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW_80vVH0RghGLTxWZjz0EYc9JanOzT-m0wEUvdU0caY6bKU5n8oF5hbOHZlU9GVUM1dQ&usqp=CAU"
                                  alt=""
                                />
            </div>
          </div>
        </div>

        
      </section>
    </DeshboardLayout>
  </div>
</template>
    
  <script>
import axios from "axios";
// import { useAuthUserStore } from "../../store/user";
// import { transactionStore } from "../../store/transaction";

export default {
  data() {
    return {
      wallet_address: "",
      bank_address: "",
      tag: "",
      qr: "",
      holder: "",
      bank_name: "",
      ifsc: "",
      doc: "",
      authPayment: [],

      method: "Select",
      alluser: [],
      userCount: "",
      userChange: "",
      transaction: [],
    };
  },

  //   computed: {
  //     filteredUsers() {
  //       const oneMonthAgoUser = this.alluser.filter((item) => {
  //         const itemDate = new Date(item.created_at);
  //         const thirtyDaysAgo = new Date();
  //         thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

  //         return item.vip > 0 && itemDate < thirtyDaysAgo;
  //       });
  //       const lastMonthUser = this.alluser.filter((item) => {
  //         const itemDate = new Date(item.created_at);
  //         const thirtyDaysAgo = new Date();
  //         thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

  //         return item.vip > 0 && itemDate >= thirtyDaysAgo;
  //       });

  //       return {
  //         count: this.alluser
  //           .filter((user) => user.vip > 0)
  //           .length.toString()
  //           .padStart(4, "0"),
  //         change: (lastMonthUser.length / oneMonthAgoUser.length) * 100,
  //       };
  //     },
  //     filterTrx() {
  //       const oneMonthAgotransaction = this.transaction.filter((item) => {
  //         const itemDate = new Date(item.created_at);
  //         const thirtyDaysAgo = new Date();
  //         thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

  //         return itemDate < thirtyDaysAgo;
  //       });
  //       const lastMonthtransaction = this.transaction.filter((item) => {
  //         const itemDate = new Date(item.created_at);
  //         const thirtyDaysAgo = new Date();
  //         thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

  //         return itemDate >= thirtyDaysAgo;
  //       });

  //       return {
  //         count: this.transaction.length.toString().padStart(4, "0"),
  //         change:
  //           (lastMonthtransaction.length / oneMonthAgotransaction.length) * 100,
  //       };
  //     },
  //   },
  methods: {
    qrimage(event) {
      this.qr = event.target.files[0];
    },
    docimage(event) {
      this.doc = event.target.files[0];
    },

    async payment() {
      this.$setLoading(true);
      this.$setLoading(true);

      const formData = new FormData(); // Create a FormData object
      this.$setLoading(true);
      formData.append("method", this.method);
      formData.append("qr", this.qr);
      formData.append("doc", this.doc);
      formData.append("wallet_address", this.wallet_address);
      formData.append("bank_address", this.bank_address);
      formData.append("tag", this.tag);
      formData.append("holder", this.holder); // Append the file to the FormData object
      formData.append("bank_name", this.bank_name); // Append the file to the FormData object
      formData.append("ifsc", this.ifsc); // Append the file to the FormData object
      this.$setLoading(true);
      await axios
        .post("/api/payment.store", formData, {
          headers: {
            "Content-Type": "multipart/form-data", // Set content type for file upload
          },
        })
        .then((response) => {
          this.$setLoading(false);
          this.authPayment = response.data.payment;

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
    async paymentEdit() {
      this.$setLoading(true);

      const formData = new FormData(); // Create a FormData object
      this.$setLoading(true);
      formData.append("method", this.method);
      formData.append("qr", this.qr);
      formData.append("doc", this.doc);
      formData.append("wallet_address", this.wallet_address);
      formData.append("bank_address", this.bank_address);
      formData.append("tag", this.tag);
      formData.append("holder", this.holder); // Append the file to the FormData object
      formData.append("bank_name", this.bank_name); // Append the file to the FormData object
      formData.append("ifsc", this.ifsc); // Append the file to the FormData object
      this.$setLoading(true);
      await axios
        .post("/api/payment.edit", formData, {
          headers: {
            "Content-Type": "multipart/form-data", // Set content type for file upload
          },
        })
        .then((response) => {
          this.authPayment = response.data.payment;

          this.$setLoading(false);
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
    await axios.get("/api/payment").then((response) => {
      this.authPayment = response.data.payment;

      if (response.data.payment) {
        this.wallet_address = this.authPayment.wallet_address;
        this.bank_address = response.data.payment.bank_address;
        this.tag = response.data.payment.tag;

        this.holder = response.data.payment.holder;
        this.bank_name = response.data.payment.bank_name;
        this.ifsc = response.data.payment.ifsc;
      }
    });

    this.$setLoading(false);
  },
};
</script>
 
