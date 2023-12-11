import axios from "axios";
import React, { useEffect, useState } from "react";
import { url, getData } from "../constant";
import { get_api } from "../api/api";

const Home = () => {
  const [data, setdata] = useState([]);

  useEffect(() => {
    get_api(url, getData).then((res) => {
      //   console.log(res, "res");
      setdata(res);
    });
  }, []);

  console.log(data, "data");

  return (
    <div>
      {data?.map((val, ind) => {
        return (
          <>
            <h1>{val.title}</h1>
            <h2>{val.author}</h2>
          </>
        );
      })}
    </div>
  );
};

export default Home;
