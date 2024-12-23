import AnimeList from "@/components/AnimeList/AnimeList";
import TopAnime from "@/components/TopAnime/TopAnime";
import { getAnimeResponse } from "./lib/api-libs";

const page = async () => {
  const trandingAnime = await getAnimeResponse({resource: 'top/anime', query: 'limit=6'})
  const animeTopSeason = await getAnimeResponse({resource: 'seasons/now', query: 'limit=6'})
  const animeUpComing = await getAnimeResponse({resource: 'seasons/upcoming', query: 'limit=6'})

  return (
    <>
      <div className="p-3 pt-20 lg:pt-28 lg:p-8 lg:px-20">
        <TopAnime api={trandingAnime} />

        {/* {/* Tranding  */}
        <AnimeList title="Tranding" api={trandingAnime} link="tranding"/>

        {/* Tranding in Season */}
        <AnimeList title="Populer This Season" api={animeTopSeason} link="populer"/>

        {/* Upcoming next season */}
        <AnimeList title="Season Up Coming" api={animeUpComing} link="populer"/>
      </div>
    </>
  );
};

export default page;
