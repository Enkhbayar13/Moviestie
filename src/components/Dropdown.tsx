import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { FaChevronDown } from "react-icons/fa6";

export const Dropdown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center justify-center p-[8px] gap-[12px] rounded-[8px] border-[1px]">
        <FaChevronDown />
        Genre
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Top Rated</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Popular</DropdownMenuItem>
        <DropdownMenuItem>Upcoming</DropdownMenuItem>
        <DropdownMenuItem>Team</DropdownMenuItem>
        <DropdownMenuItem>Subscription</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
