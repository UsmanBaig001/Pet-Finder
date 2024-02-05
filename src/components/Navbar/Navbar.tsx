import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div className="bg-customPurple  uppercase text-white px-2 py-2.5 md:h-[55px] text-sm absolute w-full ">
        <div className="flex px-3 mx-4 flex-wrap items-center justify-evenly">
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
    </>
  );
}
