import Link from "next/link";
import React from "react";
import InputSearch from "./InputSearch";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav className="fixed top-0 z-10 shadow bg-primary p-2 w-screen lg:p-5 lg:px-60">
      <div className=" flex justify-between items-center">
        <Link href="/" className="font-bold text-2xl">
          Otaku
        </Link>

        <div className="shadow p-1 flex rounded-lg w-52">
          <InputSearch />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
