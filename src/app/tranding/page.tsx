"use client";
import AnimeList from "@/components/AnimeList/AnimeList";
import HeaderMenu from "@/components/Utilities/HeaderMenu";
import Pagination from "@/components/Utilities/Pagination";
import { useEffect, useState } from "react";
import { getAnimeResponse } from "../../lib/api-libs";

const page = () => {
  const [page, setPage] = useState<number>(1);
  const [trandingAnime, setTrandingAnime] = useState<[]>([]);

  const fetchData = async () => {
    const trandingAnime = await getAnimeResponse({ resource: "top/anime", query: `page=${page}` });
    setTrandingAnime(trandingAnime);
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  return (
    <div className="p-3 pt-20 lg:pt-28 lg:p-8 lg:px-20">
      <HeaderMenu title={`Anime Tranding - ${page}`} />
      <AnimeList api={trandingAnime} title={undefined} link={undefined} />
      <Pagination page={page} lastPage={trandingAnime} setPage={setPage} />
    </div>
  );
};

export default page;
