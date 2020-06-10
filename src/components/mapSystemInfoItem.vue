<!--
  /**
  * @description 顯示面板組件
  * @author frenkie
  * @date 2020-06-09
  */
-->
<template>
  <div
    class="map_systemInfo"
    id="map_systemmenInfo_0"
  >
    <div class="map_systemInfo_img">
      <img :src="'./images/dashboard/' + imageSrc +'.png'" draggable="false" />
    </div>
    <div class="map_systemInfo_info">
      <div class="map_systemInfo_info_temperature map_systemInfo_info_item">
        <span>溫度</span>
        <span>
          <span id="map_systemInfo_info_men_temperature">{{ data.property.temperature ? data.property.temperature.value : '--' }}</span>°C
        </span>
      </div>
      <div class="map_systemInfo_info_humidity map_systemInfo_info_item">
        <span>濕度</span>
        <span>
          <span id="map_systemInfo_info_men_humidity">{{ data.property.humidity ? data.property.humidity.value : '--' }}</span>%
        </span>
      </div>
      <div class="map_systemInfo_info_PM25 map_systemInfo_info_item">
        <span>PM2.5</span>
        <span id="map_systemInfo_info_men_PM25">{{ data.property.PM25 ? data.property.PM25.value : '--' }}</span>
      </div>
      <div class="map_systemInfo_info_CO2 map_systemInfo_info_item">
        <span>二氧化碳</span>
        <span id="map_systemInfo_info_men_CO2">{{ data.property.CO2 ? data.property.CO2.value : '--' }}</span>
      </div>
      <div class="map_systemInfo_info_NH3 map_systemInfo_info_item">
        <span>氨氣</span>
        <span id="map_systemInfo_info_men_NH3">{{ data.property.NH3 ? data.property.NH3.value : '--' }}</span>
      </div>
      <div class="map_systemInfo_info_H2S map_systemInfo_info_item">
        <span>硫化氫</span>
        <span id="map_systemInfo_info_men_H2S">{{ data.property.H2S ? data.property.H2S.value : '--' }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "maptoiletItem",
  props: {
    data: Object
  },
  computed: {
    imageSrc : function(){
      return this.data._id.replace('map_system', '').split('Info')[0]
    }
  }
};
</script>

<style lang="scss">
div.map_systemInfo {
  display: flex;
  align-items: center;
  .map_systemInfo_img{
    width: 50px;
    img{
      vertical-align: middle;
      width: 100%;
    }
  }
  .map_systemInfo_info {
    display: flex;
    .map_systemInfo_info_item{
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