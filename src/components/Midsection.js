// This contains features,overview and services.
import div3 from "../assets/img/images/div3.png";
import div4 from "../assets/img/images/div4.png";
import div5 from "../assets/img/images/div5-1.png";
import div5_1 from "../assets/img/images/div5-2-1.png";
import div5_2 from "../assets/img/images/div5-2-2.png";
import div5_3 from "../assets/img/images/div5-2-3.png";
import div5_4 from "../assets/img/images/div5-2-4.png";
import div5_5 from "../assets/img/images/div5-2-5.png";
import div5_6 from "../assets/img/images/div5-2-6.png";
import div6_1 from "../assets/img/images/DIV6_1.png";
import div6_2 from "../assets/img/images/DIV6_2.png";
import div6_3 from "../assets/img/images/DIV6_3.png";
import div6_4 from "../assets/img/images/DIV6_4.png";
import div6_5 from "../assets/img/images/DIV6_5.png";
import div6_6 from "../assets/img/images/DIV6_6.png";
import div7 from "../assets/img/images/div7.png";
import div8_2_3_4_res from "../assets/img/images/DIV_2_3_4_RES.svg";
import div9 from "../assets/img/images/DIV_9_BG.png";   
import div10_1 from "../assets/img/images/DIV_10_1.png";
import div10_2 from "../assets/img/images/DIV_10_2.png";

const Midsection = () => {
  return (
    <>
      {/* This is for overview */}
      <div class="grid h-screen place-items-center">
        <img src={div3}></img>
      </div>

      {/* This is for features */}
      <div class="flex items-center justify-center h-screen">
        <img src={div4}></img>
      </div>

      <div class="grid h-screen place-items-center space-y-4">
        <img src={div5}></img>
        <div class=" grid df: grid-cols-1 lg:grid-cols-3">
          {/* This tailwind class arranges the objects into a grid of size 2*3 */}
          <img src={div5_1}></img>
          <img src={div5_2}></img>
          <img src={div5_3}></img>
          <img src={div5_4}></img>
          <img src={div5_5}></img>
          <img src={div5_6}></img>
        </div>

        {/* This is for extended services */}
        <div class="grid df: grid-cols-1 lg:grid-cols-2 pr">
          {/* This tailwind class arranges the objects into a grid of size 2*3 */}
          <img
            src={div6_1}
            className="pr-10 mr-20 mb-20 df: pl-2 pr-0 ml-14 mr-0 mb-20 "
          ></img>
          <img
            src={div6_2}
            className="pl-8 ml-20 mb-20 df: pr-2 pl-12 mr-5 ml-13 mb-20 "
          ></img>
          <img
            src={div6_3}
            className="pr-10 mr-20 mb-20 df: pl-9 pr-0 ml-20 mr-0 mb-20 "
          ></img>
          <img
            src={div6_4}
            className="pl-10 ml-20 mb-20 df: pr-10 pl-10 mr-20 ml-0 mb-20 "
          ></img>
          <img
            src={div6_5}
            className="pr-10 mr-20 mb-20 df: pl-0 pr-10 ml-10 mr-0 mb-20 "
          ></img>
          <img
            src={div6_6}
            className="pl-10 ml-20 mb-20 df: pr-10 pl-14 mr-20 ml-10 mb-20 "
          ></img>
        </div>

        {/* This is for the testimonials */}
        <div class="grid w-screen place-items-center mt-10 py-40 space-x-3">
          <img src={div7}></img>
        </div>

        {/* This is for the div8 */}
        <div class="ml-20 items-center">
          {/* This tailwind class arranges the objects into a grid of size 2*3 */}
          <img
            src={div8_2_3_4_res}
            className=" mx-auto h-100 pb-20"
          ></img>
        </div>

        {/* This section is for the div9 */}
        <div className="grid w-screen place-items-center mb-20 py-20 ">
          <img src={div9}></img>
        </div>

        {/* This is for the footer */}
        <footer className="bg-footer py-8 text-white footer w-screen flex h-flex">
          <div class=" grid df: grid-cols-1 lg:grid-cols-4">
            {/* This tailwind class arranges the objects into a grid of size 2*3 */}
            <img src={div10_1} className="mt-10 ml-14 pl-5"></img>
            <img
              src={div10_2}
              className="mt-10 lg:col-start-3 df: col-start-1 pl-16 ml-2"
            ></img>
            <div className="mt-10 ml-14 col-span-2 col-start-1 pl-4">
              <br></br>
              <br></br>
              <br></br>
              Copyright &copy; All rights reserved.{" "}
              <h1 style={{ color: "#00F59B", display: "inline-block" }}>
                Flowset
              </h1>
              . Powered by{" "}
              <h1 style={{ color: "#9D0AFF", display: "inline-block" }}>Wf.</h1>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};
export default Midsection;
