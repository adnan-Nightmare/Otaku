import Image from "next/image";
import Link from "next/link";

type Props = {
  title: string;
  image: string;
  link: number;
};

const Card = ({ title, image, link }: Props) => {
  const linkOri: string = link.toString();
  return (
    <Link href={`/anime/${linkOri}`} className="w-40 lg:w-48 h-fit hover:text-red-500 transition delay-75 ease-in-out">
      <Image src={image} className="w-full h-60 lg:h-72 object-cover rounded-lg" alt="" width={400} height={600} />
      <h1 className="">{title}</h1>
    </Link>
  );
};

export default Card;
