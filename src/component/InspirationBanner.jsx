const InspirationBanner = () => {
  const heightForCard = {
    minHeight: window.innerWidth >= 768 ? '20rem' : '40rem', 
  };
  const heightForImageCard = {
    minHeight: window.innerWidth >= 768 ? '20rem' : '40rem', 
    backgroundImage: "url('/successbg.svg')" , 
  };
  return (
    <section
      className="bg-[#2D89BF] py-16  px-10 xl:px-[100px]"
      style={heightForCard}
    >
      <div
        className="relative h-80 bg-cover bg-center"
        style={heightForImageCard}
        
      >
        {/* Overlay */}
        {/* <div className="absolute inset-0 bg-black opacity-50"></div> */}

        {/* Text Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
          {/* <h1 className="text-2xl font-bold mb-4">Let&apos;s Cultivate Success Together</h1> */}
          <h1 className="text-2xl font-bold mb-4">About Us</h1>
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
          <button
            className="bg-[#2D89BF]  hover:bg-[#2D89BF]/10  text-white font-semibold py-2 px-4 rounded"
            href="mailto:noblenegroventures@gmail.com"
          >
            Send a Message
          </button>
        </div>
      </div>
    </section>
  );
};

export default InspirationBanner;
