import React, { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Link, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import { getPet } from "../../redux/slice/getPetSlice";
import { getOrganization } from "../../redux/slice/petOrganizationSlice";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import iconBell from "../../assets/images/icon-alert.svg";
import iconHeart from "../../assets/images/icon-favorite_outline.svg";
import iconShelter from "../../assets/images/iconShelterOutline.svg";
import iconLocation from "../../assets/images/icon-location.svg";
import iconPhone from "../../assets/images/icon-phone.svg";
import alternate from "../../assets/images/alternate.png";
import iconFavorite3 from "../../assets/images/icon-favorite_outline2.svg";
import iconStrokedPaw from "../../assets/images/IconStrokedPaw.png";
import { animal } from "../../helper";

const Details: React.FC = () => {
  const dispatch = useAppDispatch();
  const pet = useAppSelector((state) => state.pets.animal);
  const organization: animal[] | null = useAppSelector(
    (state) => state.organization.organization
  );
  const { petsId } = useParams<{ petsId: string }>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(getPet(`${petsId}`));
        if (pet && pet.organization_id) {
          await dispatch(getOrganization(`${pet.organization_id}`));
        }
      } catch (error) {
        console.error("Error fetching pet or organization:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [dispatch, petsId, pet?.organization_id]);

  if (loading) {
    return (
      <div role="status" className="flex justify-center my-56">
        <div className="animate-spin shadow-inner rounded-full h-32 w-32 border-t-4 border-violet-800 border-solid"></div>
        <span className="sr-only">Loading...</span>
      </div>
    );
  }
  return (
    <>
      <div className="w-full max-h-[486px] bg-zinc-950">
        <img
          className="w-[243.75px] h-[325px] sm:w-[340px] sm:h-[440px] lg:w-[440px] object-contain lg:h-[486px] mx-auto"
          src={pet?.photos?.[0]?.full || alternate}
        />
      </div>

      <div
        className="flex justify-center flex-wrap bg-customGrey text-neutral-600
       "
      >
        <div className="h-auto md:h-[520px]  p-0 sm:p-[30px] pb-[30px] mt-[30px] bg-white rounded-none  sm:rounded-[10px] shadow-lg flex flex-col">
          <div className="text-[40px]  mx-auto sm:mx-0 pt-[30px] sm:pt-0 ">
            {pet?.name.slice(0, 8)}
          </div>

          <div className="flex justify-center sm:justify-start items-center mt-[30px]">
            <div className="w-1/5 h-px border-t border-neutral-300 me-auto sm:hidden block"></div>
            <div className="text-violet-800 underline leading-relaxed">
              {pet?.breeds?.primary.slice(0, 8) ||
                pet?.breeds?.secondary.slice(0, 8) ||
                "Unknown Breed"}
            </div>
            <div className="w-[5.11px] pt-1 mx-2 text-sm leading-none">•</div>
            <div className=" leading-relaxed">
              {pet?.contact?.address?.city || "No City"}
              {pet?.contact?.address?.state || "No State"}
            </div>
            <div className="w-1/5 ms-auto sm:hidden block h-px border-t border-neutral-300"></div>
          </div>

          <div className="w-full mt-[27px] h-px border-b hidden sm:block border-neutral-300"></div>

          <div className="flex justify-center sm:justify-start py-[22px] leading-relaxed">
            <div>{pet?.age}</div>
            <div className="w-[5.11px] pt-2 mx-2 text-sm leading-none">•</div>
            <div>{pet?.gender}</div>
            <div className="w-[5.11px] pt-2 mx-2 text-sm leading-none">•</div>
            <div>{pet?.size}</div>
          </div>

          <div className="w-full h-px border-b border-purple-200"></div>
          <div className="sm:hidden flex relative w-full  text-zinc-600 text-[15px] font-normal font-['Helvetica'] leading-normal">
            <div className="px-[14px] py-[18px] border-b-2 border-violet-800">
              About
            </div>
            <div className="mx-[14px] my-[18px]">Organization</div>
            <div className="mx-[14px] my-[18px]">Other pets</div>
          </div>
          <div className="h-[30px] sm:hidden block w-full bg-customGrey"></div>

          <div className=" mt-[27px] text-3xl ps-[30px] sm:ps-0 leading-9">
            About
          </div>
          <div className="mt-[17px] h-[25px] uppercase leading-relaxed"></div>
          <div className=" mt-[4.5px] text-sm leading-snug px-[30px] sm:px-0">
            {pet?.description ||
              "There is no description available for this pet !"}
          </div>
          <div className="w-full h-px border-b mt-[63px] border-neutral-300"></div>
          <div className="h-[20px] bg-customGrey block sm:hidden"></div>
          <div className="mt-[29px] flex items-center px-[30px] sm:px-[0px]">
            <img
              className="w-[22px] h-[22px] flex items-center me-[10px]"
              src={iconBell}
              alt=""
            />
            <div className="text-sm leading-snug">
              Petfinder recommends that you should always take reasonable
              security steps before making online payments.
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          <div className=" max-w-[360px]  mt-[30px] lg:ms-5 rounded-xl bg-violet-800 flex flex-col items-center shadow-lg">
            <div className="px-[30px]">
              <div className="px-2 text-white text-center text-xl my-[30px] leading-loose">
                Considering {pet?.name.slice(0, 8)} for adoption?
              </div>
              <button className=" text-center py-4 w-full hover:text-white hover:bg-violet-800 hover:font-semibold ease-in-out duration-500 hover:shadow-lg border-2 rounded-full bg-white text-violet-800 uppercase leading-tight">
                Start Your Inquiry
              </button>
              <button className="w-full mb-[30px] border-2 rounded-full py-4 mt-[15px] text-center hover:font-semibold ease-in-out duration-500 hover:shadow-none shadow-lg text-white hover:bg-white hover:text-violet-800 uppercase leading-tight">
                Read FAQs
              </button>
            </div>
            <div className="w-full flex bg-violet-800 rounded-bl-xl rounded-br-xl ">
              <button className="hover:bg-violet-700 ease-in-out duration-400 rounded-bl-xl p-4 w-1/2 text-center text-white text-sm uppercase border-r border-t border-purple-950 items-center">
                Sponsor
              </button>
              <button className="hover:bg-violet-700 ease-in-out duration-400 rounded-br-xl w-1/2 text-white flex justify-center border-l border-t border-purple-950 items-center">
                <img
                  className="w-[26px] h-[22px] me-[15px]"
                  src={iconHeart}
                  alt="icon"
                />
                <div className="text-sm uppercase text-center">Favorite</div>
              </button>
            </div>
          </div>

          <div className="mb-[80px] rounded-lg lg:ms-5 mt-[96px] shadow-lg flex flex-col justify-center bg-white">
            <div className="bg-violet-800 p-7 mb-2.5 rounded-[120px] mx-auto border-4 border-white relative top-[-58px] shadow-inner">
              <img className="w-[60px] h-[60px] " src={iconShelter} alt="" />
            </div>
            <div className=" relative top-[-58px] text-center text-neutral-600 text-3xl">
              {pet?.organization_id || "Guam"} Animals In Need
            </div>
            <div className="text-center relative top-[-58px] text-neutral-600 text-sm leading-snug">
              {pet?.address?.city || "No City"},{" "}
              {pet?.address?.state || "No State"}
            </div>
            <div className="flex items-center mx-[20px] pb-[19px] border-b border-neutral-300">
              <img className="h-[22px] w-[22px] " src={iconLocation} alt="" />

              <div className="flex flex-col ms-[23px] text-neutral-600 leading-snug">
                <div className="  text-sm  w-full">Location Address</div>
                <div className=" text-sm w-full">
                  {pet?.address?.address1 ||
                    pet?.address?.address2 ||
                    "No Address Available.."}{" "}
                </div>
              </div>
            </div>
            <div className="flex items-center pb-[19px] mt-[17px] mb-[20px] mx-[20px] border-b border-neutral-300">
              <img className="h-[22px] w-[22px]" src={iconPhone} alt="" />
              <div className=" ms-[23px] text-violet-800 text-sm font-normal font-['Arial'] leading-snug">
                {pet?.contact?.phone || "(671) 653-4246"}
              </div>
            </div>
            <div className="mx-[20px] mb-[30px]">
              <button className="px-2 text-center py-4 w-full text-neutral-600 hover:bg-violet-800 hover:font-semibold ease-in-out duration-500 hover:shadow-lg border-2  border-neutral-600 hover:border-white rounded-full bg-white hover:text-white uppercase leading-tight">
                Start Your Inquiry
              </button>
            </div>
          </div>
        </div>

        <div className="h-[328px] w-full flex justify-center items-center  flex-col text-white bg-violet-800 bottom-72 xx:hidden sm:hidden md:hidden lg:flex">
          <div className="mx-[60px]  ">
            <div className="flex  items-center gap-5  ">
              <div className="w-[103px] h-[103px] flex items-center">
                <img
                  src={
                    pet?.photos?.[0]?.small ||
                    "https://via.placeholder.com/103x103"
                  }
                  alt="dog Image"
                  className="rounded-full border-4 w-[103px] h-[103px] border-white"
                />
              </div>
              <div className="">
                <div className="text-3xl ">Ask About {pet?.name}</div>
                <div className="mt-2 mb-2">{pet?.type}</div>
                <div className="flex text-base xx:justify-center  sm:inline-flex">
                  <div className="">{pet?.gender}</div>
                  <div className="px-2">.</div>
                  <div className="">{pet?.age}</div>
                  <div className="px-2">.</div>
                  <div className="">{pet?.size}</div>
                </div>
              </div>
            </div>
            <hr className="w-full  mt-5 mb-5 border-[1px] border-slate-300" />
            <div className="">
              <div className="my-2">
                Please note that {pet?.address?.city || "Guam"} Animals In Need
                is not able to answer inquiries via email through Petfinder at
                this time.
              </div>
              <div className="flex gap-8 my-2">
                <div className="">You may call them with your inquiry at: </div>
                <div className="">
                  {pet?.contact?.phone || "(671) 653-4246"}
                </div>
              </div>
              <div className="flex gap-10 my-2">
                <div className="">
                  You may also find more information about the organization on
                  their homepage:{" "}
                </div>
                <Link to={`${pet?.url}`} className="hover:underline">
                  {pet?.url.slice(0, 69)}
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full bg-purple-950 ">
          <div className="flex flex-col flex-wrap mt-[58px]">
            <div className="text-center text-white text-[40px] font-normal font-['Arial'] leading-[48px]">
              {pet?.organization_id || "Unknown Organization"}'s Happy Tails
            </div>
            <div className="text-center text-white text-base underline leading-tight">
              View Pet Adoption Stories
            </div>
          </div>

          <div className="flex flex-wrap pb-[66px] justify-center text-center mt-[40px] ">
            {organization &&
              organization.slice(0, 3).map((item: animal, i: number) => {
                return (
                  <Link
                    to={`/details/${item.id}`}
                    key={i}
                    className="w-auto mx-2"
                  >
                    <div className="w-[394px] xsm:w-[315px] xsm:mt-10 mt-6 bg-opacity-0 rounded-lg shadow">
                      <div className=" bg-zinc-200 rounded-tl-lg rounded-tr-lg">
                        <img
                          className="w-full rounded-tl-lg rounded-tr-lg object-cover h-[231.20px]"
                          src={item?.photos[0]?.full || alternate}
                          alt={item.age}
                        />
                      </div>

                      <div className=" top-[-10px] h-auto bg-white rounded-br-lg rounded-bl-lg ">
                        <div className="flex rounded-tl-3xl rounded-tr-3xl relative h-[9px] bg-white top-[-8px]"></div>

                        <div className="mt-[18px] ">
                          <div className=" text-violet-800 text-xl inline-flex">
                            {item.name.slice(0, 10)}
                          </div>
                        </div>

                        <div className="border-b-2 pb-4 flex flex-wrap">
                          <div className=" text-center min-h-[88px] px-[32px] pt-[11px] text-neutral-600 text-base font-normal font-['Arial'] leading-relaxed">
                            {item?.description?.slice(0, 75) || (
                              <div className="ms-20 mt-4">
                                There is no Description !
                              </div>
                            )}
                          </div>
                        </div>

                        <button className="py-4 w-full hover:bg-violet-900 ease-in-out duration-500 hover:font-bold hover:text-white text-neutral-600 rounded-br-lg rounded-bl-lg ">
                          <div className="text-center text-sm font-normal font-['Arial'] uppercase leading-snug">
                            Read More
                          </div>
                        </button>
                      </div>
                    </div>
                  </Link>
                );
              })}
          </div>
        </div>
      </div>

      <div className="mt-[85px] mx-auto ">
        <div className=" text-center text-violet-800 text-[40px] font-normal font-['Arial'] leading-[48px]">
          More {pet?.type}'s from {pet?.organization_id} Animals In Need
        </div>
        <div className="mt-[25px] mb-[96px] justify-center text-center">
          <Swiper
            breakpoints={{
              320: {
                slidesPerView: 2,
                spaceBetween: 2,
              },
              470: {
                slidesPerView: 3,
                spaceBetween: 2,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 2,
              },
              710: {
                slidesPerView: 3,
                spaceBetween: 2,
              },
              992: {
                slidesPerView: 4,
                spaceBetween: 2,
              },
              1200: {
                slidesPerView: 5,
                spaceBetween: 2,
              },
              1440: {
                slidesPerView: 6,
                spaceBetween: 2,
              },
            }}
            modules={[Pagination]}
            className="mySwiper "
          >
            {Array.isArray(organization) &&
              organization
                .filter((org: animal) => pet?.type === org.type)
                .map((item: animal, i: number) => {
                  return (
                    <SwiperSlide key={i}>
                      <Link
                        to={`/details/${item.id}`}
                        key={i}
                        className="w-auto mx-2 h-[227px] sm:h-[301.2px] mb-4"
                      >
                        <div className="  w-[158px]  sm:w-[231.2px]  h-[227px] sm:h-[301.2px] xsm:mt-10 mt-6 bg-opacity-0 rounded-lg shadow">
                          <div className=" bg-zinc-200 rounded-tl-lg rounded-tr-lg">
                            <img
                              className=" w-[158px] sm:w-[231.2px] rounded-tl-lg rounded-tr-lg object-cover h-[158px] sm:h-[231.20px]"
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

                          <div className="w-[45px] h-[45px] p-2.5 top-[-219px] left-[48px] sm:top-[-293px] sm:left-[85px] relative bg-white bg-opacity-75 rounded-[22.50px] justify-center items-center inline-flex">
                            <div className="w-[26px] h-[44px] relative flex-col justify-start items-start flex">
                              <img src={iconFavorite3} alt="" />
                            </div>
                          </div>
                        </div>
                      </Link>
                    </SwiperSlide>
                  );
                })}
            <SwiperSlide key={""}>
              <div className="">
                <div className="my-auto ms-1 bg-violet-800 w-[158px] sm:w-[228px] h-[228px] sm:h-[301px] mt-12 mb-4 rounded-xl">
                  <div className="flex justify-center  mx-auto items-center w-[128px]  h-[162px]  sm:h-[242px]">
                    <img
                      className="h-[72px] w-[72px]"
                      src={iconStrokedPaw}
                      alt=""
                    />
                  </div>
                  <button className="uppercase w-full text-white transition-all hover:tracking-wide rounded-b-xl py-[19px] border-t-[1px] border-purple-950">
                    Meet them
                  </button>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};
export default Details;
