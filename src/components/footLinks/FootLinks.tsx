import { Link } from "react-router-dom";
import { footLinks } from "../../helper";

function FootLinks() {
  return (
    <div className="flex flex-wrap justify-center pb-[40px]">
      {footLinks.map((text: string, i: number) => {
        return (
          <div key={i}>
            <Link
              key={i}
              to={"/"}
              className="mx-[16.5px] py-2 text-white text-xs font-['Helvetica'] leading-tight"
            >
              {text}
            </Link>
            {footLinks.length != i + 1 && (
              <span className="w-px h-2.5 my-auto inline-block bg-white"></span>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default FootLinks;
