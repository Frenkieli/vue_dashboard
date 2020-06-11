<!--
  /**
  * @description socket相關接口
  * @author frenkie
  * @date 2020-06-08
  */
-->
<script>
import io from "socket.io-client";
export default {
  name: "socket",
  data() {
    return {
      socketio: false,
    };
  },
  methods: {
    connectSocket() {
      let vm = this;
      
      let ServerIP = location.hostname;
      let ServerPort = location.port;
      vm.socketio = io(ServerIP + ":" + ServerPort);

      // vm.socketio = io("localhost" + ":" + "3000");
      vm.socketio.on('connect', vm.onConnect);
      vm.socketio.on('disconnect', vm.onDisconnect);
    },
    setOnEvent(theme, callback){
      this.socketio.on(theme, callback);
    },
    // 這邊是固定事件額外自定義事件由上方註冊並統一由contriller處理
    onConnect(){
      let vm = this;
      var subscribe_data = {"5def090981b4da1ec08a3c0f":"app/5def090981b4da1ec08a3c0f"};
      console.log("webSocket連接至 : " + vm.ServerIP + ':' + vm.ServerPort);
      vm.socketio.emit('subscribe', subscribe_data);
      console.log('subscribe OK');
    },
    onDisconnect(data){
      console.log(data, 'onDisconnect')
    }
  }
};
</script>