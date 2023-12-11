import React, { useEffect } from "react";
import { get_api } from "../api/api";

const About = () => {
  let url = "https://jsonplaceholder.typicode.com";
  let endpoint = "/todos";

  useEffect(() => {
    get_api(url, endpoint).then((res) => {
      console.log(res, "res from about");
    });
  }, []);

  return <div>About</div>;
};

export default About;
