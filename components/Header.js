import Image from 'next/image';
import { MagnifyingGlassCircleIcon } from "@heroicons/react/24/solid";

const srcImage = "https://links.papareact.com/qd3";

function Header() {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 white shadow-md p-5 md:px-10">
      <div className="relative flex items-center h-10 cursor-pointer my-auto">
        <Image
          loader={() => srcImage}
          src={srcImage}
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>

      <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-lg">
        <input
          className="flex-grow pl-5 bg-transparent outline-none"
          type="text"
          placeholder="Start your search"
        />
        <MagnifyingGlassCircleIcon
          className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer"
        />
      </div>

      <h1>I am the header</h1>
    </header>
  );
}

export default Header;
