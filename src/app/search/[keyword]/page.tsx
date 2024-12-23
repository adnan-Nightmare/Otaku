import { getAnimeResponse } from "@/app/lib/api-libs";
import AnimeList from "@/components/AnimeList/AnimeList";

const page = async ({ params }: { params: Promise<{ keyword: string }> }) => {
  const keyword = (await params).keyword;
  const decodedKeyword = decodeURI(keyword);

  const animeSearch = await getAnimeResponse({ resource: "anime", query: `q=${decodedKeyword}` });

  return (
    <>
      <div className="p-3 lg:p-8 lg:px-20">
        <AnimeList title={`Search for ${decodedKeyword}`} api={animeSearch} link={undefined} />
      </div>
    </>
  );
};

export default page;
