import { Star } from "lucide-react";
import Image from "next/image";

type CardcontainerProps = {
  imgSrc: string;
  title: string;
  rating: number;
};

export const Cardcontainer = ({
  imgSrc,
  title,
  rating,
}: CardcontainerProps) => {
  return (
    <div className="flex flex-col gap-2 rounded-lg h-[420px] items-start bg-[#F4F4F5] ">
      <Image
        className="flex rounded-lg"
        alt="img"
        width={230}
        height={340}
        src={imgSrc}
      />
      <div className="flex items-start">
        <Star fill="yellow" color="yellow"></Star>
        <p>
          {rating}
          <span className="text-[#71717A]">/10</span>
        </p>
      </div>
      <h3 className="flex w-[230px]">{title}</h3>
    </div>
  );
};
