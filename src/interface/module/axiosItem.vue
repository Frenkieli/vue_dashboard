<script>
import axios from "axios";
export default {
  name: "axios",
  data() {
    return {
      // hostname: location.hostname,
      // port: location.port
      // hostname: 'http://localhost',
      // port: '3000/',
      axiosItem: axios.create({
        baseURL: location.protocol + '//' + location.hostname + (location.port ? (':' + location.port) : '') + '/'
      })
    };
  },
  created() {
    let vm = this;
    vm.axiosItem.interceptors.request.use(
      function(config) {
        // console.log('發出前檢查 ')
        // console.log(config);
        return config;
      },
      function(error) {
        //请求错误时做些事
        console.log('請求發生錯誤:');
        console.log(error);
        return Promise.reject(error);
      }
    );
    vm.axiosItem.interceptors.response.use(
      function(config) {
        // console.log('收到後檢查')
        // console.log(config);
        return config;
      },
      function(error) {
        console.log('接收發生錯誤');
        console.log(error);
        return Promise.reject(error);
      }
    );
  },
  methods: {
    axiosMain(url, method, data = null) {
      return this.axiosItem.request({
        url: url,
        method: method,
        data: data
      });
    },
    axiosGet(url) {
      return this.axiosMain(url, "get");
    }
  }
};
</script>