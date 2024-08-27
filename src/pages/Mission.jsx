import { FaShoppingCart } from "react-icons/fa";
import InspirationBanner from "../component/InspirationBanner";
// import { IoMdCall } from "react-icons/io";

export default function Mission() {
  return (
    <section className=" mt-[50px] grid gap-[50px]">
      <div className="xl:px-[150px] p-3">


      <h2 className="xl:text-3xl text-2xl font-[600] xl:w-2/4 w-full text-center m-auto">
        Cultivating Change: Building a Sustainable and Prosperous Future for
        Nigerian Agriculture
      </h2>
      <img src="/root.svg" alt="image of root" className="w-full my-10" />
      <p className="xl:text-2xl my-10 text-lg text-center">
          We&apos;re a dedicated partner to Nigerian farmers and businesses
          throughout the agricultural value chain. Our mission is twofold: to
          empower our agricultural sector through sustainable practices and
          ensure access to critical resources. This commitment contributes
          directly to national food security, a cornerstone of a thriving
          Nigeria. Looking towards the future, we envision a vibrant Nigerian
          agricultural landscape that empowers local communities, drives
          economic growth, and fosters environmental responsibility. Innovation,
          collaboration, and a deep respect for the land guide our every step on
          this journey.
        </p>
     
   

      <div className="xl:w-2/4 w-full m-auto mt-10 gap-4 flex flex-col items-center justify-center">
        <h2 className="xl:text-3xl text-2xl  text-center font-[600]">
          Comprehensive Solutions for Your Agricultural Needs{" "}
        </h2>
        <p className="xl:text-2xl text-lg text-center">
          From farm produce and equipment to expert services and global trade,
          Noble Negro Ventures offers a wide range of solutions to support your
          agricultural endeavors.
        </p>
      </div>
      <div className="flex flex-col mt-10 w-full items-center gap-8">
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
      </div>

      <InspirationBanner />

    </section>
  );
}
