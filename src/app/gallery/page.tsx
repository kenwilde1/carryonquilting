"use client";

import { useState } from "react";
import Carousel, { PagingDots } from "nuka-carousel";
import { data } from "./data";
import Image from "next/image";

export default function Gallery() {
  const [modal, setModal] = useState({ open: false, imageLink: "", index: 0 });
  const [activeSelection, setActiveSelection] = useState("all");

  function openModal(imageLink: string, index: number) {
    if (!modal.open) {
      setModal({ open: true, imageLink, index });
    }
  }

  function closeModal() {
    setModal({ ...modal, open: false });
  }

  return (
    <div className="flex flex-col items-center mb-32">
      <div className="splash gallery-splash w-screen/75 mt-16 flex justify-center items-center rounded-lg">
        <h1 className="font-bold text-white text-4xl object-cover shadow-md">
          Gallery
        </h1>
      </div>
      <div className="flex w-screen/75 justify-center m-7 gap-5">
        <button
          className={`${
            activeSelection === "all" ? "border-2 border-black" : ""
          } px-2 py-1`}
          onClick={() => setActiveSelection("all")}
        >
          All
        </button>
        <button
          className={`${
            activeSelection === "quilts" ? "border-2 border-black" : ""
          } px-2 py-1`}
          onClick={() => setActiveSelection("quilts")}
        >
          Quilts
        </button>
        <button
          className={`${
            activeSelection === "bags" ? "border-2 border-black" : ""
          } px-2 py-1`}
          onClick={() => setActiveSelection("bags")}
        >
          Bags
        </button>
        <button
          className={`${
            activeSelection === "other" ? "border-2 border-black" : ""
          } px-2 py-1`}
          onClick={() => setActiveSelection("other")}
        >
          Other
        </button>
      </div>
      <div className="flex w-screen/75 md:h-screen/60 flex-wrap gap-8 content-start justify-center">
        {data.map(({ imageLink, type }, index) => {
          if (
            activeSelection === "all" ||
            (activeSelection === "quilts" && type === "quilt") ||
            (activeSelection === "bags" && type === "bag") ||
            (activeSelection === "other" && type === "other")
          ) {
            return (
              <div
                key={index}
                className="gallery-pic-container cursor-pointer rounded-lg"
                onClick={() => openModal(imageLink, index)}
              >
                <Image
                  className="gallery-pic rounded-lg"
                  src={imageLink}
                  alt="gallery-photo"
                  width={200}
                  height={200}
                />
              </div>
            );
          }
        })}
      </div>
      {modal.open && (
        <Modal
          image={modal.imageLink}
          index={modal.index}
          closeModal={closeModal}
          data={data}
          activeSelection={activeSelection}
        />
      )}
    </div>
  );
}

function getModalImages(activeSelection: string): any {
  const images = data
    .map((pic) => {
      if (
        activeSelection === "all" ||
        (activeSelection === "quilts" && pic.type === "quilt") ||
        (activeSelection === "bags" && pic.type === "bag") ||
        (activeSelection === "other" && pic.type === "other")
      ) {
        return <img src={pic.imageLink} />;
      }
    })
    .filter((pic) => pic !== undefined);

  return images;
}

function Modal({ index, closeModal, activeSelection }: any) {
  return (
    <div>
      <Carousel
        slideIndex={index}
        defaultControlsConfig={{ pagingDotsClassName: "pagingDots" }}
      >
        {getModalImages(activeSelection)}
      </Carousel>
      <div className="modal-backdrop" onClick={closeModal}></div>
    </div>
  );
}
