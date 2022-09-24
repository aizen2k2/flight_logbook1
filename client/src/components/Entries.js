import React, { useEffect, useState } from "react";
import axios from "axios";
const Entries = () => {
  const [entries, setEntries] = useState([]);
  useEffect(() => {
    axios
      .get("/api/posts/")
      .then((res) => {
        console.log("helo");
        console.log(res.data);
        // setEntries([...entries, res.data]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <div>Entries</div>
      {entries}
    </>
  );
};

export default Entries;
