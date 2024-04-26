import Image from "next/image";

import data from "./data";

export default function Sale() {
  return (
    <div className="flex flex-col justify-center">
      <div className="splash shop-splash self-center w-screen/75 mt-16 flex justify-center items-center rounded-lg">
        <h1 className="font-bold text-white text-4xl object-cover shadow-md">
          Prices
        </h1>
      </div>
      <div className="flex flex-wrap mt-24 mb-24 md:mt-32 md:mb-32 self-center justify-center gap-12 md:gap-36 w-screen/75">
        {data.map((product) => (
          <Product
            src={product.src}
            title={product.title}
            price={product.price}
            size={product.size}
          />
        ))}
      </div>
    </div>
  );
}

function Product({ src, title, price, size }: any) {
  return (
    <div className="shop-container w-screen/75 md:h-screen/50 md:w-screen/20 flex flex-col">
      <div>
        <img
          className="shop-img md:h-screen/40 md:w-screen/20"
          src={src}
          alt="deer-panel-image"
        />
      </div>
      <div className="flex flex-col bg-slate-50 justify-center items-center gap-3 h-screen/20 md:h-screen/10">
        <h4 className="font-bold text-2xl">{title}</h4>
        <p>{size}</p>
        <p className="text-xl">€{price}</p>
      </div>
    </div>
  );
}
