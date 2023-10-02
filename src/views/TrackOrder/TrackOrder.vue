<script >

export default {
  name: 'TrackView',
  data(){
    return{
    }
  }

}
</script>

<template>
    <main class="overflow-hidden ">
        <div class="p-5 row">
            <div class="mx-auto col-md-8">
                <div class="p-4 card">
                    <div class="items-center justify-between top-bar d-flex">
                        <div class="left text-uppercase">
                            <p class="pb-0 mb-0">8/08/23 </p>
                            <p class="py-0 text-red-700">Shipped</p>
                        </div>    
                        <div class="middle text-uppercase">
                            <p class="pb-0 mb-0 text-blue-700">en Route </p>
                        </div>
                        <div class="End text-uppercase">
                            <p class="pb-0 mb-0">8/08/23 @ 7.11pm</p>
                            <p class="py-0 text-green-700">Delivered</p>
                        </div>   
                    </div>
                    <div class="my-4 progress">
                        <div class="bg-red-700 progress-bar" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <div class="form-group text-capitalize">
                      <input type="text"
                        class="py-2 form-control" name="" id="" aria-describedby="helpId" placeholder="Enter the tracking Number">
                    </div>
                    <div class="my-4 text-center">
                        <button type="button" class="text-white bg-red-700 btn track-btn btn-lg">Track order</button>
                    </div>
                    
                </div>
            </div>
        </div>
    </main>
</template>


<style>
.track-btn:hover{
    color: red !important;
    border:1px solid red;
}
</style>