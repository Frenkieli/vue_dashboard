<!-- 
  /**
  * @description 將廁所使用數據與及時數據作綁訂
  * @author frenkie
  * @date 2020-06-11
  */
-->
<script>
import deviceValueControl from "../controller/deviceValueControl";
export default {
  extends: deviceValueControl,
  name: 'bindToiletData',
  computed:{
    toiletItem: function(){
      let vm = this;
      let data = [];
      for(let key in vm.dashboardData.doorDeviceItem){
        let deviceValue = vm.checkKeyInData(key.replace('_map', ''));
        if(deviceValue){
          data.push({
            gender: vm.dashboardData.doorDeviceItem[key].gender,
            isSit: vm.dashboardData.doorDeviceItem[key].isSit,
            value: deviceValue.value,
            style: {
              top: vm.dashboardData.doorDeviceItem[key].top,
              left: vm.dashboardData.doorDeviceItem[key].left,
              transform: vm.dashboardData.doorDeviceItem[key].transform,
            }
          })
        }
      }
      return data
    }
  }
}
</script>