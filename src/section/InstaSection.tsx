const instaActu: { id: number; img: string }[] = [
  { id: 1, img: "/public/assets/INSTA/image-1.png" },
  { id: 2, img: "/public/assets/INSTA/image-2.png" },
  { id: 3, img: "/public/assets/INSTA/image-3.png" },
  { id: 4, img: "/public/assets/INSTA/image-4.png" },
  { id: 5, img: "/public/assets/INSTA/image-5.png" },
  { id: 6, img: "/public/assets/INSTA/image-6.png" },
  { id: 7, img: "/public/assets/INSTA/image-7.png" },
  { id: 8, img: "/public/assets/INSTA/image-8.png" },
];

const InstaSection = () => {
  return (
    <div className="relative min-h-screen font-biryani bg-greenC text-whiteC pb-48 z-20">
      {/* Section Header */}
      <div className="ml-[125px] pt-5 font-extrabold">
        <h2 className="text-3xl">Instagram</h2>
        <p className="text-base">Last post</p>
      </div>

      {/* Images Grid */}
      <div className="mx-[125px] grid sm:grid-cols-1 sm:grid-cols-2 grid-cols-4 gap-7 mt-20 p-14 bg-white text-black rounded-lg">
        {instaActu.map((post, index) => (
          <div key={post.id} className="flex justify-center">
            <img
              src={post.img}
              alt={`Image ${index + 1}`}
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default InstaSection;
