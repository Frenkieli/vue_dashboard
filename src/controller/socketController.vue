<!-- 
  /**
  * @description socket主要事件註冊與使用
  * @author frenkie
  * @date 2020-06-10
  */
-->
<script>
import socketItem from "../interface/module/socketItem";

export default {
  extends: socketItem,
  name: 'socketConller',
  methods: {
    onMessage(data){
      console.log(data, 'onMessage')
    },
    onMeterdata(data){
      console.log(data, 'onMeterdata')
      this.fillInDeviceValue(data);
    },
    socketInit(){
      let vm = this;
      vm.connectSocket();
      vm.setOnEvent('message', vm.onMessage);
      vm.setOnEvent('meterdata', vm.onMeterdata);
    },
    fillInDeviceValue(data){
      let vm =this;
      vm.valueData[data.valueKey] = data;
    }
  }
}
</script>