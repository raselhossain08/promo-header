import { A } from 'vite';
<script >

export default {
  name: 'RegisterView',
  data(){
    return{
    }
  }

}
</script>

<template>
    <main class="p-5 overflow-hidden d-flex align-items-center w-100" style="height: 100vh;">
        <div class="row w-100">
            <div class="mx-auto col-md-4 col-sm-8 col-10">
                <form action="" class="p-4 border-0 rounded-lg shadow-lg card">
                    <h2 class="py-4 text-3xl text-center">Create Account</h2>
                    <div class="mb-3 form-group">
                      <input type="text"
                        class="form-control" name="BussinessName" id="" placeholder="Bussiness Name">
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
                        <input type="text"
                          class="form-control" name="emailOrPhone" id="" placeholder="Email or Phone Number">
                    </div>
                    <div class="mb-3 form-group">
                        <input type="password"
                          class="form-control" name="password" id="" placeholder="New Password">
                    </div>
                   <button type="submit" class="mx-auto text-white bg-green-600 shadow-lg btn submit-btn btn-block w-50">Signup</button> 

                   <p class="pt-3 text-center text-capitalize">By Clicking Sign Up  agree to our <a href="#" class="text-blue-700">Terms of service, privacy policy </a> and <a href="" class="text-blue-700">Cookie Policy</a></p>
                   
                   <p class="pt-3 text-center text-uppercase">Already have an account ? <router-link to="/login" class="text-blue-700 ">Login</router-link></p>
                </form>
            </div>
        </div>
    </main>
</template>


<style>
.submit-btn:hover{
    background-color: rgb(22 163 74 / 1)
}
</style>