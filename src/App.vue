<template>
  <div id="app"
    :style="dashboardBackgroundStyle">
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
    <mapStartItem 
      class="map_item" 
      :data = "dashboardData.home"       
      :style="{
        left: dashboardData.home.style.left + 'px',
        top: dashboardData.home.style.top + 'px',
    }"/>
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
        border: itemBorderStyle
    }"/>
    <maptoiletItem 
      v-for="(value, index) in toiletItem" 
      class="map_item"
      :data = "value"
      :width = "dashboardData.mapStyle.toiletSize"
      :key="index"
      :style="{
        left: value.style.left + 'px',
        top: value.style.top + 'px',
    }"/>
    <mapTotalItem 
      class="map_item"
      :style="{
        left: dashboardData.countTotalItem.style.left + 'px',
        top: dashboardData.countTotalItem.style.top + 'px',
        border: itemBorderStyle
    }"/>
    <mapSystemInfoItem 
      v-for="(value, index) in systemInfoData"
      class="map_item"
      :data="value"
      :key="value._id + index"
      :style="{
        left: value.style.left + 'px',
        top: value.style.top + 'px',
        border: itemBorderStyle
    }"/>
  </div>
  
</template>
<script>

// <systemTimeItem class="map_item"/>




import "./assets/lib/css/reset.css";

//components
import mapStartItem from "./components/mapStartItem";
import systemTimeItem from "./components/mapSystemTime";
import mapImageItem from "./components/mapImageItem";
import mapCountItem from "./components/mapCountItem";
import maptoiletItem from "./components/maptoiletItem";
import mapSystemInfoItem from "./components/mapSystemInfoItem";
import mapTotalItem from "./components/mapTotalItem";

//model
import getStartData from "./model/startData";
import nowTime from "./model/nowTime";

// import HelloWorld from './components/HelloWorld.vue'
export default {
  // extends: socketItem,
  mixins: [getStartData, nowTime],
  name: "App",
  data() {
    return {};
  },
  computed:{
    dashboardBackgroundStyle: function(){
      let vm = this;
      let style = {
        background: 'hsla( ' + vm.dashboardData.mapStyle.background.color + ', 100%, ' + vm.dashboardData.mapStyle.background.bright + '%, 1' + ')',
        fontSize: vm.dashboardData.mapStyle.itemStyle.textStyle.fontSize + 'px',
        color: 'hsla( ' + vm.dashboardData.mapStyle.itemStyle.textStyle.color + ', 100%, ' + vm.dashboardData.mapStyle.itemStyle.textStyle.bright + '%, ' + vm.dashboardData.mapStyle.itemStyle.textStyle.opacity + ')'
      }
      return style
    },
    itemBorderStyle: function(){
      let vm = this;
      let style = vm.dashboardData.mapStyle.itemStyle.border.width + 'px solid hsla( ' + vm.dashboardData.mapStyle.itemStyle.border.color + ', 100%, ' + vm.dashboardData.mapStyle.itemStyle.border.bright + '%, ' + vm.dashboardData.mapStyle.itemStyle.border.opacity + ')'
      return style;
    }
  },
  components: {
    mapTotalItem: mapTotalItem,
    mapStartItem: mapStartItem,
    mapImageItem: mapImageItem,
    maptoiletItem: maptoiletItem,
    map_systemTime: systemTimeItem,
    mapSystemInfoItem: mapSystemInfoItem,

    map_total: mapCountItem,
    map_mentotal: mapCountItem,
    map_womentotal: mapCountItem,
    map_parenttotal : mapCountItem,
    map_disabledtotal: mapCountItem,
  },
  created() {
    let vm = this;
    vm.getStartData().then(()=>{
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
