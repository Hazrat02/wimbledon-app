<template>
  <DeshboardLayout>
    <div>
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

      <div class="content-body">
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
                      <h3>$63411.00</h3>
                      <h6>Total Balance</h6>
                    </div>
                    <ul class="list-unstyled">
                      <li class="d-flex">
                        <i class="cc BTC me-3"></i>
                        <div class="flex-grow-1">
                          <h5 class="m-0">Bitcoin</h5>
                        </div>
                        <div class="text-end">
                          <h5>0.000242 BTC</h5>
                          <span>0.125 USD</span>
                        </div>
                      </li>
                      <li class="d-flex">
                        <i class="cc LTC me-3"></i>
                        <div class="flex-grow-1">
                          <h5 class="m-0">Litecoin</h5>
                        </div>
                        <div class="text-end">
                          <h5>0.000242 LTC</h5>
                          <span>0.125 USD</span>
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
                      <li class="d-flex">
                        <i class="cc DASH me-3"></i>
                        <div class="flex-grow-1">
                          <h5 class="m-0">Dash</h5>
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
                          <p class="mb-1">24hr Volume</p>
                          <h5>$1236548.325</h5>
                        </div>
                      </div>
                      <div class="col-xl-3 col-sm-6 col-6">
                        <div class="chart-stat">
                          <p class="mb-1">Market Cap</p>
                          <h5>19B USD</h5>
                        </div>
                      </div>
                      <div class="col-xl-3 col-sm-6 col-6">
                        <div class="chart-stat">
                          <p class="mb-1">Circulating Supply</p>
                          <h5>29.4M BTC</h5>
                        </div>
                      </div>
                      <div class="col-xl-3 col-sm-6 col-6">
                        <div class="chart-stat">
                          <p class="mb-1">All Time High</p>
                          <h5>19.783.06 USD</h5>
                        </div>
                      </div>
                      <div class="col-xl-3 col-sm-6 col-6">
                        <div class="chart-stat">
                          <p class="mb-1">Typical hold time</p>
                          <h5>88 days</h5>
                        </div>
                      </div>
                      <div class="col-xl-3 col-sm-6 col-6">
                        <div class="chart-stat">
                          <p class="mb-1">Trading activity</p>
                          <h5>70% buy</h5>
                        </div>
                      </div>
                      <div class="col-xl-3 col-sm-6 col-6">
                        <div class="chart-stat">
                          <p class="mb-1">Popularity</p>
                          <h5>#1 most held</h5>
                        </div>
                      </div>
                      <div class="col-xl-3 col-sm-6 col-6">
                        <div class="chart-stat">
                          <p class="mb-1">Popularity</p>
                          <h5>#1 most held</h5>
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
                  <h4 class="card-title">Exchange</h4>
                </div>
                <div class="card-body">
                  <div class="buy-sell-widget">
                    <form method="post" name="myform" class="currency_validate">
                      <div class="mb-3">
                        <label class="me-sm-2">Currency</label>
                        <div class="input-group mb-3">
                          <div class="input-group-prepend">
                            <label class="input-group-text"
                              ><i class="cc BTC-alt"></i
                            ></label>
                          </div>
                          <select name="currency" class="form-control">
                            <option value="">Select</option>
                            <option value="bitcoin">Bitcoin</option>
                            <option value="litecoin">Litecoin</option>
                          </select>
                        </div>
                      </div>

                      <div class="mb-3">
                        <label class="me-sm-2">Payment Method</label>
                        <div class="input-group mb-3">
                          <div class="input-group-prepend">
                            <label class="input-group-text"
                              ><i class="fa fa-bank"></i
                            ></label>
                          </div>
                          <select class="form-control" name="method">
                            <option value="">Select</option>
                            <option value="bank">
                              Bank of America ********45845
                            </option>
                            <option value="master">
                              Master Card ***********5458
                            </option>
                          </select>
                        </div>
                      </div>

                      <div class="mb-3">
                        <label class="me-sm-2">Enter your amount</label>
                        <div class="input-group">
                          <input
                            type="text"
                            name="currency_amount"
                            class="form-control"
                            placeholder="0.0214 BTC"
                          />
                          <input
                            type="text"
                            name="usd_amount"
                            class="form-control"
                            placeholder="125.00 USD"
                          />
                        </div>
                        <div class="d-flex justify-content-between mt-3">
                          <p class="mb-0">Monthly Limit</p>
                          <h6 class="mb-0">$49750 remaining</h6>
                        </div>
                      </div>
                      <button
                        type="submit"
                        name="submit"
                        class="btn btn-success btn-block"
                      >
                        Exchange Now
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
                  <a href="#">View More </a>
                </div>
                <div class="card-body">
                  <div class="transaction-table">
                    <div class="table-responsive">
                      <table class="table mb-0 table-responsive-sm">
                        <tbody>
                          <tr>
                            <td>
                              <span class="sold-thumb"
                                ><i class="fa fa-arrow-down"></i
                              ></span>
                            </td>

                            <td>
                              <span class="badge badge-danger">Sold</span>
                            </td>
                            <td><i class="cc BTC"></i> Bitcoin</td>
                            <td>Using - Bank *******5264</td>
                            <td class="text-danger">-0.000242 BTC</td>
                            <td>-0.125 USD</td>
                          </tr>
                          <tr>
                            <td>
                              <span class="buy-thumb"
                                ><i class="fa fa-arrow-up"></i
                              ></span>
                            </td>
                            <td>
                              <span class="badge badge-success">Buy</span>
                            </td>
                            <td><i class="cc LTC"></i> Litecoin</td>
                            <td>Using - Card *******8475</td>
                            <td class="text-success">-0.000242 BTC</td>
                            <td>-0.125 USD</td>
                          </tr>
                          <tr>
                            <td>
                              <span class="sold-thumb"
                                ><i class="fa fa-arrow-down"></i
                              ></span>
                            </td>
                            <td>
                              <span class="badge badge-danger">Sold</span>
                            </td>
                            <td><i class="cc XRP"></i> Ripple</td>
                            <td>Using - Card *******8475</td>
                            <td class="text-danger">-0.000242 BTC</td>
                            <td>-0.125 USD</td>
                          </tr>
                          <tr>
                            <td>
                              <span class="buy-thumb"
                                ><i class="fa fa-arrow-up"></i
                              ></span>
                            </td>
                            <td>
                              <span class="badge badge-success">Buy</span>
                            </td>
                            <td><i class="cc DASH"></i> Dash</td>
                            <td>Using - Card *******2321</td>
                            <td class="text-success">-0.000242 BTC</td>
                            <td>-0.125 USD</td>
                          </tr>
                          <tr>
                            <td>
                              <span class="sold-thumb"
                                ><i class="fa fa-arrow-down"></i
                              ></span>
                            </td>
                            <td>
                              <span class="badge badge-danger">Sold</span>
                            </td>
                            <td><i class="cc BTC"></i> Bitcoin</td>
                            <td>Using - Card *******2321</td>
                            <td class="text-danger">-0.000242 BTC</td>
                            <td>-0.125 USD</td>
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
    </div>

    <!-- <div class="container-fluid pt-4 px-4">
      <div class="row g-4">
        <div class="col-sm-6 col-xl-3">
          <div
            class="bg-secondary rounded d-flex align-items-center justify-content-between p-4"
          >
            <i class="fa fa-chart-line fa-3x text-primary"></i>
            <div class="ms-3">

              <p class="mb-2">Total Balance</p>
              <h4 class="mb-0">                        ${{ Number(authUser.main_balance) + Number(authUser.live_balance) }}
</h4>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-xl-3">
          <div
            class="bg-secondary rounded d-flex align-items-center justify-content-between p-4"
          >
            <i class="fa fa-chart-bar fa-3x text-primary"></i>
            <div class="ms-3">
              <p class="mb-2">Total Withdrawals</p>
              <h4 class="mb-0">${{sumtrx}}</h4>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-xl-3">
          <div
            class="bg-secondary rounded d-flex align-items-center justify-content-between p-4"
          >
            <i class="fa fa-chart-area fa-3x text-primary"></i>
            <div class="ms-3">
              <p class="mb-2">Last In</p>
              <h4 class="mb-0">{{lastDepositCreatedAt}}</h4>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-xl-3">
          <div
            class="bg-secondary rounded d-flex align-items-center justify-content-between p-4"
          >
            <i class="fa fa-chart-pie fa-3x text-primary"></i>
            <div class="ms-3">
              <p class="mb-2">Last Out</p>
              <h4 class="mb-0">{{lastWithdrawCreatedAt}}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container-fluid pt-4 px-4">
      <div class="row g-4">
        <div class="col-sm-12 col-xl-6">
          <div class="bg-secondary text-center rounded p-4">
            <div class="d-flex align-items-center justify-content-between mb-4">
              <h6 class="mb-0">Global Hotel Occupancy Index</h6>
            </div>
            <canvas id="worldwide-sales"></canvas>
          </div>
        </div>
        <div class="col-sm-12 col-xl-6">
          <div class="bg-secondary text-center rounded p-4">
            <div class="d-flex align-items-center justify-content-between mb-4">
              <h6 class="mb-0">Average IRR Index</h6>
            </div>
            <canvas id="salse-revenue-chart"></canvas>
          </div>
        </div>
      </div>
    </div>

    <div class="container-fluid pt-4 px-4">
      <div class="row g-4">
        <div class="col-sm-12 col-xl-6">
          <div class="bg-secondary rounded h-100 p-4">
            <h6 class="mb-4">Annual Rental Appreciation Index</h6>
            <canvas id="line-chart"></canvas>
          </div>
        </div>

        <div class="col-sm-12 col-xl-6">
          <div class="bg-secondary rounded h-100 p-4">
            <h6 class="mb-4">Country Specific Hotel Rental Tariff Index</h6>
            <canvas id="bar-chart"></canvas>
          </div>
        </div>

        <div class="bg-secondary rounded ">
        </div>
      </div>
    </div> -->
  </DeshboardLayout>
</template>
  

  
<script>
import { useAuthUserStore } from "../../store/user";
import { transactionStore } from "../../store/transaction";

import { Chart } from "chart.js/auto";

export default {
  data() {
    return {
      authUser: [],

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