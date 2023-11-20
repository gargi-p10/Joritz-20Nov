import { api } from "../../../boot/axios";

export default {

  // example 
  async getSampleData(param1, param2) {
    return api.get(
      `/param1/${param1}/param2/${param2}/sample-api-endpoint`
    );
  },
  
}
