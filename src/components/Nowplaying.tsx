"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import axios from "axios";
import { useEffect, useState } from "react";
import { Nowplayingdiscrition } from "@/components";
import { backdropUrl } from "@/lib/utils";
type MovieTypes = {
  title: string;
  backdrop_path: string;
  overview: string;
  vote_average: number;
};

export const Nowplaying = () => {
  const [nowPlaying, setNowPlaying] = useState<MovieTypes[]>([]);

  useEffect(() => {
    const fetchNowPlaying = async () => {
      const { data } = await axios.get(
        "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1&api_key=d67d8bebd0f4ff345f6505c99e9d0289"
      );
      setNowPlaying(data.results);
    };
    fetchNowPlaying();
  }, []);
  const firstThreeMovies = nowPlaying?.slice(0, 3);

  return (
    <Carousel className="flex h-[800px] bg-amber-900 w-full relative">
      <CarouselContent className="w-screen overflow-visible h-full">
        {firstThreeMovies.map((movie, index) => (
          <CarouselItem
            key={index}
            className="relative w-full h-full z-20 bg-red-500"
          >
            <img
              src={backdropUrl(movie.backdrop_path)}
              alt=""
              className="object-cover w-full h-full"
            />
            <Nowplayingdiscrition
              title={movie.title}
              content={movie.overview}
              rating={movie.vote_average}
            />
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious className="absolute flex left-20 " />
      <CarouselNext className="flex absolute rght-20 " />
    </Carousel>
  );
};
