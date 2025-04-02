"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import axios from "axios";
import { Badge } from "lucide-react";
import { useEffect, useState } from "react";
import { FaChevronDown } from "react-icons/fa6";

type movieGenreTypes = {
  id: number;
  name: string;
};

export const Dropdown = () => {
  const [movieGenre, setMovieGenre] = useState<movieGenreTypes[]>([]);

  const fetchGenres = async () => {
    const response = await axios.get(
      "https://api.themoviedb.org/3/genre/movie/list?language=en&api_key=d67d8bebd0f4ff345f6505c99e9d0289"
    );

    setMovieGenre(response.data.genres);
  };

  useEffect(() => {
    fetchGenres();
  }, []);
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center justify-center p-[8px] gap-[12px] rounded-[8px] border-[1px]">
        <FaChevronDown />
        Genre
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Top Rated</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          {movieGenre.map((value) => {
            return <Badge></Badge>;
          })}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
