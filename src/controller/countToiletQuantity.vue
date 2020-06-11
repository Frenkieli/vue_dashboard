<!-- 
  /**
  * @description 計算公廁廁位使用與全部數量
  * @author frenkie
  * @date 2020-06-10
  */
-->
<script>
import bindToiletData from "./bindToiletData";
export default {
  extends: bindToiletData,
  name: "countToiletQuantity",
  computed: {
    toiletQuantity: function() {
      let vm = this;
      let toiletItem = vm.toiletItem;
      let countData = {
        map_mentotal: {
          total: 0,
          used: 0
        },
        map_disabledtotal: {
          total: 0,
          used: 0
        },
        map_womentotal: {
          total: 0,
          used: 0
        },
        map_parenttotal: {
          total: 0,
          used: 0
        }
      };
      toiletItem.forEach(v=>{
        countData["map_" + v.gender + "total"].total++;
        if (v.value === 1) {
          countData["map_" + v.gender + "total"].used++;
        }
      })
      return countData;
    }
  }
};
</script>