import React from "react";
import React from "react";
import { FaInstagram } from "react-icons/fa";

const CretificateCard = ({ img }) => {
  return (
    <div className="h-96 max-w-[350px] relative">
      <img src={img} alt="" className="h-full" />
      <div className="w-full h-full opacity-0 translate-y-[40%] absolute top-0 right-0 left-0 bottom-0 bg-[#f7c35fe6] flex justify-end flex-col p-7 hover:opacity-100 hover:translate-y-0 duration-700">
        <a className="w-max h-max p-2 flex m-auto border-2 border-white rounded-full">
          <FaInstagram className="text-white h-10 w-10 m-auto" />
        </a>
      </div>
    </div>
  );
};

export default CretificateCard;
