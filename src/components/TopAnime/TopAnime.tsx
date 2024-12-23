import Image from "next/image";
import Link from "next/link";

interface Anime {
  mal_id: number;
  title: string;
  images: string;
}

type Props = {
  api: any;
};

const TopAnime = ({ api }: Props) => {
  const anime = api.data;

  const anime0 = anime[0].mal_id
  const link0: string = anime0.toString()

  const anime1 = anime[1].mal_id
  const link1: string = anime1.toString()

  const anime2 = anime[2].mal_id
  const link2: string = anime2.toString()

  return (
    <div className="flex flex-col justify-center lg:grid lg:grid-cols-5 lg:grid-rows-4 gap-4">
      <div className="col-span-3 row-span-4 bg-white relative rounded-xl h-80 lg:h-[40rem] w-full">
        <Image src={anime[0].images.webp.large_image_url} alt="" className="w-full rounded-xl h-full brightness-50 object-cover bg-center absolute" width={600} height={800} />
        <Link href={`anime/${link0}`} className="absolute bottom-2 lg:bottom-12 px-2 lg:px-8">
          <h1 className="text-white font-semibold text-3xl lg:text-5xl capitalize hover:text-red-100 transition ease-in-out">{anime[0].title}</h1>
          <div className="flex gap-3 mt-1 lg:mt-5">
            <h1 className="border-2 text-center text-sm lg:text-base border-white w-fit h-fit p-1 px-2 lg:px-3 rounded-md font-semibold text-white">{anime[0].type}</h1>
            <h1 className="border-2 text-center text-sm lg:text-base border-white w-fit h-fit p-1 px-1 lg:px-3 rounded-md font-semibold text-white">{anime[0].status}</h1>
            <h1 className="border-2 text-center text-sm lg:text-base border-white w-fit h-fit p-1 px-1 lg:px-3 rounded-md font-semibold text-white">{anime[0].duration}</h1>
          </div>
        </Link>
      </div>
      <div className="col-span-2 row-span-2 col-start-4 bg-white rounded-xl h-[19.5rem] w-full relative">
        <Image src={anime[1].images.webp.large_image_url} alt="" className="w-full brightness-50 h-full absolute object-cover bg-center rounded-xl" width={600} height={400} />
        <Link href={`anime/${ link1 }`} className="absolute bottom-2 lg:bottom-10 px-2 lg:px-8">
          <h1 className="text-white font-semibold text-3xl lg:text-4xl capitalize hover:text-red-100 transition ease-in-out">{anime[1].title}</h1>
          <div className="flex gap-3 mt-1 lg:mt-5">
            <h1 className="border-2 text-center text-sm lg:text-base border-white w-fit p-1 lg:px-2 rounded-md font-semibold text-white ">{anime[1].type}</h1>
            <h1 className="border-2 text-center text-sm lg:text-base border-white w-fit p-1 lg:px-2 rounded-md font-semibold text-white">{anime[1].status}</h1>
            <h1 className="border-2 text-center text-sm lg:text-base border-white w-fit p-1 lg:px-2 rounded-md font-semibold text-white">{anime[1].duration}</h1>
          </div>
        </Link>
      </div>
      <div className="col-span-2 row-span-2 col-start-4 row-start-3 bg-white rounded-xl h-[19.5rem] w-full relative">
        <Image src={anime[2].images.webp.large_image_url} alt="" className="w-full h-full brightness-50 object-cover bg-center rounded-xl" width={600} height={400} />
        <Link href={`anime/${ link2 }`} className="absolute bottom-2 lg:bottom-10 px-2 lg:px-8">
          <h1 className="text-white font-semibold text-4xl capitalize hover:text-red-100 transition ease-in-out">{anime[2].title}</h1>
          <div className="flex gap-3 mt-1 lg:mt-5">
            <h1 className="border-2 text-center text-sm lg:text-base border-white w-fit p-1 px-2 rounded-md font-semibold text-white">{anime[2].type}</h1>
            <h1 className="border-2 text-center text-sm lg:text-base border-white w-fit p-1 px-2 rounded-md font-semibold text-white">{anime[2].status}</h1>
            <h1 className="border-2 text-center text-sm lg:text-base border-white w-fit p-1 px-2 rounded-md font-semibold text-white">{anime[2].duration}</h1>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default TopAnime;
