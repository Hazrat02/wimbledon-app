<template>
  <DeshboardLayout>
    <div class="page_title"></div>

    <div class="content-body">
      <div class="container-fluid">
        <div class="row">
          <div class="col-xl-6 col-lg-6 col-md-6">
            <div class="card profile_card">
              <div class="card-body">
                <div class="d-flex">
                  <img
                    v-if="authUser.profile"
                    class="me-3 rounded-circle me-sm-3"
                    :src="authUser.profile"
                    width="55"
                    height="55"
                    alt="photo"
                  />
                  <img
                    v-else
                    lass="me-3 rounded-circle  me-sm-3"
                    src="https://cdn-icons-png.flaticon.com/512/3682/3682281.png"
                    alt="Photo"
                    width="55"
                    height="55"
                  />
                  <div class="flex-grow-1">
                    <span>Hello</span>
                    <h4 class="mb-2">{{ authUser.name }}</h4>
                    <p class="mb-1">
                      <span><i class="fa fa-phone me-2 text-primary"></i></span>
                      {{ authUser.Phone }}
                    </p>
                    <p class="mb-1">
                      <span
                        ><i class="fa fa-envelope me-2 text-primary"></i
                      ></span>
                      {{ authUser.email }}
                    </p>
                  </div>
                </div>

                <ul class="card-profile__info">
                  <li>
                    <h5 class="me-4">Country</h5>
                    <span class="text-muted">{{ authUser.country }}</span>
                  </li>
                  <li class="mb-1">
                    <h5 class="me-4">Birthday</h5>
                    <span>{{ authUser.birth }}</span>
                  </li>
                  <li>
                    <h5 class="text-danger me-4">Join at</h5>
                    <span class="text-danger">
                      {{ authUser.created_at.substring(0, 10) }}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-xl-6 col-lg-6 col-md-6">
            <div class="card acc_balance">
              <div class="card-header">
                <h4 class="card-title">Withdrawal Details</h4>
              </div>
              <div class="card-body">
                <div class="d-flex justify-content-between">
                  <div>
                    <span>Total Balance</span>
                    <h3>
                      {{ Number(authUser.main_balance) }}
                      USD
                    </h3>
                  </div>
                  <div
                    v-if="
                      this.allBank.some(
                        (p) => p.method_name === authUser.platform
                      )
                    "
                  >
                    <span>Bank Name</span>
                    <h3>
                      {{ authUser.bank.branch }}
                    </h3>
                  </div>
                </div>

                <div
                  class="d-flex justify-content-between my-1"
                  v-if="
                    this.allBank.some(
                      (p) => p.method_name === authUser.platform
                    )
                  "
                >
                  <div>
                    <p v-if="authUser.platform" class="mb-1">
                      {{ authUser.bank.beneficiary }}
                    </p>
                    <p v-else class="mb-1">Not Set</p>
                    <h4>Beneficiary</h4>
                  </div>
                  <div>
                    <p v-if="authUser.platform" class="mb-1">
                      {{ authUser.bank.ac_num }}
                    </p>
                    <p v-else class="mb-1">Not Set</p>
                    <h4>Account number</h4>
                  </div>
                </div>
                <div
                  class="d-flex justify-content-between my-1"
                  v-if="
                    this.allBank.some(
                      (p) => p.method_name === authUser.platform
                    )
                  "
                >
                  <div>
                    <p v-if="authUser.platform" class="mb-1">
                      {{ authUser.bank.ac_type }}
                    </p>
                    <p v-else class="mb-1">Not Set</p>
                    <h4>Account type</h4>
                  </div>
                  <div>
                    <p v-if="authUser.platform" class="mb-1">
                      {{ authUser.bank.ifsc_code }}
                    </p>
                    <p v-else class="mb-1">Not Set</p>
                    <h4>IFSC Code</h4>
                  </div>
                </div>
                <div v-else class="d-flex justify-content-between my-1">
                  <div>
                    <p v-if="authUser.platform" class="mb-1">
                      {{ authUser.wallet }}
                    </p>
                    <p v-else class="mb-1">Not Set</p>
                    <h4>Withdraw Address</h4>
                  </div>
                  <div>
                    <p v-if="authUser.platform" class="mb-1">
                      {{ authUser.network }}
                    </p>
                    <p v-else class="mb-1">Not Set</p>
                    <h4>Network</h4>
                  </div>
                </div>

                <div class="btn-group">
                  <router-link to="/deposit" class="btn btn-primary"
                    >Deposit</router-link
                  >
                  <router-link to="transaction" class="btn btn-success"
                    >History</router-link
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="">
            <div class="row">
              <div class="col-xl-6">
                <div class="card">
                  <div class="card-header">
                    <h4 class="card-title">User Profile</h4>
                  </div>
                  <div class="card-body">
                    <form
                      enctype="multipart/form-data"
                      @submit.prevent="userUpdate"
                    >
                      <div class="row">
                        <div class="mb-3 col-xl-12">
                          <label class="me-sm-2">Your Name</label>
                          <input
                            type="text"
                            v-model="name"
                            class="form-control"
                          />
                        </div>
                        <div class="mb-3 col-xl-12">
                          <div class="d-flex align-items-center mb-3">
                            <img
                              v-if="authUser.profile"
                              class="me-3 rounded-circle me-sm-3"
                              :src="authUser.profile"
                              width="55"
                              height="55"
                              alt="photo"
                            />
                            <img
                              v-else
                              lass="me-3 rounded-circle   me-sm-3"
                              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABaFBMVEX///9GyPlHxvlRqPhSpvhLuvhTpPhLu/hRqvhZk/hMt/h5OPRIxPlGyflUofhakfhUovhNtPhOsfh2QPRJwflYlvhzR/VWnfhXmfh3PPRPrvhoZ/ZqYfZuVvVJv/lbjfddh/dfgvdhe/dmbvZjdfdxTvVdifdwUfVqYvZehPdlb/ZsW/VgfvdnavZjd/fe9P7v9/7p5/3r+f7k7f5tL/PK6v274/ys3Pub1Pva8v759//BrfrVyPtxH/OH0/tzz/qC1vvD5fx4x/m74Pxwvfmt5fyv2Px7uPmU3fuQv/qozvuBs/q81PzO3/2Aq/lvofl4mPi+y/t7jfi4wPvw7/7b6f3j3f3JuPqLY/a4o/mASfWSyvrK4v1pr/mixPt2w/mYsfqRo/mSmfh3d/d/gve3uPuYlPjT0/ywyPuTxPqZivipm/mKcPaZqPqtv/uBXvaVdvfEq/qzkfipgvigdPeWY/bQwfuVi/fP5Y/IAAAWrUlEQVR4nO2diVcayRPHUQ4FlEMiiEhQVBA8uFXwPhA1GjUCxqgx6xFjkjVZ3XX//V93V88wIODMdHPse7/ve0nUhIZPqrv6qqrRaP4vdsXj6dTs3Pby8vIKaHV5dTubTaXj8VZ/NGZFUnPL6z1v3mK9AfVI1dmxsppNRVr9MdUpMrv85m1Xl4TtBR8ipH/0bs/+tzDTcytd+i7AKyesROzpBOGvVrPpVn9wWYrOLr81AZ4SRMDsXZ1t86EZn1vXm/SYTxViZwf6tZJt2w4bnXtrMiE+CliGKCXt6XnTI5B2ViACZG+2HS25tg54eiki/P5mfXl5bjaVTkcikXg8jn5Po+kju7260tH5woxUq6lWA5UrMq+3m0xliPou9Mf68lwqEq3zwngklV1dQUZ9ydi73T69NXVpB74Sot7Utbwh3zWms6sdVbrrans41zVTn8iHEdGvrnUVLjGeWkWdtoyxo7O39Z11A/HZ7VLE9Xn1//Pp7Eo5ImLMcvy0yrVhHySAFNFuv5yrN+rkKJ5d6SEOlSK2lHEN8fVRQkI5x8fJx7O9nRSyAxhb01fTm90YUERc5/kx8JgsIXZ0rjTfr0bPBgcBECH29Zm2WHtnpYghRcSOju0mLwK2BrsHRcRB00ZD3iTb21NC7Oxo5nBM5AgfIA5uNm6UpFYkVmxiV93VCoBIm2sNfS/M2CFqu6HvJShxoe0WCe2N5cNK9UoQe5tgxi0dAgTE7sGtxr8fUlZqxkaPxmjO0A0a7O4+4+0/a2pbROztWGmoUz3X6rRaINTmEo18pwpFVgTG3t5Gzv+7Bh0ixIhabXM6aEnZkhUb53ByNp0OEHW5pnVQUXHBjL29HasNeYeE1mbQEURd0w0IyoodtSE+9dxgMxgIouGimSNQKmE0YkTug3HPhQExouWMd9sKtC0g9vKeNnZdNiA06M75tqxQKdGj8vU3Oy6LjSBaWtZDBVGH08vX3+RcFgtBtOzwa1S1VvkjvsOACNHi2uXVJJOyvBEpINI+nwaZNSuOxRUezb0bEAhb62OkSvNERIAujOiytdrHSBXp5dZR3/W7sBBg89dp9RTnhbgDgC6Xob0AuSF+Ng7gTuoaaDtAKSLD1L+HADHigKX9AKWIqhdw+9b+ASJXOwJKEVUuwxP9SG0MKEVUt5kaMBLE/oF2mibKFRE3U2pe/d7aD2qXlUw1pRh2/Z99RmJD6x73j8VTs3SNqtyh7iNAjGj91ojPxVHCMlypt4larVaMaH3H9/NEsfg2STdTHb3KzlEPfATResDtg6Tnzi5N9KpRv748xy8IYYWORUWL8G8BK5GRjxuNbF3aK6/7Tfr1OT4HZnHhHFXBxF8I+LANrT4ebjS6sUnviaV4JCJFvz7Lo8um6PGUglnxEAEiRN8D+7tH5/sGxYvwSkQcdjPPgVG41pA9Kz4M+zCij30QRucHy+76XyIicWBcUXa/mMCAWMyDcKOvdNdfitgoR8TxYbOsbxQRLjXk9dPDQADzBY4Y3za6KbnrB5n0l5eXXSbgLCHq11nNmKX9VJY//RYKYMQAax89F26KSTBDn2l+rTRBRNbmu0RGEubHekhP+2mnDH+aHw5g+YYZ/1vLL/urBKPE5y4pI0bUz7G9XVzop6/P+19ChDDE2EfvJYBnhRr/KL0MjDgKVb/M9oa0n3a+6mwKI8PYiMOMfXRTS+/6B7sv63WG6LoYVaxfZ3vLFZnO5jA0jBGH2fxoTgd3/YPdfbXsJyj9lhNiRJ6zuZsaxgp9YXqzHR0NZ9DKuQaYN/HpqHTe76zvtAKhECHMsLzVvUEIZ5B3Sp4SEedZ3jYqZ2VzNBXCiCNMbmbDAOEM2kG5XT3SJSAyzf2Cs6nXSGAkhHXI8j4JA4QzaC/kzzdRAbGLabtBo6fqGPHIP4IRp+5Y3ubCAOEMCgBLiGzeJkWjimtP+8MjSKERJhPuWmjEhrIVQ5zOiyammZ+G+dU0IjYh0hTLrjBqgYgNw2uzRKUEd2NiCepK0fD3Wu40NDWFCZlMmCMBDTqb8oibOUBk66c0HrWGEfdnpjCin8WEBQtEbORUvHadIrKc4KQgqriGEQ/9U1gBhjfQ5CzEhqpuU+OwRmUzYgfEhldd2MRmCKCfZS4suEhQikVdRMMcRWQyIs0oqjbrfJkhNhxmaF5zT+JubDp1O69oF+ymmFY2EOFfbYuRmfL7EaKf6fQJwm5UmlAwol7P8hGyYMTel//JR2N+rKk8Q+v7EFmk+j41Sk8ZWYLH0VaYML70NVczGHDmD4bGhcibe9UNLBNEE5OvWYVu+sLX5MMzGHGM6QwYAF1KJ/uS0nYwIsuHSNGssMqVwzEiRIgjLG0XILbIwNAE+BoT06UG7aaVi1P/GCKcGTtmaXqXELo+MzQxTw412BanWZplW/7T2OgYRgyz+Bk0DHH0lIslOGzNjhHZBmKcJqKWT4m34TGEOPaBpWWNBYKLWI4ho5Bo28X0OWgeank3/YAJx8JMnTRKo6eYPl0XHPgzZY1kq3jTGAEcY+ukCRI+5WK7NV6HSw0mVxOnKzfpf9PxNCFk66QFEgM3wBZGfAYJxWyH/FW66dUoNmL4lqnd/X5sxAEWV0qcKSZkS4nLgq9ZLf0kMxYOI8TRGFO7e/0kBo4tUnoObt/Y7tvSdG1a+knRE8byMzULcX6cCBnTbmHO7ymN5lvPKAIcvWJrFiIZ+3kQ2hkJYW3aUxqIH6ZHEeI043UTJWQLMZq3cxiHcJghHYgTo0hhD9NcgTyNEUcy9jN6GjsHXyoua4TvY0PTBJGtVU3BioM1+xnnQ3IBbmeNJwLAHmHhdjwxjRCnGYchjUftf8/UyCXc8bPGEtGBKLjkK880QvQwLdmQohCs6WK5t4pCYJiJOXKBdNOeVfrtNSacnmCbDZEOSLgmU6RYBMJSNlk/SqRHuoPKeAihh+nOEOsdELIEpG4AIXuKY5mriQ1hRM8Nc6t7EFXM4mouCWEfe52NlR6Jq7mb9CBED6ujQa7GB0ZkaAJi4PrYgxZXgRBmnVtkQ49ngm3ZTdRPAqet6k+z1khJnz6mkyhQlhTW6oGD4a+EcIjpWhT0YMWIRvXzxSYEhzEdeoNSpAwcdaY3QMjsStGc7yOx4aq9aQSC4AY5xA9HoKIf2ednRicm8EBkXLMRHeDg8H6jWl9zBoTMc4WG7PMxYwf+Oj+B5Jm45tCs5huJ8DeqNGKClvThUs+gA8oV4pOM2CRGnGCfLJCiRhLhr3IkXpJIxkE7l2D+Faisib1y0TuEAIe+8mhW8+AjiKoCxM9prB8HP6PB0wURHtKL3iGEOPknl3aFPA2jcjtEhXBUPvkY20CIJ8RbRDg0MclhOsT65iOIVuX9dJMScqoqkgVCvM1fwIRDk4t8GtYYKaLSjfCulpqQ0+eYhRKweMr/QQi9HCZ8okIAOqpP2QJ8S0drT6m/mitXqkT4FQiLnFrGzkY54rmOxqNyK5ySBsJV9OW/3kncS7kRCjlTRgV5fedCQKqaOJzqSveIhN+9kwhxksOijSrvExDlHrvRCmnd3QqD4eopAjbEy7YbRIjEjxCnTdGOKm/5tmOjFcS0vAahhi5MgfCaO6FmT0C0Drz+mQvdQgUxLc/CG/GGEiJEq5CiuVO/40XvbTpaQUzHtb5W/E0lIY+tRUl7wz4B0VhnNEZ3bTYdjUc18C2dEoea6JjwNyH0crUhziMWEBHj5+p7jcS9xULLayFxrg0Th+rvQOhtAKEm0S8g9uNF3LfKAVnYvcBBcLS8Fv8KaRFS4B4IgxiRO6FG8yUgIKJtv9Hoev95b7+QSCQK+3uf39lcQu0pLIYwqlqKwHMKMOF3ROhtBKFmj65Rjf1lIsVEaN0igmhrRIW0yNtyQm+Q35pGovdliLSMCJT0sYiIFn4LGYnSQIjTcL4SwnFeK29Rmf2Hg9JYLCG6XiBqc7vn3IuLSAh/jDeAMP/twBegGeH1EXHELQ6Gy3Gul50CQry3OAXCZ36NJx6soWGSaWuthyhhxKHhNsvFLkeHOksI3+IIuRMn7qbjC5xazh8djpAkTV9VRKHkTUVHhUnDYONnyTkgxHv8Z2cQIQZ/cGm38CU0EoI8WwERfiEZBw4O3hMduAb6+ys9KsyLBu09n+X3NhDigIA7RBj0Br9zaHXPNzVCsvskiGgRfvDl236h0jZoWtzdubC4yuZFWh+Vx+SxDIT4rC2GCYPB38xtHg37R0KQvwiMw8PWg4f9+mMrsb/7zuCyWKSIOkM3+yJ8nTy35y0+L80HxzHhT8YWjwI4ayokIoZCB99eGK66ooXddxaXRYKoZWd8A48mwmfemV+E0Mu0uUD2IzlTkL8YGpn6Y0+Zy4ju51yQb0M3Uzq2vhqFxy/1kG9+jmNEJ8OyLfaB5NtQxJGRQ3UX3fs5m6WEqDVcMPicCDxpCmJMvzsxolP1gWn+zzHImCKI/sCD+lktsXthKSFqdfeq544UEELu9CkiHA861U6IR/4xkm0DWVOHrGuj8wuLiNit61Z7oz8HhBASv+hAhONOdVcz+avwDCTbIDz/IY+SPYUcMGJErW5TnRmXyQPRaLmNIiEcV+VMj8JjJE+D6JDXDqyQM9B0aVzfXpUZ1+G5bxDykHE6iRGVx9NkrqZJEgPJtuFiP0HIjgJit6rRCI+1E2L+fxFCh+IdYsxPAuBJKgpT2mI1nesMWuExBbIT+0Wl9QTxDf32uwMjOk8UtnLsgQj/sZmx8BelH0GG7sUnMXQrLuQ/qyedVChDceLG/dSpcGX6pydMCcMfGnAEosHPezFoKaJO4Y3NMjycUIhNLCadCNE5rqSJzAcSGz7GHuJfT7sG0YrKfCo8f1EvxlYhGyJEtwJL5K9J4DRCHPU3xoAgZEbhTkPJ7XfcBIjiD347MKJD/jY/5oGo4nB4miklU4ZwoRR6MyXf36wBYSkv6C9iRPkDsYiDGUeJeLvQl9rQic+2kb1OXYZKKaUkPzIQnU6vzNffTZCA1NHR6XAje6ighFYxYheUESlFj2U+EUKZMyKO1pwmMbc3zEG3shTNCSV9ZF4wpkl1Bv1byY+eyEB0n8p5OQlHxYgT7BGpcrWjDJFmvUuLMp2YiRHlLE2LJM4PIQ7xiTGSpzObko56CdnE0uSpmBuM+Pqwyk8MASGvECOZ2hURX580aFp/eZrmRyB8dY+YmcBBcDgctbmAGs2W0FEHX0Wcg3Tp8mTiv8wY0fHxtRdfTw6RYM0mWxBLQNS+epFzSRJtKxLCY0kHRky+0k1JdBEi9DYfsNRRta9cNsbtkC5dEQ4/7sCIr3jT2yAOnxriFcioVGcGWTsNmsJYmQ++kMSIjrqr77vxSUI4yScWVbnu6dSvq+tQaQXYyqoFeUzocJrrHCTlcUQDBuQSTqxKOWF1U8fbpGiV2xf/5G83RnQ/1X4pBE8NTU40ZyVTVXQBp60T7L4OhC/LMjwTIzocNX3NwjiJu2nIjb9sJehOo3Z0UdReKws184kY0VzL1xTHIbIoyCvUVp3O6X5RW2srtQWE1eoUPYIRa/kaDwlKmeR0z6heZ2BFba1YYijDbK8WDl8EwmT1ffACuQuf9LJeUbHrAg42avRTSO8z2avmhv1tJoifqv1djAB6veN8w9/UKEqPp6r3UxMkMF5WfendEhmJyWoD7TcQjis9cWyEtuB4qqo/XRskgH01csGDZozorrI4XSR3/d5g62ZCqXL02qbKBSN9SEGtemjPSbe7uhG9+IYREbZyoigpAafh2u4XfwP5i/a+mgULPpkx4ksjnsJVv+oLON7agtNw3YsCFTR/sXaG5gkyovulO82QK9Rg8Bf3j6pWF/QKtWJltkbzF+vcVmEjuh3uYPlPf5Ar1KCDe+ibap3DzVTlWb998BUTUiO6Hcmy7hgjV1OK7zUaqhy9Xywz4hbNX6x74UiMiBCli+sfcIPKEsrAXQlajllqxOggzV+s+8rnJUzoTj6WfpR3khvUtjIhXL1hK0qMeEYL+b9S+eUfMyCWDodP3UDYTiYUjKiTrN0KNLvvtSziYpIgmkt+k5zCKbjUaJJonoZO/EGOEr6aCP4EiKKzOYE7jdfOqJquKARsGAS3sgX5izKS3/JmMyDSNfYvuHljD+zjLYjX0F3Ad1EtfZ6GjFvGv5YIohlWNvRaKtmQQHcmFVzS0ug5eGSIvIC/X2DF5F/4m0e3vKPiFuiCxMAZyOnplk5J/mJxCRDNRXy2Qc5Rk+2wa6rUBoT54XO3hJC/KPOa+BEQsT+l51PO1m98XyqqgwL352TfL/uRKESfkgQx+aR5Ivt+d7tNFaB7iCveEe76tReyX0r6KUJcOoETxnrnxC0UFPHX6TZsdEusIHTqlCKS/WKNo5s2kE4SHK7VGhQFTv2TNNN5ESGaH19/QUt0L40N1ylLn8LzvojYhpMhqOCSGlFhBOPiUgnR3ZjPx0E2i4ioPMn2UUQ017mtabF2xDwNm4qiojAU8aTBMemLs85dNNvGpiaHMeOmiG07DPFApFmoWlUvLwKh2exoxxUNVtRGExgNKhMgqLcxmz+18E60jqIGF2S+WVSn1yyIiO1oRQposbgYalFSh2pOBtsPsQTIVJv5SUBsu44atQ1AgqaLrQi85u827ahRywAk2rqYc93/ERDd7TRpJFxCvjSHx9uLiG20hyoIydIDHAA1GRGxbRY3+0LpCS6AGokVl2QFETdc34w0r5+xdrhEortZaodj03dWmtTPD7A0abiTH1t99p0/sNK6BUbGaaJcjyKiu7UxUftGK63OYGQr4P9CwgLObV5q5ZnG54CVFqBgKhteVc9Jcb/Ysp6aOAiIhZl45nNSFR0CotndmiPwPagGQ+rA8S4rRSRMjPhO4+/mr+Gi78V6Nz625y/UkeTspuk3GUekoA9B9HH2MVI9m8Vz1OTHZq5TEwchod6Nj6Hmuwzl/1kSEM3mx6btqB5wsRSochM44F5SqkKnS0nhHDVpbk5XPRoOifVuAmwP6pGlu09L4lFxsgkx0fuHI2JJn+FDjvU/6+hRRHSg4dhYxv3DqVLVomGmB90qUTG4JF7bNJQR8Y3Qkj6BQOiwIZNgDZ2akwIiYgw2ZuN4h8sWCVWLQs0YgVLF0HZDQHQ4ksFT3iu5/AMtW0QQQyNfGu1CX6r4CxjpNbHjiechx/4fU/5S1aLQVJM8TKWeP5GuCogOt3mckyHzx1Nj8JBwQJwKcN9HyNYCYaSITux1Flgh88cfwmN+sWoRLsvU+Jz/OsogxhKiE0G6f56qX87Fbj+EcU0fv4jYYj6iE7QCKCESSu/Ts3JTxo6u/ORhoTNC1aIp/8xw6/mwFv9JJt0SRELpfDopyl23ZorHV6Oe6VGh3g0gzsxwLVvEpuLjJ2AUEcfHEabz4/eFxVi+NmgmHzu6vbqemMB4YaHeDVQtmvrS6kOvcmWefyaT5YgkOBwp+PHn9x8LJ4t3xWIMVCzeLR4v/Pj35tozidP7p4VKKQJiOHx1125XQUj5hfGkucQIiEEq+NrrhSRG8ifOCqcFKKSI4fDo1HF7XQNJFDv96BAhJYiQ+AZ0kEw8BHn9ngrE0enwh+P26p0vFDt5CiahCEVNxKGqiNMez9jVUZvjgTLFhd9uQikX0eOZGPJ8vY214dirrdjz4y8n6bDAWAMRZ79PeK7/aPeuWUOZ4uLC95+/gk4wpwSU4nqub77e3v034SRCk15x8WTh9Me/37/f3Fzf3Nz8+/XH6cLtYrHeVPl/ydb/AJc21O1ZjI9PAAAAAElFTkSuQmCC"
                              alt="Photo"
                              width="55"
                              height="55"
                            />

                            <div class="flex-grow-1">
                              <h4 class="mb-0">{{ authUser.name }}</h4>
                              <p class="mb-0">Max file size is 5mb</p>
                            </div>
                          </div>
                          <div
                            class="file-upload-wrapper"
                            data-text="Change Photo"
                          >
                            <input
                              name="file-upload-field"
                              type="file"
                              class="file-upload-field"
                              @change="image"
                            />
                          </div>
                        </div>
                        <div class="col-12">
                          <button class="btn btn-success waves-effect">
                            Save
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div class="col-xl-6">
                <div class="card">
                  <div class="card-header">
                    <h4 class="card-title">User Profile</h4>
                  </div>
                  <div class="card-body">
                    <form @submit.prevent="userUpdate">
                      <div class="row">
                        <div class="mb-3 col-xl-12">
                          <label class="me-sm-2">Email</label>
                          <input
                            disabled
                            type="email"
                            class="form-control"
                            :value="authUser.email"
                          />
                        </div>
                        <div class="mb-1" style="position: relative">
                          <label for="password">New Password</label>
                          <input
                            name="password"
                            placeholder="Enter Your Pass"
                            v-model="password"
                            :type="passwordFieldType"
                            id="password"
                            required
                            class="form-control"
                          />
                        </div>
                        <div class="mb-1">
                          <label for="">Retype New Password</label>
                          <input
                            placeholder="Retype  Pass"
                            name="password_confirmation"
                            :type="passwordFieldType"
                            v-model="password_confirmation"
                            required
                            class="form-control"
                          />
                        </div>

                        <div
                          class="row d-flex justify-content-between mt-4 mb-2"
                        >
                          <div class="mb-1">
                            <label class="toggle">
                              <input
                                class="toggle-checkbox"
                                v-model="showPassword"
                                type="checkbox"
                              />
                              <div class="toggle-switch"></div>
                              <span class="toggle-label">Show Password</span>
                            </label>
                          </div>
                        </div>
                        <div class="col-12">
                          <button class="btn btn-success waves-effect">
                            Save
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div class="col-xl-12">
                <div class="card">
                  <div class="card-header">
                    <h4 class="card-title">Personal Information</h4>
                  </div>
                  <div class="card-body">
                    <form @submit.prevent="userUpdate">
                      <div class="row">
                        <div class="mb-3 col-xl-6">
                          <label class="me-sm-2">Your Name</label>
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Maria Pascle"
                            v-model="name"
                          />
                        </div>

                        <div class="mb-3 col-xl-6">
                          <label class="me-sm-2">Date of birth</label>
                          <input
                            v-model="birth"
                            type="date"
                            class="form-control"
                            placeholder=""
                            id="datepicker"
                          />
                        </div>

                        <div class="mb-3 col-xl-6">
                          <label class="me-sm-2">Phone No.</label>
                          <input
                            type="number"
                            class="form-control"
                            v-model="phone"
                          />
                        </div>

                        <div class="mb-3 col-12">
                          <button class="btn btn-success ps-5 pe-5">
                            Save
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div class="col-xl-12">
                <div class="card">
                  <div class="card-header">
                    <h4 class="card-title">Nominee Information</h4>
                  </div>
                  <div class="card-body">
                    <form @submit.prevent="nomineeSave">
                      <div class="row">
                        <div class="mb-3 col-xl-6">
                          <label class="me-sm-2">Name</label>
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Nominee Full Name"
                            v-model="Nname"
                          />
                        </div>

                        <div class="mb-3 col-xl-6">
                          <label class="me-sm-2">Email</label>
                          <input
                            v-model="Nemail"
                            placeholder="Nominee Email"
                            type="email"
                            class="form-control"
                          />
                        </div>

                        <div class="mb-3 col-xl-6">
                          <label class="me-sm-2">Phone No.</label>
                          <input
                            type="number"
                            placeholder="Nominee Phone No."
                            class="form-control"
                            v-model="Nphone"
                          />
                        </div>
                        <div class="mb-3 col-xl-6">
                          <label class="me-sm-2">Select Country</label>
                          <select class="form-control" v-model="Ncountry">
                            <option selected disabled value="select">
                              Select
                            </option>
                            <option value="Afghanistan">Afghanistan</option>
                            <option value="Albania">Albania</option>
                            <option value="Algeria">Algeria</option>
                            <option value="American Samoa">
                              American Samoa
                            </option>
                            <option value="Andorra">Andorra</option>
                            <option value="Angola">Angola</option>
                            <option value="Anguilla">Anguilla</option>
                            <option value="Antartica">Antarctica</option>
                            <option value="Antigua and Barbuda">
                              Antigua and Barbuda
                            </option>
                            <option value="Argentina">Argentina</option>
                            <option value="Armenia">Armenia</option>
                            <option value="Aruba">Aruba</option>
                            <option value="Australia">Australia</option>
                            <option value="Austria">Austria</option>
                            <option value="Azerbaijan">Azerbaijan</option>
                            <option value="Bahamas">Bahamas</option>
                            <option value="Bahrain">Bahrain</option>
                            <option value="Bangladesh">Bangladesh</option>
                            <option value="Barbados">Barbados</option>
                            <option value="Belarus">Belarus</option>
                            <option value="Belgium">Belgium</option>
                            <option value="Belize">Belize</option>
                            <option value="Benin">Benin</option>
                            <option value="Bermuda">Bermuda</option>
                            <option value="Bhutan">Bhutan</option>
                            <option value="Bolivia">Bolivia</option>
                            <option value="Bosnia and Herzegowina">
                              Bosnia and Herzegowina
                            </option>
                            <option value="Botswana">Botswana</option>
                            <option value="Bouvet Island">Bouvet Island</option>
                            <option value="Brazil">Brazil</option>
                            <option value="British Indian Ocean Territory">
                              British Indian Ocean Territory
                            </option>
                            <option value="Brunei Darussalam">
                              Brunei Darussalam
                            </option>
                            <option value="Bulgaria">Bulgaria</option>
                            <option value="Burkina Faso">Burkina Faso</option>
                            <option value="Burundi">Burundi</option>
                            <option value="Cambodia">Cambodia</option>
                            <option value="Cameroon">Cameroon</option>
                            <option value="Canada">Canada</option>
                            <option value="Cape Verde">Cape Verde</option>
                            <option value="Cayman Islands">
                              Cayman Islands
                            </option>
                            <option value="Central African Republic">
                              Central African Republic
                            </option>
                            <option value="Chad">Chad</option>
                            <option value="Chile">Chile</option>
                            <option value="China">China</option>
                            <option value="Christmas Island">
                              Christmas Island
                            </option>
                            <option value="Cocos Islands">
                              Cocos (Keeling) Islands
                            </option>
                            <option value="Colombia">Colombia</option>
                            <option value="Comoros">Comoros</option>
                            <option value="Congo">Congo</option>
                            <option value="Congo">
                              Congo, the Democratic Republic of the
                            </option>
                            <option value="Cook Islands">Cook Islands</option>
                            <option value="Costa Rica">Costa Rica</option>
                            <option value="Cota D'Ivoire">Cote d'Ivoire</option>
                            <option value="Croatia">Croatia (Hrvatska)</option>
                            <option value="Cuba">Cuba</option>
                            <option value="Cyprus">Cyprus</option>
                            <option value="Czech Republic">
                              Czech Republic
                            </option>
                            <option value="Denmark">Denmark</option>
                            <option value="Djibouti">Djibouti</option>
                            <option value="Dominica">Dominica</option>
                            <option value="Dominican Republic">
                              Dominican Republic
                            </option>
                            <option value="East Timor">East Timor</option>
                            <option value="Ecuador">Ecuador</option>
                            <option value="Egypt">Egypt</option>
                            <option value="El Salvador">El Salvador</option>
                            <option value="Equatorial Guinea">
                              Equatorial Guinea
                            </option>
                            <option value="Eritrea">Eritrea</option>
                            <option value="Estonia">Estonia</option>
                            <option value="Ethiopia">Ethiopia</option>
                            <option value="Falkland Islands">
                              Falkland Islands (Malvinas)
                            </option>
                            <option value="Faroe Islands">Faroe Islands</option>
                            <option value="Fiji">Fiji</option>
                            <option value="Finland">Finland</option>
                            <option value="France">France</option>
                            <option value="France Metropolitan">
                              France, Metropolitan
                            </option>
                            <option value="French Guiana">French Guiana</option>
                            <option value="French Polynesia">
                              French Polynesia
                            </option>
                            <option value="French Southern Territories">
                              French Southern Territories
                            </option>
                            <option value="Gabon">Gabon</option>
                            <option value="Gambia">Gambia</option>
                            <option value="Georgia">Georgia</option>
                            <option value="Germany">Germany</option>
                            <option value="Ghana">Ghana</option>
                            <option value="Gibraltar">Gibraltar</option>
                            <option value="Greece">Greece</option>
                            <option value="Greenland">Greenland</option>
                            <option value="Grenada">Grenada</option>
                            <option value="Guadeloupe">Guadeloupe</option>
                            <option value="Guam">Guam</option>
                            <option value="Guatemala">Guatemala</option>
                            <option value="Guinea">Guinea</option>
                            <option value="Guinea-Bissau">Guinea-Bissau</option>
                            <option value="Guyana">Guyana</option>
                            <option value="Haiti">Haiti</option>
                            <option value="Heard and McDonald Islands">
                              Heard and Mc Donald Islands
                            </option>
                            <option value="Holy See">
                              Holy See (Vatican City State)
                            </option>
                            <option value="Honduras">Honduras</option>
                            <option value="Hong Kong">Hong Kong</option>
                            <option value="Hungary">Hungary</option>
                            <option value="Iceland">Iceland</option>
                            <option value="India">India</option>
                            <option value="Indonesia">Indonesia</option>
                            <option value="Iran">
                              Iran (Islamic Republic of)
                            </option>
                            <option value="Iraq">Iraq</option>
                            <option value="Ireland">Ireland</option>
                            <option value="Israel">Israel</option>
                            <option value="Italy">Italy</option>
                            <option value="Jamaica">Jamaica</option>
                            <option value="Japan">Japan</option>
                            <option value="Jordan">Jordan</option>
                            <option value="Kazakhstan">Kazakhstan</option>
                            <option value="Kenya">Kenya</option>
                            <option value="Kiribati">Kiribati</option>
                            <option
                              value="Democratic People's Republic of Korea"
                            >
                              Korea, Democratic People's Republic of
                            </option>
                            <option value="Korea">Korea, Republic of</option>
                            <option value="Kuwait">Kuwait</option>
                            <option value="Kyrgyzstan">Kyrgyzstan</option>
                            <option value="Lao">
                              Lao People's Democratic Republic
                            </option>
                            <option value="Latvia">Latvia</option>
                            <option value="Lebanon" selected>Lebanon</option>
                            <option value="Lesotho">Lesotho</option>
                            <option value="Liberia">Liberia</option>
                            <option value="Libyan Arab Jamahiriya">
                              Libyan Arab Jamahiriya
                            </option>
                            <option value="Liechtenstein">Liechtenstein</option>
                            <option value="Lithuania">Lithuania</option>
                            <option value="Luxembourg">Luxembourg</option>
                            <option value="Macau">Macau</option>
                            <option value="Macedonia">
                              Macedonia, The Former Yugoslav Republic of
                            </option>
                            <option value="Madagascar">Madagascar</option>
                            <option value="Malawi">Malawi</option>
                            <option value="Malaysia">Malaysia</option>
                            <option value="Maldives">Maldives</option>
                            <option value="Mali">Mali</option>
                            <option value="Malta">Malta</option>
                            <option value="Marshall Islands">
                              Marshall Islands
                            </option>
                            <option value="Martinique">Martinique</option>
                            <option value="Mauritania">Mauritania</option>
                            <option value="Mauritius">Mauritius</option>
                            <option value="Mayotte">Mayotte</option>
                            <option value="Mexico">Mexico</option>
                            <option value="Micronesia">
                              Micronesia, Federated States of
                            </option>
                            <option value="Moldova">
                              Moldova, Republic of
                            </option>
                            <option value="Monaco">Monaco</option>
                            <option value="Mongolia">Mongolia</option>
                            <option value="Montserrat">Montserrat</option>
                            <option value="Morocco">Morocco</option>
                            <option value="Mozambique">Mozambique</option>
                            <option value="Myanmar">Myanmar</option>
                            <option value="Namibia">Namibia</option>
                            <option value="Nauru">Nauru</option>
                            <option value="Nepal">Nepal</option>
                            <option value="Netherlands">Netherlands</option>
                            <option value="Netherlands Antilles">
                              Netherlands Antilles
                            </option>
                            <option value="New Caledonia">New Caledonia</option>
                            <option value="New Zealand">New Zealand</option>
                            <option value="Nicaragua">Nicaragua</option>
                            <option value="Niger">Niger</option>
                            <option value="Nigeria">Nigeria</option>
                            <option value="Niue">Niue</option>
                            <option value="Norfolk Island">
                              Norfolk Island
                            </option>
                            <option value="Northern Mariana Islands">
                              Northern Mariana Islands
                            </option>
                            <option value="Norway">Norway</option>
                            <option value="Oman">Oman</option>
                            <option value="Pakistan">Pakistan</option>
                            <option value="Palau">Palau</option>
                            <option value="Panama">Panama</option>
                            <option value="Papua New Guinea">
                              Papua New Guinea
                            </option>
                            <option value="Paraguay">Paraguay</option>
                            <option value="Peru">Peru</option>
                            <option value="Philippines">Philippines</option>
                            <option value="Pitcairn">Pitcairn</option>
                            <option value="Poland">Poland</option>
                            <option value="Portugal">Portugal</option>
                            <option value="Puerto Rico">Puerto Rico</option>
                            <option value="Qatar">Qatar</option>
                            <option value="Reunion">Reunion</option>
                            <option value="Romania">Romania</option>
                            <option value="Russia">Russian Federation</option>
                            <option value="Rwanda">Rwanda</option>
                            <option value="Saint Kitts and Nevis">
                              Saint Kitts and Nevis
                            </option>
                            <option value="Saint LUCIA">Saint LUCIA</option>
                            <option value="Saint Vincent">
                              Saint Vincent and the Grenadines
                            </option>
                            <option value="Samoa">Samoa</option>
                            <option value="San Marino">San Marino</option>
                            <option value="Sao Tome and Principe">
                              Sao Tome and Principe
                            </option>
                            <option value="Saudi Arabia">Saudi Arabia</option>
                            <option value="Senegal">Senegal</option>
                            <option value="Seychelles">Seychelles</option>
                            <option value="Sierra">Sierra Leone</option>
                            <option value="Singapore">Singapore</option>
                            <option value="Slovakia">
                              Slovakia (Slovak Republic)
                            </option>
                            <option value="Slovenia">Slovenia</option>
                            <option value="Solomon Islands">
                              Solomon Islands
                            </option>
                            <option value="Somalia">Somalia</option>
                            <option value="South Africa">South Africa</option>
                            <option value="South Georgia">
                              South Georgia and the South Sandwich Islands
                            </option>
                            <option value="Span">Spain</option>
                            <option value="SriLanka">Sri Lanka</option>
                            <option value="St. Helena">St. Helena</option>
                            <option value="St. Pierre and Miguelon">
                              St. Pierre and Miquelon
                            </option>
                            <option value="Sudan">Sudan</option>
                            <option value="Suriname">Suriname</option>
                            <option value="Svalbard">
                              Svalbard and Jan Mayen Islands
                            </option>
                            <option value="Swaziland">Swaziland</option>
                            <option value="Sweden">Sweden</option>
                            <option value="Switzerland">Switzerland</option>
                            <option value="Syria">Syrian Arab Republic</option>
                            <option value="Taiwan">
                              Taiwan, Province of China
                            </option>
                            <option value="Tajikistan">Tajikistan</option>
                            <option value="Tanzania">
                              Tanzania, United Republic of
                            </option>
                            <option value="Thailand">Thailand</option>
                            <option value="Togo">Togo</option>
                            <option value="Tokelau">Tokelau</option>
                            <option value="Tonga">Tonga</option>
                            <option value="Trinidad and Tobago">
                              Trinidad and Tobago
                            </option>
                            <option value="Tunisia">Tunisia</option>
                            <option value="Turkey">Turkey</option>
                            <option value="Turkmenistan">Turkmenistan</option>
                            <option value="Turks and Caicos">
                              Turks and Caicos Islands
                            </option>
                            <option value="Tuvalu">Tuvalu</option>
                            <option value="Uganda">Uganda</option>
                            <option value="Ukraine">Ukraine</option>
                            <option value="United Arab Emirates">
                              United Arab Emirates
                            </option>
                            <option value="United Kingdom">
                              United Kingdom
                            </option>
                            <option value="United States">United States</option>
                            <option
                              value="United States Minor Outlying Islands"
                            >
                              United States Minor Outlying Islands
                            </option>
                            <option value="Uruguay">Uruguay</option>
                            <option value="Uzbekistan">Uzbekistan</option>
                            <option value="Vanuatu">Vanuatu</option>
                            <option value="Venezuela">Venezuela</option>
                            <option value="Vietnam">Viet Nam</option>
                            <option value="Virgin Islands (British)">
                              Virgin Islands (British)
                            </option>
                            <option value="Virgin Islands (U.S)">
                              Virgin Islands (U.S.)
                            </option>
                            <option value="Wallis and Futana Islands">
                              Wallis and Futuna Islands
                            </option>
                            <option value="Western Sahara">
                              Western Sahara
                            </option>
                            <option value="Yemen">Yemen</option>
                            <option value="Serbia">Serbia</option>
                            <option value="Zambia">Zambia</option>
                            <option value="Zimbabwe">Zimbabwe</option>
                          </select>
                        </div>
                        <div class="mb-3 col-xl-6">
                          <label class="me-sm-2">Address</label>
                          <input
                            type="text"
                            placeholder="Nominee Address"
                            class="form-control"
                            v-model="Naddress"
                          />
                        </div>
                        <div class="mb-3 col-xl-6">
                          <label class="me-sm-2">City</label>
                          <input
                            type="text"
                            class="form-control"
                            v-model="Ncity"
                            placeholder="Enter Nominee City"
                          />
                        </div>
                        <div class="mb-3 col-xl-6">
                          <label class="me-sm-2">Postal Code</label>
                          <input
                            type="number"
                            placeholder="1234"
                            class="form-control"
                            v-model="Npostal"
                          />
                        </div>

                        <div class="mb-3 col-xl-6">
                          <label class="me-sm-2">Select Type</label>
                          <select class="form-control" v-model="Ntype">
                            <option value="Select" disabled>Select</option>
                            <option value="1">ID Proof</option>
                            <option value="2">Address Proof</option>
                          </select>
                        </div>

                        <div class="mb-3 col-xl-12" v-if="Ntype == 2">
                          <div class="d-flex align-items-center mb-3">
                            <img
                              v-if="Nfile"
                              class="me-3 rounded-circle me-sm-3"
                              :src="Nfile"
                              width="55"
                              height="55"
                              alt="photo"
                            />
                            <img
                              v-else
                              lass="me-3 rounded-circle   me-sm-3"
                              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABaFBMVEX///9GyPlHxvlRqPhSpvhLuvhTpPhLu/hRqvhZk/hMt/h5OPRIxPlGyflUofhakfhUovhNtPhOsfh2QPRJwflYlvhzR/VWnfhXmfh3PPRPrvhoZ/ZqYfZuVvVJv/lbjfddh/dfgvdhe/dmbvZjdfdxTvVdifdwUfVqYvZehPdlb/ZsW/VgfvdnavZjd/fe9P7v9/7p5/3r+f7k7f5tL/PK6v274/ys3Pub1Pva8v759//BrfrVyPtxH/OH0/tzz/qC1vvD5fx4x/m74Pxwvfmt5fyv2Px7uPmU3fuQv/qozvuBs/q81PzO3/2Aq/lvofl4mPi+y/t7jfi4wPvw7/7b6f3j3f3JuPqLY/a4o/mASfWSyvrK4v1pr/mixPt2w/mYsfqRo/mSmfh3d/d/gve3uPuYlPjT0/ywyPuTxPqZivipm/mKcPaZqPqtv/uBXvaVdvfEq/qzkfipgvigdPeWY/bQwfuVi/fP5Y/IAAAWrUlEQVR4nO2diVcayRPHUQ4FlEMiiEhQVBA8uFXwPhA1GjUCxqgx6xFjkjVZ3XX//V93V88wIODMdHPse7/ve0nUhIZPqrv6qqrRaP4vdsXj6dTs3Pby8vIKaHV5dTubTaXj8VZ/NGZFUnPL6z1v3mK9AfVI1dmxsppNRVr9MdUpMrv85m1Xl4TtBR8ipH/0bs/+tzDTcytd+i7AKyesROzpBOGvVrPpVn9wWYrOLr81AZ4SRMDsXZ1t86EZn1vXm/SYTxViZwf6tZJt2w4bnXtrMiE+CliGKCXt6XnTI5B2ViACZG+2HS25tg54eiki/P5mfXl5bjaVTkcikXg8jn5Po+kju7260tH5woxUq6lWA5UrMq+3m0xliPou9Mf68lwqEq3zwngklV1dQUZ9ydi73T69NXVpB74Sot7Utbwh3zWms6sdVbrrans41zVTn8iHEdGvrnUVLjGeWkWdtoyxo7O39Z11A/HZ7VLE9Xn1//Pp7Eo5ImLMcvy0yrVhHySAFNFuv5yrN+rkKJ5d6SEOlSK2lHEN8fVRQkI5x8fJx7O9nRSyAxhb01fTm90YUERc5/kx8JgsIXZ0rjTfr0bPBgcBECH29Zm2WHtnpYghRcSOju0mLwK2BrsHRcRB00ZD3iTb21NC7Oxo5nBM5AgfIA5uNm6UpFYkVmxiV93VCoBIm2sNfS/M2CFqu6HvJShxoe0WCe2N5cNK9UoQe5tgxi0dAgTE7sGtxr8fUlZqxkaPxmjO0A0a7O4+4+0/a2pbROztWGmoUz3X6rRaINTmEo18pwpFVgTG3t5Gzv+7Bh0ixIhabXM6aEnZkhUb53ByNp0OEHW5pnVQUXHBjL29HasNeYeE1mbQEURd0w0IyoodtSE+9dxgMxgIouGimSNQKmE0YkTug3HPhQExouWMd9sKtC0g9vKeNnZdNiA06M75tqxQKdGj8vU3Oy6LjSBaWtZDBVGH08vX3+RcFgtBtOzwa1S1VvkjvsOACNHi2uXVJJOyvBEpINI+nwaZNSuOxRUezb0bEAhb62OkSvNERIAujOiytdrHSBXp5dZR3/W7sBBg89dp9RTnhbgDgC6Xob0AuSF+Ng7gTuoaaDtAKSLD1L+HADHigKX9AKWIqhdw+9b+ASJXOwJKEVUuwxP9SG0MKEVUt5kaMBLE/oF2mibKFRE3U2pe/d7aD2qXlUw1pRh2/Z99RmJD6x73j8VTs3SNqtyh7iNAjGj91ojPxVHCMlypt4larVaMaH3H9/NEsfg2STdTHb3KzlEPfATResDtg6Tnzi5N9KpRv748xy8IYYWORUWL8G8BK5GRjxuNbF3aK6/7Tfr1OT4HZnHhHFXBxF8I+LANrT4ebjS6sUnviaV4JCJFvz7Lo8um6PGUglnxEAEiRN8D+7tH5/sGxYvwSkQcdjPPgVG41pA9Kz4M+zCij30QRucHy+76XyIicWBcUXa/mMCAWMyDcKOvdNdfitgoR8TxYbOsbxQRLjXk9dPDQADzBY4Y3za6KbnrB5n0l5eXXSbgLCHq11nNmKX9VJY//RYKYMQAax89F26KSTBDn2l+rTRBRNbmu0RGEubHekhP+2mnDH+aHw5g+YYZ/1vLL/urBKPE5y4pI0bUz7G9XVzop6/P+19ChDDE2EfvJYBnhRr/KL0MjDgKVb/M9oa0n3a+6mwKI8PYiMOMfXRTS+/6B7sv63WG6LoYVaxfZ3vLFZnO5jA0jBGH2fxoTgd3/YPdfbXsJyj9lhNiRJ6zuZsaxgp9YXqzHR0NZ9DKuQaYN/HpqHTe76zvtAKhECHMsLzVvUEIZ5B3Sp4SEedZ3jYqZ2VzNBXCiCNMbmbDAOEM2kG5XT3SJSAyzf2Cs6nXSGAkhHXI8j4JA4QzaC/kzzdRAbGLabtBo6fqGPHIP4IRp+5Y3ubCAOEMCgBLiGzeJkWjimtP+8MjSKERJhPuWmjEhrIVQ5zOiyammZ+G+dU0IjYh0hTLrjBqgYgNw2uzRKUEd2NiCepK0fD3Wu40NDWFCZlMmCMBDTqb8oibOUBk66c0HrWGEfdnpjCin8WEBQtEbORUvHadIrKc4KQgqriGEQ/9U1gBhjfQ5CzEhqpuU+OwRmUzYgfEhldd2MRmCKCfZS4suEhQikVdRMMcRWQyIs0oqjbrfJkhNhxmaF5zT+JubDp1O69oF+ymmFY2EOFfbYuRmfL7EaKf6fQJwm5UmlAwol7P8hGyYMTel//JR2N+rKk8Q+v7EFmk+j41Sk8ZWYLH0VaYML70NVczGHDmD4bGhcibe9UNLBNEE5OvWYVu+sLX5MMzGHGM6QwYAF1KJ/uS0nYwIsuHSNGssMqVwzEiRIgjLG0XILbIwNAE+BoT06UG7aaVi1P/GCKcGTtmaXqXELo+MzQxTw412BanWZplW/7T2OgYRgyz+Bk0DHH0lIslOGzNjhHZBmKcJqKWT4m34TGEOPaBpWWNBYKLWI4ho5Bo28X0OWgeank3/YAJx8JMnTRKo6eYPl0XHPgzZY1kq3jTGAEcY+ukCRI+5WK7NV6HSw0mVxOnKzfpf9PxNCFk66QFEgM3wBZGfAYJxWyH/FW66dUoNmL4lqnd/X5sxAEWV0qcKSZkS4nLgq9ZLf0kMxYOI8TRGFO7e/0kBo4tUnoObt/Y7tvSdG1a+knRE8byMzULcX6cCBnTbmHO7ymN5lvPKAIcvWJrFiIZ+3kQ2hkJYW3aUxqIH6ZHEeI043UTJWQLMZq3cxiHcJghHYgTo0hhD9NcgTyNEUcy9jN6GjsHXyoua4TvY0PTBJGtVU3BioM1+xnnQ3IBbmeNJwLAHmHhdjwxjRCnGYchjUftf8/UyCXc8bPGEtGBKLjkK880QvQwLdmQohCs6WK5t4pCYJiJOXKBdNOeVfrtNSacnmCbDZEOSLgmU6RYBMJSNlk/SqRHuoPKeAihh+nOEOsdELIEpG4AIXuKY5mriQ1hRM8Nc6t7EFXM4mouCWEfe52NlR6Jq7mb9CBED6ujQa7GB0ZkaAJi4PrYgxZXgRBmnVtkQ49ngm3ZTdRPAqet6k+z1khJnz6mkyhQlhTW6oGD4a+EcIjpWhT0YMWIRvXzxSYEhzEdeoNSpAwcdaY3QMjsStGc7yOx4aq9aQSC4AY5xA9HoKIf2ednRicm8EBkXLMRHeDg8H6jWl9zBoTMc4WG7PMxYwf+Oj+B5Jm45tCs5huJ8DeqNGKClvThUs+gA8oV4pOM2CRGnGCfLJCiRhLhr3IkXpJIxkE7l2D+Faisib1y0TuEAIe+8mhW8+AjiKoCxM9prB8HP6PB0wURHtKL3iGEOPknl3aFPA2jcjtEhXBUPvkY20CIJ8RbRDg0MclhOsT65iOIVuX9dJMScqoqkgVCvM1fwIRDk4t8GtYYKaLSjfCulpqQ0+eYhRKweMr/QQi9HCZ8okIAOqpP2QJ8S0drT6m/mitXqkT4FQiLnFrGzkY54rmOxqNyK5ySBsJV9OW/3kncS7kRCjlTRgV5fedCQKqaOJzqSveIhN+9kwhxksOijSrvExDlHrvRCmnd3QqD4eopAjbEy7YbRIjEjxCnTdGOKm/5tmOjFcS0vAahhi5MgfCaO6FmT0C0Drz+mQvdQgUxLc/CG/GGEiJEq5CiuVO/40XvbTpaQUzHtb5W/E0lIY+tRUl7wz4B0VhnNEZ3bTYdjUc18C2dEoea6JjwNyH0crUhziMWEBHj5+p7jcS9xULLayFxrg0Th+rvQOhtAKEm0S8g9uNF3LfKAVnYvcBBcLS8Fv8KaRFS4B4IgxiRO6FG8yUgIKJtv9Hoev95b7+QSCQK+3uf39lcQu0pLIYwqlqKwHMKMOF3ROhtBKFmj65Rjf1lIsVEaN0igmhrRIW0yNtyQm+Q35pGovdliLSMCJT0sYiIFn4LGYnSQIjTcL4SwnFeK29Rmf2Hg9JYLCG6XiBqc7vn3IuLSAh/jDeAMP/twBegGeH1EXHELQ6Gy3Gul50CQry3OAXCZ36NJx6soWGSaWuthyhhxKHhNsvFLkeHOksI3+IIuRMn7qbjC5xazh8djpAkTV9VRKHkTUVHhUnDYONnyTkgxHv8Z2cQIQZ/cGm38CU0EoI8WwERfiEZBw4O3hMduAb6+ys9KsyLBu09n+X3NhDigIA7RBj0Br9zaHXPNzVCsvskiGgRfvDl236h0jZoWtzdubC4yuZFWh+Vx+SxDIT4rC2GCYPB38xtHg37R0KQvwiMw8PWg4f9+mMrsb/7zuCyWKSIOkM3+yJ8nTy35y0+L80HxzHhT8YWjwI4ayokIoZCB99eGK66ooXddxaXRYKoZWd8A48mwmfemV+E0Mu0uUD2IzlTkL8YGpn6Y0+Zy4ju51yQb0M3Uzq2vhqFxy/1kG9+jmNEJ8OyLfaB5NtQxJGRQ3UX3fs5m6WEqDVcMPicCDxpCmJMvzsxolP1gWn+zzHImCKI/sCD+lktsXthKSFqdfeq544UEELu9CkiHA861U6IR/4xkm0DWVOHrGuj8wuLiNit61Z7oz8HhBASv+hAhONOdVcz+avwDCTbIDz/IY+SPYUcMGJErW5TnRmXyQPRaLmNIiEcV+VMj8JjJE+D6JDXDqyQM9B0aVzfXpUZ1+G5bxDykHE6iRGVx9NkrqZJEgPJtuFiP0HIjgJit6rRCI+1E2L+fxFCh+IdYsxPAuBJKgpT2mI1nesMWuExBbIT+0Wl9QTxDf32uwMjOk8UtnLsgQj/sZmx8BelH0GG7sUnMXQrLuQ/qyedVChDceLG/dSpcGX6pydMCcMfGnAEosHPezFoKaJO4Y3NMjycUIhNLCadCNE5rqSJzAcSGz7GHuJfT7sG0YrKfCo8f1EvxlYhGyJEtwJL5K9J4DRCHPU3xoAgZEbhTkPJ7XfcBIjiD347MKJD/jY/5oGo4nB4miklU4ZwoRR6MyXf36wBYSkv6C9iRPkDsYiDGUeJeLvQl9rQic+2kb1OXYZKKaUkPzIQnU6vzNffTZCA1NHR6XAje6ighFYxYheUESlFj2U+EUKZMyKO1pwmMbc3zEG3shTNCSV9ZF4wpkl1Bv1byY+eyEB0n8p5OQlHxYgT7BGpcrWjDJFmvUuLMp2YiRHlLE2LJM4PIQ7xiTGSpzObko56CdnE0uSpmBuM+Pqwyk8MASGvECOZ2hURX580aFp/eZrmRyB8dY+YmcBBcDgctbmAGs2W0FEHX0Wcg3Tp8mTiv8wY0fHxtRdfTw6RYM0mWxBLQNS+epFzSRJtKxLCY0kHRky+0k1JdBEi9DYfsNRRta9cNsbtkC5dEQ4/7sCIr3jT2yAOnxriFcioVGcGWTsNmsJYmQ++kMSIjrqr77vxSUI4yScWVbnu6dSvq+tQaQXYyqoFeUzocJrrHCTlcUQDBuQSTqxKOWF1U8fbpGiV2xf/5G83RnQ/1X4pBE8NTU40ZyVTVXQBp60T7L4OhC/LMjwTIzocNX3NwjiJu2nIjb9sJehOo3Z0UdReKws184kY0VzL1xTHIbIoyCvUVp3O6X5RW2srtQWE1eoUPYIRa/kaDwlKmeR0z6heZ2BFba1YYijDbK8WDl8EwmT1ffACuQuf9LJeUbHrAg42avRTSO8z2avmhv1tJoifqv1djAB6veN8w9/UKEqPp6r3UxMkMF5WfendEhmJyWoD7TcQjis9cWyEtuB4qqo/XRskgH01csGDZozorrI4XSR3/d5g62ZCqXL02qbKBSN9SEGtemjPSbe7uhG9+IYREbZyoigpAafh2u4XfwP5i/a+mgULPpkx4ksjnsJVv+oLON7agtNw3YsCFTR/sXaG5gkyovulO82QK9Rg8Bf3j6pWF/QKtWJltkbzF+vcVmEjuh3uYPlPf5Ar1KCDe+ibap3DzVTlWb998BUTUiO6Hcmy7hgjV1OK7zUaqhy9Xywz4hbNX6x74UiMiBCli+sfcIPKEsrAXQlajllqxOggzV+s+8rnJUzoTj6WfpR3khvUtjIhXL1hK0qMeEYL+b9S+eUfMyCWDodP3UDYTiYUjKiTrN0KNLvvtSziYpIgmkt+k5zCKbjUaJJonoZO/EGOEr6aCP4EiKKzOYE7jdfOqJquKARsGAS3sgX5izKS3/JmMyDSNfYvuHljD+zjLYjX0F3Ad1EtfZ6GjFvGv5YIohlWNvRaKtmQQHcmFVzS0ug5eGSIvIC/X2DF5F/4m0e3vKPiFuiCxMAZyOnplk5J/mJxCRDNRXy2Qc5Rk+2wa6rUBoT54XO3hJC/KPOa+BEQsT+l51PO1m98XyqqgwL352TfL/uRKESfkgQx+aR5Ivt+d7tNFaB7iCveEe76tReyX0r6KUJcOoETxnrnxC0UFPHX6TZsdEusIHTqlCKS/WKNo5s2kE4SHK7VGhQFTv2TNNN5ESGaH19/QUt0L40N1ylLn8LzvojYhpMhqOCSGlFhBOPiUgnR3ZjPx0E2i4ioPMn2UUQ017mtabF2xDwNm4qiojAU8aTBMemLs85dNNvGpiaHMeOmiG07DPFApFmoWlUvLwKh2exoxxUNVtRGExgNKhMgqLcxmz+18E60jqIGF2S+WVSn1yyIiO1oRQposbgYalFSh2pOBtsPsQTIVJv5SUBsu44atQ1AgqaLrQi85u827ahRywAk2rqYc93/ERDd7TRpJFxCvjSHx9uLiG20hyoIydIDHAA1GRGxbRY3+0LpCS6AGokVl2QFETdc34w0r5+xdrhEortZaodj03dWmtTPD7A0abiTH1t99p0/sNK6BUbGaaJcjyKiu7UxUftGK63OYGQr4P9CwgLObV5q5ZnG54CVFqBgKhteVc9Jcb/Ysp6aOAiIhZl45nNSFR0CotndmiPwPagGQ+rA8S4rRSRMjPhO4+/mr+Gi78V6Nz625y/UkeTspuk3GUekoA9B9HH2MVI9m8Vz1OTHZq5TEwchod6Nj6Hmuwzl/1kSEM3mx6btqB5wsRSochM44F5SqkKnS0nhHDVpbk5XPRoOifVuAmwP6pGlu09L4lFxsgkx0fuHI2JJn+FDjvU/6+hRRHSg4dhYxv3DqVLVomGmB90qUTG4JF7bNJQR8Y3Qkj6BQOiwIZNgDZ2akwIiYgw2ZuN4h8sWCVWLQs0YgVLF0HZDQHQ4ksFT3iu5/AMtW0QQQyNfGu1CX6r4CxjpNbHjiechx/4fU/5S1aLQVJM8TKWeP5GuCogOt3mckyHzx1Nj8JBwQJwKcN9HyNYCYaSITux1Flgh88cfwmN+sWoRLsvU+Jz/OsogxhKiE0G6f56qX87Fbj+EcU0fv4jYYj6iE7QCKCESSu/Ts3JTxo6u/ORhoTNC1aIp/8xw6/mwFv9JJt0SRELpfDopyl23ZorHV6Oe6VGh3g0gzsxwLVvEpuLjJ2AUEcfHEabz4/eFxVi+NmgmHzu6vbqemMB4YaHeDVQtmvrS6kOvcmWefyaT5YgkOBwp+PHn9x8LJ4t3xWIMVCzeLR4v/Pj35tozidP7p4VKKQJiOHx1125XQUj5hfGkucQIiEEq+NrrhSRG8ifOCqcFKKSI4fDo1HF7XQNJFDv96BAhJYiQ+AZ0kEw8BHn9ngrE0enwh+P26p0vFDt5CiahCEVNxKGqiNMez9jVUZvjgTLFhd9uQikX0eOZGPJ8vY214dirrdjz4y8n6bDAWAMRZ79PeK7/aPeuWUOZ4uLC95+/gk4wpwSU4nqub77e3v034SRCk15x8WTh9Me/37/f3Fzf3Nz8+/XH6cLtYrHeVPl/ydb/AJc21O1ZjI9PAAAAAElFTkSuQmCC"
                              alt="Photo"
                              width="55"
                              height="55"
                            />

                            <div class="flex-grow-1">
                              <h4 class="mb-0">Choice File</h4>
                              <p class="mb-0">Max file size is 5mb</p>
                            </div>
                          </div>
                          <div
                            class="file-upload-wrapper"
                            data-text="Change Photo"
                          >
                            <input
                              name="file-upload-field"
                              type="file"
                              class="file-upload-field"
                              @change="file_image"
                            />
                          </div>
                        </div>
                        <div class="mb-3 col-xl-12" v-if="Ntype == 1">
                          <div class="d-flex align-items-center mb-3">
                            <img
                              v-if="idfont"
                              class="me-3 rounded-circle me-sm-3"
                              :src="idfont"
                              width="55"
                              height="55"
                              alt="photo"
                            />
                            <img
                              v-else
                              lass="me-3 rounded-circle   me-sm-3"
                              src="data:image/png;base64,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"
                              alt="Photo"
                              width="55"
                              height="55"
                            />

                            <div class="flex-grow-1">
                              <h4 class="mb-0">ID front</h4>
                              <p class="mb-0">Max file size is 5mb</p>
                            </div>
                          </div>
                          <div
                            class="file-upload-wrapper"
                            data-text="Change ID Photo"
                          >
                            <input
                              name="file-upload-field"
                              type="file"
                              class="file-upload-field"
                              @change="font_image"
                            />
                          </div>
                        </div>
                        <div class="mb-3 col-xl-12" v-if="Ntype == 1">
                          <div class="d-flex align-items-center mb-3">
                            <img
                              v-if="idback"
                              class="me-3 rounded-circle me-sm-3"
                              :src="idback"
                              width="55"
                              height="55"
                              alt="photo"
                            />
                            <img
                              style="background-color: white"
                              v-else
                              lass="me-3 rounded-circle   me-sm-3"
                              src="https://icons.veryicon.com/png/o/miscellaneous/former-building-people/back-of-id-card.png"
                              alt="Photo"
                              width="55"
                              height="55"
                            />

                            <div class="flex-grow-1">
                              <h4 class="mb-0">ID back</h4>
                              <p class="mb-0">Max file size is 5mb</p>
                            </div>
                          </div>
                          <div
                            class="file-upload-wrapper"
                            data-text="Change Photo"
                          >
                            <input
                              name="file-upload-field"
                              type="file"
                              class="file-upload-field"
                              @change="back_image"
                            />
                          </div>
                        </div>
                        <div class="mb-3 col-12">
                          <button class="btn btn-success ps-5 pe-5">
                            Save
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>

              <div class="col-xl-12">
                <div class="card">
                  <div class="card-header">
                    <h4 class="card-title">Withdrawal Information</h4>
                  </div>
                  <div class="card-body">
                    <form @submit.prevent="setWallet">
                      <div class="row">
                        <div class="mb-3 col-xl-6">
                          <label class="me-sm-2" for="Account"
                            >Select Platform</label
                          >
                          <select
                            class="form-control"
                            id="Account"
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
                              v-for="(item, index) in allBank"
                              :key="index"
                              :value="item.method_name"
                            >
                              {{ item.method_name }}
                            </option>
                          </select>
                        </div>
                        <div
                          v-if="
                            !this.allBank.some(
                              (p) => p.method_name === this.method
                            )
                          "
                        >
                          <div class="mb-3 col-xl-6">
                            <label class="me-sm-2" for="network"
                              >Network For USDT</label
                            >
                            <select
                              class="form-control"
                              id="network"
                              v-model="network"
                              required
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

                          <div class="mb-3 col-xl-6">
                            <label class="me-sm-2">Address</label>
                            <input
                              type="text"
                              class="form-control"
                              placeholder="Your Selected Network Address"
                              v-model="address"
                            />
                          </div>
                        </div>
                        <div
                          v-if="
                            this.allBank.some(
                              (p) => p.method_name === this.method
                            )
                          "
                        >
                          <div class="mb-3 col-xl-6">
                            <label class="me-sm-2">Beneficiary</label>
                            <input
                              type="text"
                              class="form-control"
                              placeholder="Enter Beneficiary"
                              v-model="bank.beneficiary"
                            />
                          </div>
                          <div class="mb-3 col-xl-6">
                            <label class="me-sm-2">Account number</label>
                            <input
                              type="text"
                              class="form-control"
                              placeholder="Enter Your Account number"
                              v-model="bank.ac_num"
                            />
                          </div>
                          <div class="mb-3 col-xl-6">
                            <label class="me-sm-2">Account type</label>
                            <input
                              type="text"
                              class="form-control"
                              placeholder="Enter Your Account Type"
                              v-model="bank.ac_type"
                            />
                          </div>
                          <div class="mb-3 col-xl-6">
                            <label class="me-sm-2">Bank</label>
                            <input
                              type="text"
                              class="form-control"
                              placeholder="Enter Your Bank Name"
                              v-model="bank.branch"
                            />
                          </div>
                          <div class="mb-3 col-xl-6">
                            <label class="me-sm-2">IFSC/IBAN</label>
                            <input
                              type="text"
                              class="form-control"
                              placeholder="Enter your IFSC/IBAN Number"
                              v-model="bank.ifsc_code"
                            />
                          </div>
                        </div>

                        <div class="mb-3 col-12">
                          <button class="btn btn-success ps-5 pe-5">
                            Save
                          </button>
                        </div>
                      </div>
                    </form>
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
import { useNomineeStore } from "../../store/nominee";
import isAuthenticated from "./../../midleware/auth";

import axios from "axios";
export default {
  data() {
    return {
      allPlatform: [],
      allNetwork: [],
      allBank: [],
      platform: "Select Platform",
      network: "Select",
      method: "Select",
      address: "",
      showPassword: false,
      authUser: [],
      nominee: [],
      bank: {
        beneficiary: "",
        ac_num: "",
        ac_type: "",
        branch: "",
        ifsc_code: "",
      },
      checkbox: "",
      password: "",
      password_confirmation: "",
      profile: "",
      name: "",
      birth: "",
      phone: "",
      Nphone: "",
      Nname: "",
      Nemail: "",
      Ncity: "",
      idback: "",
      idfont: "",
      Nfile: "",
      Npostal: "",
      Ncountry: "select",
      Naddress: "",
      Ntype: "Select",
    };
  },
  methods: {
    image(event) {
      this.profile = event.target.files[0];
    },
    font_image(event) {
      this.idfont = event.target.files[0];
    },
    back_image(event) {
      this.idback = event.target.files[0];
    },
    file_image(event) {
      this.Nfile = event.target.files[0];
    },
    async userUpdate() {
      this.$setLoading(true);

      const formData = new FormData(); // Create a FormData object
      formData.append("name", this.name);
      formData.append("birth", this.birth);
      formData.append("phone", this.phone);
      formData.append("password", this.password);
      formData.append("password_confirmation", this.password_confirmation);
      formData.append("profile", this.profile); // Append the file to the FormData object

      await axios
        .post("/api/user/edit", formData, {
          headers: {
            "Content-Type": "multipart/form-data", // Set content type for file upload
          },
        })
        .then((response) => {
          (this.authUser = response.data.user),
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
    async setWallet() {
      this.$setLoading(true);

      const formData = new FormData();

      if (this.allBank.some((p) => p.method_name === this.method)) {
        formData.append("bank", JSON.stringify(this.bank)); // ✅ fix here
        formData.append("platform", this.method);
      } else {
        formData.append("address", this.address);
        formData.append("network", this.network);
        formData.append("platform", this.method);
      }

      try {
        const response = await axios.post("/api/address/edit", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });

        this.authUser = response.data.user;

        this.$notify({
          title: "message",
          text: response.data.message,
          type: "success",
        });
      } catch (error) {
        this.$notify({
          title: "Error message",
          text: error?.response?.data?.message || "Something went wrong",
          type: "error",
        });
      } finally {
        this.$setLoading(false);
      }
    },

    async nomineeSave() {
      this.$setLoading(true);

      const formData = new FormData(); // Create a FormData object
      formData.append("name", this.Nname);
      formData.append("email", this.Nemail);
      formData.append("phone", this.Nphone);
      formData.append("address", this.Naddress);
      formData.append("city", this.Ncity);
      formData.append("id_font", this.idfont);
      formData.append("id_back", this.idback);
      formData.append("file", this.Nfile);
      formData.append("country", this.Ncountry);
      formData.append("postal", this.Npostal); // Append the file to the FormData object

      await axios
        .post("/api/nominee.store", formData, {
          headers: {
            "Content-Type": "multipart/form-data", // Set content type for file upload
          },
        })
        .then((response) => {
          (this.nominee = response.data.data),
            this.$notify({
              title: "message",
              text: response.data.message,
              type: "success",
            });

          console.log(this.nominee);
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
  computed: {
    filteredNetworks() {
      // Find the selected platform and return its networks
      const platform = this.allPlatform.find((p) => p.name == this.method);

      return platform ? platform.network : [];
    },
    passwordFieldType() {
      return this.showPassword ? "text" : "password";
    },
  },

  async created() {
    if (isAuthenticated() == true) {
      // auth user data +++++++++++++++++++++++++++++

      const userStore = useAuthUserStore();
      const authUser = userStore.authUser;
      const nomineeStore = useNomineeStore();

      if (nomineeStore.nominee) {
        this.nominee = nomineeStore.nominee;
      } else {
        // If data is not available, fetch it and set the component property
        this.nominee = await nomineeStore.getlead();
      }
      try {
        const response = await axios.get("/api/platform");

        this.allPlatform = response.data.platform;

        this.allBank = response.data.bank;
      } catch (error) {
        console.log(error);
      }

      if (authUser) {
        this.authUser = authUser;
      } else {
        // userStore.reSetAuthUser();
        this.authUser = await userStore.reSetAuthUser();
      }
    } else {
      this.authUser = "";
    }
    this.birth = this.authUser.birth;
    this.phone = this.authUser.Phone;
    this.name = this.authUser.name;

    if (this.nominee) {
      this.Nname = this.nominee.name;
      this.Nemail = this.nominee.email;
      this.Nphone = this.nominee.Phone;
      this.Ncountry = this.nominee.country;
      this.Naddress = this.nominee.address;
      this.Ncity = this.nominee.city;
      this.Npostal = this.nominee.postal;
      this.Nfile = this.nominee.file;
      this.idfont = this.nominee.id_font;
      this.idback = this.nominee.id_back;
    }

    this.$setLoading(false);
  },
};
</script>
