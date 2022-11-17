import Image from 'next/image'

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
      <h1>I am the header</h1>
    </header>
  );
}

export default Header;
