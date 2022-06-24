import React from "react";

const WorldCovidSingleInfo = ({ info, index }) => {
  const {
    Country,
    Date,
    NewConfirmed,
    NewDeaths,
    NewRecovered,
    TotalConfirmed,
    TotalDeaths,
    TotalRecovered,
  } = info;

  return (
    <>
      <tr>
        {/* <th>{index}</th> */}
        <td>{Country}</td>
        <td>{NewConfirmed}</td>
        <td>{NewDeaths}</td>
        <td>{NewRecovered}</td>
        <td>{TotalConfirmed}</td>
        <td>{TotalDeaths}</td>
        <td>{TotalRecovered}</td>
      </tr>
    </>
  );
};

export default WorldCovidSingleInfo;
