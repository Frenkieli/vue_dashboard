<!-- 
  /**
  * @description 公廁計數器的組件
  * @author frenkie
  * @date 2020-06-09
  */
-->
<template>
  <div class="map_count">
    {{ toiletTitle[data._id] }}廁所:
    <span>{{ toiletQuantity[data._id].total }}</span>(使用中:
    <span>{{ toiletQuantity[data._id].used }}</span>空位:
    <span>{{ toiletQuantity[data._id].total - toiletQuantity[data._id].used }}</span>)
  </div>
</template>

<script>
export default {
  name: "mapCountItem",
  props: {
    data: Object,
    toiletQuantity: Object
  },
  data(){
    return{
      toiletTitle:{
        map_mentotal: '男性',
        map_womentotal: '女性',
        map_parenttotal: '親子',
        map_disabledtotal: '無障礙',
      }
    }
  }
};
</script>