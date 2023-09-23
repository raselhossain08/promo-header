import { A } from 'vite';
<script >

export default {
  name: 'LoginView',
  data(){
    return{
        isForget:false
    }
  },
  methods: {
    forget(){
        this.isForget = !this.isForget
    }
  },

}
</script>

<template>
    <main class="p-5 overflow-hidden d-flex align-items-center w-100" style="height: 100vh;">
        <div class="row w-100">
            <div class="mx-auto col-md-4 col-sm-8 col-10">
                <!-- login -->
                <form action="" class="p-4 border-0 rounded-lg shadow-lg card" v-if="!isForget">
                    <h2 class="py-4 text-3xl text-center">Login Account</h2>
                    <div class="mb-3 form-group">
                        <input type="text"
                          class="form-control" name="emailOrPhone" id="" placeholder="Email or Phone Number">
                    </div>
                    <div class="mb-3 form-group">
                        <input type="password"
                          class="form-control" name="password" id="" placeholder="New Password">
                    </div>
                    <button type="button" class="py-2 text-right text-blue-700 text-capitalize text-decoration-underline" @click="forget"> forget password</button>
                   <button type="submit" class="mx-auto text-white bg-green-600 shadow-lg btn submit-btn btn-block w-50">Login</button> 
                   <p class="py-3 text-center text-uppercase">Creante an new account ? <router-link to="/register" class="text-blue-700 ">Signup</router-link></p>
                </form>
                <!-- forget -->
                <form action="" class="p-4 border-0 rounded-lg shadow-lg card" v-if="isForget">
                    <h2 class="py-4 text-3xl text-center">Reset Password</h2>
                    <div class="flex items-center h-10 my-3 border rounded-lg form-group" style="border-color: #dee2e6;">
                        <select class="w-24 px-3 border-0 form-control" name="Country" id="" cla>
                          <option selected>Us +1</option>
                          <option value="1">Us +1</option>
                          <option value="2">Us +1</option>
                        </select>
                        <input type="text" class="w-full p-3 px-4 font-medium border-l h-9" placeholder="Phone Number" />
                      </div>
                    <div class="mb-3 border rounded-lg form-group d-flex" style="border-color: #dee2e6;">
                        <input type="text"
                          class="w-3/4 form-control" name="code" id="" placeholder="Enter The 6 Digit Code">
                          <button type="button" class="btn ">Send Code</button>
                    </div>
                    <div class="mb-3 form-group">
                      <input type="password"
                        class="form-control" name="" id=""  placeholder="New Password">
                    </div>
                   <button type="submit" class="mx-auto text-white bg-green-600 shadow-lg btn submit-btn btn-block w-50">Login</button> 

                   <p class="py-3 text-center text-uppercase">Creante an new account ? 
                    <router-link to="/register" class="text-blue-700 ">Signup</router-link>
                    </p>
                </form>
            </div>
        </div>
    </main>
</template>


<style>

</style>