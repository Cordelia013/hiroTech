import { Decorations } from './components/Decorations';

interface ProductSectionProps {
  className?: string;
}

export const ProductSection: React.FC<ProductSectionProps> = () => {
  return (
    <section
      className={`relative min-h-screen bg-pink-50  pb-28 overflow-hidden pl-[125px] z-10`}
    >
      <Decorations />
      <h2 className="text-[40px] font-bold text-[#FF4B15] mb-8 flex items-start">
        PRODUCT
      </h2>
      <div className="pt-28">
        {/* Content */}
        <div className="flex flex-col items-start top">
          {/* Product Images */}
          <div className="relative w-full max-w-[800px] h-[400px] mb-8 ">
            <img
              src="/assets/calque1.png"
              alt="Hiro Product"
              className="absolute left-[30%] top-[65%] w-[387px] h-[260px] rotate-[-8.61deg] object-contain z-50"
            />
            <img
              src="/assets/calque2.png"
              alt="Hiro Box"
              className="absolute left-[58%] top-[15%] w-[231px] h-[316px] object-contain z-30"
            />
            <img
              src="/assets/calque3.png"
              alt="Hiro Package"
              className="absolute left-[-3%] top-[-30%] w-[552px] h-[498px] object-contain z-20"
            />
            <img
              src="/assets/calque4.png"
              alt="Hiro Sachet"
              className="absolute left-[20%] top-[25%] w-[333px] h-[301px] object-contain z-40"
            />
          </div>
        </div>
      </div>
    </section>
  );
}; 