<script>
import fetchStartData from "../interface/data/fetchStartData";
export default {
  extends: fetchStartData,
  name: "startData",
  data() {
    return {
      dashboardData: {
        property: [],
        mapStyle: [],
        mapImg: [],
        item: [],
        mapItem: [],
        propertyItem: [],
        doorDeviceItem: {}
      }
    };
  },
  methods: {
    async getStartData() {
      this.dashboardData = await this.fetchStartData();
    }
  }
};
</script>