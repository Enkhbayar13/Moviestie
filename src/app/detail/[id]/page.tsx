"use client";

import { Cardcontainer, Header1 } from "@/components";
import { axiosInstance, posterUrl } from "@/lib/utils";
import { Star } from "lucide-react";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
type myTypes = {
  id: number;
  title: string;
  video: boolean;
  vote_average: number;
  poster_path: string;
  original_title: string;
  release_date: string;
  runtime: number;
};

export default function Detail() {
  const { id } = useParams();
  console.log(id);
  const [movieData, setMovieData] = useState<myTypes[]>([]);
  const [movieDetail, setMovieDetail] = useState<myTypes>();
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axiosInstance.get(
          "movie/278/similar?language=en-US&page=1"
        );
        setMovieData(response.data.results);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, []);
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axiosInstance.get(`movie/${id}?language=en-US`);
        setMovieDetail(response.data);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, []);
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
                6.7
                <span className="text-[#71717A] text-[12px] font-normal">
                  /10
                </span>
              </p>
              <div className="flex ">
                <p className="text-[12px]">{}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-[1080] justify-between">
        <div className="flex w-[290px] h-[428px]">
          <img
            src="https://s3-alpha-sig.figma.com/img/f5e4/c1eb/84f6a4e2c66a0969068dc7b7d6463302?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=t42PN2Ep4rZhCYcL-nbIb69D4L0ZQ7cGbOsGDq-I0xQSOWVlBNbkXOo3m8qQ6WHkIUwOx6ADGkctqx2bW7OCKrIFoMXS3ZdTZkeXveBLi3Y4FoPs2hb1TOfKXnljbLkFQ3~NLCFRzngLjlA0Cj087fup8~zAycOTjQFBt6rf1TWfAhtL526RoQxuJl9Kn4KYtt1n-D0GsFqk37oBHXQVJ3zIAaEBn99WDbshF-WiNYeRNUmHK~zZbDyrTctUzofm~9HwnSUsLYwqnlTnpy00znrXrc-hiAXN-sTUk4pheZwgHmSpDLptfHB8Px0Q7a~WF--HN4CvP3CBsY6FGSUFgA__"
            alt=""
          />
        </div>
        <div className="flex w-[760px] h-[428px]">
          <img
            src="https://s3-alpha-sig.figma.com/img/4160/aecb/034291669d5251d1faae7fc5d45790ba?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=j-5kGY0vg9IxanMXKFp9Jvy72zyIJGVv89Lc6w5--6KBnf4FN8Pfpms~Hv56HoXlSGxXUuD6bj9voZi2H006hHl2eNfdiQ9PoEuUWEdo6woTB12rBwEMqBwObN9X~wVI~aCi4Mhdkf6isv3q3vbp5kuL36LaSuoOYuHCJH6y6HfU31yH-U5SshNl91AIlhjLc-OfbkOr76RmZEE4QNeC2KBicuyMsMIJx~s1C9pPivWMthm6wOOMcN-A-OP4DCSDCcxjfvjguQ6~8otjr4gjCgVpR7kbgqTbaSJrPw55tnD7RlCGPmrAh35SXozsDA4ZJ-UgwgEQT6cLVL7Ap0oSmQ__"
            alt=""
          />
        </div>
      </div>

      <div className="flex w-[1080px] flex-col items-start gap-[16px]">
        <div className="flex items-start gap-[12px]">
          <div className="flex border-[1px] h-[36px] p-[8px] rounded-full items-center gap-[8px] justify-center">
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
          </div>
        </div>
        <div>
          <p className="text-[16px] font-normal not-italic text-[#09090B]">
            Elphaba, a misunderstood young woman because of her green skin, and
            Glinda, a popular girl, become friends at Shiz University in the
            Land of Oz. After an encounter with the Wonderful Wizard of Oz,
            their friendship reaches a crossroads.{" "}
          </p>
        </div>
        <div className="flex items-start gap-[53px] ">
          <p className="font-bold text-[16px]  text-[#09090B]">Director</p>

          <p className="font-normal text-[16px] text-[#09090B]">Jon M Chu</p>
        </div>
        <div className="border-t border-[#E4E4E7] w-full pb-5"></div>
        <div className="flex items-start gap-[53px] ">
          <p className="font-bold text-[16px]  text-[#09090B]">Writers</p>

          <p className="font-normal text-[16px] text-[#09090B]">
            Winnie Holzman · Dana Fox · Gregory Maguire
          </p>
        </div>
        <div className="border-t border-[#E4E4E7] w-full pb-5"></div>
        <div className="flex items-start gap-[53px] ">
          <p className="font-bold text-[16px]  text-[#09090B]">Stars</p>

          <p className="font-normal text-[16px] text-[#09090B]">
            Cynthia Erivo · Ariana Grande · Jeff Goldblum
          </p>
        </div>
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
