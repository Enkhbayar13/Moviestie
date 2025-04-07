"use client";
import { Cardcontainer } from "@/components";
import { axiosInstance } from "@/lib/utils";
import { useEffect, useState } from "react";
type GenreTypes = {
  key: string;
  site: string;
  type: string;
};
const Home = () => {
  const [genre, setGenre] = useState<GenreTypes[]>([]);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const { data } = await axiosInstance.get(
          `/movie?language=en&with_genres=28&page=1
`
        );
        setGenre(data.results);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    fetchMovieDetails();
  }, []);
  return (
    <div>
      <Cardcontainer image="poster_path"></Cardcontainer>
    </div>
  );
};

export default Home;
