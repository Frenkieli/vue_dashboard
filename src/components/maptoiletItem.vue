<!--
  /**
  * @description 顯示廁位與狀態的原件
  * @author frenkie
  * @date 2020-06-09
  */
-->
<template>
  <div class="map_toilet_item">
    <div
      class="map_toilet_item_sort"
      :style="{
        transform: data.style.transform,
        width: width + 'px',
        backgroundImage: 'url(./images/dashboard/' + (data.isSit ? 'sit' : 'squat') + (data.value === 1 ? '-use' : '') + '.png)'
      }"
    ></div>
  </div>
</template>

<script>
export default {
  name: "maptoiletItem",
  props: {
    data: Object,
    width: Number
  }
};
</script>

<style lang="scss">
div.map_toilet_item {
  .map_toilet_item_sort {
    padding-bottom: 100%;
    background-size: 100% 100%;
    filter: drop-shadow(1px 1px 4px #000);
  }
}
</style>