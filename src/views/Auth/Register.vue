import { A, q, c } from 'vite';
<script>
export default {
  name: 'RegisterView',
  data() {
    return {
      question: false
    }
  },
  methods: {
    questionBtn() {
      this.question = !this.question
    }
  }
}
</script>

<template>
  <main class="p-5 overflow-hidden d-flex align-items-center w-100" style="height: 100vh">
    <div class="row w-100">
      <div class="mx-auto col-md-4 col-sm-8 col-10">
        <form action="" class="p-4 border-0 rounded-lg shadow-lg card">
          <h2 class="py-4 text-3xl text-center">Create Account</h2>
          <div class="mb-3 form-group">
            <input
              type="text"
              class="form-control"
              name="BussinessName"
              id=""
              placeholder="Bussiness Name"
            />
          </div>
          <div class="mb-3 form-group">
            <select class="form-control" name="" id="">
              <option selected>Category</option>
              <option>Cloth</option>
              <option>Men</option>
              <option>Women</option>
            </select>
          </div>
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
          <div class="mb-3 form-group flex align-items-center relative border pl-3">
            <p
              v-if="question"
              class="absolute left-0 top-0 text-dark bg-slate-100 p-4 w-100 flex justify-between z-1"
            >
              <span>This data will not be shown publicly. Advertiser confirm</span>
              <span class="cursor-pointer" @click="questionBtn()">X</span>
            </p>
            <h2 class="flex align-items-center mr-2">
              BIRTHDAY
              <Button
                class="btn p-0 m-0 relative"
                style="top: -10px"
                type="button"
                @click="questionBtn()"
              >
                ?
              </Button>
            </h2>
            <input type="password" class="form-control" name="mo" id="" placeholder="MO" />
            <span class="text-xl mx-2">/</span>
            <input type="text" class="form-control" name="day" id="" placeholder="DAY" />
            <span class="text-xl mx-2">/</span>
            <input type="text" class="form-control" name="year" id="" placeholder="YEAR" />
          </div>
          <div class="form-check mb-4 flex align-items-center w-full border py-2">
            <label class="form-check-label w-50 flex justify-between px-5 border-e font-bold">
              Male
              <input
                type="radio"
                class="form-check-input"
                name="gender"
                id=""
                value="male"
                checked
              />
            </label>
            <label class="form-check-label w-50 flex justify-between px-5 font-bold">
              Female
              <input
                type="radio"
                class="form-check-input"
                name="gender"
                id=""
                value="female"
                checked
              />
            </label>
          </div>

          <button
            type="submit"
            class="mx-auto text-white bg-green-600 shadow-lg btn submit-btn btn-block w-50"
          >
            Signup
          </button>

          <p class="pt-3 text-center text-capitalize">
            By Clicking Sign Up agree to our
            <a href="#" class="text-blue-700">Terms of service, privacy policy </a> and
            <a href="" class="text-blue-700">Cookie Policy</a>
          </p>

          <p class="pt-3 text-center text-uppercase">
            Already have an account ?
            <router-link to="/login" class="text-blue-700">Login</router-link>
          </p>
        </form>
      </div>
    </div>
  </main>
</template>

<style>
.submit-btn:hover {
  background-color: rgb(22 163 74 / 1);
}
</style>
