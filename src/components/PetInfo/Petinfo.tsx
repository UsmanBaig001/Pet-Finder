import React, { useEffect } from "react";
import iconFavorite2 from "../../assets/images/IconFavorite2.svg";
import alternate from "../../assets/images/alternate.png";
import iconDog from "../../assets/images/SVG-3.svg";
import iconHealth from "../../assets/images/HealthOutline.svg";
import iconShelter from "../../assets/images/IconSheltersRescues.svg";
import PetCard from "../../components/PetCard/PetCard";
import { getUsers } from "../../redux/slice/userSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import { Link } from "react-router-dom";

type Photos = {
  small: string;
  medium: string;
  large: string;
  full: string;
};

interface Response {
  name: string;
  image_url: string;
  age: string;
  id: number;
  photos: Photos[] | [];
}

export default function Petinfo() {
  const dispatch = useAppDispatch();
  const pets = useAppSelector((state) => state.users.Pet);
  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <>
      <div className="flex flex-wrap justify-center text-center">
        {pets &&
          pets.slice(16, 20).map((item: Response, i: number) => {
            return (
              <Link
                to={`/details/${item.id}`}
                key={i}
                className="w-auto mx-2 h-[301.2px] mb-4"
              >
                <div className="w-[231.2px] h-[301.2px] xsm:mt-10 mt-6 bg-opacity-0 rounded-lg shadow">
                  <div className=" bg-zinc-200 rounded-tl-lg rounded-tr-lg">
                    <img
                      className="w-[231.2px] rounded-tl-lg rounded-tr-lg object-cover h-[231.20px]"
                      src={item?.photos[0]?.full || alternate}
                      alt={item.age}
                    />
                  </div>
                  <div className=" top-[-10px] h-[70px] ">
                    <div className="flex rounded-tl-3xl rounded-tr-3xl relative h-[9px] bg-white top-[-8px]"></div>
                    <div className="h-8 ">
                      <div className=" text-violet-800 text-xl inline-flex">
                        {item.name.slice(0, 10)}
                      </div>
                    </div>
                  </div>

                  <div className="w-[45px] h-[45px] p-2.5 top-[-293px] left-[85px] relative bg-white bg-opacity-75 rounded-[22.50px] justify-center items-center inline-flex">
                    <div className="w-[25px] h-[25px] relative flex-col justify-start items-start flex">
                      <img src={iconFavorite2} alt="" />
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}

        <PetCard />
      </div>

      <div className="w-auto mb-[79.59px] h-12 text-center text-neutral-600 text-[38px] uppercase leading-[45.60px]">
        Planning to adopt a pet?
      </div>

      <div className="flex flex-wrap justify-center mb-[92px]">
        <div className="text-center mx-[20.3px] my-2 md:my-0">
          <img
            className="mx-auto h-[100px] w-[100px] mb-[23px]"
            src={iconShelter}
            alt=""
          />
          <div className="xsm:h-auto  h-[26px] mb-[31px] text-center text-violet-800 text-xl font-normal uppercase leading-loose">
            Checklist for new adopters
          </div>
          <div className="max-w-[327.23px] mb-[33px] h-[45px] text-base text-center text-neutral-600 leading-[25px]">
            Make the adoption transition as smooth as possible.
          </div>
          <button className="border-2 h-[45px] hover:bg-violet-800 hover:font-semibold ease-in-out duration-300 hover:text-white uppercase border-violet-800 text-violet-800 rounded-3xl px-[50.03px] py-[13.5]">
            Learn More
          </button>
        </div>
        <div className="text-center mx-[20.3px] my-2 md:my-0">
          <img
            className="mx-auto h-[100px] w-[100px] mb-[23px]"
            src={iconHealth}
            alt=""
          />
          <div className=" h-[26px] mb-[31px] text-center text-violet-800 text-xl font-normal uppercase leading-loose">
            COVID-19 Resources
          </div>
          <div className="max-w-[371.39px] mb-[33px] h-[45px] text-center text-neutral-600 leading-[25px]">
            Learn how shelters/rescue groups are adapting. Find out how you can
            help dogs and cats.
          </div>
          <button className="hover:bg-violet-800 hover:font-semibold ease-in-out duration-300 hover:text-white border-2 h-[45px] uppercase border-violet-800 text-violet-800 rounded-3xl px-[50.03px] py-[13.5]">
            Learn More
          </button>
        </div>
        <div className="text-center mx-[20.3px] my-2 md:my-0">
          <img
            className="mx-auto h-[100px] w-[100px] mb-[23px]"
            src={iconDog}
            alt=""
          />
          <div className=" h-[26px] mb-[31px] text-center text-violet-800 text-xl font-normal uppercase leading-loose">
            Pet Adoption FAQs
          </div>
          <div className="max-w-[360.7px] mb-[33px] h-[45px] text-center text-neutral-600 leading-[25px]">
            Get answer to all the you questions you haven't thought of for your
            adoption.
          </div>
          <button className="hover:bg-violet-800 hover:font-semibold ease-in-out duration-300 hover:text-white border-2 h-[45px] uppercase border-violet-800 text-violet-800 rounded-3xl px-[50.03px] py-[13.5]">
            Learn More
          </button>
        </div>
      </div>

      <div className="flex flex-wrap justify-center text-center mb-[50px]">
        {pets &&
          pets.slice(11, 15).map((item: Response, i: number) => {
            return (
              <Link
                to={`/details/${item.id}`}
                key={i}
                className="w-auto mx-2 h-[301.2px] mb-4"
              >
                <div className="w-[231.2px] h-[301.2px] xsm:mt-10 mt-6 bg-opacity-0 rounded-lg shadow">
                  <div className=" bg-zinc-200 rounded-tl-lg rounded-tr-lg">
                    <img
                      className="w-[231.2px] rounded-tl-lg rounded-tr-lg object-cover h-[231.20px]"
                      src={item?.photos[0]?.full || alternate}
                      alt={item.age}
                    />
                  </div>
                  <div className=" top-[-10px] h-[70px] ">
                    <div className="flex rounded-tl-3xl rounded-tr-3xl relative h-[9px] bg-white top-[-8px]"></div>
                    <div className="h-8 ">
                      <div className=" text-violet-800 text-xl inline-flex">
                        {item.name.slice(0, 10)}
                      </div>
                    </div>
                  </div>

                  <div className="w-[45px] h-[45px] p-2.5 top-[-293px] left-[85px] relative bg-white bg-opacity-75 rounded-[22.50px] justify-center items-center inline-flex">
                    <div className="w-[25px] h-[25px] relative flex-col justify-start items-start flex">
                      <img src={iconFavorite2} alt="" />
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        <PetCard />
      </div>
    </>
  );
}
