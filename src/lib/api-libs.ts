type Props = {
  resource?: string;
  query?: string;
  objectProperty?: string;
  data?: any;
  gap?: number;
};

export async function getAnimeResponse({ resource, query }: Props) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/${resource}?${query}`);
  const anime = await response.json();

  return anime;
}

export const getNestedAnimeResponse = async ({ resource, objectProperty }: Props) => {
  const response = await getAnimeResponse({ resource });

  return response.data?.flatMap((item: any) => item[objectProperty!]);
};

export const reproduce = ({ data, gap }: Props) => {
  const first = ~~(Math.random() * (data?.length - gap!) + 1);
  const last = first + gap!;

  const response = {
    data: data?.slice(first, last),
  };

  return response;
};
