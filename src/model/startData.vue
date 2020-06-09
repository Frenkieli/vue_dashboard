<script>
import fetchStartData from "../interface/data/fetchStartData";
export default {
  extends: fetchStartData,
  name: "startData",
  data() {
    return {
      dashboardData: {
        property: [],
        mapStyle: {
          background: {
            bright: 0,
            color: 0
          },
          itemStyle: {
            background: {
              bright: 0,
              color: 0,
              opacity: 0
            },
            border: {
              bright: 0,
              color: 0,
              opacity: 0,
              width: 0
            },
            textStyle: {
              bright: 0,
              color: 0,
              fontSize: 0,
              opacity: 0
            }
          }
        },
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