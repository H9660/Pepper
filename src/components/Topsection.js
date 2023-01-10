// This components contains the stats and the team names

import React from "react";
import div1 from "../assets/img/images/div1.png";
import div2 from "../assets/img/images/div2.png";
const Topsection = () => {
  return (
    <>
    {/* THE WEBSITES STATS ARE HERE */}
      <div class="grid h-screen place-items-center mt-20 mb-0 pb-0">
        <img src={div1}></img>
      </div>
      {/* THE COLLABORATIVES ARE HERE */}
      <div class="grid h-screen place-items-center ">
        <img src={div2}></img>
      </div>
    </>
  );
};

export default Topsection;
