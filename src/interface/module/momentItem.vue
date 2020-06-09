/**
 * @description moment相關接口
 * @author frenkie
 * @date 2020-06-09
*/
<script>
import moment from "moment";

export default {
  methods: {
    getTime() {
      let time = moment()
        .locale("zh-tw")
        .format("YYYY-MMM-Do-dddd-HH-mm-a");
      console.log('%c觸發moment:' + time, 'background: #00f; color: #fff; padding: 2px;');
      time = time.split("-");
      return {
        year: time[0],
        month: time[1],
        data: time[2],
        day: time[3],
        hour: time[4],
        minutes: time[5],
        APM: time[6]
      };
    }
  }
};
</script>