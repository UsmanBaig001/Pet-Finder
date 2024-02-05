import React from "react";
import FootBottom from "../FootBottom/FootBottom";
import FootTop from "../FootTop/FootTop";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo-consumer-white.svg";
import arrowWhite from "../../assets/images/arrow-white.svg";
export default function Footer() {
  return (
    <>
      <FootTop />
      <footer className="bg-violet-800">
        <div className="flex flex-col mx-[15px] xx:px-0 sm:px-[0px] md:px-[50px] py-[40px]">
          <div className="">
            <div className=" mx-auto lg:mx-auto  max-w-[1167px]">
              <img
                className=" max-w-[1167px] mx-auto lg:mx-0 lg:me-auto "
                src={Logo}
                alt=""
              />
            </div>
          </div>

          <div className="flex flex-col-reverse  lg:flex-row lg:justify-center mt-[20px]">
            <div className="lg:flex hidden lg:flex-wrap">
              <div className="me-[19px]">
                <ul className="text-white">
                  <li>
                    <div className="text-sm font-['Arial'] uppercase leading-snug">
                      RESOURCES
                    </div>
                  </li>
                  <li>
                    <div className="mt-[11px] text-[13px] leading-none">
                      FAQs
                    </div>
                  </li>
                  <li>
                    <div className="pt-[13px] text-[13px]  leading-none">
                      Mobile App Download
                    </div>
                  </li>
                  <li>
                    <div className="pt-[13px] text-[13px]  leading-none">
                      Partnerships
                    </div>
                  </li>
                  <li>
                    <div className="pt-[13px] text-[13px]  leading-none">
                      News Center
                    </div>
                  </li>
                  <li>
                    <div className="pt-[13px] text-[13px]  leading-none">
                      Put Petfinder On Your Site
                    </div>
                  </li>
                  <li>
                    <div className="pt-[13px] text-[13px]  leading-none">
                      For Developers
                    </div>
                  </li>
                  <li>
                    <div className="pt-[13px] text-[13px]  leading-none">
                      Contact Us
                    </div>
                  </li>
                </ul>
              </div>
              <div className="mx-[19px]">
                <ul className="text-white">
                  <li>
                    <div className="text-sm font-['Arial'] uppercase leading-snug">
                      ADOPT OR GET INVOLVED
                    </div>
                  </li>
                  <li>
                    <div className="mt-[11px] text-[13px] leading-none">
                      All Adopt or Get Involved
                    </div>
                  </li>
                  <li>
                    <div className="pt-[13px] text-[13px]  leading-none">
                      Adopting Pets
                    </div>
                  </li>
                  <li>
                    <div className="pt-[13px] text-[13px]  leading-none">
                      Animal Shelters & Rescues
                    </div>
                  </li>
                  <li>
                    <div className="pt-[13px] text-[13px]  leading-none">
                      Other Types of Pets
                    </div>
                  </li>
                </ul>
              </div>
              <div className="mx-[19px]">
                <ul className="text-white">
                  <li>
                    <div className="text-sm font-['Arial'] uppercase leading-snug">
                      ABOUT DOGS & PUPPIES
                    </div>
                  </li>
                  <li>
                    <div className="mt-[11px] text-[13px] leading-none">
                      All About Dogs & Puppies
                    </div>
                  </li>
                  <li>
                    <div className="pt-[13px] text-[13px]  leading-none">
                      Dog Adoption
                    </div>
                  </li>
                  <li>
                    <div className="pt-[13px] text-[13px]  leading-none">
                      Dog Breeds
                    </div>
                  </li>
                  <li>
                    <div className="pt-[13px] text-[13px]  leading-none">
                      Feeding Your Dog
                    </div>
                  </li>
                  <li>
                    <div className="pt-[13px] text-[13px]  leading-none">
                      Dog Behavior
                    </div>
                  </li>
                  <li>
                    <div className="pt-[13px] text-[13px]  leading-none">
                      Dog Health & Wellness
                    </div>
                  </li>
                  <li>
                    <div className="pt-[13px] text-[13px]  leading-none">
                      Dog Training
                    </div>
                  </li>
                  <li>
                    <div className="pt-[13px] text-[13px]  leading-none">
                      Other Dog Information
                    </div>
                  </li>
                </ul>
              </div>
              <div className="ms-[19px] footerBug1:ms-0 footerBug1:me-6 footerBug1:mt-6   me-[60px] footerBug3:mt-6">
                <ul className="text-white">
                  <li>
                    <div className="text-sm font-['Arial'] uppercase leading-snug">
                      ABOUT CATS & KITTENS
                    </div>
                  </li>
                  <li>
                    <div className="pt-[13px] text-[13px]  leading-none">
                      All About Cats & Kittens
                    </div>
                  </li>
                  <li>
                    <div className="mt-[11px] text-[13px] leading-none">
                      Cat Adoption
                    </div>
                  </li>
                  <li>
                    <div className="pt-[13px] text-[13px]  leading-none">
                      Cat Breeds
                    </div>
                  </li>
                  <li>
                    <div className="pt-[13px] text-[13px]  leading-none">
                      Feeding Your Cat
                    </div>
                  </li>
                  <li>
                    <div className="pt-[13px] text-[13px]  leading-none">
                      Cat Behavior
                    </div>
                  </li>
                  <li>
                    <div className="pt-[13px] text-[13px]  leading-none">
                      Cat Health & Wellness
                    </div>
                  </li>
                  <li>
                    <div className="pt-[13px] text-[13px]  leading-none">
                      Cat Training
                    </div>
                  </li>
                  <li>
                    <div className="pt-[13px] text-[13px]  leading-none">
                      Other Cat Information
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="px-[15px] flex flex-col items-center lg:hidden bg-violet-800 text-white ">
              <div className="w-full sm:w-4/5">
                <details className="w-full rounded-lg list-image-none">
                  <summary className="px-[20px] flex text-white text-sm font-normal border-t border-purple-200 font-['Arial'] uppercase leading-snug py-[16px] cursor-pointer">
                    <div className=" font-semibold tracking-wide">
                      {" "}
                      RESOURCES
                    </div>
                    <img className="ms-auto" src={arrowWhite} alt="" />
                  </summary>
                  <div className="w-full  px-[20px]  text-white ">
                    <ul className="text-white ms-1 pb-[20px]">
                      <li>
                        <div className=" text-[13px] leading-none">FAQs</div>
                      </li>
                      <li>
                        <div className="pt-[13px] text-[13px]  leading-none">
                          Mobile App Download
                        </div>
                      </li>
                      <li>
                        <div className="pt-[13px] text-[13px]  leading-none">
                          Partnerships
                        </div>
                      </li>
                      <li>
                        <div className="pt-[13px] text-[13px]  leading-none">
                          News Center
                        </div>
                      </li>
                      <li>
                        <div className="pt-[13px] text-[13px]  leading-none">
                          Put Petfinder On Your Site
                        </div>
                      </li>
                      <li>
                        <div className="pt-[13px] text-[13px]  leading-none">
                          For Developers
                        </div>
                      </li>
                      <li>
                        <div className="pt-[13px] text-[13px]  leading-none">
                          Contact Us
                        </div>
                      </li>
                    </ul>
                  </div>
                </details>
              </div>
              <div className="w-full sm:w-4/5">
                <details className="w-full rounded-lg list-image-none">
                  <summary className="px-[20px] flex text-white text-sm font-normal border-t border-purple-200 font-['Arial'] uppercase leading-snug py-[16px] cursor-pointer">
                    <div className=" font-semibold tracking-wide">
                      ADOPT OR GET INVOLVED
                    </div>
                    <img className="ms-auto" src={arrowWhite} alt="" />
                  </summary>
                  <div className="w-full  px-[20px]  text-white ">
                    <ul className="text-white ms-1 pb-[20px]">
                      <li>
                        <div className="text-sm font-['Arial'] uppercase leading-snug"></div>
                      </li>
                      <li>
                        <div className=" text-[13px] leading-none">
                          All Adopt or Get Involved
                        </div>
                      </li>
                      <li>
                        <div className="pt-[13px] text-[13px]  leading-none">
                          Adopting Pets
                        </div>
                      </li>
                      <li>
                        <div className="pt-[13px] text-[13px]  leading-none">
                          Animal Shelters & Rescues
                        </div>
                      </li>
                      <li>
                        <div className="pt-[13px] text-[13px]  leading-none">
                          Other Types of Pets
                        </div>
                      </li>
                    </ul>
                  </div>
                </details>
              </div>
              <div className="w-full sm:w-4/5">
                <details className="w-full rounded-lg list-image-none">
                  <summary className="px-[20px] flex text-white text-sm font-normal border-t border-purple-200 font-['Arial'] uppercase leading-snug py-[16px] cursor-pointer">
                    <div className=" font-semibold tracking-wide">
                      ABOUT DOGS & PUPPIES
                    </div>
                    <img className="ms-auto" src={arrowWhite} alt="" />
                  </summary>
                  <div className="w-full  px-[20px]  text-white ">
                    <ul className="text-white ms-1 pb-[20px]">
                      <li>
                        <div className=" text-[13px] leading-none">
                          All About Dogs & Puppies
                        </div>
                      </li>
                      <li>
                        <div className="pt-[13px] text-[13px]  leading-none">
                          Dog Adoption
                        </div>
                      </li>
                      <li>
                        <div className="pt-[13px] text-[13px]  leading-none">
                          Dog Breeds
                        </div>
                      </li>
                      <li>
                        <div className="pt-[13px] text-[13px]  leading-none">
                          Feeding Your Dog
                        </div>
                      </li>
                      <li>
                        <div className="pt-[13px] text-[13px]  leading-none">
                          Dog Behavior
                        </div>
                      </li>
                      <li>
                        <div className="pt-[13px] text-[13px]  leading-none">
                          Dog Health & Wellness
                        </div>
                      </li>
                      <li>
                        <div className="pt-[13px] text-[13px]  leading-none">
                          Dog Training
                        </div>
                      </li>
                      <li>
                        <div className="pt-[13px] text-[13px]  leading-none">
                          Other Dog Information
                        </div>
                      </li>
                    </ul>
                  </div>
                </details>
              </div>
              <div className="w-full sm:w-4/5">
                <details className="w-full list-image-none border-b border-purple-200 rounded-none">
                  <summary className="px-[20px] flex text-white text-sm font-normal border-t  font-['Arial'] uppercase leading-snug py-[16px] cursor-pointer">
                    <div className=" font-semibold tracking-wide">
                      ABOUT CATS & KITTENS
                    </div>
                    <img className="ms-auto" src={arrowWhite} alt="" />
                  </summary>
                  <div className="w-full  px-[20px]  text-white ">
                    <ul className="text-white ms-1 pb-[20px]">
                      <li>
                        <div className="text-sm font-['Arial'] uppercase leading-snug"></div>
                      </li>
                      <li>
                        <div className="pt-[13px] text-[13px]  leading-none">
                          All About Cats & Kittens
                        </div>
                      </li>
                      <li>
                        <div className="mt-[11px] text-[13px] leading-none">
                          Cat Adoption
                        </div>
                      </li>
                      <li>
                        <div className="pt-[13px] text-[13px]  leading-none">
                          Cat Breeds
                        </div>
                      </li>
                      <li>
                        <div className="pt-[13px] text-[13px]  leading-none">
                          Feeding Your Cat
                        </div>
                      </li>
                      <li>
                        <div className="pt-[13px] text-[13px]  leading-none">
                          Cat Behavior
                        </div>
                      </li>
                      <li>
                        <div className="pt-[13px] text-[13px]  leading-none">
                          Cat Health & Wellness
                        </div>
                      </li>
                      <li>
                        <div className="pt-[13px] text-[13px]  leading-none">
                          Cat Training
                        </div>
                      </li>
                      <li>
                        <div className="pt-[13px] text-[13px]  leading-none">
                          Other Cat Information
                        </div>
                      </li>
                    </ul>
                  </div>
                </details>
              </div>
            </div>
            <div className="xsm:w-full  w-[330px] mx-auto lg:mx-0 h-[170px] mb-[46px] bg-purple-100 rounded-[10px] flex flex-col justify-between  p-[23px]">
              <div className="text-center  text-violet-800 text-sm leading-normal">
                To get the latest on pet adoption and pet care, sign up for the
                Petfinder newsletter.
              </div>
              <button className="w-full bg-violet-800  border-2 rounded-full py-4 text-center hover:font-semibold ease-in-out duration-500 hover:shadow-none shadow-lg text-white hover:bg-white hover:text-violet-800 uppercase leading-tight">
                Sign Up
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center pb-[40px] ">
          <Link
            to={"/"}
            className="mx-[16.5px] py-2 text-white text-xs font-['Helvetica'] leading-tight"
          >
            Shelter & Rescue Registration
          </Link>
          <div className="w-px h-2.5 my-auto bg-white"></div>
          <Link
            to={"/"}
            className="mx-[16.5px] py-2 text-white text-xs font-['Helvetica'] leading-tight"
          >
            Sitemap
          </Link>
          <div className="w-px h-2.5 my-auto bg-white"></div>
          <Link
            to={"/"}
            className="mx-[16.5px] py-2 text-white text-xs font-['Helvetica'] leading-tight"
          >
            Terms of Service
          </Link>
          <div className="w-px h-2.5 my-auto bg-white"></div>
          <Link
            to={"/"}
            className="mx-[16.5px] py-2 text-white text-xs font-['Helvetica'] leading-tight"
          >
            Notice at Collection
          </Link>
          <div className="w-px h-2.5 my-auto bg-white"></div>
          <Link
            to={"/"}
            className="mx-[16.5px] py-2 text-white text-xs font-['Helvetica'] leading-tight"
          >
            Privacy Policy (updated)
          </Link>
          <div className="w-px h-2.5 my-auto bg-white"></div>
          <Link
            to={"/"}
            className="mx-[16.5px] py-2 text-white text-xs font-['Helvetica'] leading-tight"
          >
            About Our Ads
          </Link>
          <div className="w-px h-2.5 my-auto bg-white"></div>
          <Link
            to={"/"}
            className="mx-[16.5px] py-2 text-white text-xs font-['Helvetica'] leading-tight"
          >
            Do Not Sell Or Share My Personal Information
          </Link>
          <div className="w-px h-2.5 my-auto bg-white"></div>
          <Link
            to={"/"}
            className="mx-[16.5px] py-2 text-white text-xs font-['Helvetica'] leading-tight"
          >
            Accessibility
          </Link>
        </div>
      </footer>

      <FootBottom />
    </>
  );
}
