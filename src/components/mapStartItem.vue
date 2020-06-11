<!--
  /**
  * @description dashboard所在位置星星的原件
  * @author frenkie
  * @date 2020-06-10
  */
-->
<template>
  <div class="map_dashboard_item">
    <div class="map_dashboard_item_img">
      <img :src="'./images/dashboard/star.svg'" draggable="false" />
    </div>
  </div>
</template>

<script>
export default {
  name: "mapSystemTime",
  props: {
  },
  data() {
    return {
      time: false
    };
  }
};
</script>

<style lang="scss">
.map_dashboard_item_img{
  width: 60px;
  img{
    width: 100%;
    vertical-align: middle;
    filter: drop-shadow(1px 1px 4px #000);
  }
}
</style>