<script >
import p1 from'../../assets/p1.jpg'
import p2 from'../../assets/p2.jpg'
import p3 from'../../assets/p3.jpg'
export default {
  name: 'ProductView',
  data(){
    return{
        p1,
        p2,
        p3,
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
              productsPhoto: p1
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
              productsPhoto: p2
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
              productsPhoto: p1
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
              productsPhoto: p3
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
              productsPhoto: p1
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
              productsPhoto: p2
            }
          ]
        }
        
      ]
    }
  }

}
</script>

<template>
  <main class="overflow-hidden">
    <!-- top-bar -->
    <div class="flex items-center justify-center w-full h-10 text-center bg-black">
      <p class="pb-0 text-lg text-white">Promo Header</p>
    </div>

    <!-- Side-bar -->
    <div class="overflow-hidden row">
      <div class="border-black border-e col-md-6 col-sm-12 col-12">
        <div id="carouselExampleIndicators" class="carousel slide">
            <div class="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
              <div class="p-5 carousel-item active">
                <img v-bind:src="p1" class="h-auto px-5 d-block w-100" alt="photos">
              </div>
              <div class="p-5 carousel-item">
                <img v-bind:src="p2" class="h-auto px-5 d-block w-100" alt="photos">
              </div>
              <div class="p-5 carousel-item">
                <img v-bind:src="p3" class="h-auto px-5 d-block w-100" alt="photos" >
              </div>
            </div>
            <button class="carousel-control-prev text-dark" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next text-dark" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
      </div>
      <div class="col-md-6 col-sm-12 col-12">
        <div class="px-5 py-5">
            <div class="auth-button">
                <router-link class="block w-full px-12 py-3 mb-4 font-bold text-white bg-black rounded-lg shadow-lg" to="/login">
                  SIGN IN TO CHECK OUT
                </router-link>
                <button class="w-full px-12 py-3 font-bold text-white bg-black rounded-lg shadow-lg" type="button">
                  CHECK OUT AS GUEST
                </button>
              </div>

              <div class="pt-5 overflow-y-auto " style="height: 70vh;">
                <div class="w-full mb-5 border-b" v-for="(x, index) in product" :key="index">
                  <router-link to="/product-details" class="flex ">
                    <div class="w-1/4 px-5">
                      <div v-for="(its, id) in x.gallery" :key="id">
                        <img v-bind:src="its.productsPhoto" alt="" class="w-full rounded-md h-fit" />
                      </div>
                    </div>
                    <div class="w-3/4 px-5">
                      <div class="flex items-center justify-between font-bold ">
                        <h4>{{ x.name }}</h4>
                        <button type="button" class="text-red-500">Remove</button>
                      </div>
                      <!-- description -->
                      <p class="py-3 capitalize pe-10">{{ x.description }}</p>
                       <div class="flex items-center justify-between font-bold ">
                          <p class="font-bold">QTY <fa icon="caret-right" /> {{ x.QTY }}</p>
                          <p class="font-bold capitalize">Color <fa icon="caret-right" /> {{x.Color}}</p>
                          <p class="font-bold capitalize">Size <fa icon="caret-right" /> {{x.Size}}</p>
      
                       </div>
                    </div>
                  </router-link>
                  <div class="flex justify-between px-5 py-4 font-bold">
                      <p class="font-bold capitalize">$ {{ x.price }}</p>
                      <p class="font-bold capitalize">+ {{ x.delivery }}</p>
                  </div>
                </div>
              </div> 
          </div>
      </div>
    </div>
  </main>
</template>


<style>
.carousel-item{
    border-radius: 15px !important;
}.carousel-item img{
    border-radius: 15px !important;
}
.carousel-control-prev-icon{
    filter: brightness(0.5);
}
.carousel-control-next-icon{
    filter: brightness(0.5);
}
.fa-star{
    color:rgb(187, 187, 6);
}
.color-btn .btn{
    width: 50px;
    height: 30px;
}
.btn-color1{
    background-color: #000;  
  }
.btn-color1:hover{
    background-color:#000 ;
}
.btn-color2{
    background-color: #a7a7a7;  
}
.btn-color2:hover{
    background-color:#a7a7a7 ;
}
.btn-color3{
    background-color: #DADADA;  
}
.btn-color3:hover{
    background-color:#DADADA ;
}
.btn-color4{
    background-color: #dd261a;  
}
.btn-color4:hover{
    background-color:#dd261a ;
}
.btn-color5{
    background-color: #1E8729;  
}
.btn-color5:hover{
    background-color:#1E8729 ;
}
.btn-color6{
    background-color: #FCB807;  
}
.btn-color6:hover{
    background-color:#FCB807 ;
}
.btn-color7{
    background-color: #F5FA0F;  
}
.btn-color7:hover{
    background-color:#F5FA0F ;
}

.title{
    font-size:25px;
    font-weight: bold;
}
.sub-title{
    font-size: 20px;
    font-weight: 600;
    padding-right: 50px;
    line-height: 1.7em;
}
.price{
    font-weight: bold;
    font-size:18px;
}
p{
    font-size: 16px;
    font-weight: 600;
    padding: 10px 0;
}
</style>