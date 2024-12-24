import Link from "next/link";
import Card from "./Card";

type Props = {
  title: string | undefined;
  api: any;
  link?: string | undefined
};

interface Anime{
  mal_id: number;
  title: string;
  images: {
    webp: {
      image_url: string;
    };
  };
}

const AnimeList = ({ title = undefined, api, link =  undefined }: Props) => {
  return (
    <div className='mt-16'>
      <div className="flex justify-between ">
        <h1 className="font-semibold text-xl mb-4 text-gray-600">{title}</h1>
        {link ? <Link href={`/${link}`} className="font-medium text-gray-600 hover:text-black transition duration-300 ease-in-out">View All</Link> : null}
        
      </div>

      <div className="grid lg:grid-cols-6 grid-cols-2 md:grid-cols-4 gap-8 sm:gap-9 lg:gap-16">
        {api.data?.map((anime: Anime, i:number) => (
          <Card title={anime.title} image={anime.images.webp.image_url} key={i} link={anime.mal_id}/>
        ))}
      </div>
    </div>
  );
};

export default AnimeList;
