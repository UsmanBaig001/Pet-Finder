import {
  arrowWhite,
  footList_1,
  footList_2,
  footList_3,
  footList_4,
} from "../../helper";

function FooterSmLinks() {
  return (
    <div className="px-[15px] flex flex-col items-center lg:hidden bg-violet-800 text-white ">
      <div className="w-full sm:w-4/5">
        <details className="w-full rounded-lg list-image-none">
          <summary className="px-[20px] flex text-white text-sm font-normal border-t border-purple-200 font-['Arial'] uppercase leading-snug py-[16px] cursor-pointer">
            <div className=" font-semibold tracking-wide"> RESOURCES</div>
            <img className="ms-auto" src={arrowWhite} alt="" />
          </summary>
          <div className="w-full  px-[20px]  text-white ">
            <ul className="text-white ms-1 pb-[20px]">
              <li>
                <div className=" text-[13px] leading-none">FAQs</div>
              </li>
              {footList_1.slice(1).map((text: string, i: number) => {
                return (
                  <li key={i}>
                    <div className="mt-[13px] text-[13px] leading-none">
                      {text}
                    </div>
                  </li>
                );
              })}
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
              {footList_2.slice(1).map((text: string, i: number) => {
                return (
                  <li key={i}>
                    <div className="mt-[13px] text-[13px] leading-none">
                      {text}
                    </div>
                  </li>
                );
              })}
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
              {footList_3.slice(1).map((text: string, i: number) => {
                return (
                  <li key={i}>
                    <div className="mt-[13px] text-[13px] leading-none">
                      {text}
                    </div>
                  </li>
                );
              })}
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
                <div className=" text-[13px]  leading-none">
                  All About Cats & Kittens
                </div>
              </li>
              {footList_4.slice(1).map((text: string, i: number) => {
                return (
                  <li key={i}>
                    <div className="mt-[13px] text-[13px] leading-none">
                      {text}
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </details>
      </div>
    </div>
  );
}

export default FooterSmLinks;
