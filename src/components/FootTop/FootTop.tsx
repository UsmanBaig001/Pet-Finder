import FootLabel from "../../assets/images/Vector-4.png";
import FootLabel1 from "../../assets/images/Vector.png";
import FootLabel2 from "../../assets/images/Vector-3.svg";
export default function FootTop() {
  return (
    <>
      <div className="w-full h-11 text-black bg-red-600 justify-center items-center inline-flex">
        <div className="flex border-[2px] my-2 border-white border-solid">
          <img
            className="bg-white border-[2px] border-red-600 border-solid p-0.5"
            src={FootLabel1}
            alt=""
          />
          <img className="bg-black p-1" src={FootLabel} alt="" />
        </div>
        <img className="" src={FootLabel2} alt="" />
      </div>
    </>
  );
}
