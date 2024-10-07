import { IoMdCall } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";

const Hero = () => {
  return (
    <header className="xl:px-[150px] p-3">
      <div className="xl:w-3/4 w-full m-auto text-center flex flex-col items-center gap-4">
        <h2 className="xl:text-5xl text-3xl">
          Cultivating a Sustainable Future for Nigerian Agriculture
        </h2>
        <p className="xl:text-3xl text-xl">
          Noble Negro Ventures: Your source for all things agricultural and real
          estate, from farm produce to equipment and beyond.
        </p>
        <div className="flex gap-4 items-center">
          <button className="flex items-center bg-[#2D89BF] px-3 py-2 text-white gap-3">
            <FaShoppingCart /> Buy Products{" "}
          </button>
          <button className="flex  border-2 font-bold border-[#2D89BF] px-3 py-2  items-center gap-3" href="mailto:noblenegroventures@gmail.com">
            <IoMdCall /> Book a consultation call{" "}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Hero;
