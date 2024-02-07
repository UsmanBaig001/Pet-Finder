import {
  heroImage2,
  iconCat,
  iconDog,
  iconPaw,
  iconShelter,
  searchIcon,
} from "../../helper";

export default function HeroSection() {
  return (
    <>
      <div
        className="h-[410px] border-b-[10px] border-b-violet-800 shadow bg-cover bg-center bg-no-repeat "
        style={{ backgroundImage: `url(${heroImage2})` }}
      >
        <form className="flex pt-5 justify-center mx-2">
          <div className="w-full max-w-[808px]">
            <label
              htmlFor="default-search"
              className=" text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div className=" relative h-[60px] sm:mb-[90px] ">
              <input
                type="search"
                id="default-search"
                className="block w-full h-[60px] focus:outline-none p-4 ps-4 text-zinc-500 text-base font-normal border-2 border-gray-300 rounded-md bg-gray-50 focus:ring-violet-500 focus:border-violet-500"
                placeholder="Search Terrier, Kitten, etc."
                required
              />
              <button
                type="submit"
                className="text-white absolute end-2 bottom-2.5 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm "
              >
                <img
                  src={searchIcon}
                  className="h-[40px] w-[40px]"
                  alt="SearchIcon"
                />
              </button>
            </div>
          </div>
        </form>

        <br />
        <div className="flex flex-col items-center mt-10 sm:mt-3">
          <div className="w-auto sm:h-[54px] text-center text-white text-[41.84px] font-bold sm:leading-[54px]">
            Find your new best friend
          </div>
          <div className="w-auto max-w-[638.34px] tracking-wide h-8 text-center text-white text-base font-bold  leading-loose">
            Browse pets from our network of over 11,500 shelters and rescues.
          </div>
        </div>
      </div>

      <div className="h-[278.6px] flex flex-wrap justify-center sm:top-[-110px] xsm:mb-[510px] mb-[110px] sm:mb-0 relative">
        <div className="mx-2 mt-[23px]">
          <div className="w-[181px] h-[154.59px] px-[51px] pt-[17px] pb-[20.59px] bg-white rounded-[10px] shadow-lg border border-neutral-300 flex-col justify-center items-center gap-[18px] inline-flex">
            <div className=" h-[79px] w-[79px] justify-center items-center inline-flex">
              <img
                className="relative flex-col justify-start items-start flex"
                src={iconDog}
                alt=""
              />
            </div>
            <div className="w-[39.48px] h-5 text-center text-neutral-600 text-base font-normal  leading-relaxed">
              Dogs
            </div>
          </div>
        </div>

        <div className="mx-2 mt-[23px]">
          <div className="w-[181px] h-[154.59px] px-[51px] pt-[17px] pb-[20.59px] bg-white rounded-[10px] shadow-lg border border-neutral-300 flex-col justify-center items-center gap-[18px] inline-flex">
            <div className="self-stretch w-[79px] h-[79px] justify-center items-center inline-flex">
              <img
                className="relative flex-col justify-start items-start flex"
                src={iconCat}
                alt=""
              />
            </div>
            <div className="w-[39.48px] h-5 text-center text-neutral-600 text-base font-normal  leading-relaxed">
              Cats
            </div>
          </div>
        </div>

        <div className="mx-2 mt-[23px]">
          <div className="w-[181px] h-[154.59px] px-[51px] pt-[17px] pb-[20.59px] bg-white rounded-[10px] shadow-lg border border-neutral-300 flex-col justify-center items-center gap-[18px] inline-flex">
            <div className="self-stretch w-[79px] h-[79px] justify-center items-center inline-flex">
              <img
                className="relative flex-col justify-start items-start flex"
                src={iconPaw}
                alt=""
              />
            </div>
            <div className="w-[110.4px] h-5 text-center text-neutral-600 text-base font-normal  leading-relaxed">
              Other&nbsp;Animals
            </div>
          </div>
        </div>

        <div className="mx-2 mt-[23px]">
          <div className="w-[181px] h-[154.59px] px-[51px] pt-[17px] pb-[20.59px] bg-white rounded-[10px] shadow-lg border border-neutral-300 flex-col justify-center items-center gap-[18px] inline-flex">
            <div className="self-stretch w-[79px] h-[79px] justify-center items-center inline-flex">
              <img
                className="relative flex-col justify-start items-start flex"
                src={iconShelter}
                alt=""
              />
            </div>
            <div className="w-[147.09px] h-5 text-center text-neutral-600 text-base font-normal leading-relaxed">
              Shelters&nbsp;&amp;&nbsp;Rescues
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
