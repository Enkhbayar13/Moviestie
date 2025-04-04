"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Cardcontainer, Header1 } from "@/components";
import { axiosInstance, backdropUrl, posterUrl } from "@/lib/utils";
import { PlayIcon, Star } from "lucide-react";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

type castTypes = {
  name: string;
};

type crewTypes = {
  name: string;
  job: string;
  department: string;
};

type creditTypes = {
  cast: castTypes[];
  crew: crewTypes[];
  id: string;
};
type genreType = {
  id: string;
  name: string;
};

type myTypes = {
  id: number;
  title: string;
  video: boolean;
  vote_average: number;
  poster_path: string;
  original_title: string;
  release_date: string;
  runtime: number;
  overview: string;
  genres: genreType[];
  vote_count: number;
  backdrop_path: string;
};

type TrailerTypes = {
  key: string;
  site: string;
  type: string;
};
export default function Detail() {
  const { id } = useParams();
  console.log(id);
  const [movieData, setMovieData] = useState<myTypes[]>([]);
  const [movieDetail, setMovieDetail] = useState<myTypes>();
  const [movieCredit, setMovieCredit] = useState<creditTypes>({
    id: "1",
    cast: [],
    crew: [],
  });
  const [Trailer, setTrailer] = useState<TrailerTypes[]>([]);

  const fetchMovies = async () => {
    try {
      const response = await axiosInstance.get(`movie/${id}?language=en-US`);
      setMovieDetail(response.data);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };
  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const { data } = await axiosInstance.get(
          `movie/${id}/videos?language=en-US`
        );
        setTrailer(data.results);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    fetchMovieDetails();
  }, []);
  const fetchSimilarMovies = async () => {
    try {
      const response = await axiosInstance.get(
        `movie/${id}/similar?language=en-US&page=1`
      );
      setMovieData(response.data.results);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  const fetchCreditMovie = async () => {
    try {
      const response = await axiosInstance.get(
        `/movie/${id}/credits?language=en-US`
      );
      setMovieCredit(response.data);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  useEffect(() => {
    fetchMovies();
    fetchSimilarMovies();
    fetchCreditMovie();
  }, []);
  const directors = movieCredit.crew.filter((el) => el.job === "Director");
  const writers = movieCredit.crew.filter((el) => el.department === "Writing");
  console.log(Trailer, "TRAILER");

  return (
    <div className="  flex flex-col relative gap-4 items-center  h-fit py-[52px] px-20 w-screen ">
      <div className="flex justify-between w-[1080px]">
        <div className="flex flex-col">
          <div className="flex w-[211px]">
            <h1 className=" text-[#09090B] text-[36px] font-bold not-italic font-[inter]">
              {movieDetail?.original_title}
            </h1>
          </div>
          <div className="flex w-[211px]">
            <p className="text-[18px] font-normal text-[#09090B]font-[inter]">
              {movieDetail?.release_date} . {movieDetail?.runtime}
            </p>
          </div>
        </div>

        <div className="flex  gap-[4px] w-[83px] h-[83px] flex-col items-start">
          <div className="flex w-[83px] h-">
            <h1 className="text-[12px] font-medium text-[#09090B]">Rating</h1>
          </div>
          <div className="flex justify-between">
            <div className="flex h-[28px] w-[28px]">
              <Star fill="yellow" color="yellow" />
            </div>
            <div className="flex flex-col">
              <p className="text-[#09090B] text-[14px] font-medium">
                {movieDetail?.vote_average}
                <span className="text-[#71717A] text-[12px] font-normal">
                  /10
                </span>
              </p>
              <div className="flex ">
                <p className="text-[12px]">{movieDetail?.vote_count}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-[1080] justify-between">
        <div className="flex w-[290px] h-[428px]">
          <img src={posterUrl(movieDetail?.poster_path)} alt="" />
        </div>
        {/* {
        <div className="flex w-[760px] h-[428px]">
          <img src={backdropUrl(movieDetail?.backdrop_path)} alt="" />
        </div>
      </div> */}

        <div className="relative">
          <img
            src={posterUrl(movieDetail?.backdrop_path ?? "/fallback-image.jpg")}
            alt="detailTrailer"
            width={760}
            height={428}
            className="!static rounded-[8px] !h-[428px]"
          />

          <div className="flex gap-3 absolute bottom-[24px] left-[24px] items-center ">
            <Dialog>
              <DialogTrigger className=" bg-white px-2 py-2 rounded-full">
                <PlayIcon />
              </DialogTrigger>
              <DialogContent className="!w-[993px] !max-w-6xl h-auto !p-0 !pt-10">
                <DialogHeader>
                  <DialogTitle></DialogTitle>
                  <DialogDescription>
                    <iframe
                      width="100%"
                      height="561"
                      src={`https://www.youtube.com/embed/${Trailer[0]?.key}`}
                      title="YouTube video player"
                      style={{ borderRadius: 8 }}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    ></iframe>
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>

            <p className="text-[16px] text-white">Play trailer</p>
            <p className="text-[14px] text-white">2:35</p>
          </div>
        </div>
      </div>

      <div className="flex w-[1080px] flex-col items-start gap-[16px]">
        <div className="flex items-start gap-[12px]">
          {movieDetail?.genres.map((genre) => {
            return (
              <div className="flex border-[1px] h-[36px] p-[8px] rounded-full items-center gap-[8px] justify-center">
                <p className="text-[#09090B] font-semibold text-[12px]">
                  {genre.name}
                </p>
              </div>
            );
          })}
          {/* <div className="flex border-[1px] h-[36px] p-[8px] rounded-full items-center gap-[8px] justify-center">
            <p className="text-[#09090B] font-semibold text-[12px]">
              Fairy Tale
            </p>
          </div>
          <div className="flex border-[1px] h-[36px] p-[8px] rounded-full items-center gap-[8px] justify-center">
            <p className="text-[#09090B] font-semibold text-[12px]">
              Pop Musical
            </p>
          </div>
          <div className="flex border-[1px] h-[36px] p-[8px] rounded-full items-center gap-[8px] justify-center">
            <p className="text-[#09090B] font-semibold text-[12px]">Fantasy</p>
          </div>
          <div className="flex border-[1px] h-[36px] p-[8px] rounded-full items-center gap-[8px] justify-center">
            <p className="text-[#09090B] font-semibold text-[12px]">Musical</p>
          </div>
          <div className="flex border-[1px] h-[36px] p-[8px] rounded-full items-center gap-[8px] justify-center">
            <p className="text-[#09090B] font-semibold text-[12px]">Romance</p>
          </div> */}
        </div>
        <div>
          <p className="text-[16px] font-normal not-italic text-[#09090B]">
            {movieDetail?.overview}
          </p>
        </div>

        <div className="flex items-start gap-[53px] ">
          <p className="font-bold text-[16px]  text-[#09090B]">Director</p>
          {directors.map((el, index) => (
            <p key={index} className="font-normal text-[16px] text-[#09090B]">
              {el?.name}
            </p>
          ))}
        </div>

        <div className="border-t border-[#E4E4E7] w-full pb-5"></div>

        <div className="flex items-start gap-[53px] ">
          <p className="font-bold text-[16px]  text-[#09090B]">Writers</p>
          {writers.map((el, index) => (
            <p key={index} className="font-normal text-[16px] text-[#09090B]">
              {el?.name}
            </p>
          ))}
        </div>

        {/* <div className="flex items-start gap-[53px] ">
          <p className="font-bold text-[16px]  text-[#09090B]">Writers</p>

          <p className="font-normal text-[16px] text-[#09090B]">
            Winnie Holzman · Dana Fox · Gregory Maguire
          </p>
        </div> */}
        <div className="border-t border-[#E4E4E7] w-full pb-5"></div>

        <div className="flex items-start justify-center gap-[53px] ">
          <p className="font-bold text-[16px]  text-[#09090B]">Cast</p>
          {movieCredit?.cast.slice(0, 5).map((value, index) => {
            return (
              <p className="font-normal text-[16px] text-[#09090B]">
                {value?.name}
              </p>
            );
          })}
        </div>

        {/* <div className="flex items-start gap-[53px] ">
          <p className="font-bold text-[16px]  text-[#09090B]">Stars</p>

          <p className="font-normal text-[16px] text-[#09090B]">
            Cynthia Erivo · Ariana Grande · Jeff Goldblum
          </p>
        </div> */}
      </div>
      <div className="flex w-[1080px]">
        <Header1 TypeProps="More like this" />
      </div>
      <div className="flex justify-between w-[1080px] gap-8">
        {movieData?.slice(0, 5).map((value, index) => (
          <Cardcontainer
            key={index}
            id={value.id}
            image={posterUrl(value.poster_path)}
            rating={value.vote_average}
            title={value.title}
          />
        ))}
      </div>
    </div>
  );
}
