const AboutBanner = () => {
  const heightForCard = {
    minHeight: window.innerWidth >= 768 ? "45rem" : "120rem",
  };
  const heightForImageCard = {
    minHeight: window.innerWidth >= 768 ? "45rem" : "105rem",
    backgroundImage: "url('/successbg.svg')",
    backgroundSize: "cover",

    // borderRadius: "10px"
  };

  return (
    <section
      // className="bg-[#2D89BF] py-16  px-10 xl:px-[100px]"
      className="relative bg-cover bg-center"
      style={heightForImageCard}
    >
      <div
      // className="relative h-80 bg-cover bg-center"
      // style={heightForImageCard}
      >
        {/* Overlay */}
        {/* <div className="absolute inset-0 bg-black opacity-50"></div> */}

        {/* Text Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-c.enter text-white px-4">
          {/* <h1 className="text-2xl font-bold mb-4">Let&apos;s Cultivate Success Together</h1> */}
          <h1 className="text-2xl font-bold mb-8 mt-8">About Us</h1>
          <p className="mb-4">
            Noble Negro Ventures Nigeria Limited is a private limited liability
            company incorporated on January 17, 2024 by the Country's Corporate
            Affairs Commission with registered Company number 7302748. It holds
            an officially registered trademark NONEVEN from the Federal Ministry
            of Industry, Trade and Investment.
          </p>
          <p className="mb-4">
            It has its corporate headquarters along Abak-Ukanafun Road in an
            area popularly known as Nkek Enen Ido in Nkek village, Ukanafun
            Local Government Area of Akwa Ibom State in Nigeria. The principal
            business activity of the company remains Dealings on Agro-allied
            activities and General contracts.
          </p>
          <h3 className="text-xl font-semibold underline mb-4">
            The registered legal mandates of the Company are:
          </h3>
          <ul className="list-disc list-inside text-left space-y-3">
            <li>
              To carry on the business as farm produce merchants and to engage
              in all or any of the activities of producing, supplying,
              preserving, processing, storing, distributing and/or marketing of
              farm produce and product.
            </li>
            <li>
              To carry on business as manufacturers and dealers in agro-allied,
              agro-allied equipment, and supplies, including but not limited to
              farm implements and machinery, fertilizers, agrochemicals and
              livestock feeds, to engage in the preservation and processing of
              farm and agricultural produce and products.
            </li>
            <li>
              To engage in the business of agricultural services, supplier of
              agricultural implements, tools, mechanical equipment, pest
              control, rodent control, pest control equipment, pesticides and
              allied chemicals, exporters and importers, common agents, land use
              programme as well as engaging in all other business as the company
              may find expedient to enable it realize its set objectives.
            </li>
            <li>
              To carry on the business of general contracts, general merchants,
              trading, marketing, sales and distribution of general goods, be
              they manufactured or not, commission agents, manufacturers'
              representatives, general suppliers, to buy, sell, manufacture and
              deal in all articles, substance, products, systems and appliances
              that will enable it realize its set objectives.
            </li>
            <li>
              To buy, sell, export, import, prepare for market and deal in all
              kinds of goods, (whether or not manufactured in whole or in part)
              and raw materials in any part of the world, and to carry on the
              business of general merchants and industrialists.
            </li>
            <li>
              To do all such other things as may be considered to be incidental
              or conducive to the attainment of the above objects or any of
              them.
            </li>
          </ul>
          <a href="https://akanido.noblenegroventures.com/" target="_blank">
            <button className="bg-white text-[#2D89BF] hover:bg-[#2D89BF] hover:text-white font-semibold py-2 px-4 rounded transition-all mt-8 mb-8">
              The Director/Chief Executive Officer (C.E.O.) is Mr. Akan Ido
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutBanner;
