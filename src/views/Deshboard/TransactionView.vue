<template>
  <div>
    <DeshboardLayout>
      <div class="page_title"></div>

      <div class="content-body">
        <div class="container-fluid">
          <div class="row">
            <div class="col-xl-12">
              <div class="card">
                <div class="card-header border-0">
                  <h4 class="card-title">Transaction History</h4>
                </div>
                <div class="card-body pt-0">
                  <div class="transaction-table">
                    <div class="table-responsive">
                      <table class="table mb-0 table-responsive-sm">
                        <tbody>
                          <tr
                            v-for="(transactionItem, index) in displayedItems"
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
                              Using - {{ transactionItem.address }} 
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
  </div>
</template>
    

<script>
import axios from "axios";
import { useAuthUserStore } from "./../../store/user";
import { transactionStore } from "./../../store/transaction";

export default {
  data() {
    return {
      transaction: "",
      authUser: "",

      filteredPayment: "",

      // paginate
      currentPage: 1, // The current page number
      itemsPerPage: 10, // Number of items to display per page
    };
  },

  computed: {
    // Calculate the total number of pages based on the total number of items and itemsPerPage
    totalPages() {
      return Math.ceil(this.transaction.length / this.itemsPerPage);
    },
    // Get the items to display on the current page
    displayedItems() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.transaction.slice(start, end);
    },
  },

  methods: {
    // paginate=================================
    previousPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
  },

  async created() {
    // auth user data +++++++++++++++++++++++++++++

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
      this.transaction = transactionData;
    } else {
      // If data is not available, fetch it and set the component property
      this.transaction = await getTransaction.authUserTransaction();
    }

    this.$setLoading(false);
  },
};
</script>

