<!-- 
  /**
  * @description 地圖圖片的組件
  * @author frenkie
  * @date 2020-06-09
  */
-->
<template>
  <div class="dashboard_Map_Map">
    <img :src="imageSrc" draggable="false"/>
  </div>
</template>

<script>
export default {
  name: "mapImageItem",
  props: {
    imageSrc: String
  }
};
</script>

<style lang="scss" scoped>
div.dashboard_Map_Map {
  padding: 0;
  img {
    width: 100%;
    vertical-align: middle;
  }
}
</style>