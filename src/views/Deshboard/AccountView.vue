<template>
    <DeshboardLayout>
      <div class="page_title">
        
      </div>

      <div class="content-body">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-xl-3 col-md-4">
                        <div class="card settings_menu">
                            <div class="card-header">
                                <h4 class="card-title">Settings</h4>
                            </div>
                            <div class="card-body">
                                <ul>
                                    <li class="nav-item">
                                        <a href="./settings.html" class="nav-link active">
                                            <i class="la la-user"></i>
                                            <span>Edit Profile</span>
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="./settings-preferences.html" class="nav-link">
                                            <i class="la la-cog"></i>
                                            <span>Preferences</span>
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="./settings-security.html" class="nav-link">
                                            <i class="la la-lock"></i>
                                            <span>Security</span>
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="./settings-account.html" class="nav-link">
                                            <i class="la la-university"></i>
                                            <span>Linked Account</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-9 col-md-8">
                        <div class="row">
                            <div class="col-xl-6">
                                <div class="card">
                                    <div class="card-header">
                                        <h4 class="card-title">User Profile</h4>
                                    </div>
                                    <div class="card-body">
                                        <form action="">
                                            <div class="row">
                                                <div class="mb-3 col-xl-12">
                                                    <label class="me-sm-2">Your Name</label>
                                                    <input type="text" class="form-control" placeholder="Name">
                                                </div>
                                                <div class="mb-3 col-xl-12">
                                                    <div class="d-flex align-items-center mb-3">
                                                        <img class="me-3 rounded-circle me-0 me-sm-3"
                                                            src="data:image/jpeg;base64,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" width="55" height="55" alt="">
                                                        <div class="flex-grow-1">
                                                            <h4 class="mb-0">John Doe</h4>
                                                            <p class="mb-0">Max file size is 20mb
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div class="file-upload-wrapper" data-text="Change Photo">
                                                        <input name="file-upload-field" type="file"
                                                            class="file-upload-field" value="">
                                                    </div>
                                                </div>
                                                <div class="col-12">
                                                    <button class="btn btn-success waves-effect">Save</button>
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
                                        <form action="">
                                            <div class="row">
                                                <div class="mb-3 col-xl-12">
                                                    <label class="me-sm-2">New Email</label>
                                                    <input type="email" class="form-control" placeholder="Email">
                                                </div>
                                                <div class="mb-3 col-xl-12">
                                                    <label class="me-sm-2">New Password</label>
                                                    <input type="password" class="form-control"
                                                        placeholder="**********">
                                                    <p class="mt-2 mb-0">Enable two factor authencation on the security
                                                        page
                                                    </p>
                                                </div>
                                                <div class="col-12">
                                                    <button class="btn btn-success waves-effect">Save</button>
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
                                        <form method="post" name="myform" class="personal_validate">
                                            <div class="row">
                                                <div class="mb-3 col-xl-6">
                                                    <label class="me-sm-2">Your Name</label>
                                                    <input type="text" class="form-control" placeholder="Maria Pascle"
                                                        name="fullname">
                                                </div>
                                                <div class="mb-3 col-xl-6">
                                                    <label class="me-sm-2">Email</label>
                                                    <input type="email" class="form-control"
                                                        placeholder="Hello@example.com" name="email">
                                                </div>
                                                <div class="mb-3 col-xl-6">
                                                    <label class="me-sm-2">Date of birth</label>
                                                    <input type="text" class="form-control" placeholder="10-10-<script>
            var CurrentYear = new Date().getFullYear()
            document.write(CurrentYear)
        </script>" id="datepicker" autocomplete="off" name="dob">
                                                </div>
                                                <div class="mb-3 col-xl-6">
                                                    <label class="me-sm-2">Present Address</label>
                                                    <input type="text" class="form-control"
                                                        placeholder="56, Old Street, Brooklyn" name="presentaddress">
                                                </div>
                                                <div class="mb-3 col-xl-6">
                                                    <label class="me-sm-2">Permanent Address</label>
                                                    <input type="text" class="form-control"
                                                        placeholder="123, Central Square, Brooklyn"
                                                        name="permanentaddress">
                                                </div>
                                                <div class="mb-3 col-xl-6">
                                                    <label class="me-sm-2">City</label>
                                                    <input type="text" class="form-control" placeholder="New York"
                                                        name="city">
                                                </div>
                                                <div class="mb-3 col-xl-6">
                                                    <label class="me-sm-2">Postal Code</label>
                                                    <input type="text" class="form-control" placeholder="25481"
                                                        name="postal">
                                                </div>
                                                <div class="mb-3 col-xl-6">
                                                    <label class="me-sm-2">Country</label>
                                                    <select class="form-control" name="country">
                                                        <option value="">Select</option>
                                                        <option value="Afghanistan">Afghanistan</option>
                                                        <option value="Åland Islands">Åland Islands</option>
                                                        <option value="Albania">Albania</option>
                                                        <option value="Algeria">Algeria</option>
                                                        <option value="American Samoa">American Samoa</option>
                                                        <option value="Andorra">Andorra</option>
                                                        <option value="Angola">Angola</option>
                                                        <option value="Anguilla">Anguilla</option>
                                                        <option value="Antarctica">Antarctica</option>
                                                        <option value="Antigua and Barbuda">Antigua and Barbuda</option>
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
                                                        <option value="Bosnia and Herzegovina">Bosnia and Herzegovina
                                                        </option>
                                                        <option value="Botswana">Botswana</option>
                                                        <option value="Bouvet Island">Bouvet Island</option>
                                                        <option value="Brazil">Brazil</option>
                                                        <option value="British Indian Ocean Territory">British Indian
                                                            Ocean Territory</option>
                                                        <option value="Brunei Darussalam">Brunei Darussalam</option>
                                                        <option value="Bulgaria">Bulgaria</option>
                                                        <option value="Burkina Faso">Burkina Faso</option>
                                                        <option value="Burundi">Burundi</option>
                                                        <option value="Cambodia">Cambodia</option>
                                                        <option value="Cameroon">Cameroon</option>
                                                        <option value="Canada">Canada</option>
                                                        <option value="Cape Verde">Cape Verde</option>
                                                        <option value="Cayman Islands">Cayman Islands</option>
                                                        <option value="Central African Republic">Central African
                                                            Republic</option>
                                                        <option value="Chad">Chad</option>
                                                        <option value="Chile">Chile</option>
                                                        <option value="China">China</option>
                                                        <option value="Christmas Island">Christmas Island</option>
                                                        <option value="Cocos (Keeling) Islands">Cocos (Keeling) Islands
                                                        </option>
                                                        <option value="Colombia">Colombia</option>
                                                        <option value="Comoros">Comoros</option>
                                                        <option value="Congo">Congo</option>
                                                        <option value="Congo, The Democratic Republic of The">Congo, The
                                                            Democratic Republic of The</option>
                                                        <option value="Cook Islands">Cook Islands</option>
                                                        <option value="Costa Rica">Costa Rica</option>
                                                        <option value="Cote D'ivoire">Cote D'ivoire</option>
                                                        <option value="Croatia">Croatia</option>
                                                        <option value="Cuba">Cuba</option>
                                                        <option value="Cyprus">Cyprus</option>
                                                        <option value="Czech Republic">Czech Republic</option>
                                                        <option value="Denmark">Denmark</option>
                                                        <option value="Djibouti">Djibouti</option>
                                                        <option value="Dominica">Dominica</option>
                                                        <option value="Dominican Republic">Dominican Republic</option>
                                                        <option value="Ecuador">Ecuador</option>
                                                        <option value="Egypt">Egypt</option>
                                                        <option value="El Salvador">El Salvador</option>
                                                        <option value="Equatorial Guinea">Equatorial Guinea</option>
                                                        <option value="Eritrea">Eritrea</option>
                                                        <option value="Estonia">Estonia</option>
                                                        <option value="Ethiopia">Ethiopia</option>
                                                        <option value="Falkland Islands (Malvinas)">Falkland Islands
                                                            (Malvinas)</option>
                                                        <option value="Faroe Islands">Faroe Islands</option>
                                                        <option value="Fiji">Fiji</option>
                                                        <option value="Finland">Finland</option>
                                                        <option value="France">France</option>
                                                        <option value="French Guiana">French Guiana</option>
                                                        <option value="French Polynesia">French Polynesia</option>
                                                        <option value="French Southern Territories">French Southern
                                                            Territories</option>
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
                                                        <option value="Guernsey">Guernsey</option>
                                                        <option value="Guinea">Guinea</option>
                                                        <option value="Guinea-bissau">Guinea-bissau</option>
                                                        <option value="Guyana">Guyana</option>
                                                        <option value="Haiti">Haiti</option>
                                                        <option value="Heard Island and Mcdonald Islands">Heard Island
                                                            and Mcdonald Islands</option>
                                                        <option value="Holy See (Vatican City State)">Holy See (Vatican
                                                            City State)</option>
                                                        <option value="Honduras">Honduras</option>
                                                        <option value="Hong Kong">Hong Kong</option>
                                                        <option value="Hungary">Hungary</option>
                                                        <option value="Iceland">Iceland</option>
                                                        <option value="India">India</option>
                                                        <option value="Indonesia">Indonesia</option>
                                                        <option value="Iran, Islamic Republic of">Iran, Islamic Republic
                                                            of</option>
                                                        <option value="Iraq">Iraq</option>
                                                        <option value="Ireland">Ireland</option>
                                                        <option value="Isle of Man">Isle of Man</option>
                                                        <option value="Israel">Israel</option>
                                                        <option value="Italy">Italy</option>
                                                        <option value="Jamaica">Jamaica</option>
                                                        <option value="Japan">Japan</option>
                                                        <option value="Jersey">Jersey</option>
                                                        <option value="Jordan">Jordan</option>
                                                        <option value="Kazakhstan">Kazakhstan</option>
                                                        <option value="Kenya">Kenya</option>
                                                        <option value="Kiribati">Kiribati</option>
                                                        <option value="Korea, Democratic People's Republic of">Korea,
                                                            Democratic People's Republic of</option>
                                                        <option value="Korea, Republic of">Korea, Republic of</option>
                                                        <option value="Kuwait">Kuwait</option>
                                                        <option value="Kyrgyzstan">Kyrgyzstan</option>
                                                        <option value="Lao People's Democratic Republic">Lao People's
                                                            Democratic Republic</option>
                                                        <option value="Latvia">Latvia</option>
                                                        <option value="Lebanon">Lebanon</option>
                                                        <option value="Lesotho">Lesotho</option>
                                                        <option value="Liberia">Liberia</option>
                                                        <option value="Libyan Arab Jamahiriya">Libyan Arab Jamahiriya
                                                        </option>
                                                        <option value="Liechtenstein">Liechtenstein</option>
                                                        <option value="Lithuania">Lithuania</option>
                                                        <option value="Luxembourg">Luxembourg</option>
                                                        <option value="Macao">Macao</option>
                                                        <option value="Macedonia, The Former Yugoslav Republic of">
                                                            Macedonia, The Former Yugoslav Republic of</option>
                                                        <option value="Madagascar">Madagascar</option>
                                                        <option value="Malawi">Malawi</option>
                                                        <option value="Malaysia">Malaysia</option>
                                                        <option value="Maldives">Maldives</option>
                                                        <option value="Mali">Mali</option>
                                                        <option value="Malta">Malta</option>
                                                        <option value="Marshall Islands">Marshall Islands</option>
                                                        <option value="Martinique">Martinique</option>
                                                        <option value="Mauritania">Mauritania</option>
                                                        <option value="Mauritius">Mauritius</option>
                                                        <option value="Mayotte">Mayotte</option>
                                                        <option value="Mexico">Mexico</option>
                                                        <option value="Micronesia, Federated States of">Micronesia,
                                                            Federated States of</option>
                                                        <option value="Moldova, Republic of">Moldova, Republic of
                                                        </option>
                                                        <option value="Monaco">Monaco</option>
                                                        <option value="Mongolia">Mongolia</option>
                                                        <option value="Montenegro">Montenegro</option>
                                                        <option value="Montserrat">Montserrat</option>
                                                        <option value="Morocco">Morocco</option>
                                                        <option value="Mozambique">Mozambique</option>
                                                        <option value="Myanmar">Myanmar</option>
                                                        <option value="Namibia">Namibia</option>
                                                        <option value="Nauru">Nauru</option>
                                                        <option value="Nepal">Nepal</option>
                                                        <option value="Netherlands">Netherlands</option>
                                                        <option value="Netherlands Antilles">Netherlands Antilles
                                                        </option>
                                                        <option value="New Caledonia">New Caledonia</option>
                                                        <option value="New Zealand">New Zealand</option>
                                                        <option value="Nicaragua">Nicaragua</option>
                                                        <option value="Niger">Niger</option>
                                                        <option value="Nigeria">Nigeria</option>
                                                        <option value="Niue">Niue</option>
                                                        <option value="Norfolk Island">Norfolk Island</option>
                                                        <option value="Northern Mariana Islands">Northern Mariana
                                                            Islands</option>
                                                        <option value="Norway">Norway</option>
                                                        <option value="Oman">Oman</option>
                                                        <option value="Pakistan">Pakistan</option>
                                                        <option value="Palau">Palau</option>
                                                        <option value="Palestinian Territory, Occupied">Palestinian
                                                            Territory, Occupied</option>
                                                        <option value="Panama">Panama</option>
                                                        <option value="Papua New Guinea">Papua New Guinea</option>
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
                                                        <option value="Russian Federation">Russian Federation</option>
                                                        <option value="Rwanda">Rwanda</option>
                                                        <option value="Saint Helena">Saint Helena</option>
                                                        <option value="Saint Kitts and Nevis">Saint Kitts and Nevis
                                                        </option>
                                                        <option value="Saint Lucia">Saint Lucia</option>
                                                        <option value="Saint Pierre and Miquelon">Saint Pierre and
                                                            Miquelon</option>
                                                        <option value="Saint Vincent and The Grenadines">Saint Vincent
                                                            and The Grenadines</option>
                                                        <option value="Samoa">Samoa</option>
                                                        <option value="San Marino">San Marino</option>
                                                        <option value="Sao Tome and Principe">Sao Tome and Principe
                                                        </option>
                                                        <option value="Saudi Arabia">Saudi Arabia</option>
                                                        <option value="Senegal">Senegal</option>
                                                        <option value="Serbia">Serbia</option>
                                                        <option value="Seychelles">Seychelles</option>
                                                        <option value="Sierra Leone">Sierra Leone</option>
                                                        <option value="Singapore">Singapore</option>
                                                        <option value="Slovakia">Slovakia</option>
                                                        <option value="Slovenia">Slovenia</option>
                                                        <option value="Solomon Islands">Solomon Islands</option>
                                                        <option value="Somalia">Somalia</option>
                                                        <option value="South Africa">South Africa</option>
                                                        <option value="South Georgia and The South Sandwich Islands">
                                                            South Georgia and The South Sandwich Islands</option>
                                                        <option value="Spain">Spain</option>
                                                        <option value="Sri Lanka">Sri Lanka</option>
                                                        <option value="Sudan">Sudan</option>
                                                        <option value="Suriname">Suriname</option>
                                                        <option value="Svalbard and Jan Mayen">Svalbard and Jan Mayen
                                                        </option>
                                                        <option value="Swaziland">Swaziland</option>
                                                        <option value="Sweden">Sweden</option>
                                                        <option value="Switzerland">Switzerland</option>
                                                        <option value="Syrian Arab Republic">Syrian Arab Republic
                                                        </option>
                                                        <option value="Taiwan, Province of China">Taiwan, Province of
                                                            China</option>
                                                        <option value="Tajikistan">Tajikistan</option>
                                                        <option value="Tanzania, United Republic of">Tanzania, United
                                                            Republic of</option>
                                                        <option value="Thailand">Thailand</option>
                                                        <option value="Timor-leste">Timor-leste</option>
                                                        <option value="Togo">Togo</option>
                                                        <option value="Tokelau">Tokelau</option>
                                                        <option value="Tonga">Tonga</option>
                                                        <option value="Trinidad and Tobago">Trinidad and Tobago</option>
                                                        <option value="Tunisia">Tunisia</option>
                                                        <option value="Turkey">Turkey</option>
                                                        <option value="Turkmenistan">Turkmenistan</option>
                                                        <option value="Turks and Caicos Islands">Turks and Caicos
                                                            Islands</option>
                                                        <option value="Tuvalu">Tuvalu</option>
                                                        <option value="Uganda">Uganda</option>
                                                        <option value="Ukraine">Ukraine</option>
                                                        <option value="United Arab Emirates">United Arab Emirates
                                                        </option>
                                                        <option value="United Kingdom">United Kingdom</option>
                                                        <option value="United States">United States</option>
                                                        <option value="United States Minor Outlying Islands">United
                                                            States Minor Outlying Islands</option>
                                                        <option value="Uruguay">Uruguay</option>
                                                        <option value="Uzbekistan">Uzbekistan</option>
                                                        <option value="Vanuatu">Vanuatu</option>
                                                        <option value="Venezuela">Venezuela</option>
                                                        <option value="Viet Nam">Viet Nam</option>
                                                        <option value="Virgin Islands, British">Virgin Islands, British
                                                        </option>
                                                        <option value="Virgin Islands, U.S.">Virgin Islands, U.S.
                                                        </option>
                                                        <option value="Wallis and Futuna">Wallis and Futuna</option>
                                                        <option value="Western Sahara">Western Sahara</option>
                                                        <option value="Yemen">Yemen</option>
                                                        <option value="Zambia">Zambia</option>
                                                        <option value="Zimbabwe">Zimbabweoption </option>
                                                        
                                                    </select>
                                                </div>

                                                <div class="mb-3 col-12">
                                                    <button class="btn btn-success ps-5 pe-5">Save</button>
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
      <!-- <body>
        
        <div class="container">
          
          <div class="iphone">
            
            <div class="header">
              <div class="header-summary">
                <h4 class="">Wallet No :</h4>
                <div class="summary-balance">{{authUser.wallet}}</div>
              </div>
              <div class="user-profile">

                <img v-if="authUser.profile"
                        class="user-photo"
                        :src="authUser.profile"
                        alt="Richard Nevoreski"
                      />
                      <img v-else
                        class="user-photo"
                        src="data:image/png;base64,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"
                        alt="Richard Nevoreski"
                      />
               
              </div>
            </div>
            <div class="content">
              <div class="card">
                <div class="upper-row">
                  <div class="card-item">
                    <div>Wallet Account Balance</div>
                   
                    {{authUser.main_balance}} $
                
                  </div>
                  <div class="card-item">
                    <div>Live Account Balance</div>
                    {{authUser.live_balance}} $
                  </div>
                </div>
           
                <div class="lower-row ">
                  <router-link to="/deposit" class="icon-item">
                    <div class="icon"><i class="fas fa-upload"></i></div>
                    <div class="icon-text">Top-up</div>
                  </router-link>
                  <router-link to="withdraw" class="icon-item">
                    <div class="icon">
                      <i class="fas fa-money-check-alt"></i>
                    </div>
                    <div class="icon-text">Withdraw</div>
                  </router-link>
                 
                </div>
              </div>
              
            </div>
 
          </div>
        </div>

      </body> -->

    </DeshboardLayout>
</template>
    
  <script>
import { RouterLink } from "vue-router";

import { useAuthUserStore } from "../../store/user";
import isAuthenticated from "./../../midleware/auth";

import axios from "axios";
export default {
  data() {
    return {
      authUser: [],
    };
  },
  methods: {},

  async created() {
    if (isAuthenticated() == true) {
      // auth user data +++++++++++++++++++++++++++++

      const userStore = useAuthUserStore();
      const authUser = userStore.authUser;

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
