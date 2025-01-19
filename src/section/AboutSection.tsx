interface AboutSectionProps {
  className?: string;
}

export const AboutSection: React.FC<AboutSectionProps> = () => {
  return (
    <section className={`relative min-h-screen bg-pink-50 px-8 py-4 z-10 `}>
      {/* images */}
      <div className="absolute -top-48 h-full w-full pointer-events-none right-[-45%]">
        <img 
          src="/assets/decoration-red.png" 
          alt="" 
          className="absolute right-32 h-full w-auto object-contain rotate-90 scale-y-[30%] scale-x-[70%] rounded-full"
        />
        <img 
          src="/assets/decotation-green.png" 
          alt="" 
          className="absolute right-0 h-full w-auto object-contain rotate-90 scale-y-[30%] scale-x-[55%] translate-y-[30%] rounded-full"
        />
      </div>

      {/* content */}
      <div className="flex flex-col items-start">
        <h2 className="text-[40px] font-bold text-[#FF4B15] mb-8">ABOUT US</h2>

        <p className="text-black mb-8 text-[16px] font-bold max-w-[800px] text-left">
          HIRO (pronounced 'Hero') is a revolutionary biotech company that is harnessing the power of 
          plastic-eating fungi to help break down consumer plastics at scale. Hiro is the first to bring this 
          research out of the lab and to consumers in a friendly, shelf stable way.
        </p>
        </div>
        
        <div className="space-y-12 max-w-3xl flex flex-col items-start">
          <div>
            <h3 className="text-[16px] font-bold text-[#B5C72E] mb-4 items-start text-left">HOW DID WE GET HERE ?</h3>
            <p className="text-black text-[12px] font-bold max-w-[800px] text-left">
              15 YEARS AGO, SCIENTISTS FIRST DISCOVERED PLASTIC-EATING FUNGI IN THE AMAZON AND 
              HAVE CONTINUED TO STUDY THEM EVER SINCE.
            </p>
          </div>

          <div>
            <h3 className="text-[16px] font-bold text-[#FF4B15] mb-4 items-start text-left">WHAT IS THE HIRO BREAKDOWN KIT ?</h3>
            <p className="text-black text-[12px] font-bold max-w-[800px] text-left">
              THE HIRO BREAKDOWN KIT IS A FUSION OF INNOVATION AND DESIGN. THIS SLEEK TERRARIUM 
              HOUSES A TUBE WITH A SEE-THROUGH WINDOW THAT TRANSFORMS EVERYDAY SOFT 
              PLASTICS BACK INTO NATURE USING HIRO'S PATENTED FUNGI TECHNOLOGY.
            </p>
          </div>

          <div>
            <h3 className="text-[16px] font-bold text-[#B5C72E] mb-4 items-start text-left">WHY BABY DIAPERS ?</h3>
            <p className="text-black text-[12px] font-bold max-w-[800px] text-left">
              BABY DIAPERS ARE THE #1 PLASTIC HOUSEHOLD WASTE ITEM AND THE THIRD MOST COMMON 
              THING FOUND IN LANDFILLS!
            </p>
          </div>

          <div>
            <h3 className="text-[16px] font-bold text-[#FF4B15] mb-4 items-start text-left">HOW CAN FUNGI 'EAT' PLASTICS ?</h3>
            <p className="text-black text-[12px] font-bold max-w-[800px] text-left">
              FUNGI AHVE BEEB EVIKVUBG FOR HUNDREDS OF MILLIONS OF YEARS TO BREAK DOWN 
              COMPLEX CARBON MATERIALS SUCH AS ROCKS AND LIGNIN AND PLASTICS ARE NO 
              DIFFERENT, BEING A CARBON CHAIN THEMSELVES. IT'S LITERALLY IN MUSHROOM'S DNA TO BE 
              ABLE TO BREAK DOWN OUR PLASTICS.
            </p>
          </div>
        </div>
    </section>
  );
}; 