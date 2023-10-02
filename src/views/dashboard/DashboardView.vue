<script >
import p1 from'../../assets/p1.jpg'
import p2 from'../../assets/p2.jpg'
import p3 from'../../assets/p3.jpg'
export default {
  name: 'DashboardView',
  data(){
    return{
        p1,
        p2,
        p3,
        openDrop:false
    }
  },
  methods:{
    Drop(){
        this.openDrop =!this.openDrop
    }
  }

}
</script>

<template>
    <main class="overflow-hidden ">
            <!-- top-bar -->
    <div class="flex items-center justify-center w-full h-10 text-center bg-black">
        <p class="pb-0 text-lg text-white">Promo Header</p>
      </div>
        <div class=" row align-items-center">
            <div class="col-md-1">
                <nav class="py-4 border " style="height: 100vh;">
                    <ul class="nav text-capitalize flex-column">
                        <li class="mb-4 nav-item">
                            <h2 class="items-center justify-between mx-2 d-flex">
                                <fa icon="fa-user" class="mr-2 text-lg text-center" /> 
                                <span class="mr-2">My Profile</span>
                                <fa icon="fa-ellipsis-vertical" />
                            </h2>
                        </li>
                        <li class="nav-item ">
                            <a href="" class="nav-link">my Ads <span class="text-sm ">(10)</span></a>
                        </li>
                        <li class="nav-item">
                            <a href="" class="nav-link">adMail <span class="text-sm ">(10)</span></a>
                        </li>
                        <li class="nav-item">
                            <a href="" class="nav-link">AdDrafts <span class="text-sm ">(10)</span></a>
                        </li>
                        <li class="nav-item">
                            <a href="" class="nav-link">Message <span class="text-sm ">(10)</span></a>
                        </li>
                        <li class="nav-item">
                            <a href="" class="nav-link">Notification <span class="text-sm ">(10)</span></a>
                        </li>
                        <li class="nav-item">
                            <a href="" class="nav-link">AdPending <span class="text-sm ">(10)</span></a>
                        </li>
                        <li class="nav-item">
                            <a href="" class="nav-link">Saved <span class="text-sm ">(10)</span></a>
                        </li>
                        <li class="nav-item">
                            <a href="" class="nav-link">History <span class="text-sm ">(10)</span></a>
                        </li>
                        <li class="nav-item">
                            <a href="" class="nav-link">Trash</a>
                        </li>
                        <li class="nav-item">
                            <a href="" class="nav-link">settings</a>
                        </li>
                        <li class="nav-item">
                            <a href="" class="nav-link">Logout</a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div class="h-full border col-md-10" >
                <div id="carouselExampleIndicators" class="carousel slide">
                    <div class="carousel-indicators">
                      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                      <div class=" carousel-item active">
                        <img v-bind:src="p1" class="" alt="photos">
                      </div>
                      <div class=" carousel-item">
                        <img v-bind:src="p2" class="" alt="photos">
                      </div>
                      <div class=" carousel-item">
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
            <div class="col-md-1">
                <nav class="py-4 border " style="height: 100vh;">
                    <ul class="nav text-capitalize flex-column">
                        <li class="mb-4 nav-item">
                            <h2 class="items-center justify-between mx-2 d-flex">
                                <fa icon="fa-user" class="mr-2 text-lg text-center" /> 
                                <span class="mr-2">AdProfile</span>
                                <fa icon="fa-ellipsis-vertical" />
                            </h2>
                        </li>
                        <li class="nav-item">
                            <div class="dropdown">
                                <button class="btn dropdown-toggle " type="button" id="triggerId" data-toggle="dropdown" aria-haspopup="true"
                                        aria-expanded="false" @click="Drop">
                                            Ads
                                        </button>
                                <div v-if="openDrop" class="w-75 dropdown-menu show" aria-labelledby="triggerId">
                                    <a class="dropdown-item" href="#">30</a>
                                    <a class="dropdown-item " href="#">50</a>
                                    <a class="dropdown-item" href="#">150</a>
                                    <div class="dropdown-divider"></div>
                                    <a class="dropdown-item" href="#">200</a>
                                </div>
                            </div>
                        </li>
                        <li class="nav-item ">
                            <a href="" class="nav-link"><span class="text-sm ">(10)</span> New Ads</a>
                        </li>
                        <li class="nav-item">
                            <a href="" class="nav-link"><span class="text-sm ">(10)</span>Listings</a>
                        </li>
                        <li class="nav-item">
                            <a href="" class="nav-link"><span class="text-sm ">(10)</span>Products</a>
                        </li>
                        <li class="nav-item">
                            <a href="" class="nav-link">Translate</a>
                        </li>
                        <li class="nav-item">
                            <a href="" class="nav-link">Copy Link</a>
                        </li>
                        <li class="nav-item">
                            <a href="" class="nav-link">Send Offer</a>
                        </li>
                        <li class="nav-item">
                            <a href="" class="nav-link">Donate</a>
                        </li>
                        <li class="nav-item">
                            <a href="" class="nav-link">Write A review</a>
                        </li>
                        <li class="nav-item">
                            <a href="" class="nav-link">Download </a>
                        </li>
                        <li class="nav-item">
                            <a href="" class="nav-link">Contact</a>
                        </li>

                    </ul>
                </nav>
            </div>
        </div>
    </main>
</template>


<style>
.carousel-item img{
    width: 100%;
    height: 500px;
    object-fit: contain;
}
.nav-link{
    color: #000 !important;
}
</style>