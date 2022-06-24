import React, { useEffect, useState } from "react";

const useInfo = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://api.covid19api.com/summary")
      .then((res) => res.json())
      .then((data) => setData(data.Countries));
  }, []);
  console.log(data);
  return [data, setData];
};

export default useInfo;
