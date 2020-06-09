<!--
  /**
  * @description 用來獲取最新時間資訊和時間相關的callback
  * @author frenkie
  * @date 2020-06-09
  * @param <function> callback 用來放依照時間觸發的函式
  */
-->
<script>
import momentItem from "../interface/module/momentItem";

export default {
  extends: momentItem,
  data() {
    return {
      nowTime: {
        year: 0,
        month: 0,
        data: 0,
        day: 0,
        hour: 0,
        minutes: 0,
        APM: 0
      }
    };
  },
  methods: {
    setIntervalInit(callback) {
      let vm = this;
      vm.toGetTime(callback);
      setTimeout(function() {
        vm.toGetTime(callback);
        setInterval(function() {
          vm.toGetTime(callback);
        }, 60 * 1000);
      }, (60 - new Date().getSeconds()) * 1000);
    },
    toGetTime(callback) {
      let vm = this;
      vm.nowTime = vm.getTime();
      callback();
    }
  }
};
</script>