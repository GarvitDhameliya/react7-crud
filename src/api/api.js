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

export const post_api = (url, endpoint, data) => {
  return axios
    .post(url + endpoint, data)
    .then((res) => {
      console.log(res);
      return res.data;
    })
    .catch((err) => {
      console.log(err, "err");
      return err;
    });

  // console.log(url, endpoint, data);
};

export const delete_api = (url, endpoint, id) => {
  axios.delete(url + endpoint + id);
};
