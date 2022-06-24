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
        <div class="search mx-auto mb-10">
          <input
            onChange={(e) => setQuery(e.target.value)}
            type="search"
            id="search"
            name="search"
            placeholder="Search By Country Name..."
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            class="bi bi-search"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>
        </div>
        <table class="table w-[1600px]  text-white">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th>Country</th>
              <th>NewConfirmed</th>
              <th>NewDeaths</th>
              <th>NewRecovered</th>
              <th>TotalConfirmed</th>
              <th>TotalDeaths</th>
              <th>TotalRecovered</th>
            </tr>
          </thead>
          <tbody>
            {/* .filter((product) =>
            product.productname.toLowerCase().includes(sesrch) ) */}
            {/* <!-- row 1 --> */}
            {data
              .filter((countryname) =>
                countryname.Country.toLowerCase().includes(query)
              )
              ?.map((info) => (
                <WorldCovidSingleInfo
                  key={info.ID}
                  info={info}
                  index
                ></WorldCovidSingleInfo>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default WorldcovidInfo;
