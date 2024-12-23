import Link from "next/link";

const page = () => {
  return (
    <div className="min-h-screen max-w-xl mx-auto flex justify-center items-center">
      <div className="flex flex-col items-center gap-2">
        <h2 className="font-semibold text-2xl text-red-500">404</h2>
        <h1 className="font-bold text-3xl lg:text-6xl">Page not found</h1>
        <p className="text-lg">Sorry, we couldn’t find the page you’re looking for.</p>
        <Link href="/" className="bg-red-500 rounded-lg p-2 px-3 text-primary font-semibold mt-5 border-2 border-transparent hover:border-red-500 hover:text-red-500 hover:bg-transparent transition-all ease-in-out">Back To Home</Link>
      </div>
    </div>
  );
};

export default page;
