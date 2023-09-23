<template>
  <div class="container px-10 py-4 mx-auto">
    <!--  -->
    <div class="auth-button">
      <router-link class="block w-full px-12 py-3 mb-4 font-bold text-center text-white bg-black rounded-lg shadow-lg" to="/login">
        SIGN IN TO CHECK OUT
      </router-link>
      <router-link class="w-full px-12 py-3 font-bold text-center text-white bg-black rounded-lg shadow-lg d-block" to="/cart">
        CHECK OUT AS GUEST
      </router-link>
    </div>
    <!--  -->

    <div class="checkout">
      <!-- top-bar -->
      <div class="flex px-5 py-4">
        <div class="basis-2/4">
          <h2 class="font-bold text-uppercase">CHECKOUT CART <fa icon="caret-right" /> <span class="font-bold">(5)</span></h2>
        </div>
        <div class="text-right basis-2/4">
          <button type="button" class="font-bold uppercase">
            See All
            <fa icon="angle-down" />
          </button>
        </div>
      </div>
      <!-- product -->

      <div  style="height: 74vh" class="overflow-y-auto ">
        <div class="pt-5 overflow-y-auto ">
          <div class="w-full mb-5 border-b" v-for="(x, index) in product" :key="index">
            <div class="flex ">
              <div class="w-1/4 px-5">
                <div v-for="(its, id) in x.gallery" :key="id">
                  <router-link to="/product-details">
                    <img v-bind:src="its.productsPhoto" alt="" class="w-full rounded-md h-fit" />
                  </router-link>
                  
                </div>
              </div>
              <div class="w-3/4 px-5">
                <div class="flex items-center justify-between font-bold ">
                  
                  <h4>{{ x.name }}</h4>
                  
                  <button type="button" class="text-red-500">Remove</button>
                </div>
                <!-- description -->
                <router-link to="/product-details">               
                   <p class="py-3 capitalize pe-10">{{ x.description }}</p>
                 </router-link>

                 <div class="flex items-center justify-between font-bold ">
                    <p class="font-bold">QTY <fa icon="caret-right" /> {{ x.QTY }}</p>
                    <p class="font-bold capitalize">Color <fa icon="caret-right" /> {{x.Color}}</p>
                    <p class="font-bold capitalize">Size <fa icon="caret-right" /> {{x.Size}}</p>

                 </div>
              </div>
            </div>
            <div class="flex justify-between px-5 py-4 font-bold">
                <p class="font-bold capitalize">$ {{ x.price }}</p>
                <p class="font-bold capitalize">+ {{ x.delivery }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import product1 from '../../../assets/product1.jpg'

export default {
  data() {
    return {
      product: [
        {
          name: 'New!',
          description:"premium 100% Contton long sleeve t-shirt new arrival in stock now while supplies last",
          QTY:"1",
          Color:"Red",
          Size:"lg",
          price:"10",
          delivery:"Delivery $0.00 Arrives By Tue.Aug 23",
          gallery: [
            {
              productsPhoto: product1
            }
          ]
        },
        {
          name: 'New!',
          description:"premium 100% Contton long sleeve t-shirt new arrival in stock now while supplies last",
          QTY:"1",
          Color:"Red",
          Size:"lg",
          price:"10",
          delivery:"Delivery $0.00 Arrives By Tue.Aug 23",
          gallery: [
            {
              productsPhoto: product1
            }
          ]
        }
        ,
        {
          name: 'New!',
          description:"premium 100% Contton long sleeve t-shirt new arrival in stock now while supplies last",
          QTY:"1",
          Color:"Red",
          Size:"lg",
          price:"10",
          delivery:"Delivery $0.00 Arrives By Tue.Aug 23",
          gallery: [
            {
              productsPhoto: product1
            }
          ]
        },
        {
          name: 'New!',
          description:"premium 100% Contton long sleeve t-shirt new arrival in stock now while supplies last",
          QTY:"1",
          Color:"Red",
          Size:"lg",
          price:"10",
          delivery:"Delivery $0.00 Arrives By Tue.Aug 23",
          gallery: [
            {
              productsPhoto: product1
            }
          ]
        },
        {
          name: 'New!',
          description:"premium 100% Contton long sleeve t-shirt new arrival in stock now while supplies last",
          QTY:"1",
          Color:"Red",
          Size:"lg",
          price:"10",
          delivery:"Delivery $0.00 Arrives By Tue.Aug 23",
          gallery: [
            {
              productsPhoto: product1
            }
          ]
        },        {
          name: 'New!',
          description:"premium 100% Contton long sleeve t-shirt new arrival in stock now while supplies last",
          QTY:"1",
          Color:"Red",
          Size:"lg",
          price:"10",
          delivery:"Delivery $0.00 Arrives By Tue.Aug 23",
          gallery: [
            {
              productsPhoto: product1
            }
          ]
        }
        
      ]
    }
  },
  name: 'LeftBar',
  components: {}
}
</script>
