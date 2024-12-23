type Props = {
  resource: string;
  query?: string;
};

export async function getAnimeResponse({ resource, query }: Props) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/${resource}?${query}`);
  const anime = await response.json();

  return anime;
}
