<script >

export default {
  name: 'CartView',
  data(){
    return{
    }
  }

}
</script>

<template>
    <main class="overflow-hidden ">
        <div class="p-5 row">
            <div class="mx-auto col-md-5">
                <div class="p-4 card">
                    <div class="justify-between pb-3 border-b d-flex align-items-center">
                        <h2>Cart</h2>
                        <div>
                            <router-link  class="text-dark" to="/products" >X</router-link>
                        </div>
                    </div>
                    <fa icon="cart-shopping" class="py-4 text-center text-9xl" /> 
                    <div class="text-center card-body">
                        <h4 class="text-2xl font-bold card-title text-capitalize">Your cart is empty</h4>
                        <p class="text-xl font-medium card-text text-capitalize">Items in your shopping cart will be here</p>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>


<style>

</style>