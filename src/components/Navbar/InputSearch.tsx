"use client";

import { MagnifyingGlass } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import { useRef } from "react";

type Props = {};

const InputSearch = (props: Props) => {
  const searchRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const handleSearch = (event: React.MouseEvent<HTMLButtonElement> & React.KeyboardEvent<HTMLInputElement>) => {
    if (event.type === "click" || event.key === "Enter") {
      event.preventDefault();
      const keyword = searchRef.current?.value;
      if (keyword) {
        router.push(`/search/${keyword}`);
      }
    }
  };

  return (
    <>
      <input type="text" placeholder="cari..." className="outline-none px-2 w-full bg-transparent" ref={searchRef} onKeyDown={handleSearch} />
      <button className="h-full px-3" onClick={handleSearch}>
        <MagnifyingGlass size={32} />
      </button>
    </>
  );
};

export default InputSearch;
