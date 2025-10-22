<template>
  <DeshboardLayout>
    <div class="page_title"></div>

    <div class="container-fluid">
      
      <div class="row">
        <div class="col-xl-3 col-lg-4 col-xxl-4">
          <div class="card balance-widget">
            <div class="card-header border-0 py-0">
              <h4 class="card-title">Invite Information</h4>
            </div>
            <div class="card-body pt-0">
              <div class="balance-widget">
                <div class="total-balance">
                  <h3>${{ Number(authUser.main_balance) }}</h3>
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
                 
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="col-xl-6 col-lg-8 col-xxl-8">
          <div class="card profile_chart">
            <!-- <div class="card-header py-0">
                <div class="duration-option">
                  <a
                    id="all"
                    @click.prevent="updateChart('0')"
                    :class="{
                      active: this.button === '0',
                    }"
                    >ALL</a
                  >
                  <a
                    @click.prevent="updateChart('1')"
                    class=""
                    :class="{
                      active: this.button === '1',
                    }"
                    >1M</a
                  >
                  <a
                    @click.prevent="updateChart('2')"
                    :class="{
                      active: this.button === '2',
                    }"
                    >6M</a
                  >
                  <a
                    @click.prevent="updateChart('3')"
                    :class="{
                      active: this.button === '3',
                    }"
                    >1Y</a
                  >
                  <a
                    @click.prevent="updateChart('4')"
                    :class="{
                      active: this.button === '4',
                    }"
                    class="d-none d-md-inline"
                    >YTD</a
                  >
                </div>
              </div> -->
            <div class="col-xl-6">
              <div class="">
                <div class="card-header">
                  <h4 class="card-title">Invite Link</h4>
                  <button class="btn btn-primary" >more info.</button>
                </div>
                <div class="card-body balance-widget">
                  <ul class="list-unstyled">
                    <li class="d-flex">
                      <i class="cc BTC me-3"></i>
                      <div class="flex-grow-1">
                        <h5 class="m-0">Invite Code</h5>
                      </div>
                      <div class="text-end">
                        <h5>{{ code }}  <i @click="copyLink('code')" class="fa fa-copy" style="margin-left: 5px;font-size: 18px;cursor: pointer;"></i></h5>
                      </div>
                    </li>
                 
                    <li class="d-flex">
                      <i class="cc BTC me-3"></i>
                      <div class="flex-grow-1">
                        <h5 class="m-0">Invite Link</h5>
                      </div>
                      <div class="text-end">
                        <h5> {{ invite_link }}
  <i class="fa fa-copy"  @click="copyLink('invite_link')"  style="margin-left: 5px;font-size: 18px;cursor: pointer;"></i></h5>
                      </div>
                    </li>
                 
                    
                  </ul>
               
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="container">
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
                        v-for="(transactionItem, index) in transactions.slice(
                          0,
                          4
                        )"
                        :key="index"
                      >
                        <td>
                          <span
                            class="sold-thumb"
                            :class="{
                              'sold-thumb': transactionItem.type === 'withdraw',
                              'buy-thumb': transactionItem.type !== 'withdraw',
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
                        <td>Using - {{ transactionItem.address }}</td>
                        <td
                          class=""
                          :class="{
                            'text-danger': transactionItem.type === 'withdraw',
                            'text-success': transactionItem.type !== 'withdraw',
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
      button: "0",
      authUser: [],
      page: "deposit",
      code: "21323v23",
      invite_link:'https://dashboard.wimbledoninvestments.com/register?ref=4343434',
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
      copyLink(payload) {
        if (payload == 'invite_link') {
               navigator.clipboard.writeText(this.invite_link);
        } else {
           navigator.clipboard.writeText(this.code);
        }
    
        
          this.$notify({
            title: "",
            text: "Copied to clipboard!",
            type: "sucsess",
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
          transaction.type === "withdraw" && transaction.status === "success"
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
          transaction.type === "withdraw" && transaction.status === "pending"
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

  async created() {
    const userStore = useAuthUserStore();
    const authUser = userStore.authUser;

    if (authUser) {
      this.authUser = authUser;
    } else {
      // userStore.reSetAuthUser();
      this.authUser = await userStore.reSetAuthUser();
    }



    if (this.authUser.role != 3) {
      
            this.$setLoading(false);

          this.$notify({
            title: "message",
            text: "You are not a Agent",
            type: "error",
          });

          // Change the authenticated value to false

          this.$router.push("/");
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