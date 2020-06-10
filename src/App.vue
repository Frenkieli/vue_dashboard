<template>
  <div id="app"
  :style="{
      background: 'hsla( ' + dashboardData.mapStyle.background.color + ', 100%, ' + dashboardData.mapStyle.background.bright + '%, 1' + ')',
      fontSize: dashboardData.mapStyle.itemStyle.textStyle.fontSize + 'px',
      color: 'hsla( ' + dashboardData.mapStyle.itemStyle.textStyle.color + ', 100%, ' + dashboardData.mapStyle.itemStyle.textStyle.bright + '%, ' + dashboardData.mapStyle.itemStyle.textStyle.opacity + ')'
    }">
    <component 
      v-for="(value, index) in dashboardData.countItem" 
      class="map_item"
      :data = "value"
      :nowTime = "nowTime"
      :toiletQuantity = "toiletQuantity"
      :is="value._id"
      :ref="value._id + index" 
      :key="value._id + index"
      :style="{
        left: value.style.left + 'px',
        top: value.style.top + 'px',
      }"/>
    <mapImageItem 
    v-for="(value, index) in dashboardData.mapItem" 
    :imageSrc = "dashboardData.mapImg[index]"
    class="map_item"
    :key="value._id + index"
    :style="{
      left: value.style.left + 'px',
      top: value.style.top + 'px',
      width: value.style.width + 'px'
    }"/>
  </div>
  
</template>
<script>

// <systemTimeItem class="map_item"/>




import "./assets/lib/css/reset.css";

//moduleInterface
// import socketItem from "./interface/module/socketItem";

//components
import systemTimeItem from "./components/mapSystemTime";
import mapImageItem from "./components/mapImageItem";
import mapCountItem from "./components/mapCountItem";

//model
import getStartData from "./model/startData";
import nowTime from "./model/nowTime";

// import HelloWorld from './components/HelloWorld.vue'
export default {
  // extends: socketItem,
  mixins: [getStartData, nowTime],
  // mixins: [socketItem, getStartData, nowTime],
  name: "App",
  data() {
    return {};
  },
  components: {
    mapImageItem: mapImageItem,
    map_systemTime: systemTimeItem,

    map_total: mapCountItem,
    map_mentotal: mapCountItem,
    map_womentotal: mapCountItem,
    map_parenttotal : mapCountItem,
    map_disabledtotal: mapCountItem,
  },
  beforeCreate(){
  },
  async created() {
    let vm = this;
    // vm.connectSocket();
    await vm.getStartData().then(()=>{
      console.log('要印的資料', vm.dashboardData)
    });
    vm.setIntervalInit(function(){});
  },
  mounted() {
    // let vm = this;
    // vm.$refs.map_item.$el.style.background = '#fff'; //新增属性
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
#app {
  position: relative;
  width: 100%;
  height: 100vh;
  font-family: arial, Microsoft JhengHei, sans-serif;
  line-height: 1.15;
}
.map_item{
  padding: 10px;
  position: absolute;
  z-index: 1;
}
</style>
