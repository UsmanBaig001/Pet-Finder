import { Logo } from "../../helper";
import FootBottom from "../footBottom/FootBottom";
import FootTop from "../footTop/FootTop";
import FootLinks from "../footLinks/FootLinks";
import FooterSmLinks from "../footerSmLinks/FooterSmLinks";
import FooterLgLinks from "../footerLgLinks/FooterLgLinks";

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
            <FooterLgLinks />
            <FooterSmLinks />
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
        <FootLinks />
      </footer>
      <FootBottom />
    </>
  );
}
