<template>
  <DeshboardLayout>
    <div class="page_title"></div>


    <div class="">
      <div class="d-none d-md-block">
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
                          <h5 class="m-0">Total Withdrawals</h5>
                        </div>
                        <div class="text-end">
                          <h5>{{ sumtrx }}</h5>
                          <span>USD</span>
                        </div>
                      </li>
                      <li class="d-flex">
                        <i class="cc LTC me-3"></i>
                        <div class="flex-grow-1">
                          <h5 class="m-0">Total Deposit</h5>
                        </div>
                        <div class="text-end">
                          <h5>{{ sumDeptrx }}</h5>
                          <span>USD</span>
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
                  
                  <div class="duration-option">
                    <a
                      id="all"
                      @click.prevent="updateChart('0')" :class="{
                  active: this.button === '0',
                }"
                     
                      >ALL</a
                    >
                    <a   @click.prevent="updateChart('1')" class="" :class="{
                  active: this.button === '1',
                }">1M</a>
                    <a  @click.prevent="updateChart('2')" :class="{
                  active: this.button === '2',
                }">6M</a>
                    <a  @click.prevent="updateChart('3')" :class="{
                  active: this.button === '3',
                }">1Y</a>
                    <a  @click.prevent="updateChart('4')" :class="{
                  active: this.button === '4',
                }" class="d-none d-md-inline">YTD</a>
                  </div>
                </div>
                <div class="card-body">
                  <!-- <div id="timeline-chart"></div> -->
                  <canvas id="timeline-chart"></canvas>
                  <!-- <canvas ref="chartCanvas" id="timeline-chart"></canvas> -->
                  <div class="chart-content text-center mt-2">
                    <div class="row">
                      <div class="col-xl-3 col-sm-6 col-6">
                        <div class="chart-stat">
                          <p class="mb-2">Pending Withdrawals</p>
                          <h4 class="mb-0">${{ pensumtrx }}</h4>
                        </div>
                      </div>
                      <div class="col-xl-3 col-sm-6 col-6">
                        <div class="chart-stat">
                          <p class="mb-2">Pending Deposit</p>
                          <h4 class="mb-0">${{ pensumDeptrx }}</h4>
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
                              Using - {{ transactionItem.address }} Network
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
      button:'0',
      authUser: [],
      page: "deposit",

      amount: "",
      address: "Select",
      method: "Select",
      transactions: [],
      chart: null,
      datasets: [
            {
              label: "REIT",
              data: [],
              borderColor: "#7B6FFF",
              backgroundColor: "rgba(123, 111, 255, 0.5)",
              fill: true,
            },
            {
              label: "ETFs",
              data: [],
              borderColor: "#1652F0",
              backgroundColor: "rgba(22, 82, 240, 0.5)",
              fill: true,
            },
          ],
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
      return Array.from({ length: count }, () => Math.random() * 10);
    },
    updateChart(number) {

      if (this.chartInstance) {
      // Update datasets with new data
      this.chartInstance.data.datasets[0].data = this.generateData(30);
      this.chartInstance.data.datasets[1].data = this.generateData(30);
      this.button = number;
      // Refresh the chart
      this.chartInstance.update();
    

    }
   
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
    pensumtrx() {
      // Filter withdraw transactions with status success and calculate the sum
      const withdrawSuccessTransactions = Object.values(
        this.transactions
      ).filter(
        (transaction) =>
          transaction.type === "Withdraw" && transaction.status === "pending"
      );

      // Use reduce to calculate the sum
      const sum = withdrawSuccessTransactions.reduce(
        (total, transaction) => total + transaction.amount,
        0
      );

      return sum;
    },
    pensumDeptrx() {
      // Filter withdraw transactions with status success and calculate the sum
      const withdrawSuccessTransactions = Object.values(
        this.transactions
      ).filter(
        (transaction) =>
          transaction.type === "deposit" && transaction.status === "pending"
      );

      // Use reduce to calculate the sum
      const sum = withdrawSuccessTransactions.reduce(
        (total, transaction) => total + transaction.amount,
        0
      );

      return sum;
    },

  },
  mounted() {
    // Initialize the chart data before creating the chart
  this.datasets[0].data = this.generateData(30);
  this.datasets[1].data = this.generateData(30);

  // Wait for DOM updates, then initialize the chart
  this.$nextTick(() => {
    var ctx2 = document.getElementById("timeline-chart");
    if (ctx2) {
      this.chartInstance = new Chart(ctx2, {
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
          datasets: this.datasets,
        },
        options: {
          responsive: true,
        },
      });
    }
  });


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