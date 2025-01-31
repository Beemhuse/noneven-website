const InspirationBanner = () => {
 
  const heightForImageCard = {
   
    backgroundImage: "url('/successbg.svg')",
    borderRadius: "10px",
  };

  return (
    <section
      className="bg-[#2D89BF] py-16  px-10 xl:px-[100px]"
 
    >
      <div
        className="relative h-80 bg-cover bg-center"
        style={heightForImageCard}
      >
        {/* Overlay */}
        {/* <div className="absolute inset-0 bg-black opacity-10"></div> */}

        {/* Text Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-c.enter text-white px-4">
          <h1 className="text-2xl font-bold mb-4">
            Let&apos;s Cultivate Success Together
          </h1>
          <p className="mb-4">
           Ask your questions, discuss your needs, and explore how to collaborate in our agricultural goals
          </p>
          <button
            className="bg-white text-[#2D89BF] hover:bg-[#2D89BF] hover:text-white font-semibold py-2 px-4 rounded transition-all mt-8 mb-8"
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
