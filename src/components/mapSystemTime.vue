<template>
  <div class="map_systemTime">
    <span class="map_systemTime_data">
      <span class="dashboard_time_year">{{ nowTime.year }}年</span>
      <span class="dashboard_time_month">{{ nowTime.month }}</span>
      <span class="dashboard_time_date">{{ nowTime.data }}</span>
      <span class="dashboard_time_day">{{ nowTime.day }}</span>
    </span>
    <span class="map_systemTime_now">
      {{ nowTime.APM }}
      <span class="dashboard_time_hour">{{ nowTime.hour }}</span>時
      <span class="dashboard_time_minutes">{{ nowTime.minutes }}</span>分
    </span>
  </div>
</template>

<script>
export default {
  name: "mapSystemTime",
  props: {
    nowTime: Object
  },
  data() {
    return {
      time: false
    };
  },
  methods: {
  }
};
</script>

<style lang="scss">
.map_systemTime {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .map_systemTime_data {
    font-size: 16px;
    margin-bottom: 10px;
  }
  .map_systemTime_now {
    font-size: 28px;
  }
  .dashboard_time_hour,
  .dashboard_time_minutes {
    font-size: 48px;
  }
}
</style>