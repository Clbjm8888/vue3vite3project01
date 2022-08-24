import axios from "axios";
import { BASE_URL, TIME_OUT } from "../myajax/request/config";
// axios.get("http://123.207.32.32:8000/home/multidata").then((res) => {
//   console.log(res.data.data);
// });
axios.interceptors.request.use(
  (config) => {
    console.log("请求成功: ", config);
    return config;
  },
  (err) => {
    console.log(err);
    return err;
  }
);

axios.interceptors.response.use(
  (res) => {
    console.log("响应成功: ", res);
    return res;
  },
  (err) => {
    console.log(err);
    return err;
  }
);
axios.defaults.baseURL = BASE_URL;
console.log(BASE_URL);
console.log(TIME_OUT);

axios
  .get("/get", {
    params: {
      name: "coderwhy",
      age: 18,
    },
    timeout: 5000,
    headers: {},
  })
  .then((res) => {
    console.log(res.data);
  });

axios
  .post("/post", {
    name: "why",
    age: 28,
  })
  .then((res) => {
    console.log(res.data);
  });

// axios.all([axios.get("/get"), axios.post("/post")]).then((res) => {
//   console.log(res[0].data);
//   console.log(res[1].data);
// });
