import { A } from 'vite';
<script>
export default {
  name: 'LoginView',
  data() {
    return {
      isForget: false,
      NumberDrop: false,
      isEmail: true,
      TextPlace: 'Phone Number'
    }
  },
  methods: {
    forget() {
      this.isForget = !this.isForget
    },
    NumberDropdown() {
      this.NumberDrop = !this.NumberDrop
    },
    changeEmail() {
      this.isEmail = false
      this.TextPlace = 'Email Address'
    },
    changePhone() {
      this.isEmail = true
      this.TextPlace = 'Phone Number'
    }
  }
}
</script>

<template>
  <main class="p-5 overflow-hidden d-flex align-items-center w-100" style="height: 100vh">
    <div class="row w-100">
      <div class="mx-auto col-md-4 col-sm-8 col-10">
        <!-- login -->
        <form action="" class="p-4 border-0 rounded-lg shadow-lg card" v-if="!isForget">
          <h2 class="py-4 text-3xl text-center">Login Account</h2>
          <div class="mb-3 form-group">
            <input
              type="text"
              class="form-control"
              name="emailOrPhone"
              id=""
              placeholder="Email or Phone Number"
            />
          </div>
          <div class="mb-3 form-group">
            <input
              type="password"
              class="form-control"
              name="password"
              id=""
              placeholder="New Password"
            />
          </div>
          <button
            type="button"
            class="py-2 text-right text-blue-700 text-capitalize text-decoration-underline"
            @click="forget"
          >
            forget password
          </button>
          <button
            type="submit"
            class="mx-auto text-white bg-black shadow-lg btn submit-btn btn-block w-50"
          >
            Login
          </button>
          <p class="py-3 text-center text-uppercase">
            Create New Account?
            <router-link to="/register" class="text-green-500">Signup</router-link>
          </p>
        </form>
        <!-- forget -->
        <form action="" class="p-4 border-0 rounded-lg shadow-lg card" v-if="isForget">
          <h2 class="py-4 text-3xl text-center">Reset Password</h2>
          <div class="flex justify-between">
            <button
              type="button"
              v-bind:class="isEmail ? 'btn ' : 'btn text-blue-700'"
              @click="changeEmail()"
            >
              Email
            </button>
            <button
              type="button"
              class="btn"
              v-bind:class="isEmail ? 'btn text-blue-700' : 'btn '"
              @click="changePhone()"
            >
              Phone
            </button>
          </div>
          <div
            class="flex items-center h-10 my-3 border rounded-lg form-group"
            style="border-color: #dee2e6"
          >
            <div class="dropdown open" v-if="isEmail">
              <select class="w-24 px-3 py-2 form-control" name="Country" id="" cla>
                <option selected>Us +1</option>
                <option value="1">Us +1</option>
                <option value="2">Us +1</option>
              </select>

              <div class="dropdown-menu show" aria-labelledby="triggerId" v-if="NumberDrop">
                <button class="dropdown-item text-capitalize flex align-items-center" type="button">
                  <img
                    src="../../assets/flag/united-states.png"
                    alt="flag"
                    style="width: 20px; height: auto"
                  />
                  <span class="ml-1 text-sm"> united states </span>
                </button>
                <button class="dropdown-item text-capitalize flex align-items-center">
                  <img
                    src="../../assets/flag/canada.png"
                    alt="flag"
                    style="width: 20px; height: auto"
                  />
                  <span class="ml-1 text-sm"> canada </span>
                </button>
                <button class="dropdown-item text-capitalize flex align-items-center break-words">
                  <img
                    src="../../assets/flag/united-kingdom.png"
                    alt="flag"
                    style="width: 20px; height: auto"
                  />
                  <span class="ml-1 break-words text-sm"> United Kingdom </span>
                </button>
                <button class="dropdown-item text-capitalize flex align-items-center">
                  <img
                    src="../../assets/flag/australia.png"
                    alt="flag"
                    style="width: 20px; height: auto"
                  />
                  <span class="ml-1 text-sm"> australia </span>
                </button>
                <button class="dropdown-item text-capitalize flex align-items-center">
                  <img
                    src="../../assets/flag/mexico.png"
                    alt="flag"
                    style="width: 20px; height: auto"
                  />
                  <span class="ml-1 text-sm"> mexico </span>
                </button>
                <button class="dropdown-item text-capitalize flex align-items-center">
                  <img
                    src="../../assets/flag/argentina.png"
                    alt="flag"
                    style="width: 20px; height: auto"
                  />
                  <span class="ml-1 text-sm"> argentina </span>
                </button>
              </div>
            </div>
            <div class="form-group block w-full">
              <input
                type="text"
                class="form-control"
                name=""
                id=""
                aria-describedby="helpId"
                v-bind:placeholder="TextPlace"
              />
            </div>
          </div>
          <div class="mb-3 border rounded-lg form-group d-flex" style="border-color: #dee2e6">
            <input
              type="text"
              class="w-3/4 form-control"
              name="code"
              id=""
              placeholder="Enter The 6 Digit Code"
            />
            <button type="button" class="btn">Send Code</button>
          </div>
          <div class="mb-3 form-group">
            <input type="password" class="form-control" name="" id="" placeholder="New Password" />
          </div>
          <button
            type="submit"
            class="mx-auto text-white bg-black shadow-lg btn submit-btn btn-block w-50"
          >
            Login
          </button>

          <p class="py-3 text-center text-uppercase">
            Create New Account? 
            <router-link to="/register" class=" text-green-500">Signup</router-link>
          </p>
        </form>
      </div>
    </div>
  </main>
</template>

<style></style>
