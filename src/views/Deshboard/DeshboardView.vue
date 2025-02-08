<template>
  <DeshboardLayout>
    <div class="">
      <div class="page_title">
        <div class="container-fluid">
          <div class="row">
            <div class="col-xl-12">
              <div class="page_title-content">
                <p>
                  Welcome Back,
                  <span>{{ authUser.name }}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>


        <div class="container-fluid">
          <div class="row">
            <div class="col-xl-3 col-lg-4 col-xxl-4">
              <div class="card balance-widget">
                <div class="card-header border-0 py-0">
                  <h4 class="card-title">Your Portfolio</h4>
                </div>
                <div class="card-body pt-0">
                  <div class="balance-widget">
                    <div class="total-balance">
                      <h3>
                        ${{
                          Number(authUser.main_balance) +
                          Number(authUser.live_balance)
                        }}
                      </h3>
                      <h6>Total Balance</h6>
                    </div>
                    <ul class="list-unstyled">
                      <li class="d-flex">
                        <i class="cc BTC me-3"></i>
                        <div class="flex-grow-1">
                          <h5 class="m-0">Main wallet</h5>
                        </div>
                        <div class="text-end">
                          <h5>{{ Number(authUser.main_balance) }}</h5>
                          <span>USD</span>
                        </div>
                      </li>
                      <li class="d-flex">
                        <i class="cc LTC me-3"></i>
                        <div class="flex-grow-1">
                          <h5 class="m-0">Live Wallet</h5>
                        </div>
                        <div class="text-end">
                          <h5>{{ Number(authUser.live_balance) }}</h5>
                          <span>USD</span>
                        </div>
                      </li>
                      <li class="d-flex">
                        <i class="cc XRP me-3"></i>
                        <div class="flex-grow-1">
                          <h5 class="m-0">Ripple</h5>
                        </div>
                        <div class="text-end">
                          <h5>0.000242 XRP</h5>
                          <span>0.125 USD</span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-xl-6 col-lg-8 col-xxl-8">
              <div class="card profile_chart">
                <div class="card-header py-0">
                  <div class="chart_current_data">
                    <h3>254856 <span>USD</span></h3>
                    <p class="text-success">125648 <span>USD (20%)</span></p>
                  </div>
                  <div class="duration-option">
                    <a
                      id="all"
                      @click.prevent="updateChart('one_month')"
                      class="active"
                      >ALL</a
                    >
                    <a id="one_month" class="">1M</a>
                    <a id="six_months">6M</a>
                    <a id="one_year" class="">1Y</a>
                    <a id="ytd" class="">YTD</a>
                  </div>
                </div>
                <div class="card-body">
                  <!-- <div id="timeline-chart"></div> -->
                  <canvas id="timeline-chart"></canvas>
                  <!-- <canvas ref="chartCanvas" id="timeline-chart"></canvas> -->
                  <div class="chart-content text-center">
                    <div class="row">
                      <div class="col-xl-3 col-sm-6 col-6">
                        <div class="chart-stat">
                          <p class="mb-2">Total Withdrawals</p>
                          <h4 class="mb-0">${{ sumtrx }}</h4>
                        </div>
                      </div>
                      <div class="col-xl-3 col-sm-6 col-6">
                        <div class="chart-stat">
                          <p class="mb-2">Total Deposit</p>
                          <h4 class="mb-0">${{ sumDeptrx }}</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-lg-12 col-xxl-12">
              <div class="card">
                <div class="card-header border-0 py-0">
                  <h4 class="card-title">Follow</h4>
                </div>
                <div class="card-body">
                  <div class="row">
                    <div class="col-xl-12 col-lg-6 col-xxl-6">
                      <div class="widget-card">
                        <div
                          class="d-flex justify-content-between align-items-center"
                        >
                          <div class="widget-stat">
                            <div class="coin-title">
                              <span><i class="cc BTC-alt"></i></span>
                              <h5 class="d-inline-block ms-2 mb-3">
                                Bitcoin <span>(24h)</span>
                              </h5>
                            </div>
                            <h4>
                              USD 1254.36
                              <span class="badge badge-success ms-2"
                                >+ 06%</span
                              >
                            </h4>
                          </div>
                          <div id="btcChart"></div>
                        </div>
                      </div>
                    </div>
                    <div class="col-xl-12 col-lg-6 col-xxl-6">
                      <div class="widget-card">
                        <div
                          class="d-flex justify-content-between align-items-center"
                        >
                          <div class="widget-stat">
                            <div class="coin-title">
                              <span><i class="cc ETH-alt"></i></span>
                              <h5 class="d-inline-block ms-2 mb-3">
                                Ethereum <span>(24h)</span>
                              </h5>
                            </div>
                            <h4>
                              USD 1254.36
                              <span class="badge badge-danger ms-2">- 06%</span>
                            </h4>
                          </div>
                          <div id="ltcChart"></div>
                        </div>
                      </div>
                    </div>
                    <div class="col-xl-12 col-lg-6 col-xxl-6">
                      <div class="widget-card">
                        <div
                          class="d-flex justify-content-between align-items-center"
                        >
                          <div class="widget-stat">
                            <div class="coin-title">
                              <span><i class="cc LTC-alt"></i></span>
                              <h5 class="d-inline-block ms-2 mb-3">
                                Litecoin <span>(24h)</span>
                              </h5>
                            </div>
                            <h4>
                              USD 1254.36
                              <span class="badge badge-primary ms-2"> 06%</span>
                            </h4>
                          </div>
                          <div id="xrpChart"></div>
                        </div>
                      </div>
                    </div>
                    <div class="col-xl-12 col-lg-6 col-xxl-6">
                      <div class="widget-card">
                        <div
                          class="d-flex justify-content-between align-items-center"
                        >
                          <div class="widget-stat">
                            <div class="coin-title">
                              <span><i class="cc XRP-alt"></i></span>
                              <h5 class="d-inline-block ms-2 mb-3">
                                Ripple <span>(24h)</span>
                              </h5>
                            </div>
                            <h4>
                              USD 1254.36
                              <span class="badge badge-danger ms-2">- 06%</span>
                            </h4>
                          </div>
                          <div id="dashChart"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-xl-3 col-lg-4 col-xxl-4">
              <div class="card">
                <div class="card-header border-0 py-0">
                  <h4 class="card-title">Transaction</h4>
                </div>
                <div class="card-body">
                  <div class="buy-sell-widget">
                    <form
                      class="currency_validate"
                      @submit.prevent="depositNow"
                    >
                      <div class="mb-3">
                        <label class="me-sm-2">Account Category</label>
                        <div class="input-group mb-3">
                          <div class="input-group-prepend">
                            <label class="input-group-text"
                              ><i
                                class="cc BTC-alt fa fa-address-card"
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
                </div>
              </div>
            </div>
            <div class="col-xl-9 col-lg-8 col-xxl-8">
              <div class="card">
                <div class="card-header border-0 py-0">
                  <h4 class="card-title">Recent Activities</h4>
                  <RouterLink to="/transaction">View More </RouterLink>
                </div>
                <div class="card-body">
                  <div class="transaction-table">
                    <div class="table-responsive">
                      <table class="table mb-0 table-responsive-sm">
                        <td v-if="transactions.length == 0">No data!</td>
                        <tbody>
                          
                          <tr
                            v-for="(
                              transactionItem, index
                            ) in transactions.slice(0, 4)"
                            :key="index"
                          >
                           
                            <td>
                              <span
                                class="sold-thumb"
                                :class="{
                                  'sold-thumb':
                                    transactionItem.type === 'withdraw',
                                  'buy-thumb':
                                    transactionItem.type !== 'withdraw',
                                }"
                                ><i
                                  class="fa"
                                  :class="{
                                    'fa-arrow-up':
                                      transactionItem.type === 'withdraw',
                                    'fa-arrow-down':
                                      transactionItem.type !== 'withdraw',
                                  }"
                                ></i
                              ></span>
                            </td>
                            <td>
                              {{ transactionItem.created_at.substring(0, 10) }}
                            </td>

                            <td>
                              <span
                                class="badge badge-danger"
                                :class="{
                                  'badge-danger':
                                    transactionItem.type === 'withdraw',
                                  'badge-success':
                                    transactionItem.type !== 'withdraw',
                                }"
                                >{{ transactionItem.type }}</span
                              >
                            </td>
                            <td>
                              <i class="cc LTC"></i>
                              {{ transactionItem.method }}
                            </td>
                            <td>
                              Using - {{ transactionItem.address }} wallet
                            </td>
                            <td
                              class=""
                              :class="{
                                'text-danger':
                                  transactionItem.type === 'withdraw',
                                'text-success':
                                  transactionItem.type !== 'withdraw',
                              }"
                            >
                              {{ transactionItem.amount }} USD
                            </td>
                            <td>
                              <span
                                class="badge"
                                :class="{
                                  'bg-warning':
                                    transactionItem.status === 'pending',
                                  'bg-danger':
                                    transactionItem.status === 'rejected',
                                  'bg-success':
                                    transactionItem.status === 'success',
                                }"
                                >{{ transactionItem.status }}</span
                              >
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
import { transactionStore } from "../../store/transaction";
import axios from "axios";
import { Chart } from "chart.js/auto";
import { RouterLink } from "vue-router";

export default {
  data() {
    return {
      authUser: [],
      page: "deposit",

      amount: "",
      address: "Select",
      method: "Select",
      transactions: [],
      chart: null,
      chartData: {
        labels: this.generateLabels(30),
        datasets: [
          {
            label: "Buy",
            data: this.generateData(30),
            borderColor: "#7B6FFF",
            backgroundColor: "rgba(123, 111, 255, 0.5)",
            fill: true,
          },
          {
            label: "Sell",
            data: this.generateData(30),
            borderColor: "#1652F0",
            backgroundColor: "rgba(22, 82, 240, 0.5)",
            fill: true,
          },
        ],
      },
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
    initChart() {
      const ctx = this.$refs.chartCanvas.getContext("2d");
      this.chart = new Chart(ctx, {
        type: "line",
        data: this.chartData,
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { position: "top" } },
          scales: {
            x: {
              type: "time",
              time: { unit: "day" },
              adapters: { date: adapter },
            },
            y: { beginAtZero: true },
          },
        },
      });
    },
    updateChart(range) {
      let labels, data;
      switch (range) {
        case "one_month":
          labels = this.generateLabels(30);
          data = this.generateData(30);
          break;
        case "six_months":
          labels = this.generateLabels(180);
          data = this.generateData(180);
          break;
        case "one_year":
          labels = this.generateLabels(365);
          data = this.generateData(365);
          break;
        case "ytd":
          labels = this.generateLabels(60);
          data = this.generateData(60);
          break;
        default:
          labels = this.generateLabels(730);
          data = this.generateData(730);
      }
      this.chart.data.labels = labels;
      this.chart.data.datasets.forEach((dataset) => (dataset.data = data));
      this.chart.update();
    },
    generateLabels(count) {
      let labels = [];
      let date = new Date();
      for (let i = count; i > 0; i--) {
        labels.push(new Date(date.setDate(date.getDate() - 1)));
      }
      return labels.reverse();
    },
    // generateData(count) {
    //   return Array.from({ length: count }, () =>
    //     Math.floor(Math.random() * 400)
    //   );
    // },
    generateData(count) {
      return Array.from({ length: count }, () => {
        return Math.min(Math.max(Math.random() * 10, 0), 10);
      });
    },
  },
  computed: {
    sumtrx() {
      // Filter withdraw transactions with status success and calculate the sum
      const withdrawSuccessTransactions = Object.values(
        this.transactions
      ).filter(
        (transaction) =>
          transaction.type === "Withdraw" && transaction.status === "success"
      );

      // Use reduce to calculate the sum
      const sum = withdrawSuccessTransactions.reduce(
        (total, transaction) => total + transaction.amount,
        0
      );

      return sum;
    },
    sumDeptrx() {
      // Filter withdraw transactions with status success and calculate the sum
      const withdrawSuccessTransactions = Object.values(
        this.transactions
      ).filter(
        (transaction) =>
          transaction.type === "deposit" && transaction.status === "success"
      );

      // Use reduce to calculate the sum
      const sum = withdrawSuccessTransactions.reduce(
        (total, transaction) => total + transaction.amount,
        0
      );

      return sum;
    },
    lastWithdrawCreatedAt() {
      // Filter withdraw transactions with status success
      const withdrawSuccessTransactions = Object.values(
        this.transactions
      ).filter(
        (transaction) =>
          transaction.type === "Withdraw" && transaction.status === "success"
      );

      // If there are no successful withdraw transactions, return '00-00-0000'
      if (withdrawSuccessTransactions.length === 0) {
        return "00-00-0000";
      }

      // Sort the transactions by created_at in descending order
      const sortedTransactions = withdrawSuccessTransactions.sort(
        (a, b) => new Date(b.created_at) - new Date(a.created_at)
      );

      // Get the created_at value of the first transaction (latest one)
      const lastWithdrawCreatedAt = new Date(sortedTransactions[0].created_at);

      // Format the date to 'MM-DD-YYYY'
      const formattedDate = lastWithdrawCreatedAt.toLocaleDateString("en-US", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      });

      return formattedDate;
    },
    lastDepositCreatedAt() {
      // Filter withdraw transactions with status success
      const withdrawSuccessTransactions = Object.values(
        this.transactions
      ).filter(
        (transaction) =>
          transaction.type === "deposit" && transaction.status === "success"
      );

      // If there are no successful withdraw transactions, return '00-00-0000'
      if (withdrawSuccessTransactions.length === 0) {
        return "00-00-0000";
      }

      // Sort the transactions by created_at in descending order
      const sortedTransactions = withdrawSuccessTransactions.sort(
        (a, b) => new Date(b.created_at) - new Date(a.created_at)
      );

      // Get the created_at value of the first transaction (latest one)
      const lastWithdrawCreatedAt = new Date(sortedTransactions[0].created_at);

      // Format the date to 'MM-DD-YYYY'
      const formattedDate = lastWithdrawCreatedAt.toLocaleDateString("en-US", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      });

      return formattedDate;
    },
  },
  mounted() {
    // Single Line Chart
    var ctx2 = document.getElementById("timeline-chart");
    if (ctx2) {
      new Chart(ctx2, {
        type: "line",
        data: {
          labels: [
            "20 Nov",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
          ],

          datasets: [
            {
              label: "Buy",
              data: this.generateData(30),
              borderColor: "#7B6FFF",
              backgroundColor: "rgba(123, 111, 255, 0.5)",
              fill: true,
            },
            {
              label: "Sell",
              data: this.generateData(30),
              borderColor: "#1652F0",
              backgroundColor: "rgba(22, 82, 240, 0.5)",
              fill: true,
            },
          ],
        },
        options: {
          responsive: true,
        },
      });
    }
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

    // transactionStore===================================
    const getTransaction = transactionStore();

    // Try to get the data from the store
    const transactionData = getTransaction.authTransaction;

    if (transactionData) {
      this.transactions = transactionData;
    } else {
      // If data is not available, fetch it and set the component property
      this.transactions = await getTransaction.authUserTransaction();
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