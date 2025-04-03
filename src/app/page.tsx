import {
  Navigation,
  Nowplaying,
  Paginationshd,
  Upcomingmovies,
  Popular1,
  Toprated1,
  Footercont,
} from "@/components";

export default function Home() {
  return (
    <div className=" flex flex-col relative gap-4 items-center  h-fit py-[52px] px-20 w-screen ">
      <Nowplaying></Nowplaying>
      <Upcomingmovies></Upcomingmovies>
      <Popular1></Popular1>
      <Toprated1></Toprated1>

      <Paginationshd></Paginationshd>
    </div>
  );
}
