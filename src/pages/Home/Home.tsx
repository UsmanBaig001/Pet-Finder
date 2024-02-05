import iconRight from "../../assets/images/IconChevronRight.png";
import HeroSection from "../../components/HeroSection/HeroSection";
import BlogPet from "../../components/BlogPet/BlogPet";
import Petinfo from "../../components/PetInfo/Petinfo";

export default function Home() {
  return (
    <>
      <HeroSection />

      <div className="flex justify-center">
        <div className="w-[506.17px] h-9 text-center text-violet-800 text-3xl font-normal leading-9">
          Pets Available for Adoption Nearby
        </div>
        <div className="xsm:mt-6 xsm:w-[28px] w-[18px] h-[18px] mt-3.5 inline-flex mb-6">
          <img src={iconRight} alt="" />
        </div>
      </div>

      <Petinfo />

      <BlogPet />
    </>
  );
}
