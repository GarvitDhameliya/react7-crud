import axios from "axios";

export const get_api = (url, endpoint) => {
  return axios
    .get(url + endpoint)
    .then((res) => {
      //   console.log(res.data);
      return res.data;
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
};
