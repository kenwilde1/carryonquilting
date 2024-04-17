export default function Prices() {
  return (
    <div className="w-screen flex justify-center items-center">
      <div className="flex justify-center flex-wrap w-screen/75 gap-12 content-start">
        <div className="prices-splash w-screen/75 mt-16 flex justify-center items-center rounded-lg">
          <h1 className="font-bold text-white text-4xl object-cover shadow-md">
            Prices
          </h1>
        </div>
        <div className="card border border-black shadow-offset-black mt-10">
          <div className="card-top flex flex-col">
            <div className="flex">
              <div className="first first-one bg-red-200 flex items-center pl-5 font-bold gap-4">
                <h2 className="text-2xl">COT / LAP QUILT</h2>
              </div>
            </div>
          </div>
          <div className="card-content text-lg px-5 py-3 flex flex-col justify-around">
            <div className="flex gap-12">
              <p className="leading-7">40" x 60"</p>
              <p className="font-bold"> €40 - €60</p>
            </div>
            <a
              href="#"
              className="text-blue-500 hover:text-blue-600 font-medium"
            >
              Enquire here
              <span className="ml-2">&#8594;</span>
            </a>
          </div>
        </div>
        <div className="card border border-black shadow-offset-black mt-10">
          <div className="card-top flex flex-col">
            <div className="flex">
              <div className="first first-one bg-red-200 flex items-center pl-5 font-bold gap-4">
                <h2 className="text-2xl">SINGLE QUILT</h2>
              </div>
            </div>
          </div>
          <div className="card-content text-lg px-5 py-3 flex flex-col justify-around">
            <div className="flex gap-12">
              <p className="leading-7">60" x 60"</p>
              <p className="font-bold"> €70</p>
            </div>
            <div className="flex gap-12">
              <p className="leading-7">60" x 70"</p>
              <p className="font-bold"> €75</p>
            </div>
            <div className="flex gap-12">
              <p className="leading-7">60" x 80"</p>
              <p className="font-bold"> €80</p>
            </div>
            <div className="flex gap-12">
              <p className="leading-7">70" x 80"</p>
              <p className="font-bold"> €85</p>
            </div>
            <a
              href="#"
              className="text-blue-500 hover:text-blue-600 font-medium"
            >
              Enquire here
              <span className="ml-2">&#8594;</span>
            </a>
          </div>
        </div>
        <div className="card border border-black shadow-offset-black mt-10">
          <div className="card-top flex flex-col">
            <div className="flex">
              <div className="first first-one bg-red-200 flex items-center pl-5 font-bold gap-4">
                <h2 className="text-2xl">DOUBLE QUILT</h2>
              </div>
            </div>
          </div>
          <div className="card-content text-lg px-5 py-3 flex flex-col justify-around">
            <div className="flex gap-12">
              <p className="leading-7">100" x 100"</p>
              <p className="font-bold"> €125</p>
            </div>
            <div className="flex gap-12">
              <p className="leading-7">110" x 110"</p>
              <p className="font-bold"> €130</p>
            </div>
            <a
              href="#"
              className="text-blue-500 hover:text-blue-600 font-medium"
            >
              Enquire here
              <span className="ml-2">&#8594;</span>
            </a>
          </div>
        </div>
        <div className="card border border-black shadow-offset-black mt-10 mb-16">
          <div className="card-top flex flex-col">
            <div className="flex">
              <div className="first first-one bg-red-200 flex items-center pl-5 font-bold gap-4">
                <h2 className="text-2xl">KINGSIZE QUILT</h2>
              </div>
            </div>
          </div>
          <div className="card-content text-lg px-5 py-3 flex flex-col justify-around">
            <div className="flex gap-12">
              <p className="leading-7">100" x 100"</p>
              <p className="font-bold"> €125</p>
            </div>
            <div className="flex gap-12">
              <p className="leading-7">110" x 110"</p>
              <p className="font-bold"> €130</p>
            </div>
            <a
              href="#"
              className="text-blue-500 hover:text-blue-600 font-medium"
            >
              Enquire here
              <span className="ml-2">&#8594;</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
