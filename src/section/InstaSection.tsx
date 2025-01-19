const instaActu: { id: number; img: string }[] = [
  { id: 1, img: "/public/assets/image-product.png" },
  { id: 2, img: "/public/assets/image-product.png" },
  { id: 3, img: "/public/assets/image-product.png" },
  { id: 4, img: "/public/assets/image-product.png" },
  { id: 5, img: "/public/assets/image-product.png" },
  { id: 6, img: "/public/assets/image-product.png" },
  { id: 7, img: "/public/assets/image-product.png" },
  { id: 8, img: "/public/assets/image-product.png" },
];

const InstaSection = () => {
  return (
    <div className="relative min-h-screen font-biryani bg-greenC text-whiteC  z-20">
      <div className="ml-[125px] pt-5 font-extrabold">
        <h2 className="text-3xl">Instagram</h2>
        <p className=" text-base">Last post</p>
      </div>
      <div className="flex flex-wrap justify-center mx-52 bg-white p-5 gap-7 mt-20 ">
        {instaActu.map((post, index) => (
          <div key={index} className="">
            <img
              src={post.img}
              alt={`Image ${index + 1}`}
              className="w-44 h-44"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default InstaSection;
