

const contactection = () => {
  return (
    <div className="relative min-h-screen font-biryani bg-orangeC text-whiteC z-20">
      <div className="ml-[125px] pt-5 font-extrabold">
        <h2 className="text-3xl uppercase">Contact us</h2>
      </div>
      <div className="flex flex-col items-center justify-center p-10">
        <form className="w-full max-w-lg  ">
          <div className="mb-6">
            <input
              id="prenom"
              type="text"
              placeholder="Name"
              className="w-full border rounded py-3 px-4 mb-3 leading-tight  "
            />
          </div>
          <div className="mb-6">
            <input
              id="nom"
              type="email"
              placeholder="Email"
              className="w-full bg-white text-orangeC  border rounded py-3 px-4 leading-tight "
            />
          </div>
          <div className="mb-6">
            <input
              id="nom"
              type="text"
              placeholder="Mobile"
              className="w-full bg-white text-orangeC  border rounded py-3 px-4 leading-tight "
            />
          </div>

          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <textarea
                className="appearance-none block w-full bg-white text-orangeC  border rounded py-3 px-4 mb-3 leading-tight "
                id="grid-password"
                placeholder=""
              >
                Votre message
              </textarea>
            </div>
          </div>
          <div className="md:flex md:items-center">
            <div className="md:w-1/3">
              <button
                className="shadow focus:shadow-outline focus:outline-none bg-white text-orangeC font-bold py-2 px-4 rounded"
                type="button"
              >
                Submit
              </button>
            </div>
            <div className="md:w-2/3"></div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default contactection