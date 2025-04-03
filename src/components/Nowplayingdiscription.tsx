import { Star } from "lucide-react";
import { Button } from "./ui/button";
type NowplayingProps = {
  title: string;
  rating: number;
  content: string;
};
export const Nowplayingdiscrition = ({
  title,
  rating,
  content,
}: NowplayingProps) => {
  return (
    <div className="absolute top-[178px] left-[148px] z-20 gap-4 flex w-[404px] h-auto flex-col ">
      <div className="flex w-[400px] items-start">
        <h1 className="  font-normal text-[26px] font-[inter] text-[#FFF]">
          Now Playing:
        </h1>
      </div>

      <div className="flex text-[#FFF] w-[400px] h-[fit] font-bold font-[inter]  text-[36px]">
        {title}
      </div>

      <div className="flex h-auto  w-[302px] text-[#FFF]">{content}</div>
      <div className="flex content-start   ">
        <Star fill="yellow" color="yellow"></Star>
        <p className="text-[#FFF]">
          {rating}
          <span className="text-[#FFF]">/10</span>
        </p>
      </div>
      <div className=" flex ">
        <Button className="flex w-[145px] h-[40px] p-[8px] items-center gap-[8px] justify-center bg-[#F4F4F5] text-black">
          Watch Trailer
        </Button>
      </div>
    </div>
  );
};
