/**
 * @description socket相關接口
 * @author frenkie
 * @date 2020-06-08
*/
<script>
import io from "socket.io-client";
export default {
  name: "socket",
  data() {
    return {
      socketio: false,
      ServerIP: location.hostname,
      ServerPort: location.port
    };
  },
  methods: {
    connectSocket() {
      let vm = this;
      // vm.socketio = io(vm.ServerIP + ":" + vm.ServerPort);
      vm.socketio = io("localhost" + ":" + "3000");
      vm.socketio.on('connect', vm.onConnect);
    },
    onConnect(){
      let vm = this;
      console.log("webSocket連接至 : " + vm.ServerIP + ':' + vm.ServerPort);
    }
  }
};
</script>