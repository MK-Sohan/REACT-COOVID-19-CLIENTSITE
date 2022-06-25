import React, { useEffect, useState } from "react";
import useInfo from "../../hooks/useInfo";
import WorldCovidSingleInfo from "./WorldCovidSingleInfo";

const WorldcovidInfo = () => {
  const [data, setData] = useInfo();
  //   console.log(data);
  const [query, setQuery] = useState("");
  console.log(query);
  return (
    <div className="">
      <h1 className="text-center text-4xl text-white mb-5">
        The World Stats of Novel{" "}
        <span className="text-red-400">Corona Virous</span>
      </h1>
      <div class="overflow-x-auto ">
        <div class="search mx-auto mb-10 ">
          <input
            onChange={(e) => setQuery(e.target.value)}
            type="search"
            id="search"
            name="search"
            placeholder="Search By Country Name..."
            className="bg-slate-400"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            class="bi bi-search"
            viewBox="0 0 16 16"
            className="mb-4 "
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>
        </div>

        {/* .filter((product) =>
            product.productname.toLowerCase().includes(sesrch) ) */}
        {/* <!-- row 1 --> */}
        {data
          .filter((countryname) =>
            countryname.Country.toLowerCase().includes(query)
          )
          ?.map((info) => (
            <div>
              <div className="bg-slate-500 mt-5 p-5 w-auto lg:w-full  rounded">
                <div className="">
                  <h1 className="text-black lg:text-2xl">
                    Country : <span className="text-white">{info.Country}</span>
                  </h1>
                </div>
                <div className="">
                  <h1 className="text-black lg:text-2xl pt-5">
                    TotalConfirmed :{" "}
                    <span className="text-white">{info.TotalConfirmed}</span>
                  </h1>
                  <h1 className="text-black lg:text-2xl pt-5">
                    TotalDeaths :{" "}
                    <span className="text-red-400">{info.TotalDeaths}</span>
                  </h1>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default WorldcovidInfo;
