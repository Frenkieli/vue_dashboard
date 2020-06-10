<!-- 
  /**
  * @description 計算監控屬性設備和value
  * @author frenkie
  * @date 2020-06-10
  */
-->
<script>
export default {
  name: "countToiletProperty",
  data(){
    return {
      valueData: {},
    }
  },
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
              for(let valueKey in vm.valueData){
                if(valueKey === property[j][key]){
                  propertyData[key] = vm.valueData[valueKey]
                  break;
                }
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
    deviceValueData(){
      let vm = this;
      vm.dashboardData.property.forEach(v=>{
        for(let key in v){
          if(key !== '_id' && key !== 'name' && key !== 'type'){
            vm.$set(vm.valueData, [v[key]] , {value: 0});
          }
        }
      })
    }
  }
};
</script>