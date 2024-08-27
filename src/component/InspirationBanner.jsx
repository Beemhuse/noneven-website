
const InspirationBanner = () => {
  return (
    <section className="bg-[#2D89BF] py-16  px-10 xl:px-[100px]">
      <div className="relative h-80 bg-cover bg-center" style={{ backgroundImage: "url('/successbg.svg')" }}>
      {/* Overlay */}
      {/* <div className="absolute inset-0 bg-black opacity-50"></div> */}
      
      {/* Text Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
        <h1 className="text-2xl font-bold mb-4">Let&apos;s Cultivate Success Together</h1>
        <p className="mb-4">
        We&apos;re here to answer your questions, discuss your needs, and explore how we can collaborate to achieve your agricultural goals.        </p>
        <button className="bg-[#2D89BF]  hover:bg-[#2D89BF]/10  text-white font-semibold py-2 px-4 rounded">
          Send a Message
        </button>
      </div>
    </div>
    </section>
  );
};

export default InspirationBanner;
