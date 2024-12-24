import { getAnimeResponse } from "@/lib/api-libs";
import VideoPlayer from "@/components/Utilities/VideoPlayer";
import Image from "next/image";

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const param = (await params).id;

  const anime = await getAnimeResponse({ resource: `anime/${param}` });
  const characterAnime = await getAnimeResponse({ resource: `anime/${param}/characters` });

  //   const actorCharacter = characterAnime.data.map((c: any) => c.voice_actors.filter((actor: any) => actor.language === "Japanese"))
  //   console.log(actorCharacter);

  return (
    <div className="p-3 pt-20 lg:pt-28 lg:p-8 lg:px-20">
      <div className="flex flex-col items-center gap-5 lg:gap-0 lg:flex-row justify-between px-2 lg:px-20">
        <Image className="object-cover w-52 lg:w-72" src={anime.data.images.webp.large_image_url} alt="" width={400} height={600} />

        <VideoPlayer youtubeID={anime.data.trailer.youtube_id} />
      </div>
      <div className="bg-white m-2 lg:m-5 lg:mx-20 p-2 px-5 rounded-lg">
        <h3 className="text-2xl lg:text-3xl font-semibold capitalize">{anime.data.title}</h3>
        <div className="mt-2">
          <p className="text-gray-600 text-xs lg:text-sm">
            Type: {anime.data.type} | Status: {anime.data.status} | Duration: {anime.data.duration}
          </p>
        </div>
        <p className="mt-10 text-sm lg:text-base text-justify">
          {anime.data.synopsis}

          <br />
        </p>
      </div>

      <div className="flex flex-col-reverse lg:flex-row justify-between m-2 lg:m-5 lg:mx-20">
        <div>
          <h2 className="font-bold text-gray-500 mb-3">Character</h2>
          <div className="flex flex-col lg:grid grid-cols-3 gap-5">
            {characterAnime.data.slice(0, 6).map((c: any, i: number) => (
              <div className="bg-white flex justify-between rounded-lg h-fit w-80" key={i}>
                <div className="flex">
                  <Image src={c.character.images.webp.image_url} className="object-cover w-14 h-16 rounded-l-lg" alt="" width={90} height={30} />
                  <div className="text-sm font-semibold pl-2 text-gray-500 relative">
                    <h3 className="absolute top-0 ">{c.character.name}</h3>
                    <h3 className="absolute bottom-1 text-xs">{c.role}</h3>
                  </div>
                </div>
                {c.voice_actors
                  .filter((a: any) => a.language === "Japanese")
                  .slice(0, 1)
                  .map((ac: any, i: number) => (
                    <div className="flex flex-row-reverse" key={i}>
                      <Image src={ac.person.images.jpg.image_url} className="w-14 h-16 object-cover rounded-r-lg" alt="" width={80} height={80} />
                      <div className="text-sm font-semibold pr-1 text-gray-500 relative">
                        <h3 className="absolute top-0 right-2">{ac.person.name}</h3>
                        <h3 className="text-end absolute bottom-1 right-2 text-xs">{ac.language}</h3>
                      </div>
                    </div>
                  ))}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-3 w-full overflow-x-auto lg:w-44 mt-5 rounded-sm mb-5 lg:mb-0 flex flex-row lg:flex-col gap-5">
          <div>
            <h3 className="text-base font-semibold text-gray-700">Format</h3>
            <p className="text-sm font-semibold text-gray-500">{anime.data.type}</p>
          </div>
          <div>
            <h3 className="text-base font-semibold text-gray-700">Episodes</h3>
            <p className="text-sm font-semibold text-gray-500">{anime.data.episodes}</p>
          </div>
          <div>
            <h3 className="text-base font-semibold text-gray-700">Episodes Duration</h3>
            <p className="text-sm font-semibold text-gray-500">{anime.data.duration}</p>
          </div>
          <div>
            <h3 className="text-base font-semibold text-gray-700">Status</h3>
            <p className="text-sm font-semibold text-gray-500">{anime.data.status}</p>
          </div>
          <div>
            <h3 className="text-base font-semibold text-gray-700">season</h3>
            <p className="text-sm font-semibold text-gray-500">{anime.data.season}</p>
          </div>
          <div>
            <h3 className="text-base font-semibold text-gray-700">popularity</h3>
            <p className="text-sm font-semibold text-gray-500">{anime.data.popularity}</p>
          </div>
          <div>
            <h3 className="text-base font-semibold text-gray-700">favorites</h3>
            <p className="text-sm font-semibold text-gray-500">{anime.data.favorites}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
