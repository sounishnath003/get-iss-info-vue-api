<template>
  <div>
    <div id="app">
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
              <b class="text-indigo-800 text-xl">{{ info.latitude }}</b>
            </h2>
          </div>
          <div class="mr-3">
            <h2 class="text-lg text-black">
              Longitude :
              <b class="text-indigo-800 text-xl">{{ info.longitude }}</b>
            </h2>
          </div>
          <div class="mr-3">
            <h2 class="text-lg text-black">
              Velocity :
              <b class="text-indigo-800 text-xl">{{ info.velocity }} mph</b>
            </h2>
          </div>
          <div class="mr-3">
            <h2 class="text-lg text-black">
              Solar Lat :
              <b class="text-indigo-800 text-xl">{{ info.solar_lat }}</b>
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
          <!-- <iframe :src="map_url" width="100%" height="200" frameborder="0" style="border:0"></iframe> -->
        </div>
      </div>

      <!-- leaflet Js mapping feauture -->
      <div
        id="openMap"
        ref="mapElement"
        class="w-full h-64 shadow-xl rounded-lg mt-10 p-8 bg-indigo-200"
      >
        <button
          @click="initMap"
          class="bg-indigo-500 m-12 text-white rounded p-8"
        >SEE THE LIVE TRACKING</button>
      </div>
    </div>
  </div>
</template>


<script>
// https://www.google.com/maps/place/51%C2%B030'31.5%22N+0%C2%B007'15.1%22W/@51.508742,-0.1230387,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x0!8m2!3d51.508742!4d-0.12085
import Axios from "axios";
import L, { marker } from "leaflet";
import { setInterval } from "timers";

export default {
  data() {
    return {
      info: null,
      name: "",
      map_info: null,
      error: false,
      latitude: "51.508742",
      longitude: "-0.120850",
      map: null,
      tiles: null,
      layers: [],
      marker: null,
      tileUrl: "http://{s}.tile.osm.org/{z}/{x}/{y}.png",
      markerIcon: null,
      markerUri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/International_Space_Station.svg/200px-International_Space_Station.svg.png',
    };
  },
  methods: {
    initMap() {
      this.map = L.map("openMap").setView(
        [this.info.latitude, this.info.longitude],
        2
      );
      /* set icon onject */
      const icon = this.markerIcon = L.icon({
        iconUrl: this.markerUri,
        iconSize: [80,66],
        iconAnchor: [40, 33]
      })
      /* set marker position */
      this.marker = L.marker([0, 0]);
      /* attributions for adding leaflet map // its important */
      const attribution =
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attribution">CARTO</a>';
      this.tiles = L.tileLayer(this.tileUrl, { attribution });
      this.marker = L.marker([this.info.latitude, this.info.longitude], {icon: icon}).bindTooltip('hello there').addTo(
        this.map
      );
      this.tiles.addTo(this.map);
    },
    //initLayers() {}
  },
  created() {
    Axios.get(`https://api.wheretheiss.at/v1/satellites/25544.json`)
      .then(response => {
        this.info = response.data;
      })
      .catch(error => {
        this.error.push(error);
        this.error.push(error);
        alert("sorry, network failure");
        this.error = true;
      })
      .finally(() => (this.loading = false));
  },
  mounted() {
    this.initMap();
  }
};

setInterval(() => {
  let openMap = document.getElementById("openMap");
  //location.reload();
}, 40000);
</script>


