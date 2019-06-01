<template>
    <div>
      <div id="app"  class="mx-auto max-w-4xl mt-10 shadow-2xl p-12">
          <div class="rounded-full mx-auto m-4 w-32 h-32">
              <img src="../assets/iss.png" alt="">
          </div>
          <h2 class="text-2xl rounded-lg text-center p-3 ">
        Get The ISS Satelite Location
      </h2>
      iv class="containe text-center mt-2">
        <span class="font-mono font-bold text-lg"
          >Details of the satelite tracking</span
        >
        <div class="md:text-left md:flex p-2 flex-row justify-between mt-5">
          <div class="text-left">
            <h2 class="text-lg text-black">
              Satelite Name :
              <b class="text-indigo-800 text-xl">{{ info.name }} </b>
            </h2>
            <h2 class="text-lg text-black">
              Satelite ID :
              <b class="text-indigo-800 text-xl">{{ info.id }} </b>
            </h2>
            <h2 class="text-lg text-black">
              Altitude :
              <b class="text-indigo-800 text-xl">{{ info.altitude }} </b>
            </h2>
            <h2 class="text-lg text-black">
              Visibility :
              <b class="text-indigo-800 text-xl">{{ info.visibility }} </b>
            </h2>
            <h2 class="text-lg text-black">
              No. Days :
              <b class="text-indigo-800 text-xl">{{ info.daynum }} </b>
            </h2>
          </div>
          <div class="text-right md:text-left">
            <h2 class="text-lg text-black">
              Latitude :
              <b class="text-indigo-800 text-xl">{{ info.latitude }} </b>
            </h2>
            <h2 class="text-lg text-black">
              Longitude :
              <b class="text-indigo-800 text-xl">{{ info.longitude }} </b>
            </h2>
            <h2 class="text-lg text-black">
              Velocity :
              <b class="text-indigo-800 text-xl">{{ info.velocity }} </b>
            </h2>
            <h2 class="text-lg text-black">
              Footprint :
              <b class="text-indigo-800 text-xl">{{ info.footprint }} </b>
            </h2>
            <h2 class="text-lg text-black">
              Solar Lat :
              <b class="text-indigo-800 text-xl">{{ info.solar_lat }} </b>
            </h2>
          </div>
        </div>
    
        <div class="map mt-16 w-full" id="googleMap">
          <h3 class="bg-yellow-400 text-xl text-center text-center p-2">
            Realtime Map Location
          </h3>
          <div style="width: 100%; margin-top: 50px;">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2965.0824050173574!2d-93.63905729999999!3d41.998507000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sWebFilings%2C+University+Boulevard%2C+Ames%2C+IA!5e0!3m2!1sen!2sus!4v1390839289319"
              width="100%"
              height="200"
              frameborder="0"
              style="border:0"
            ></iframe>
          </div>
        </div>
      </div>
      </div>
</template>