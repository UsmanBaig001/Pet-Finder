import React from "react";
import { Link } from "react-router-dom";
import iconFacebook from "../../assets/images/iconFacebook.png";
import iconInstagram from "../../assets/images/iconInstagram.png";
import iconTwitter from "../../assets/images/iconTwitter.png";
import iconYoutube from "../../assets/images/iconYouTube.png";
import iconPinterest from "../../assets/images/iconPinterest.svg";

export default function FootBottom() {
  return (
    <>
      <div className="flex flex-wrap-reverse items-center bg-purple-950 min-h-[70px] px-[50px]">
        <div className="flex flex-col  footerBug2:pt-4 mx-auto lg:mx-0 lg:me-auto lg:flex-row flex-wrap sm:flex-nowrap">
          <div className="text-white text-xs text-center font-normal font-['Helvetica'] leading-tight pe-[12.89px]">
            &copy;2023 Petfinder.com
          </div>
          <div className=" text-white text-xs font-normal text-center font-['Helvetica'] leading-tight  footerBug2:mb-5 lg:mb-0 lg:mt-0 mb-[32px] mt-[10px]">
            All trademarks are owned by Société des Produits Nestlé S.A., or
            used with permission.
          </div>
        </div>
        <div className="flex mx-auto lg:mx-0 lg:my-0  my-[30px]">
          <Link to={"/"}>
            <img
              className="h-[22px] w-[22px] mx-[15px]"
              src={iconFacebook}
              alt=""
            />
          </Link>
          <Link to={"/"}>
            <img
              className="h-[22px] w-[22px] mx-[15px]"
              src={iconTwitter}
              alt=""
            />
          </Link>
          <Link to={"/"}>
            <img
              className="h-[22px] w-[22px] mx-[15px]"
              src={iconInstagram}
              alt=""
            />
          </Link>
          <Link to={"/"}>
            <img
              className="h-[22px] w-[22px] mx-[15px]"
              src={iconYoutube}
              alt=""
            />
          </Link>
          <Link to={"/"}>
            <img
              className="h-[22px] w-[22px] mx-[15px]"
              src={iconPinterest}
              alt=""
            />
          </Link>
        </div>
      </div>
    </>
  );
}
