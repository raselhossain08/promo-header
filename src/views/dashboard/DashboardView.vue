<script>
import p1 from '../../assets/p1.jpg'
import p2 from '../../assets/p2.jpg'
import p3 from '../../assets/p3.jpg'
export default {
  name: 'DashboardView',
  data() {
    return {
      p1,
      p2,
      p3,
      openDrop: false,
      isEnglish: false,
      isUsd: false,
      isBusiness: false
    }
  },
  methods: {
    Drop() {
      this.openDrop = !this.openDrop
    },
    EnglishDrop() {
      this.isEnglish = !this.isEnglish
    },
    UsdDrop() {
      this.isUsd = !this.isUsd
    },
    BusinessDrop() {
      this.isBusiness = !this.isBusiness
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
    <div class="flex items-center justify-end w-full h-13 text-center border py-2">
      <div class="dropdown open mx-2">
        <button
          class="btn dropdown-toggle font-bold border"
          type="button"
          id="triggerId"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
          @click="EnglishDrop()"
        >
          English
        </button>
        <div
          class="dropdown-menu overflow-y-auto show w-10"
          aria-labelledby="triggerId"
          v-if="isEnglish"
        >
          <button class="dropdown-item font-bold" type="button ">English</button>
          <button class="dropdown-item font-bold" type="button">Spanish</button>
          <button class="dropdown-item font-bold" type="button">France</button>
          <button class="dropdown-item font-bold" type="button">Italian</button>
          <button class="dropdown-item font-bold" type="button">Portuguese</button>
          <button class="dropdown-item font-bold" type="button">Tagalog</button>
        </div>
      </div>
      <div class="dropdown open mx-2">
        <button
          class="btn dropdown-toggle font-bold uppercase border"
          type="button"
          id="triggerId"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
          @click="UsdDrop()"
        >
          USD
        </button>
        <div
          class="dropdown-menu overflow-y-auto show w-10"
          aria-labelledby="triggerId"
          v-if="isUsd"
        >
          <button class="dropdown-item font-bold uppercase" type="button ">CAD</button>
          <button class="dropdown-item font-bold uppercase" type="button">EUR</button>
          <button class="dropdown-item font-bold uppercase" type="button">AUD</button>
          <button class="dropdown-item font-bold uppercase" type="button">JPY</button>
          <button class="dropdown-item font-bold uppercase" type="button">PHP</button>
        </div>
      </div>
      <div class="dropdown open mx-2">
        <button
          class="btn dropdown-toggle font-bold uppercase border"
          type="button"
          id="triggerId"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
          @click="BusinessDrop()"
        >
          BUSINESS HOURS
        </button>
        <div
          class="dropdown-menu overflow-y-auto show w-10"
          aria-labelledby="triggerId"
          v-if="isBusiness"
        >
          <button class="dropdown-item font-bold uppercase text-sm" type="button ">
            SUNDAY 8AM-8PM
          </button>
          <button class="dropdown-item font-bold uppercase text-sm" type="button">
            MONDAY 8AM-8PM
          </button>
          <button class="dropdown-item font-bold uppercase text-sm" type="button">
            TUESDAY 8AM-8PM
          </button>
          <button class="dropdown-item font-bold uppercase text-sm" type="button">
            WEDNESDAY 8AM-8PM
          </button>
          <button class="dropdown-item font-bold uppercase text-sm" type="button">
            THURSDAY 8AM-8PM
          </button>
          <button class="dropdown-item font-bold uppercase text-sm" type="button">
            FRIDAY 8AM-8PM
          </button>
          <button class="dropdown-item font-bold text-sm uppercase" type="button">
            SATURDAY 8AM-8PM
          </button>
        </div>
      </div>
    </div>
    <div class="flex align-items-center">
      <div class="w-56">
        <nav class="py-4 border" style="height: 90vh">
          <ul class="nav text-capitalize flex-column">
            <li class="mb-4 nav-item">
              <h2 class="items-center justify-between mx-2 d-flex">
                <fa icon="fa-user" class="mr-2 text-lg text-center" />
                <span class="mr-2">My Profile</span>
                <fa icon="fa-ellipsis-vertical" />
              </h2>
            </li>
            <li class="nav-item">
              <a href="" class="nav-link">my Ads <span class="text-sm">(10)</span></a>
            </li>
            <li class="nav-item">
              <a href="" class="nav-link">adMail <span class="text-sm">(10)</span></a>
            </li>
            <li class="nav-item">
              <a href="" class="nav-link">AdDrafts <span class="text-sm">(10)</span></a>
            </li>
            <li class="nav-item">
              <a href="" class="nav-link">Message <span class="text-sm">(10)</span></a>
            </li>
            <li class="nav-item">
              <a href="" class="nav-link">Notification <span class="text-sm">(10)</span></a>
            </li>
            <li class="nav-item">
              <a href="" class="nav-link">AdPending <span class="text-sm">(10)</span></a>
            </li>
            <li class="nav-item">
              <a href="" class="nav-link">Saved <span class="text-sm">(10)</span></a>
            </li>
            <li class="nav-item">
              <a href="" class="nav-link">History <span class="text-sm">(10)</span></a>
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
      <div class="h-full border w-full relative">
        <button type="button" class="btn position-absolute bottom-2">
          <img src="../../assets/qr-code.png" alt="png" style="width: 40px; height: auto" />
        </button>
        <div class="overflow-y-auto w-100" style="height: 90vh">
          <div id="carouselExampleIndicators" class="carousel slide" style="height: 100vh">
            <div class="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                class="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img v-bind:src="p1" class="" alt="photos" />
              </div>
              <div class="carousel-item">
                <img v-bind:src="p2" class="" alt="photos" />
              </div>
              <div class="carousel-item">
                <img v-bind:src="p3" class="" alt="photos" />
              </div>
            </div>
            <button
              class="carousel-control-prev text-dark"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next text-dark"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
      <div class="w-56">
        <nav class="py-4 border" style="height: 90vh">
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
                <button
                  class="btn dropdown-toggle"
                  type="button"
                  id="triggerId"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  @click="Drop"
                >
                  Ads
                </button>
                <div v-if="openDrop" class="w-75 dropdown-menu show" aria-labelledby="triggerId">
                  <a class="dropdown-item" href="#">30</a>
                  <a class="dropdown-item" href="#">50</a>
                  <a class="dropdown-item" href="#">150</a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#">200</a>
                </div>
              </div>
            </li>
            <li class="nav-item">
              <a href="" class="nav-link"><span class="text-sm">(10)</span> New Ads</a>
            </li>
            <li class="nav-item">
              <a href="" class="nav-link"><span class="text-sm">(10)</span>Listings</a>
            </li>
            <li class="nav-item">
              <a href="" class="nav-link"><span class="text-sm">(10)</span>Products</a>
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
.carousel-item img {
  width: 100%;
  height: 90vh;
  object-fit: contain;
}
.nav-link {
  color: #000 !important;
}
</style>
