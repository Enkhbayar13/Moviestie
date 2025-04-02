"use client";
import { Dropdown } from "./Dropdown";
import { Button } from "./ui/button";
import { Input } from "@/components/ui/input";
import axios from "axios";
import { useEffect, useState } from "react";

import { IoIosSearch } from "react-icons/io";
import { IoMoonOutline } from "react-icons/io5";
import { Film } from "lucide-react";

export const Navigation = () => {
  const [data, setData] = useState([]);

  const fetchGenres = async () => {
    const response = await axios.get(
      "https://api.themoviedb.org/3/genre/movie/list?language=en&api_key=d67d8bebd0f4ff345f6505c99e9d0289"
    );

    setData(response.data.genres);
  };

  useEffect(() => {
    fetchGenres();
  }, []);

  console.log(data, "data");
  return (
    <div className="flex h-[59px] justify-between w-full p-[16px] items-center  bg-[#fff]">
      <div className="flex justify-between items-center gap-[8px]">
        <Film />

        <p className="text-[#4338CA] text-[16px] font-bold italic ">Movie Z</p>
      </div>
      <div className="flex gap-[12px] justify-between items-center">
        <div className="flex w-[97px] h-[36px] p-[8px] items-center justify-center gap-[8px]">
          <Dropdown></Dropdown>
        </div>
        <div className="flex w-[379px] items-center gap-[10px] relative">
          <IoIosSearch className="absolute left-2" />
          <Input placeholder="Search" className="pl-7"></Input>
        </div>
      </div>

      <IoMoonOutline />
    </div>
  );
};
