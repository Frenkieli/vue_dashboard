<!--
  /**
  * @description 顯示面板組件
  * @author frenkie
  * @date 2020-06-09
  */
-->
<template>
  <div class="map_systemInfo">
    <div class="map_systemInfo_img">
      <img :src="'./images/dashboard/' + imageSrc +'.png'" draggable="false" />
    </div>
    <div class="map_systemInfo_info">
      <div class="map_systemInfo_info_temperature map_systemInfo_info_item">
        <span>溫度</span>
        <span>
          <span>{{ temperature }}</span>
        </span>
      </div>
      <div class="map_systemInfo_info_humidity map_systemInfo_info_item">
        <span>濕度</span>
        <span>
          <span>{{ humidity }}</span>
        </span>
      </div>
      <div class="map_systemInfo_info_PM25 map_systemInfo_info_item">
        <span>PM2.5</span>
        <span :style="{
          color: PM25.color,
        }">{{ PM25.str }}</span>
      </div>
      <div class="map_systemInfo_info_CO2 map_systemInfo_info_item">
        <span>二氧化碳</span>
        <span :style="{
          color: CO2.color,
        }">{{ CO2.str }}</span>
      </div>
      <div class="map_systemInfo_info_NH3 map_systemInfo_info_item">
        <span>氨氣</span>
        <span :style="{
          color: NH3.color,
        }">{{ NH3.str }}</span>
      </div>
      <div class="map_systemInfo_info_H2S map_systemInfo_info_item">
        <span>硫化氫</span>
        <span :style="{
          color: H2S.color,
        }">{{ H2S.str }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "maptoiletItem",
  data() {
    return {
      PM25Condition: {
        good: 0,
        soso: 76,
        bad: 151
      },
      CO2Condition: {
        good: 0,
        soso: 0.15,
        bad: 0.25
      },
      NH3Condition: {
        good: 0,
        soso: 5,
        bad: 10
      },
      H2SCondition: {
        good: 0,
        soso: 5,
        bad: 10
      }
    };
  },
  props: {
    data: Object
  },
  computed: {
    imageSrc: function() {
      return this.data._id.replace("map_system", "").split("Info")[0];
    },
    temperature: function() {
      let vm = this;
      return vm.data.property.temperature
        ? vm.data.property.temperature.value + "°C"
        : "--";
    },
    humidity: function() {
      let vm = this;
      return vm.data.property.humidity
        ? vm.data.property.humidity.value / 100 + "%"
        : "--";
    },
    PM25: function() {
      let vm = this;
      return vm.data.property.PM25 ? vm.checkQuality(vm.PM25Condition, vm.data.property.PM25.value) : {str: "--"};
    },
    CO2: function() {
      let vm = this;
      return vm.data.property.CO2 ? vm.checkQuality(vm.CO2Condition, vm.data.property.CO2.value / 100) : {str: "--"};
    },
    NH3: function() {
      let vm = this;
      return vm.data.property.NH3 ? vm.checkQuality(vm.NH3Condition, vm.data.property.NH3.value) : {str: "--"};
    },
    H2S: function() {
      let vm = this;
      return vm.data.property.H2S ? vm.checkQuality(vm.H2SCondition, vm.data.property.H2S.value) : {str: "--"};
    }
  },
  methods: {
    checkQuality(condition, value) {
      let data = {
        str: "",
        color: "#000"
      };
      if (value >= condition.bad) {
        data = {
          str: "有害",
          color: "#f00"
        };
      } else if (value >= condition.soso) {
        data = {
          str: "普通",
          color: "#ff0"
        };
      } else {
        data = {
          str: "正常",
          color: "#0f0"
        };
      }
      return data;
    }
  }
};
</script>

<style lang="scss">
div.map_systemInfo {
  display: flex;
  align-items: center;
  .map_systemInfo_img {
    width: 50px;
    img {
      vertical-align: middle;
      width: 100%;
    }
  }
  .map_systemInfo_info {
    display: flex;
    .map_systemInfo_info_item {
      min-width: 70px;
      margin: 5px;
      display: flex;
      flex-direction: column;
      white-space: nowrap;
      justify-content: space-evenly;
      align-items: center;
    }
  }
}
</style>