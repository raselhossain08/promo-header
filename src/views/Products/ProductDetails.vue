<script >
import p1 from'../../assets/p1.jpg'
import p2 from'../../assets/p2.jpg'
import p3 from'../../assets/p3.jpg'
export default {
  name: 'ProductDetails',
  data(){
    return{
        p1,
        p2,
        p3,
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
            <h1 class="pb-2 title">New!</h1>
            <h2 class="py-2 pr-4 sub-title">Premium 100% Cotton Long Sleeve T- Shirt New Arrival In Stock Now While Supplies Last</h2>
            <p class="d-flex align-items-center">
                <span class=" me-2">5</span>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
            </p>
    
            <h1 class="price">$0.00 </h1>
            <p class="delivery">+ Delivery $ 0.00 Arives By Tue.Aug 22</p>
                    <hr style="height: 3px;">
            <p>Color > Black</p>
    
            <div class="py-3 d-flex align-items-center color-btn">
                <button type="button" class="mr-4 btn btn-color1"></button>
                <button type="button" class="mr-4 btn btn-color2"></button>
                <button type="button" class="mr-4 btn btn-color3"></button>
                <button type="button" class="mr-4 btn btn-color4"></button>
                <button type="button" class="mr-4 btn btn-color6"></button>
                <button type="button" class="mr-4 btn btn-color7"></button>
            </div>
            <!-- size -->
             <hr style="height: 3px;">
            <div class="py-4 d-flex align-items-center">
                <p class="mr-4">Size</p>
                <button type="button" class="mr-4 nav-link">Small</button>
                <button type="button" class="mr-4 nav-link">Medium</button>
                <button type="button" class="mr-4 nav-link">Large</button>
                <button type="button" class="mr-4 nav-link">X Large</button>
                <button type="button" class="mr-4 nav-link">2X Large</button>
            </div>
            <div class="py-2">
                <h2>QTY > 1</h2>
            </div>
            <!-- add-cart -->

            <router-link to="/cart" class="my-4 text-center btn btn-primary text-uppercase btn-lg w-100" style="background-color:#0d6efd;">
                Add to cart
            </router-link>
            <button type="button" class="mb-4 text-center bg-black btn btn-dark text-uppercase btn-lg w-100" >
                Buy Now
            </button>

            <p>
                By continuing to checkout. You agree to the privacy policy and terms of service
            </p>
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