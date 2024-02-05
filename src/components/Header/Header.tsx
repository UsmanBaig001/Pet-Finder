import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import toggler from "../../assets/images/icon-menu.svg";
import heartIcon from "../../assets/images/icon-favorite.svg";
import heartIcon1 from "../../assets/images/iconFavorite.svg";
import TopBar from "../TopBar/TopBar";
import PinkArrow from "../../assets/images/pinkArrow.svg";
export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [showNav, setShowNav] = useState(false);
  const showNavbar = () => {
    setShowNav((prevShow) => !prevShow);
  };
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <>
      <TopBar />
      <nav className="relative">
        <div className="max-w-screen-xl z-20 flex flex-wrap items-center mx-auto">
          <div className="flex flex-wrap items-center">
            <Link
              to={"/"}
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <img
                src={logo}
                className="ps-1 md:ms-2 h-[70px] "
                alt="Petfinder Logo"
              />
            </Link>
            <ul className="flex flex-wrap">
              <li>
                <button
                  id="dropdownHoverButton"
                  data-dropdown-toggle="dropdownHover"
                  data-dropdown-trigger="hover"
                  className="text-customPurple uppercase rounded-lg text-sm px-2 py-2.5 md:ms-2  hidden md:inline-flex items-center
                  "
                  type="button"
                  onClick={showNavbar}
                >
                  All About pets
                  <div className="w-3.5 h-[8.99px] relative flex-col justify-start items-start hidden md:inline-flex">
                    <img
                      src={PinkArrow}
                      className="ms-2.5 hover:rotate-0 rotate-180 ease-in duration-200"
                      alt=""
                    />
                  </div>
                </button>
              </li>
              <li className="items-center inline-flex">
                <button
                  id="dropdownHoverButton"
                  data-dropdown-toggle="dropdownHover"
                  data-dropdown-trigger="hover"
                  className="text-customPurple text-sm uppercase rounded-lg text-md px-2 py-2.5 inline-flex items-center
                    "
                  type="button"
                  onClick={showNavbar}
                >
                  <div className="w-[79.72px] h-[18px] text-customPurple text-sm font-normal font-['Arial'] uppercase">
                    Find a Pet
                  </div>
                  <div className="w-3.5 h-[8.99px] relative flex-col justify-start items-start inline-flex">
                    <img
                      src={PinkArrow}
                      className="ms-2 hover:rotate-0 rotate-180 ease-in duration-200"
                      alt="Arrow"
                    />
                  </div>
                </button>
              </li>
            </ul>
          </div>
          <div className="h-[70px] ms-auto me-2 ">
            <img src={heartIcon} className="flex md:hidden" alt="" />
            <img src={heartIcon1} className="hidden md:flex " alt="" />
          </div>

          <div className="md:border-[1.5px] md:border-grey-100 h-[70px] "></div>

          <div className="inline-flex md:hidden flex-end pe-1">
            <button
              onClick={toggleNav}
              type="button"
              className="inline-flex items-center w-[22px] h-9 text-sm text-gray-500 md:hidden "
              aria-controls="navbar-sticky"
              aria-expanded={isNavOpen ? "true" : "false"}
            >
              <img
                src={toggler}
                className=" hover:rotate-180 ease-in duration-300 inline-flex w-[22px] h-[70px]"
                alt="Toggler"
              />
            </button>
          </div>
          <div
            className={`${
              isNavOpen ? "block" : "hidden"
            } w-full md:flex md:w-auto lg:w-auto md:order-1`}
            id="navbar-sticky"
          >
            <div className=" flex flex-wrap md:p-0 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
              <div className="flex flex-wrap ms-auto pe-2 lg:m-0">
                <button
                  type="button"
                  className="text-black hover:text-violet-800 font-medium rounded-lg text-sm px-4 py-2 text-center"
                >
                  Signup
                </button>
                <button
                  type="button"
                  className="text-black hover:text-violet-800 font-medium rounded-lg text-sm px-4 py-2 text-center"
                >
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          className={` bg-customPurple  uppercase text-white px-2  md:h-[55px] text-sm ${
            showNav ? "h-auto py-2.5 " : "max-h-0"
          }   duration-1000 ease-in-out w-full`}
        >
          <div
            className={`flex px-3 mx-4 flex-wrap items-center justify-evenly ${
              showNav ? "block" : " hidden"
            }`}
          >
            <Link className="p-2 mx-4 " to={"/"}>
              Adopt or get involved
            </Link>

            <Link className="p-2 mx-4 " to={"/"}>
              Dogs &amp; Pupies
            </Link>

            <Link className="p-2 mx-4 " to={"/"}>
              Cats &amp; Kittens
            </Link>

            <Link className="p-2 mx-4 " to={"/"}>
              Other types of pets
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
