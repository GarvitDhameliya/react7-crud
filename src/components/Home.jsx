import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { url, getData, postData, deleteData } from "../constant";
import { delete_api, get_api, post_api } from "../api/api";

const Home = () => {
  const [data, setdata] = useState([]);

  const title = useRef();
  const author = useRef();

  const saveData = async () => {
    const result = {
      title: title.current.value,
      author: author.current.value,
    };

    const res = await post_api(url, postData, result);
    console.log(res);
    setdata([...data, res]);
    // get_api();

    // console.log(result);
  };

  const dataDelete = async (id, index) => {
    console.log(id, "id");
    console.log(index, "index");

    await delete_api(url, deleteData, id);

    setdata(data.splice(0, index));
  };

  useEffect(() => {
    get_api(url, getData).then((res) => {
      //   console.log(res, "res");
      setdata(res);
    });
  }, []);

  console.log(data, "data");

  return (
    <div>
      <input type="text" name="author" ref={title} />
      <input type="text" name="title" ref={author} />
      <button onClick={saveData}>Submit</button>

      {data?.map((val, ind) => {
        return (
          <>
            <h1>{val.title}</h1>
            <h2>{val.author}</h2>
            <button onClick={() => dataDelete(val.id, ind)}>delete</button>
            <button>view</button>
          </>
        );
      })}
    </div>
  );
};

export default Home;
