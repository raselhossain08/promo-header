<script>
import p1 from '../../assets/p1.jpg'
import p2 from '../../assets/p2.jpg'
import p3 from '../../assets/p3.jpg'
export default {
  name: 'AdvertiserView',
  data() {
    return {
      openDrop: false,
      OpenSearch: false,
      p1,
      p2,
      p3,
      isEnglish: false,
      isUsd: false,
      isBusiness: false,
      product: [
        {
          id: 'carousel1',
          name: 'Advertiser Name  ',
          userName: '@Advertiser Name',
          addUrl: 'Ad https://www.url.com',
          description:
            'premium 100% Contton long sleeve t-shirt new arrival in stock now while supplies last',
          time: 'just now',
          gallery: [
            {
              productsPhoto: p1
            }
          ]
        },
        {
          id: 'carousel2',
          name: 'Advertiser Name  ',
          userName: '@Advertiser Name',
          addUrl: 'Ad https://www.url.com',
          description:
            'premium 100% Contton long sleeve t-shirt new arrival in stock now while supplies last',
          time: 'just now',
          gallery: [
            {
              productsPhoto: p2
            }
          ]
        },
        {
          id: 'carousel3',
          name: 'Advertiser Name  ',
          userName: '@Advertiser Name',
          addUrl: 'Ad https://www.url.com',
          description:
            'premium 100% Contton long sleeve t-shirt new arrival in stock now while supplies last',
          time: 'just now',
          delivery: 'Delivery $0.00 Arrives By Tue.Aug 23',
          gallery: [
            {
              productsPhoto: p1
            }
          ]
        },
        {
          id: 'carousel4',
          name: 'Advertiser Name  ',
          userName: '@Advertiser Name',
          addUrl: 'Ad https://www.url.com',
          description:
            'premium 100% Contton long sleeve t-shirt new arrival in stock now while supplies last',
          time: 'just now',
          gallery: [
            {
              productsPhoto: p3
            }
          ]
        },
        {
          name: 'Advertiser Name  ',
          userName: '@Advertiser Name',
          addUrl: 'Ad https://www.url.com',
          description:
            'premium 100% Contton long sleeve t-shirt new arrival in stock now while supplies last',
          time: 'just now',
          gallery: [
            {
              productsPhoto: p1
            }
          ]
        },
        {
          id: 'carousel6',
          name: 'Advertiser Name  ',
          userName: '@Advertiser Name',
          addUrl: 'Ad https://www.url.com',
          description:
            'premium 100% Contton long sleeve t-shirt new arrival in stock now while supplies last',
          time: 'just now',
          gallery: [
            {
              productsPhoto: p2
            }
          ]
        }
      ]
    }
  },
  methods: {
    DropDown() {
      this.openDrop = !this.openDrop
    },
    SearchDrop() {
      this.OpenSearch = !this.OpenSearch
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
    <div class="flex items-center justify-end w-full h-13 text-center border">
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
    <div class="p-5 row">
      <div class="col-md-12">
        <div class="flex align-items-center">
          <div class="w-full form-group position-relative">
            <div class="left-0 px-3 position-absolute top-2">
              <div class="dropdown">
                <button
                  class="p-0 mx-2 font-bold btn dropdown-toggle"
                  type="button"
                  id="triggerId"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  @click="SearchDrop()"
                >
                  <fa icon="fa-magnifying-glass " />
                </button>
                <div
                  class="left-0 dropdown-menu show"
                  aria-labelledby="triggerId"
                  style="left: -20px"
                  v-if="OpenSearch"
                >
                  <h2 class="text-lg text-black dropdown-header font-weight-bold">Public</h2>
                  <a class="dropdown-item" href="#">Private</a>
                  <a class="dropdown-item" href="#">New Window</a>
                  <a class="dropdown-item" href="#">Saved</a>
                  <a class="dropdown-item" href="#">Settings</a>
                  <a class="dropdown-item" href="#">History</a>
                  <a class="dropdown-item" href="#">Delete All</a>
                </div>
              </div>
            </div>
            <input
              type="text"
              class="h-10 pl-14 form-control"
              name=""
              id=""
              aria-describedby="helpId"
              placeholder="Advertisers name"
            />

            <div class="right-0 px-3 position-absolute top-2 d-flex align-items-center">
              <button type="button" class="p-0 m-0 btn">
                <fa icon="fa-xmark " />
              </button>
              <span class="mx-2">|</span>
              <div class="dropdown">
                <button
                  class="p-0 mx-2 font-bold btn dropdown-toggle"
                  type="button"
                  id="triggerId"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  @click="DropDown()"
                >
                  All
                </button>
                <div
                  class="left-0 dropdown-menu show"
                  aria-labelledby="triggerId"
                  style="left: -103px"
                  v-if="openDrop"
                >
                  <h2 class="text-lg text-black dropdown-header font-weight-bold">All New</h2>
                  <a class="dropdown-item" href="#">Websites</a>
                  <a class="dropdown-item" href="#">Apps</a>
                  <a class="dropdown-item" href="#">New Releases</a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#">BestSellers</a>
                  <a class="dropdown-item" href="#">New Arrivals</a>
                  <a class="dropdown-item" href="#">Best Arrivals</a>
                  <a class="dropdown-item" href="#">Products</a>
                  <a class="dropdown-item" href="#">Services</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-12">
        <div class="pt-5 overflow-x-hidden overflow-y-auto" style="height: 70vh">
          <div class="w-full mb-5" v-for="(x, index) in product" :key="index">
            <router-link to="/product-details" class="row">
              <div class="px-5 col-12 col-sm-12 col-md-4">
                <div v-for="(its, id) in x.gallery" :key="id">
                  <div v-bind:id="x.id" class="carousel slide">
                    <div class="carousel-inner">
                      <div class="carousel-item active">
                        <img
                          v-bind:src="its.productsPhoto"
                          alt=""
                          class="w-full rounded-md h-fit"
                          style="height: 125px"
                        />
                      </div>
                      <div class="carousel-item">
                        <img
                          v-bind:src="its.productsPhoto"
                          alt=""
                          class="w-full rounded-md h-fit"
                          style="height: 125px"
                        />
                      </div>
                      <div class="carousel-item">
                        <img
                          v-bind:src="its.productsPhoto"
                          alt=""
                          class="w-full rounded-md h-fit"
                          style="height: 125px"
                        />
                      </div>
                    </div>
                    <button
                      class="carousel-control-prev text-dark"
                      type="button"
                      v-bind:data-bs-target="'#' + x.id"
                      data-bs-slide="prev"
                    >
                      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Previous</span>
                    </button>
                    <button
                      class="carousel-control-next text-dark"
                      type="button"
                      v-bind:data-bs-target="'#' + x.id"
                      data-bs-slide="next"
                    >
                      <span class="carousel-control-next-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Next</span>
                    </button>
                  </div>
                </div>
                <div class="text-red-600 for-start">
                  4.9
                  <fa icon="fa-star mx-2 text-red-600" />
                  <fa icon="fa-star mx-1 text-red-600" />
                  <fa icon="fa-star mx-1 text-red-600" />
                  <fa icon="fa-star mx-1 text-red-600" />
                  <fa icon="fa-star mx-1 text-red-600" />
                </div>
              </div>
              <div class="px-5 col-12 col-sm-12 col-md-8">
                <div class="flex items-center justify-between font-bold">
                  <h2 class="mb-0 text-lg">
                    {{ x.name }}
                    <button type="button" class="mx-4 text-black">
                      <span class="w-4 h-4 text-white bg-black rounded-lg font-weight-light"
                        >✔</span
                      >
                      Follow Now
                    </button>
                    <br />
                    <span class="text-sm">{{ x.userName }}</span>
                  </h2>
                  <button type="button" class="text-white bg-black btn btn-black">Shop Now</button>
                </div>
                <!-- description -->
                <p class="py-3 text-lg capitalize pe-10">{{ x.description }}</p>
                <div class="border-t">
                  <div class="justify-between d-flex">
                    <p>{{ x.time }}</p>
                    <p>{{ x.addUrl }}</p>
                  </div>
                </div>
              </div>
            </router-link>
            <div class="flex justify-between px-5 py-4 font-bold"></div>
          </div>
          <div class="w-full"></div>
        </div>
      </div>
    </div>
  </main>
</template>

<style>
.fa-star {
  color: rgb(241, 241, 20) !important;
  margin-right: 5px;
}
</style>
