import iconRight from "../../assets/images/icon-chevronRight.svg";
import { Link } from "react-router-dom";
export default function TopBar() {
  return (
    <>
      <div className=" bg-customGrey  xsm:hidden text-sm py-3 flex justify-between px-[15px] md:pe-[85px]">
        <div className="flex md:ms-auto me-8">
          <div className="">
            <Link
              to={"https://www.petfinder.com/"}
              className="text-violet-800 underline me-2"
            >
              Learn more
            </Link>
            about how Purina and Petfinder are making a difference together.
          </div>
        </div>
        <div className="my-auto h-4 ">
          <img className="h-4" src={iconRight} alt="" />
        </div>
      </div>
    </>
  );
}
