import React from "react";
import cuteDog from "../../assets/images/cuteDog.png";
import cuteCat from "../../assets/images/cuteKitten.png";
import dog from "../../assets/images/dog.png";
import kitten from "../../assets/images/kitten.png";
import { Link } from "react-router-dom";
export default function BlogPet() {
  return (
    <>
      <div className="flex flex-wrap justify-center">
        <div className="flex flex-col mx-2.5 items-center">
          <img
            className="w-full sm:w-[600px] bg-black h-[260px] relative"
            src={cuteDog}
            alt=""
          />
          <img
            className="rounded-[50px] z-20 top-[-44px] border-4 border-white w-[88px] h-[88px] relative"
            src={dog}
          />
          <div className="w-full sm:w-[600px] top-[-105px] h-[18px] relative bg-white rounded-tl-[157px] rounded-tr-[157px]"></div>

          <div className=" h-[26px] mt-[-36px] text-center text-neutral-600 text-xl leading-normal">
            Dog Adoption Articles
          </div>
          <div className=" h-5 text-center pb-[42px] pt-[34px] text-neutral-600 text-base leading-snug">
            Learn more about caring for your new dog.
          </div>
          <Link
            to={"/"}
            className="h-[18px] my-5 text-center text-violet-800 text-sm uppercase leading-tight"
          >
            Read More
          </Link>
        </div>
        <div className="flex flex-col mx-2.5 items-center mb-[205px]">
          <img
            className="w-full sm:w-[600px] h-[260px] relative"
            src={cuteCat}
            alt=""
          />
          <img
            className="rounded-[50px] z-20 top-[-44px] border-4 border-white w-[88px] h-[88px] relative"
            src={kitten}
          />
          <div className="w-full sm:w-[600px] top-[-106px] h-[18px] relative bg-white rounded-tl-[157px] rounded-tr-[157px]"></div>

          <div className=" h-[26px] mt-[-36px] text-center text-neutral-600 text-xl leading-normal">
            Cat Adoption Articles
          </div>
          <div className=" h-5 text-center pb-[42px] pt-[34px] text-neutral-600 text-base leading-snug">
            Helpful insights on what to expect.
          </div>
          <Link
            to={"/"}
            className="h-[18px] my-5 text-center text-violet-800 text-sm uppercase leading-tight"
          >
            Read More
          </Link>
        </div>
      </div>
    </>
  );
}
