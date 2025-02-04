<template>
  <div>
    <DeshboardLayout>
      <div class="bg-dash-dark-2 py-4 mb-4">
        <div class="container-fluid">
          <h2 class=" mb-0">Economic Profile Details</h2>
        </div>
      </div>
      <section class="pt-0" v-if="!geteconomic">
        <div class="container-fluid">
          <div class="row gy-4">
            <div class="col-lg-12">
              <div class="col-lg-12">
                <div class="bg-secondary card">
                  <div class="card-header"></div>
                  <div class="card-body pt-0">
                    <form
                      class="row g-3 align-items-center"
                      @submit.prevent="economic"
                    >
                      <div class="col-lg-6">
                        <label class="" for="inlineFormSelectPref">
                          Employment status</label
                        >
                        <select
                          class="form-select"
                          id="inlineFormSelectPref"
                          v-model="employ"
                          required
                        >
                          <option selected disabled>Select</option>
                          <option value="Employed">Employed</option>
                          <option value="Unemployed">Unemployed</option>
                          <option value="Self Employed">Self Employed</option>
                          <option value="Retired">Retired</option>
                          <option value="Student">Student</option>
                        </select>
                      </div>
                      <div class="col-lg-6">
                        <label class="" for="inlineFormSelectPref">
                          Industry</label
                        >

                        <select
                          class="form-select"
                          id="inlineFormSelectPref"
                          v-model="industry"
                          required
                        >
                          <option selected disabled>Select</option>

                          <option value="Accountancy">Accountancy</option>
                          <option value="Admin/ Secretarial">
                            Admin/ Secretarial
                          </option>
                          <option value="Agriculture">Agriculture</option>
                          <option value="Financial Services – Banking">
                            Financial Services – Banking
                          </option>
                          <option value="Catering/ Hospitality">
                            Catering/ Hospitality
                          </option>
                          <option value="Creative/ Media">
                            Creative/ Media
                          </option>
                          <option value="Education">Education</option>
                          <option value="Emergency Services">
                            Emergency Services
                          </option>
                          <option value="Engineering">Engineering</option>
                          <option value="Financial Services – Other">
                            Financial Services – Other
                          </option>
                          <option value="Health/Medicine">
                            Health/Medicine
                          </option>
                          <option value="HM Forces">HM Forces</option>
                          <option value="HR">HR</option>
                          <option value="Financial Services – Insurance">
                            Financial Services – Insurance
                          </option>
                          <option value="IT">IT</option>
                          <option value="Legal">Legal</option>
                          <option value="Leisure/ Entertainment/ Tourism">
                            Leisure/ Entertainment/ Tourism
                          </option>
                          <option value="Manufacturing">Manufacturing</option>
                          <option value="Marketing/PR/Advertising">
                            Marketing/PR/Advertising
                          </option>
                          <option value="Pharmaceutical">Pharmaceutical</option>
                          <option value="Property/Constructions/Trades">
                            Property/Constructions/Trades
                          </option>
                          <option value="Retail">Retail</option>
                          <option value="Sales">Sales</option>
                          <option value="Social Care/ Services">
                            Social Care/ Services
                          </option>
                          <option value="Telecommunications">
                            Telecommunications
                          </option>
                          <option value="Transport/Logistics">
                            Transport/Logistics
                          </option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                      <div class="col-lg-6">
                        <label class="" for="inlineFormSelectPref">
                          Source of Income/Funds</label
                        >

                        <select
                          class="form-select"
                          id="inlineFormSelectPref"
                          v-model="source_of_income"
                          required
                        >
                          <option selected disabled>Select</option>

                          <option value="Employment">Employment</option>
                          <option value="Savings/ Investments">
                            Savings/ Investments
                          </option>
                          <option value="Partner/ Parent/ Family">
                            Partner/ Parent/ Family
                          </option>
                          <option value="Private Pension">
                            Private Pension
                          </option>
                          <option value="Benefits/ Borrowing">
                            Benefits/ Borrowing
                          </option>
                          <option value="State Pension">State Pension</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                      <div class="col-lg-6">
                        <label class="" for="est_annual_income">
                          Estimated Annual Income (USD)</label
                        >

                        <select
                          class="form-select"
                          id="est_annual_income"
                          v-model="est_annual_income"
                          required
                        >
                          <option selected disabled>Select</option>

                          <option value="Less than 15,000">
                            Less than $15,000
                          </option>
                          <option value="15001 – 25000">
                            $15,001 – $25,000
                          </option>
                          <option value="25001 – 50000">
                            $25,001 – $50,000
                          </option>
                          <option value="50001 – 100000">
                            $50,001 – $100,000
                          </option>
                          <option value="100001 – 150000">
                            $100,001 – $150,000
                          </option>
                          <option value="150001 – 200000">
                            $150,001 – $200,000
                          </option>
                          <option value="More than 200000">
                            More than $200,000
                          </option>
                        </select>
                      </div>
                      <div class="col-lg-6">
                        <label class="" for="est_net_worth">
                          Estimated Net Worth (USD)</label
                        >

                        <select
                          class="form-select"
                          id="est_net_worth"
                          v-model="est_net_worth"
                          required
                        >
                          <option selected disabled>Select</option>
                          <option value="Less than 15,000">
                            Less than $15,000
                          </option>
                          <option value="15001 – 25000">
                            $15,001 – $25,000
                          </option>
                          <option value="25001 – 50000">
                            $25,001 – $50,000
                          </option>
                          <option value="50001 – 100000">
                            $50,001 – $100,000
                          </option>
                          <option value="100001 – 150000">
                            $100,001 – $150,000
                          </option>
                          <option value="150001 – 200000">
                            $150,001 – $200,000
                          </option>
                          <option value="More than 200000">
                            More than $200,000
                          </option>
                        </select>
                      </div>
                      <div class="col-lg-6">
                        <label class="" for="are_you_us_citizen">
                          Are you a US citizen for tax purposes?</label
                        >

                        <select
                          class="form-select"
                          id="are_you_us_citizen"
                          v-model="are_you_us_citizen"
                          required
                        >
                          <option selected disabled>Select</option>
                          <option value="Yes">Yes</option>
                          <option value="No">No</option>
                        </select>
                      </div>
                      <div class="col-lg-6">
                        <label class="" for="ever_traded">
                          Have you ever traded in derivatives or FX & CFD
                          products before?</label
                        >

                        <select
                          class="form-select"
                          id="ever_traded"
                          v-model="ever_traded"
                          required
                        >
                          <option selected disabled>Select</option>
                          <option value="Yes">Yes</option>
                          <option value="No">No</option>
                        </select>
                      </div>
                      <div class="col-lg-6">
                        <label class="" for="previous_work_exp">
                          Do you have previous work experience or any
                          qualification that can help you to understand the
                          risks related to trading in leveraged products?</label
                        >

                        <select
                          class="form-select"
                          id="previous_work_exp"
                          v-model="previous_work_exp"
                          required
                        >
                          <option selected disabled>Select</option>
                          <option value="Yes">Yes</option>
                          <option value="No">No</option>
                        </select>
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
      <section class="pt-0" v-if="authUser.ec_kyc != 'No' && economicUpdate">
        <div class="container-fluid">
          <div class="row gy-4">
            <div class="col-lg-12">
              <div class="col-lg-12">
                <div class="bg-secondary card">
                  <div class="card-header"></div>
                  <div class="card-body pt-0">
                    <form
                      class="row g-3 align-items-center"
                      @submit.prevent="economicEdit"
                    >
                      <div class="col-lg-6">
                        <label class="" for="inlineFormSelectPref">
                          Employment status</label
                        >
                        <select
                          class="form-select"
                          id="inlineFormSelectPref"
                          v-model="employ"
                          required
                        >
                          <option selected disabled>Select</option>
                          <option value="Employed">Employed</option>
                          <option value="Unemployed">Unemployed</option>
                          <option value="Self Employed">Self Employed</option>
                          <option value="Retired">Retired</option>
                          <option value="Student">Student</option>
                        </select>
                      </div>
                      <div class="col-lg-6">
                        <label class="" for="inlineFormSelectPref">
                          Industry</label
                        >

                        <select
                          class="form-select"
                          id="inlineFormSelectPref"
                          v-model="industry"
                          required
                        >
                          <option selected disabled>Select</option>

                          <option value="Accountancy">Accountancy</option>
                          <option value="Admin/ Secretarial">
                            Admin/ Secretarial
                          </option>
                          <option value="Agriculture">Agriculture</option>
                          <option value="Financial Services – Banking">
                            Financial Services – Banking
                          </option>
                          <option value="Catering/ Hospitality">
                            Catering/ Hospitality
                          </option>
                          <option value="Creative/ Media">
                            Creative/ Media
                          </option>
                          <option value="Education">Education</option>
                          <option value="Emergency Services">
                            Emergency Services
                          </option>
                          <option value="Engineering">Engineering</option>
                          <option value="Financial Services – Other">
                            Financial Services – Other
                          </option>
                          <option value="Health/Medicine">
                            Health/Medicine
                          </option>
                          <option value="HM Forces">HM Forces</option>
                          <option value="HR">HR</option>
                          <option value="Financial Services – Insurance">
                            Financial Services – Insurance
                          </option>
                          <option value="IT">IT</option>
                          <option value="Legal">Legal</option>
                          <option value="Leisure/ Entertainment/ Tourism">
                            Leisure/ Entertainment/ Tourism
                          </option>
                          <option value="Manufacturing">Manufacturing</option>
                          <option value="Marketing/PR/Advertising">
                            Marketing/PR/Advertising
                          </option>
                          <option value="Pharmaceutical">Pharmaceutical</option>
                          <option value="Property/Constructions/Trades">
                            Property/Constructions/Trades
                          </option>
                          <option value="Retail">Retail</option>
                          <option value="Sales">Sales</option>
                          <option value="Social Care/ Services">
                            Social Care/ Services
                          </option>
                          <option value="Telecommunications">
                            Telecommunications
                          </option>
                          <option value="Transport/Logistics">
                            Transport/Logistics
                          </option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                      <div class="col-lg-6">
                        <label class="" for="inlineFormSelectPref">
                          Source of Income/Funds</label
                        >

                        <select
                          class="form-select"
                          id="inlineFormSelectPref"
                          v-model="source_of_income"
                          required
                        >
                          <option selected disabled>Select</option>

                          <option value="Employment">Employment</option>
                          <option value="Savings/ Investments">
                            Savings/ Investments
                          </option>
                          <option value="Partner/ Parent/ Family">
                            Partner/ Parent/ Family
                          </option>
                          <option value="Private Pension">
                            Private Pension
                          </option>
                          <option value="Benefits/ Borrowing">
                            Benefits/ Borrowing
                          </option>
                          <option value="State Pension">State Pension</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                      <div class="col-lg-6">
                        <label class="" for="est_annual_income">
                          Estimated Annual Income (USD)</label
                        >

                        <select
                          class="form-select"
                          id="est_annual_income"
                          v-model="est_annual_income"
                          required
                        >
                          <option selected disabled>Select</option>

                          <option value="Less than 15,000">
                            Less than $15,000
                          </option>
                          <option value="15001 – 25000">
                            $15,001 – $25,000
                          </option>
                          <option value="25001 – 50000">
                            $25,001 – $50,000
                          </option>
                          <option value="50001 – 100000">
                            $50,001 – $100,000
                          </option>
                          <option value="100001 – 150000">
                            $100,001 – $150,000
                          </option>
                          <option value="150001 – 200000">
                            $150,001 – $200,000
                          </option>
                          <option value="More than 200000">
                            More than $200,000
                          </option>
                        </select>
                      </div>
                      <div class="col-lg-6">
                        <label class="" for="est_net_worth">
                          Estimated Net Worth (USD)</label
                        >

                        <select
                          class="form-select"
                          id="est_net_worth"
                          v-model="est_net_worth"
                          required
                        >
                          <option selected disabled>Select</option>
                          <option value="Less than 15,000">
                            Less than $15,000
                          </option>
                          <option value="15001 – 25000">
                            $15,001 – $25,000
                          </option>
                          <option value="25001 – 50000">
                            $25,001 – $50,000
                          </option>
                          <option value="50001 – 100000">
                            $50,001 – $100,000
                          </option>
                          <option value="100001 – 150000">
                            $100,001 – $150,000
                          </option>
                          <option value="150001 – 200000">
                            $150,001 – $200,000
                          </option>
                          <option value="More than 200000">
                            More than $200,000
                          </option>
                        </select>
                      </div>
                      <div class="col-lg-6">
                        <label class="" for="are_you_us_citizen">
                          Are you a US citizen for tax purposes?</label
                        >

                        <select
                          class="form-select"
                          id="are_you_us_citizen"
                          v-model="are_you_us_citizen"
                          required
                        >
                          <option selected disabled>Select</option>
                          <option value="Yes">Yes</option>
                          <option value="No">No</option>
                        </select>
                      </div>
                      <div class="col-lg-6">
                        <label class="" for="ever_traded">
                          Have you ever traded in derivatives or FX & CFD
                          products before?</label
                        >

                        <select
                          class="form-select"
                          id="ever_traded"
                          v-model="ever_traded"
                          required
                        >
                          <option selected disabled>Select</option>
                          <option value="Yes">Yes</option>
                          <option value="No">No</option>
                        </select>
                      </div>
                      <div class="col-lg-6">
                        <label class="" for="previous_work_exp">
                          Do you have previous work experience or any
                          qualification that can help you to understand the
                          risks related to trading in leveraged products?</label
                        >

                        <select
                          class="form-select"
                          id="previous_work_exp"
                          v-model="previous_work_exp"
                          required
                        >
                          <option selected disabled>Select</option>
                          <option value="Yes">Yes</option>
                          <option value="No">No</option>
                        </select>
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

      <section class="pt-0 mt-4" v-if="geteconomic">
        <div class="container-fluid">
          <div class="row justify-content-center gy-4">
            <div class="col-12">
              <div class="bg-secondary card">
                <div class="card-body">
                  <div class="row gy-3 align-items-center">
                    <div class="col-lg-8">
                      <div class="card mb-4 bg-secondary">
                        <div class="card-body">
                          <div class="row">
                            <div class="col-sm-3">
                              <p class="mb-0">Employment status:</p>
                            </div>
                            <div class="col-sm-9">
                              <p class="text-muted mb-0">
                                {{ geteconomic.employ }}
                              </p>
                            </div>
                          </div>
                          <hr />
                          <div class="row">
                            <div class="col-sm-3">
                              <p class="mb-0">Industry:</p>
                            </div>
                            <div class="col-sm-9">
                              <p class="text-muted mb-0">
                                {{ geteconomic.industry }}
                              </p>
                            </div>
                          </div>
                          <hr />
                          <div class="row">
                            <div class="col-sm-3">
                              <p class="mb-0">Source of Income/Funds:</p>
                            </div>
                            <div class="col-sm-9">
                              <p class="text-muted mb-0">
                                {{ geteconomic.source_of_income }}
                              </p>
                            </div>
                          </div>
                          <hr />
                          <div class="row">
                            <div class="col-sm-3">
                              <p class="mb-0">Estimated Annual Income (USD):</p>
                            </div>
                            <div class="col-sm-9">
                              <p class="text-muted mb-0">
                                {{ geteconomic.est_annual_income }}
                              </p>
                            </div>
                          </div>
                          <hr />
                          <div class="row">
                            <div class="col-sm-3">
                              <p class="mb-0">
                                Have you ever traded in derivatives or FX & CFD
                                products before?:
                              </p>
                            </div>
                            <div class="col-sm-9">
                              <p class="text-muted mb-0">
                                {{ geteconomic.ever_traded }}
                              </p>
                            </div>
                          </div>
                          <hr />
                          <div class="row">
                            <div class="col-sm-3">
                              <p class="mb-0">
                                Do you have previous work experience or any
                                qualification that can help you to understand
                                the risks related to trading in leveraged
                                products?:
                              </p>
                            </div>
                            <div class="col-sm-9">
                              <p class="text-muted mb-0">
                                {{ geteconomic.previous_work_exp }}
                              </p>
                            </div>
                          </div>
                          <hr />
                          <div class="row">
                            <div class="col-sm-3">
                              <p class="mb-0">
                                Are you a US citizen for tax purposes?:
                              </p>
                            </div>
                            <div class="col-sm-9">
                              <p class="text-muted mb-0">
                                {{ geteconomic.are_you_us_citizen }}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                 
                    </div>
                    <div class="col-lg-4">
                      <div class="card bg-secondary mb-4 mb-lg-0">
                        <div class="card-body p-0">
                          <ul class="list-group list-group-flush rounded-3">
                            <li
                              class="list-group-item d-flex justify-content-between align-items-center p-3"
                            >
                              <p class="text-warning">{{ authUser.id_kyc }}</p>
                              <p class="mb-0">Proof of ID approved</p>
                            </li>
                            <li
                              class="list-group-item d-flex justify-content-between align-items-center p-3"
                            >
                              <p class="text-success">{{ authUser.ad_kyc }}</p>
                              <p class="mb-0">Proof of Address approved</p>
                            </li>
                            <li
                              class="list-group-item d-flex justify-content-between align-items-center p-3"
                            >
                              <p style="color: #55acee">
                                {{ authUser.ec_kyc }}
                              </p>
                              <p class="mb-0">Economic Profile approved</p>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button
                        class="btn btn-primary"
                        type="button"
                        @click="Update"
                      >
                      Update
                      </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </DeshboardLayout>
  </div>
</template>
<script>
import { useAuthUserStore } from "../../store/user";

import { workStore } from "../../store/work";

import axios from "axios";

export default {
  data() {
    return {
      checkbox: "",
      authUser: [],
      userCount: "",
      userChange: "",
      geteconomic: "",
      economicUpdate: false,

      employ: "Select",
      industry: "Select",
      source_of_income: "Select",
      est_annual_income: "Select",
      est_net_worth: "Select",
      ever_traded: "Select",
      previous_work_exp: "Select",
      are_you_us_citizen: "Select",
    };
  },

  // computed: {
  //   filteredUsers() {
  //     const oneMonthAgoUser = this.alluser.filter((item) => {
  //       const itemDate = new Date(item.created_at);
  //       const thirtyDaysAgo = new Date();
  //       thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

  //       return item.vip > 0 && itemDate < thirtyDaysAgo;
  //     });
  //     const lastMonthUser = this.alluser.filter((item) => {
  //       const itemDate = new Date(item.created_at);
  //       const thirtyDaysAgo = new Date();
  //       thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

  //       return item.vip > 0 && itemDate >= thirtyDaysAgo;
  //     });

  //     return {
  //       count: this.alluser
  //         .filter((user) => user.vip > 0)
  //         .length.toString()
  //         .padStart(4, "0"),
  //       change: (lastMonthUser.length / oneMonthAgoUser.length) * 100,
  //     };
  //   },
  //   filterTrx() {
  //     const oneMonthAgotransaction = this.transaction.filter((item) => {
  //       const itemDate = new Date(item.created_at);
  //       const thirtyDaysAgo = new Date();
  //       thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

  //       return itemDate < thirtyDaysAgo;
  //     });
  //     const lastMonthtransaction = this.transaction.filter((item) => {
  //       const itemDate = new Date(item.created_at);
  //       const thirtyDaysAgo = new Date();
  //       thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

  //       return itemDate >= thirtyDaysAgo;
  //     });

  //     return {
  //       count: this.transaction.length.toString().padStart(4, "0"),
  //       change:
  //         (lastMonthtransaction.length / oneMonthAgotransaction.length) * 100,
  //     };
  //   },
  // },

  methods: {
    Update() {
      this.economicUpdate = !this.economicUpdate; // Toggle the value of sidebar between true and false
    },
    async economic() {
      this.$setLoading(true);

      const formData = new FormData(); // Create a FormData object
      formData.append("employ", this.employ);
      formData.append("industry", this.industry);
      formData.append("source_of_income", this.source_of_income);
      formData.append("est_annual_income", this.est_annual_income);
      formData.append("est_net_worth", this.est_net_worth);
      formData.append("ever_traded", this.ever_traded);
      formData.append("previous_work_exp", this.previous_work_exp);
      formData.append("are_you_us_citizen", this.are_you_us_citizen);
      await axios
        .post("/api/work.create", formData)
        .then((response) => {
          this.$setLoading(false);

          this.geteconomic = response.data.economic;

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
    async economicEdit() {
      this.$setLoading(true);

      const formData = new FormData(); // Create a FormData object
      formData.append("employ", this.employ);
      formData.append("industry", this.industry);
      formData.append("source_of_income", this.source_of_income);
      formData.append("est_annual_income", this.est_annual_income);
      formData.append("est_net_worth", this.est_net_worth);
      formData.append("ever_traded", this.ever_traded);
      formData.append("previous_work_exp", this.previous_work_exp);
      formData.append("are_you_us_citizen", this.are_you_us_citizen);
      await axios
        .post("/api/work.edit", formData)
        .then((response) => {
          this.geteconomic = response.data.economic;
          this.$setLoading(false);

          this.economicUpdate = "";
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
    const userStore = useAuthUserStore();
    const authUser = userStore.authUser;

    if (authUser) {
      this.authUser = authUser;
    } else {
      // userStore.reSetAuthUser();
      this.authUser = await userStore.reSetAuthUser();
    }

    const works = workStore();
    const allwork = works.work;
    if (allwork) {
      this.geteconomic = allwork;
    } else {
      // userStore.reSetAuthUser();
      this.$setLoading(false);
      this.geteconomic = await works.getWork();
    }

    this.$setLoading(false);
  },
};
</script>
   
