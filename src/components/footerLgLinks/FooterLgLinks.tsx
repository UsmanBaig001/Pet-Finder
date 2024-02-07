import { footList_1, footList_2, footList_3, footList_4 } from "../../helper";

function FooterLgLinks() {
  return (
    <div className="lg:flex hidden lg:flex-wrap">
      <div className="me-[19px]">
        <ul className="text-white">
          <li>
            <div className="text-sm font-['Arial'] uppercase leading-snug">
              RESOURCES
            </div>
          </li>
          {footList_1.map((text: string, i: number) => {
            return (
              <li key={i}>
                <div className="mt-[13px] text-[13px] leading-none">{text}</div>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="mx-[19px]">
        <ul className="text-white">
          <li>
            <div className="text-sm font-['Arial'] leading-snug">
              ADOPT OR GET INVOLVED
            </div>
          </li>
          {footList_2.map((text: string, i: number) => {
            return (
              <li key={i}>
                <div className="mt-[13px] text-[13px] leading-none">{text}</div>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="mx-[19px]">
        <ul className="text-white">
          <li>
            <div className="text-sm font-['Arial'] uppercase leading-snug">
              ABOUT DOGS & PUPPIES
            </div>
          </li>
          {footList_3.map((text: string, i: number) => {
            return (
              <li key={i}>
                <div className="mt-[13px] text-[13px] leading-none">{text}</div>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="ms-[19px] footerBug1:ms-0 footerBug1:me-6 footerBug1:mt-6   me-[60px] footerBug3:mt-6">
        <ul className="text-white">
          <li>
            <div className="text-sm font-['Arial'] uppercase leading-snug">
              ABOUT CATS & KITTENS
            </div>
          </li>
          {footList_4.map((text: string, i: number) => {
            return (
              <li key={i}>
                <div className="mt-[13px] text-[13px] leading-none">{text}</div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default FooterLgLinks;
