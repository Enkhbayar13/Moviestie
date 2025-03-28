import { Button } from "./ui/button";
export const Header1 = ({ TypeProps }: { TypeProps: string }) => {
  return (
    <div className="flex justify-between w-[1270px]  ">
      <h1 className="text-[#09090B] font-semibold text-[32px] ">{TypeProps}</h1>

      <Button className="flex h-[36px] p-[8px] items-center gap-[8px] justify-center">
        See More
      </Button>
    </div>
  );
};
