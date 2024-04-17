import PrepSteps from "../components/prep_steps";
import { Phone, Mail, Instagram, Facebook } from "react-feather";

export default function Prep() {
  return (
    <div className="prep flex mb-20 flex-col items-center text-gray-800 text-lg">
      <div className="prep-splash w-screen/75 mt-16 flex justify-center items-center rounded-lg">
        <h1 className="font-bold text-white text-4xl object-cover shadow-md">
          Preparation
        </h1>
      </div>
      <div className="pt-12 flex flex-col px-10 text-xl justify-center gap-24 w-full">
        <PrepSteps />
        <div className="flex flex-col items-center text-center">
          <h2 className="font-bold text-xl text-rose-700">
            Booking a time slot
          </h2>
          <p className="mt-10 leading-7 text-lg">
            You can book an appointment by calling, texting or email.
          </p>
          <p className="leading-7 mt-4 text-lg">
            When booking a time slot please be mindful that other customers may
            be booked in before or after you.
          </p>
          <p className="leading-7 mt-4 text-lg">
            There can, at times, be a{" "}
            <span className="font-bold">6 week waiting list</span> depending on
            the volume and the time of year.
          </p>
          <div className="flex flex-col mt-10 gap-4 text-lg text-center items-center">
            <div className="flex gap-3">
              <a
                className="flex gap-3 hover:text-blue-500"
                href="tel:0872796977"
                target="_blank"
              >
                <Phone /> (087) 2796977
              </a>
            </div>
            <div className="flex gap-3">
              <a
                className="flex gap-3 hover:text-blue-500"
                href="mailto:carryonquilting@gmail.com"
                target="_blank"
              >
                <Mail /> carryonquilting@gmail.com
              </a>
            </div>
            <div className="flex gap-3">
              <a
                className="flex gap-3 hover:text-blue-500"
                href="https://www.instagram.com/jackiepreston319/"
                target="_blank"
              >
                <Instagram /> @jackiepreston319
              </a>
            </div>
            <div className="flex gap-3">
              <a
                className="flex gap-3 hover:text-blue-500"
                href="https://www.facebook.com/carryonquilting/"
                target="_blank"
              >
                <Facebook /> carryonquilting
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
