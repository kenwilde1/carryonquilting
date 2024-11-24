import { ArrowDown, Instagram, Facebook } from "react-feather";
import About from "./images/about.jpeg";

export default function Home() {
  return (
    <main>
      <div className="hero h-screen text-white flex flex-col items-center justify-center gap-6">
        <h1 className="text-2xl md:text-4xl font-bold">Carry on Quilting</h1>
        <p className="italic text-slate-200">Jackie Preston</p>
        <div className="flex gap-4 ">
          <div className="flex text-rose-600 rounded-xl bg-gradient-to-tr from-pink-300 to-blue-300 p-0.5 shadow-lg">
            <button className="flex gap-2 font-bold bg-white px-4 py-3 rounded-xl">
              <Instagram />
            </button>
          </div>
          <div className="flex text-blue-800 rounded-xl bg-gradient-to-tr from-pink-300 to-blue-300 p-0.5 shadow-lg">
            <button className="flex gap-2 font-bold bg-white px-4 py-3 rounded-xl">
              <Facebook />
            </button>
          </div>
        </div>
        <div className="absolute bottom-10 z-10">
          <ArrowDown />
        </div>
      </div>
      <div className="flex justify-center">
        <section className="my-10">
          <div className="flex flex-col items-center p-8">
            <h2 className="font-bold text-4xl text-rose-700">About</h2>
            <p className="mt-4 text-gray-600 text-md text-center w-5/6 md:w-3/6">
              Carry On Quilting is a professional longarm quilting service located in Naul, Co. Dublin. It is ran
              by Jackie Preston who has over 20 years
              of quilting experience, operating Carry on Quilting successfully for
              the past 15 years. She is a member of various local quilting
              groups around North Co. Dublin.
            </p>
            <div className="mt-12 md:mt-12">
              <img
                src={About.src}
                alt="About Us Image"
                className="object-cover rounded-lg shadow-md"
              />
            </div>
            <div className="mt-8">
              <a
                href="/contact"
                className="text-blue-500 hover:text-blue-600 font-medium"
              >
                Get in touch here
                <span className="ml-2">&#8594;</span>
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
