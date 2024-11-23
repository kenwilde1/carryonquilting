import { Facebook, Instagram, Mail, Phone } from "react-feather";

export default function Links() {
  return (
    <div className="h-screen flex flex-col items-center">
      <div className="splash gallery-splash w-screen/75 mt-16 flex justify-center items-center rounded-lg">
        <h1 className="font-bold text-white text-4xl object-cover shadow-md">
          Contact
        </h1>
      </div>
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
  );
}
