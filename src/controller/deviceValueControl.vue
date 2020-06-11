<!--
/**
  * @description 將所有用到的設備攤平給socket會入資料時可以簡單使用
  * @author frenkie
  * @date 2020-06-11
  */
-->
<script>
export default {
  name: "deviceValueControl",
  data() {
    return {
      valueData: {}
    };
  },
  methods: {
    deviceValueData() {
      let vm = this;
      vm.dashboardData.property.forEach(v => {
        for (let key in v) {
          if (key !== "_id" && key !== "name" && key !== "type") {
            vm.$set(vm.valueData, [v[key]], { value: 0 });
          }
        }
      });
      for(let key in vm.dashboardData.doorDeviceItem){
        vm.$set(vm.valueData, [key.replace('_map', '')], { value: 0 });
      }
    }
  }
};
</script>