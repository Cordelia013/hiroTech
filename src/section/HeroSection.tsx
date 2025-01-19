const HeroSection = () => {
  return (
    <>
      <div className="relative min-h-screen font-biryani bg-orangeC flex items-center justify-center flex-col z-20">
        <img
          src="/assets/logo-png.png"
          alt="logo hiro"
          className="w-[760px] h-[272px]"
        />
        <div className="flex justify-center mt-5 ml-20">
          <h1 className="text-4xl  font-normal text-whiteC flex ">
            Hirotechnologies is shaping the <br />
            future of recycling with a focus on{" "}
            <div className="ml-10 ">
              <ul className="text-3xl relative top-12 ">
                <li>ECOLOGY</li>
                <li>INNOCATION</li>
                <li>FUNGI</li>
              </ul>
            </div>
          </h1>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
