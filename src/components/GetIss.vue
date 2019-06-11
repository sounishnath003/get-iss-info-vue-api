<template>
  <div>
    <div id="app" class="mx-auto max-w-4xl mt-10 shadow-2xl p-12">
      <div class="rounded-full mx-auto m-4 w-32 h-32">
        <img src="../assets/iss.png" alt>
      </div>
      <h2 class="text-2xl rounded-lg text-center p-3">Get The ISS Satelite Location</h2>
      <div class="containe text-center">
        <span class="font-mono font-bold mt-3 text-lg">Details of the satelite tracking</span>
        <div class="md:text-left md:flex p-2 flex-row justify-between mt-5">
          <h2 class="text-lg text-black">
            Satelite Name :
            <b class="text-indigo-800 text-xl">{{ info.name }}</b>
          </h2>
          <h2 class="text-lg text-black">
            Satelite ID :
            <b class="text-indigo-800 text-xl">{{ info.id }}</b>
          </h2>
          <h2 class="text-lg text-black">
            Altitude :
            <b class="text-indigo-800 text-xl">{{ info.altitude }}</b>
          </h2>
          <h2 class="text-lg text-black">
            Visibility :
            <b class="text-indigo-800 text-xl">{{ info.visibility }}</b>
          </h2>
          <h2 class="text-lg text-black">
            No. Days :
            <b class="text-indigo-800 text-xl">{{ info.daynum }}</b>
          </h2>
        </div>
         <div class="md:text-left p-2 md:flex md:block flex-row justify-between mt-5">
            <div class="mr-3">
                <h2 class="text-lg text-black">
              Latitude :
              <b class="text-indigo-800 text-xl">{{ info.latitude }} </b>
            </h2>
            </div>
            <div class="mr-3">
                <h2 class="text-lg text-black">
              Longitude :
              <b class="text-indigo-800 text-xl">{{ info.longitude }} </b>
            </h2>
            </div>
            <div class="mr-3">
                <h2 class="text-lg text-black">
              Velocity :
              <b class="text-indigo-800 text-xl">{{ info.velocity }} </b>
            </h2>
            </div>
            <div class="mr-3">
                <h2 class="text-lg text-black">
              Solar Lat :
              <b class="text-indigo-800 text-xl">{{ info.solar_lat }} </b>
            </h2>
            </div>
          </div>
      </div>
      <!-- 
        working map url
        src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2965.0824050173574!2d-93.63905729999999!3d41.998507000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sWebFilings%2C+University+Boulevard%2C+Ames%2C+IA!5e0!3m2!1sen!2sus!4v1390839289319"
      -->
      <div class="map mt-16 w-full" id="googleMap">
        <h3 class="bg-yellow-400 text-xl text-center text-center p-2">Realtime Map Location</h3>
        <div style="width: 100%; margin-top: 50px;">
          <iframe
            :src="map_url"
            width="100%"
            height="200"
            frameborder="0"
            style="border:0"
          ></iframe>
        </div>
      </div>

    <!-- leaflet Js mapping feauture -->
    <div id="issMap" class="w-full shadow-xl rounded mt-10 h-64 p-8 bg-gray-200"></div>

      <div class="max-w-md md:flex bg-white mt-12 rounded-lg mx-auto shadow-xl p-8">
        <img
          src="../assets/iss.png"
          class="w-24 h-24 md:w-32 md:mx-0 md:h-32 md:mt-6 md:mr-8 mx-auto"
          alt
        >
        <div class="mt-8 md:text-left text-center">
          <div class="text-lg font-bold">Sounish Nath</div>
            <a href="https://github.com/sounishnath003">
            <div class="text-purple-500 mt-3">Student Developer</div>
          </a>   
          <div class="text-purple-500 mt-3">Kolkata, IN</div>
          <div class="text-gray-500 m-2">flock.sinasini@gmail.com</div>
          <div class="text-gray-500 m-2">(+91)-8017204855</div>
          <div>**This site is under construction</div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
// https://www.google.com/maps/place/51%C2%B030'31.5%22N+0%C2%B007'15.1%22W/@51.508742,-0.1230387,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x0!8m2!3d51.508742!4d-0.12085
import Axios from "axios";
export default {
  data() {
    return {
      info: null,
      name: "",
      map_info: null,
      error: false,
      latitude: "51.508742",
      longitude: "-0.120850",
      map_url: "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2965.0824050173574!2d-93.63905729999999!3d41.998507000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sWebFilings%2C+University+Boulevard%2C+Ames%2C+IA!5e0!3m2!1sen!2sus!4v1390839289319"
    };
  },
  methods: {
    map_generator(latitude, longitude) {
      return "https://maps.google.com/maps?q=+\'${this}\'+,+longitude+&hl=es;z=14&amp;output=embed"
    },
    myMap() {
      var mapPop = {
        center: new google.maps.LatLng(this.latitude, this.longitude),
        zoom: 5
      };
    }
  },
  created() {
    Axios
    .get(`https://api.wheretheiss.at/v1/satellites/25544.json`)
      .then(response => {
        this.info = response.data
      })
      .catch(error => {
        this.error.push(error);
        this.error.push(error);
        this.error = true;
      })
      .finally(() => (this.loading = false));
  } 
};

  const myapp = L.map('issMap').setView([51.505, -0.09], 13);
</script>
