import { useState } from "react";

const ContactSection = () => {
  // Gestion des valeurs des inputs pour masquer ou afficher le texte par défaut
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  return (
    <div className="relative min-h-screen font-biryani bg-orangeC text-whiteC z-20">
      {/* Header */}
      <div className="ml-[125px] pt-5 font-extrabold">
        <h2 className="text-3xl uppercase">Contact us</h2>
      </div>

      {/* Form */}
      <div className="flex flex-col items-center justify-center p-10">
        <form className="w-full max-w-lg  shadow-lg p-8 rounded-[20px]">
          {/* Name Input */}
          <div className="mb-6 relative">
            <input
              id="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              className="block w-full rounded-[20px] bg-white border text-orangeC  py-3 px-4 leading-tight focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 peer"
            />
            <span
              className={`absolute left-4 top-1/2 transform -translate-y-1/2 text-orangeC transition-all peer-placeholder-shown:text-opacity-50 ${
                formData.name ? "opacity-0" : "opacity-100"
              }`}
            >
              Name
            </span>
          </div>

          {/* Email Input */}
          <div className="mb-6 relative">
            <input
              id="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="block w-full bg-white border text-orangeC rounded-[20px] py-3 px-4 leading-tight focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 peer"
            />
            <span
              className={`absolute left-4 top-1/2 transform -translate-y-1/2 text-orangeC transition-all peer-placeholder-shown:text-opacity-50 ${
                formData.email ? "opacity-0" : "opacity-100"
              }`}
            >
              Email
            </span>
          </div>

          {/* Mobile Input */}
          <div className="mb-6 relative">
            <input
              id="mobile"
              type="text"
              value={formData.mobile}
              onChange={handleChange}
              className="block w-full bg-white border text-orangeC rounded-[20px] py-3 px-4 leading-tight focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 peer"
            />
            <span
              className={`absolute left-4 top-1/2 transform -translate-y-1/2 text-orangeC transition-all peer-placeholder-shown:text-opacity-50 ${
                formData.mobile ? "opacity-0" : "opacity-100"
              }`}
            >
              Mobile
            </span>
          </div>

          {/* Message Textarea */}
          <div className="mb-6 relative">
            <textarea
              id="message"
              value={formData.message}
              onChange={handleChange}
              className="block w-full bg-white border text-orangeC rounded-[20px] py-3 px-4 leading-tight focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 peer h-32 resize-none"
            />
            <span
              className={`absolute left-4 top-3 text-orangeC transition-all peer-placeholder-shown:text-opacity-50 ${
                formData.message ? "opacity-0" : "opacity-100"
              }`}
            >
              Your message
            </span>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="shadow-md bg-whiteC text-orangeC font-bold px-6 py-4 rounded-[20px] hover:bg-orange-200 transition-all focus:shadow-outline focus:outline-none text-center"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactSection;
