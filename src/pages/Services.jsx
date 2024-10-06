import { FaShoppingCart } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";
import InspirationBanner from "../component/InspirationBanner";

export default function Services() {
  return (
    <section >
    <section className="xl:px-[100px]  mt-[50px] grid gap-[50px]">
      <div className="xl:w-3/4 w-full m-auto gap-4 flex flex-col items-center justify-center">
        <h2 className="xl:text-3xl text-2xl text-center font-[600]">
          Comprehensive Solutions for Your Agricultural Needs{" "}
        </h2>
        <p className="xl:text-2xl text-lg text-center">
          From farm produce and equipment to expert services and global trade,
          Noble Negro Ventures offers a wide range of solutions to support your
          agricultural endeavors.
        </p>
      </div>
      <div className="flex flex-col w-full items-center gap-8">
        <div className="grid  grid-cols-3 items-center gap-3">
          <img src="/prod1.svg" alt="image of writing"  />
          <img src="/prod2.svg" alt="image of  hand"  />
          <img src="/prod3.svg" alt="image of meeting" />
          <img src="/prod1.svg" alt="image of meeting" />
          <img src="/prod1.svg" alt="image of meeting" />
          <img src="/prod1.svg" alt="image of meeting" />
        </div>
        <button className="flex  border-2 font-bold text-white bg-[#2D89BF] px-3 py-2  items-center gap-3">
          <FaShoppingCart /> Buy Products{" "}
        </button>
      </div>

      <div className="xl:w-3/4 w-full m-auto  gap-4 flex mt-10 flex-col items-center justify-center">
        <h2 className="xl:text-3xl text-2xl text-center font-[600]">
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
    </section>
      <InspirationBanner />
    </section>
  );
}
