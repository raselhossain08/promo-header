<script >
import p1 from'../../assets/p1.jpg'
import p2 from'../../assets/p2.jpg'
import p3 from'../../assets/p3.jpg'
export default {
  name: 'CommentsView',
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
    <div class="overflow-hidden ">
                    <!-- top-bar -->
    <div class="flex items-center justify-center w-full h-10 text-center bg-black">
        <p class="pb-0 text-lg text-white">Promo Header</p>
      </div>
        <div class=" row">
            <div class="py-5 border col-md-7">
                <div class="flex items-center w-100" style="height: 100vh; ">
                    <div id="carouselExampleIndicators" class="carousel slide w-100">
                        <div class="carousel-indicators">
                          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div class="carousel-inner">
                          <div class=" carousel-item active w-100">
                            <img v-bind:src="p1" class="" alt="photos">
                          </div>
                          <div class=" carousel-item w-100">
                            <img v-bind:src="p2" class="" alt="photos">
                          </div>
                          <div class=" carousel-item w-100">
                            <img v-bind:src="p3" class="" alt="photos" >
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
            </div>
            <div class="p-5 border col-md-5">
                <div class="comments-area">
                     <div class="flex items-center justify-between">
                        <h2 class="text-xl text-capitalize font-bolder">comments > <span>1k</span></h2> 
                        <button class="btn text-bolder " type="button">X</button>
                     </div> 
                     <div class="flex items-center">
                        <div class="flex items-center py-4 mr-4 avatar">
                           <span class="me-1"> <fa icon="fa-user"/></span>
                           <p>@username</p>
                        </div>

                        <div class="flex items-center py-4 follow">
                            <span class="w-10 h-10 p-2 text-center text-white bg-black rounded-full me-1"> ✔</span>
                            <button type="button" class="text-white btn bg-primary">Follow</button>
                         </div>
                         
                        <div class="flex items-center py-4 ml-5 donate">
                            <p class="text-xl text-uppercase font-weight-bold">Highest Donate $ 0</p>
                         </div>
                     </div>  
                     <div class="comments">
                        <div class="form-group position-relative">
                          <textarea class="form-control" name="" id="" rows="3" placeholder="Comments"></textarea>
                            <span class="text-xl font-bold top-4 right-4 position-absolute"> $ </span>
                        </div>
                     </div>
                     
                     <div class="comments">
                        <div class="flex items-center">
                            <div class="flex items-center py-4 mr-4 avatar">
                               <span class="text-xl me-1"> <fa icon="fa-user"/></span>
                               <p class="px-2 pb-0 mb-0 text-xl">@username <br>
                                <span class="text-sm">Just now</span></p>
                            </div>
    
                            <div class="flex items-center py-4 follow">
                                <span class="w-10 h-10 p-2 text-center text-white bg-black rounded-full me-1"> ✔</span>
                                <button type="button" class="text-white btn bg-primary">Follow</button>
                             </div>
                             
                            <div class="flex items-center py-4 ml-5 donate">
                                <p class="text-xl text-uppercase font-weight-bold">Highest Donate $ 0</p>
                             </div>
                             <div class="flex items-center py-4 ml-5 button">
                                <p class="text-xl text-uppercase font-weight-bold">
                                    <fa icon="fa-angle-down"></fa>
                                </p>
                             </div>
                         </div> 
                         <p>Highest Donate $</p>

                         <p>Reply > 4</p>
                     </div>
                     
                     <div class="comments">
                        <div class="flex items-center">
                            <div class="flex items-center py-4 mr-4 avatar">
                               <span class="text-xl me-1"> <fa icon="fa-user"/></span>
                               <p class="px-2 pb-0 mb-0 text-xl">@username <br>
                                <span class="text-sm">Just now</span></p>
                            </div>
    
                            <div class="flex items-center py-4 follow">
                                <span class="w-10 h-10 p-2 text-center text-white bg-black rounded-full me-1"> ✔</span>
                                <button type="button" class="text-white btn bg-primary">Follow</button>
                             </div>
                             
                            <div class="flex items-center py-4 ml-5 donate">
                                <p class="text-xl text-uppercase font-weight-bold">Highest Donate $ 0</p>
                             </div>
                             <div class="flex items-center py-4 ml-5 button">
                                <p class="text-xl text-uppercase font-weight-bold">
                                    <fa icon="fa-angle-down"></fa>
                                </p>
                             </div>
                         </div> 
                         <p>Highest Donate $</p>

                         <p>Reply > 4</p>
                     </div>
                                          
                     <div class="comments">
                        <div class="flex items-center">
                            <div class="flex items-center py-4 mr-4 avatar">
                               <span class="text-xl me-1"> <fa icon="fa-user"/></span>
                               <p class="px-2 pb-0 mb-0 text-xl">@username <br>
                                <span class="text-sm">Just now</span></p>
                            </div>
    
                            <div class="flex items-center py-4 follow">
                                <span class="w-10 h-10 p-2 text-center text-white bg-black rounded-full me-1"> ✔</span>
                                <button type="button" class="text-white btn bg-primary">Follow</button>
                             </div>
                             
                            <div class="flex items-center py-4 ml-5 donate">
                                <p class="text-xl text-uppercase font-weight-bold">Highest Donate $ 0</p>
                             </div>
                             <div class="flex items-center py-4 ml-5 button">
                                <p class="text-xl text-uppercase font-weight-bold">
                                    <fa icon="fa-angle-down"></fa>
                                </p>
                             </div>
                         </div> 
                         <p>Highest Donate $</p>

                         <p>Reply > 4</p>
                     </div>
                                          
                     <div class="comments">
                        <div class="flex items-center">
                            <div class="flex items-center py-4 mr-4 avatar">
                               <span class="text-xl me-1"> <fa icon="fa-user"/></span>
                               <p class="px-2 pb-0 mb-0 text-xl">@username <br>
                                <span class="text-sm">Just now</span></p>
                            </div>
    
                            <div class="flex items-center py-4 follow">
                                <span class="w-10 h-10 p-2 text-center text-white bg-black rounded-full me-1"> ✔</span>
                                <button type="button" class="text-white btn bg-primary">Follow</button>
                             </div>
                             
                            <div class="flex items-center py-4 ml-5 donate">
                                <p class="text-xl text-uppercase font-weight-bold">Highest Donate $ 0</p>
                             </div>
                             <div class="flex items-center py-4 ml-5 button">
                                <p class="text-xl text-uppercase font-weight-bold">
                                    <fa icon="fa-angle-down"></fa>
                                </p>
                             </div>
                         </div> 
                         <p>Highest Donate $</p>

                         <p>Reply > 4</p>
                     </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.btn-primary:hover{
    color: #fff !important;
}
</style>