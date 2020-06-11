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
        // console.log(key.replace('_map', ''), "key.replace('_map')")
        for(let valueKey in vm.valueData){
            // console.log(valueKey, 'valueKey')
            if(key.replace('_map', '') === valueKey){
              console.log('有進來')
            vm.dashboardData.doorDeviceItem[key].value = vm.valueData[valueKey].value;
            data.push({
              gender: vm.dashboardData.doorDeviceItem[key].gender,
              isSit: vm.dashboardData.doorDeviceItem[key].isSit,
              value: vm.valueData[valueKey].value,
              style: {
                top: vm.dashboardData.doorDeviceItem[key].top,
                left: vm.dashboardData.doorDeviceItem[key].left,
                transform: vm.dashboardData.doorDeviceItem[key].transform,
              }
            })
          }
        }
      }
      return data
    }
  }
}
</script>