<!-- 
  /**
  * @description 計算公廁廁位使用與全部數量
  * @author frenkie
  * @date 2020-06-10
  */
-->
<script>
export default {
  name: "countToiletQuantity",
  computed: {
    toiletQuantity: function() {
      let vm = this;
      let doorDeviceItem = vm.dashboardData.doorDeviceItem;
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
      for (let key in doorDeviceItem) {
        countData["map_" + doorDeviceItem[key].gender + "total"].total++;
        if (doorDeviceItem[key].value === 1) {
          countData["map_" + doorDeviceItem[key].gender + "total"].used++;
        }
      }
      return countData;
    }
  }
};
</script>