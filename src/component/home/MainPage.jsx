import { FaShoppingCart } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";

export default function MainPage() {
  return (
    <section className="xl:px-[150px] p-3 mt-[50px] grid gap-[50px]">
      <img src="/root.svg" alt="image of root" className="w-full" />
      <div className="xl:w-2/4 w-full m-auto gap-4 flex flex-col items-center justify-center">
        <h2 className="xl:text-3xl text-2xl xl:text-justify text-center font-[600]">
          Building a Thriving Agricultural Ecosystem
        </h2>
        <p className="xl:text-2xl text-lg text-center">
          We are dedicated to supporting Nigerian farmers and businesses
          throughout the agricultural value chain. Our mission is to promote
          sustainable practices, ensure access to necessary resources, and
          contribute to food security in the nation.
        </p>
      </div>
      <div className="flex flex-col items-center gap-8">
        <div className="grid grid-cols-3 items-center gap-3">
          <img src="/root.svg" alt="image of root" className="w-" />
          <img src="/root.svg" alt="image of root" />
          <img src="/root.svg" alt="image of root" />
        </div>
        <button className="flex items-center bg-[#2D89BF] px-3 py-2 text-white gap-3">
          {" "}
          Learn More{" "}
        </button>
      </div>
      <div className="xl:w-2/4 w-full m-auto gap-4 flex flex-col items-center justify-center">
      <h2 className="xl:text-3xl text-2xl xl:text-justify text-center font-[600]">
      Unlock Clarity & Confidence in Your Real Estate Journey
        </h2>
        <p className="xl:text-2xl text-lg text-center">
          Schedule a personalized consultation with our real estate experts. Get
          expert guidance & navigate the market with ease, whether you&apos;re
          buying, selling, or investing.
        </p>
      </div>
      <div className="flex flex-col items-center gap-8">
        <div className="grid grid-cols-3 items-center gap-3">
          <img src="/writing.svg" alt="image of writing" className="w-" />
          <img src="/hand.svg" alt="image of  hand" />
          <img src="/meeting.svg" alt="image of meeting" />
        </div>
        <button className="flex  border-2 font-bold text-white bg-[#2D89BF] px-3 py-2  items-center gap-3">
          <IoMdCall /> Book a consultation call{" "}
        </button>
      </div>

{/* Image overlay */}
      <div className="relative h-80 bg-cover bg-center" style={{ backgroundImage: "url('/bgoverlay.svg')" }}>
      {/* Overlay */}
      {/* <div className="absolute inset-0 bg-black opacity-50"></div> */}
      
      {/* Text Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
        <h1 className="text-2xl font-bold mb-4">Efficient Import and Export Solutions</h1>
        <p className="mb-4">
          From customs clearance to logistics, we handle all aspects of global trade, allowing you to focus on growing your business.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">
          Contact Us Today
        </button>
      </div>
    </div>
      {/*  */}

      <div className="xl:w-2/4 w-full m-auto gap-4 flex flex-col items-center justify-center">
      <h2 className="xl:text-3xl text-2xl xl:text-justify text-center font-[600]">
          Comprehensive Solutions for Your Agricultural Needs{" "}
        </h2>
        <p className="xl:text-2xl text-lg text-center">
          From farm produce and equipment to expert services and global trade,
          Noble Negro Ventures offers a wide range of solutions to support your
          agricultural endeavors.
        </p>
      </div>
      <div className="flex flex-col items-center gap-8">
        <div className="grid grid-cols-3 items-center gap-3">
          <img src="/prod1.svg" alt="image of writing" className="w-" />
          <img src="/prod2.svg" alt="image of  hand" />
          <img src="/prod3.svg" alt="image of meeting" />
          <img src="/prod1.svg" alt="image of meeting" />
          <img src="/prod1.svg" alt="image of meeting" />
          <img src="/prod1.svg" alt="image of meeting" />
        </div>
        <button className="flex  border-2 font-bold text-white bg-[#2D89BF] px-3 py-2  items-center gap-3">
          <FaShoppingCart /> Buy Products{" "}
        </button>
      </div>
    </section>
  );
}
