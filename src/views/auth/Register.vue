
<script>
import axios from "axios";
export default {
  data() {
    return {
      phone: "",
      authEmail: "",
      oldCode: "",
      passwordType: "password",
      sendcode: true,
      showicon: true,
      showPassword: false,
      resendcode: false,
      userCode: "",
      countdown: "",
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
      profile: "",
      birth: "",
      country: "Select",
    };
  },
  computed: {
    passwordFieldType() {
      return this.showPassword ? "text" : "password";
    },
    icon() {
      return this.showicon ? "fa-eye-slash" : "fa-eye";
    },
  },

  created() {
    this.$setLoading(false);
  },

  methods: {
    image(event) {
      this.profile = event.target.files[0];
    },
    async sentCode() {
      (this.sendcode = false),
        (this.resendcode = false),
        (this.countdown = "60");
      this.startCountdown();

      const data = {
        useReffer: "",
        type: "register",
        email: this.email,
        sub: "wimbeldoninvestments registation code",
        bodytext: "Your wimbeldoninvestments registation code is:",
        footertext: "Do not share our code anyone.It is very importent",
        btn: "",
      };
      await axios
        .post("/api/auth/forgetcode", data)
        .then((response) => {
          this.oldCode = response.data.code;
          this.authEmail = response.data.email;
        })
        .catch((error) => {
          console.log(error);
          this.$setLoading(false);
          this.$notify({
            title: "Error message",
            text: "Server busy now.Please try later!",
            type: "error",
          });
        });
    },
    startCountdown() {
      if (this.countdown > "0") {
        setTimeout(() => {
          this.countdown--;
          this.startCountdown();
        }, 1000);
      } else {
        this.resendcode = true;
      }
    },
    togglePasswordVisibility() {
      this.showPassword = !this.showPassword;
      this.showicon = !this.showicon;
    },
    showNotification() {
      this.$notify({
        title: "Important message",
        text: "Hello user!",
      });
    },
    async register() {
      this.$setLoading(true);
      if (this.userCode == this.oldCode) {
        const formData = new FormData(); // Create a FormData object
        formData.append("birth", this.birth);
        formData.append("phone", this.phone);
        formData.append("email", this.authEmail);
        formData.append("password", this.password);
        formData.append("name", this.name);
        formData.append("password_confirmation", this.password_confirmation);
        formData.append("profile", this.profile); // Append the file to the FormData object
        formData.append("country", this.country); // Append the file to the FormData object

        await axios
          .post("/api/auth/register", formData, {
            headers: {
              "Content-Type": "multipart/form-data", // Set content type for file upload
            },
          })
          .then((response) => {
            this.$setLoading(false);

            this.$router.push("/login");
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
      } else {
        this.$setLoading(false);

        this.$notify({
          title: "Error message",
          text: "Code does not match!",
          type: "error",
        });
      }
      this.$setLoading(false);
    },
  },
};
</script>





<template>
  <HomeLayout>
    <body>
      <!-- ======= Header ======= -->
      <div id="main-wrapper">
        <div class="authincation section-padding">
          <div class="container h-100">
            <div class="row justify-content-center h-100 align-items-center">
              <div class="col-lg-8 col-xl-6">
                <div class="mini-logo text-center my-5">
                  <img
                    src="./../../../public/logo1.png"
                    alt=""
                    style="width: 150px"
                  />
                </div>
                <div class="auth-form card">
                  <div class="card-header justify-content-center">
                    <h4 class="card-title">Sign Up</h4>
                  </div>
                  <div class="card-body">
                    <form
                      enctype="multipart/form-data"
                      @submit.prevent="register"
                      name="contactForm"
                      method="post"
                      class="signin_validate"
                    >
                      <div class="mb-1">
                        <label for="name">Name</label>
                        <input
                          name="name"
                          placeholder="Enter Your Name"
                          v-model="name"
                          type="text"
                          id="name"
                          required
                          class="form-control"
                        />
                      </div>
                      <div class="mb-1" style="position: relative">
                        <label for="email">Email</label>
                        <input
                          name="email"
                          placeholder="Enter Your Email"
                          v-model="email"
                          type="email"
                          id="email"
                          required
                          class="form-control"
                        />
                        <div
                          v-if="sendcode"
                          style="
                            position: absolute;
                            top: 45%;
                            right: 5%;
                            cursor: pointer;
                          "
                          @click="sentCode"
                        >
                          send code
                        </div>
                        <div
                          v-if="resendcode"
                          style="
                            position: absolute;
                            top: 45%;
                            right: 5%;
                            cursor: pointer;
                          "
                          @click="sentCode"
                        >
                          Resend
                        </div>
                        <div
                          v-if="countdown"
                          style="
                            position: absolute;
                            top: 45%;
                            right: 5%;
                            cursor: pointer;
                          "
                        >
                          00:00:{{ countdown }}
                        </div>
                      </div>

                      <div class="mb-1">
                        <label for="userCode">Verification OTP</label>
                        <input
                          id="userCode"
                          placeholder="Enter Your Code"
                          type="text"
                          v-model="userCode"
                          required
                          class="form-control"
                        />
                      </div>
                      <div class="mb-1">
                        <label for="country">Select Country</label>
                        <select
                          class="form-control"
                          id="country"
                          v-model="country"
                        >
                          <option selected disabled>Select</option>
                          <option value="Afghanistan">Afghanistan</option>
                          <option value="Albania">Albania</option>
                          <option value="Algeria">Algeria</option>
                          <option value="American Samoa">American Samoa</option>
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
                          <option value="Cayman Islands">Cayman Islands</option>
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
                          <option value="Czech Republic">Czech Republic</option>
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
                          <option value="Democratic People's Republic of Korea">
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
                          <option value="Moldova">Moldova, Republic of</option>
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
                          <option value="Norfolk Island">Norfolk Island</option>
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
                          <option value="United Kingdom">United Kingdom</option>
                          <option value="United States">United States</option>
                          <option value="United States Minor Outlying Islands">
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
                          <option value="Western Sahara">Western Sahara</option>
                          <option value="Yemen">Yemen</option>
                          <option value="Serbia">Serbia</option>
                          <option value="Zambia">Zambia</option>
                          <option value="Zimbabwe">Zimbabwe</option>
                        </select>
                      </div>
                      <div class="mb-1">
                        <label for="phone">Phone No.</label>
                        <input
                          placeholder="Enter Your Phone"
                          type="number"
                          v-model="phone"
                          required
                          class="form-control"
                        />
                      </div>

                      <div class="mb-2">
                        <label for=""> Birth Date</label>
                        <input
                          type="date"
                          v-model="birth"
                          required
                          class="form-control"
                        />
                      </div>
                      <div class="mb-1">
                        <label for="password">Password</label>
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
                        <label for="">Retype Password</label>
                        <input
                          placeholder="Retype  Pass"
                          name="password_confirmation"
                          :type="passwordFieldType"
                          v-model="password_confirmation"
                          required
                          class="form-control"
                        />
                      </div>

                      <div class="row d-flex justify-content-between mt-4 mb-2">
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
                      <div class="text-center">
                        <button type="submit" class="btn btn-success btn-block">
                          Sign Up
                        </button>
                      </div>
                    </form>
                    <div class="new-account mt-3">
                      <p>
                        Have You an account?
                        <RouterLink class="text-primary" to="/login"
                          >Login</RouterLink
                        >
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  </HomeLayout>
</template>
