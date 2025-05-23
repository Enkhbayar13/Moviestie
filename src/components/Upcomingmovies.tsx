"use client";

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { axiosInstance, posterUrl } from "@/lib/utils";
import { Cardcontainer } from "./Cardcontainer";

type myTypes = {
  id: number;
  title: string;
  video: boolean;
  vote_average: number;
  poster_path: string;
};

export const Upcomingmovies = () => {
  const [movieData, setMovieData] = useState<myTypes[]>([]);
  const router = useRouter();

  const handleOneClick = (movieId: number) => {
    router.push(`/detail/${movieId}`);
  };

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axiosInstance.get(
          "movie/upcoming?language=en-US&page=1"
        );
        setMovieData(response.data.results);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div className="w-screen px-[80px] pt-[52px]">
      <div className="flex justify-between items-center">
        <h2 className="text-[24px] font-semibold pb-[32px]">Upcoming</h2>
        <Button
          className="text-[14px] font-medium text-[#18181B] bg-[#fff]"
          variant="link"
        >
          See more
          <ArrowRight />
        </Button>
      </div>

      <div className="flex flex-wrap justify-start gap-6">
        {movieData.slice(0, 10).map((value) => (
          <Cardcontainer
            key={value.id}
            title={value.title}
            id={value.id}
            image={posterUrl(value.poster_path)}
            rating={value.vote_average}
            className="W-[280px]"
          />
        ))}
      </div>
    </div>
  );
};
