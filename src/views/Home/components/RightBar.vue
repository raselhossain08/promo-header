<script>
export default {
  name: 'RightBar'
}
</script>

<template>
  <div class="pb-10">
    <div class="px-10 py-4 form-group">
      <div class="flex items-center border border-black form-group">
        <select class="px-3 py-2 border-0 w-28 form-control" name="Country" id="" cla>
          <option selected>Country</option>
          <option value="1">Usa</option>
          <option value="2">UK</option>
        </select>
        <input type="text" class="w-full px-4 py-2 font-medium" placeholder="Country Name" />
      </div>
      <div class="flex px-0 my-2 border-0 form-control">
        <input
          type="text"
          class="w-full px-4 py-2 font-medium border border-black me-2"
          placeholder="First Name "
        />
        <input
          type="text"
          class="w-full px-4 py-2 ml-2 font-medium border border-black"
          placeholder="Last Name"
        />
      </div>
      <div class="px-0 my-2 border-0 form-control">
        <input
          type="text"
          class="w-full px-4 py-2 font-medium border border-black"
          placeholder="Street Address "
        />
      </div>
      <div class="flex items-center justify-between px-0 my-2 border-0 form-control">
        <input
          type="text"
          class="w-full px-4 py-2 font-medium border border-black me-2"
          placeholder="City "
        />
        <input
          type="text"
          class="w-full px-4 py-2 font-medium border border-black me-2"
          placeholder="State or Province "
        />
        <input
          type="text"
          class="w-full px-4 py-2 font-medium border border-black "
          placeholder="Zipcode "
        />
      </div>
      <div class="flex px-0 my-2 border-0 form-control">
        <input
          type="email"
          class="w-full px-4 py-2 font-medium border border-black me-2"
          placeholder="Email"
        />
        <input
          type="text"
          class="w-full px-4 py-2 ml-2 font-medium border border-black"
          placeholder="Confirm Email"
        />
      </div>
      <div class="flex items-center border border-black form-group">
        <select class="w-24 px-0 px-3 py-2 border-0 form-control" name="Country" id="" cla>
          <option selected>Us +1</option>
          <option value="1">Us +1</option>
          <option value="2">Us +1</option>
        </select>
        <input type="text" class="w-full p-3 px-4 font-medium" placeholder="Phone Number" />
      </div>
      <button
        class="block w-full px-12 py-3 my-3 font-bold text-white bg-black rounded-lg"
        type="button"
      >
        Done
      </button>
    </div>
    <!-- pay with -->
    <div class="w-full px-10 form-group">
      <select
        class="w-full px-4 py-2 text-lg font-medium text-black border border-black form-control"
        name=""
        id="pay"
      >
        <option selected class="font-medium text-center text-black">Pay With Credit Card</option>
        <option value="2" class="font-medium text-center text-black">Pay With Paypal</option>
        <option value="3" class="font-medium text-center text-black">Pay With Bank</option>
      </select>
    </div>
    <div class="px-10 my-2 border-0 form-control">
      <input
        type="text"
        class="w-full px-4 py-2 font-medium border border-black me-2"
        placeholder="Card Number"
      />
    </div>
    
    <div class="flex px-10 my-2 border-0 form-control">
      <input
        type="text"
        class="w-full px-4 py-2 font-medium border border-black me-2"
        placeholder="Expiration Date"
      />
      <input
        type="text"
        class="w-full px-4 py-2 ml-2 font-medium text-black border border-black "
        placeholder="Seceurity Code"
      />
    </div>
    <div class="flex px-10 my-3 uppercase border-0 form-control">
      <input
        type="text"
        class="w-full px-4 py-2 font-medium text-black border border-black me-2"
        placeholder="First Name"
      />
      <input
        type="text"
        class="w-full px-4 py-2 ml-2 font-medium border border-black"
        placeholder="Last Name"
      />
    </div>
    <div class="px-10 mb-1 uppercase form-check">
        <div class="flex justify-between mb-2 uppercase">
            <p class="font-medium">Billing Address </p>
            <fa icon="caret-down" /> 
        </div>
       
      <label class="form-check-label">
        <input type="checkbox" class="font-medium uppercase form-check-input" name="" id="" value="checkedValue" checked>
        Shiping and billing are the same
      </label>
    </div>
    <div class="px-10 form-group ">
        <hr class="h-1 bg-black ">
        <div class="flex justify-between py-2 uppercase form-group">
            <input
                type="text"
                class="w-full px-4 py-2 font-medium uppercase border border-black"
                placeholder="Enter promo code"
            />
            <button type="button" class="w-20 ml-2 text-white uppercase bg-black shadow-md">
                apply
            </button>
        </div>
        <div class="uppercase form-group">
            <div class="justify-between d-flex">
                <p class="font-medium">Sub total (0)items</p>
                <p class="font-medium">$000</p>
            </div>
            <div class="flex justify-between">
                <p class="font-medium">Promo code</p>
                <p class="font-medium">$000</p>
            </div>
            <div class="flex justify-between">
                <p class="font-medium">Shiping</p>
                <p class="font-medium">$000</p>
            </div>
            <div class="flex justify-between">
                <p class="font-medium">Tax</p>
                <p class="font-medium">$000</p>
            </div>
            <hr class="h-1 bg-black ">
            <div class="flex justify-between">
                <p class="font-medium">order total</p>
                <p class="font-medium">$000</p>
            </div>
            <button type="button" class="block w-full p-2 mt-2 font-medium text-white uppercase bg-green-500 rounded-md">
                Confirm and pay
            </button>
        </div>
    </div>

  </div>
</template>

<style>


</style>