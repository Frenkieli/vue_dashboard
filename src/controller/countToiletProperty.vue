<!-- 
  /**
  * @description 計算監控屬性設備和value
  * @author frenkie
  * @date 2020-06-10
  */
-->
<script>
import deviceValueControl from "./deviceValueControl";
export default {
  extends: deviceValueControl,
  name: "countToiletProperty",
  computed: {
    systemInfoData : function (){
      let vm = this;
      let property = vm.dashboardData.property;
      let propertyItem = vm.dashboardData.propertyItem;
      let dashboardData = [];
      for(let i = 0 ; i < propertyItem.length ; i++){
        for(let j = 0 ; j < property.length ; j++){
          if(propertyItem[i].style.infoId === property[j]._id){
            let propertyData = {};
            for(let key in property[j]){
              let deviceValue = vm.checkKeyInData(property[j][key]);
              if(deviceValue){
                propertyData[key] = deviceValue
              }
            }
            dashboardData.push({
              style: propertyItem[i].style,
              _id: propertyItem[i]._id,
              property: propertyData,
            })
            break;
          }
        }
      }
      return dashboardData;
    }
  },
  methods: {
  }
};
</script>