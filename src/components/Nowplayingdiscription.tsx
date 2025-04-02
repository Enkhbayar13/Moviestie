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
    <div className="absolute top-[178px] left-[148px] z-20 flex w-[400px] h-[400px] flex-col">
      <div>
        <h1 className="size-[16px] font-normal text-[24px] font-inter text-[#FFF]">
          Now Playing:
        </h1>
      </div>
      <div className="flex   ">{title}</div>

      <Star fill="yellow" color="yellow"></Star>
      <p>
        {rating}
        <span className="text-[#71717A]">/10</span>
      </p>

      <div className="flex h-[80px] w-[302px]">{content}</div>

      <Button className="flex w-[145px] h-[40px] p-[8px] items-center gap-[8px] justify-center bg-[#F4F4F5] text-black">
        Watch Trailer
      </Button>
    </div>
  );
};
