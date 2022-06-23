import React from "react";
import Heroone from "../Hero/Hero-1/Heroone";
import Doctors from "./Doctors/Doctors";
import HowSpread from "./HowSpread/HowSpread";
import PreventCovid from "./Preventcorona/PreventCovid";
import Symtoms from "./Symtoms/Symtoms";

const Home = () => {
  return (
    <div className="">
      <Heroone></Heroone>
      <HowSpread></HowSpread>
      <Symtoms></Symtoms>
      <PreventCovid></PreventCovid>
      <Doctors></Doctors>
    </div>
  );
};

export default Home;
