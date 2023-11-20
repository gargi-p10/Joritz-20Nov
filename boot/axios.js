import { boot } from "quasar/wrappers";
import axios from "axios";

// Be careful when using SSR for cross-request state pollution
// due to creating a Singleton instance here;
// If any client changes this (global) instance, it might be a
// good idea to move this instance creation inside of the
// "export default () => {}" function below (which runs individually
// for each client)

let hostName = window.location.hostname;
let protocol = window.location.protocol;
let port = window.location.port;

const api = axios.create({
    baseURL: protocol + "//" + hostName + ":" + port + "/module-name/api",
    withCredentials: false,
    headers: {
        Accept: "application/json",
        "content-type": "application/json",
    },
});

export default boot(({ app }) => {
    // for use inside Vue files (Options API) through this.$axios and this.$api

    app.config.globalProperties.$axios = axios;
    // ^ ^ ^ this will allow you to use this.$axios (for Vue Options API form)
    //       so you won't necessarily have to import axios in each vue file

    app.config.globalProperties.$api = api;
    // ^ ^ ^ this will allow you to use this.$api (for Vue Options API form)
    //       so you can easily perform requests against your app's API


    // Add a request interceptor
    axios.interceptors.request.use(
        function(config) {
            console.log("request ok");
            // Do something before request is sent
            return config;
        },
        function(error) {
            console.log("request not ok");
            // Do something with request error
            return Promise.reject(error);
        }
    );

    // Add a response interceptor
    axios.interceptors.response.use(
        function(response) {
            // Any status code that lie within the range of 2xx cause this function to trigger
            // Do something with response data
            console.log("response ok");
            return response;
        },
        function(error) {
            console.log("request not ok");
            // Any status codes that falls outside the range of 2xx cause this function to trigger
            // Do something with response error
            return Promise.reject(error);
        }
    );
});

export { api };
