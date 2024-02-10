import React from "react";
import Landing from "./Components/Landing";
import Company from "./Components/Company";
import Experts from "./Components/Experts";
import Best from "./Components/Best";
import News from "./Components/News";


const Home = ({ toggle })=> {
     return <div className={`bg-slate-50 overflow-hidden ${toggle ? 'hidden' : ''}`}>
          <Landing/>
          <Company/>
          <Best/>
          <News/>
          <Experts/>
     </div>
     
};

export default Home;
