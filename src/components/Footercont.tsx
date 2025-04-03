import { Mail } from "lucide-react";
import { Phone } from "lucide-react";

export const Footercont = () => {
  return (
    <div className="flex h-[280px]  flex-start justify-between w-full pt-10 px-20 bg-[#4338CA]">
      <div className="flex flex-col items-start w-[240px] gap-[8px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="21"
          viewBox="0 0 20 21"
          fill="none"
        ></svg>
        <p className="text-[#FAFAFA] font-bold italic text-[16px] ">Movie Z</p>

        <h1 className="text-[#FAFAFA] font-normal text-[14px]">
          © 2024 Movie Z. All Rights Reserved.
        </h1>
      </div>
      <div>
        <p className="text-[#FAFAFA] font-normal text-[14px]">
          Contant Information
        </p>
        <div>
          <Mail />
          <p className="text-[#FAFAFA] font-normal text-[14px]">
            Email: support@MovieZ.com
          </p>
        </div>
        <div>
          <Phone />
          <p className="text-[#FAFAFA] font-normal text-[14px]">
            Phone: +976 (11) 123-4567
          </p>
        </div>
      </div>
      <div>
        <p className="text-[#FAFAFA] font-normal text-[14px]">Follow us</p>
        <p className="text-[#FAFAFA] font-normal text-[14px]">
          {" "}
          Facebook Instagram Twitter Youtube
        </p>
      </div>
    </div>
  );
};
