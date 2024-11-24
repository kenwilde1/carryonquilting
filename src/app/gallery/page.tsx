"use client";

import { useState } from "react";
import Carousel, { PagingDots } from "nuka-carousel";
import { data } from "./data";
import Image from "next/image";

export default function Gallery() {
  const [modal, setModal] = useState({ open: false, imageLink: "", index: 0 });
  const [activeSelection, setActiveSelection] = useState("all");
  const [currentPage, setCurrentPage] = useState('1') as any;

  function openModal(imageLink: string, index: number) {
    if (!modal.open) {
      setModal({ open: true, imageLink, index });
    }
  }

  function closeModal() {
    setModal({ ...modal, open: false });
  }

  function onPageUpdate(page: string) {
    setCurrentPage(page);
  }

  return (
    <div className="flex flex-col items-center mb-32">
      <div className="splash gallery-splash w-screen/75 mt-16 flex justify-center items-center rounded-lg mb-10">
        <h1 className="font-bold text-white text-4xl object-cover shadow-md">
          Gallery
        </h1>
      </div>
      <div className="gallery-pagination">
        <GalleryPagination currentPage={currentPage} onPageUpdate={onPageUpdate} />
      </div>
      <div className="flex w-screen/75 flex-wrap gap-8 content-start justify-center mt-20">
        {(data[currentPage] as any).map(({ imageLink, type }: any, index: number) => {
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
          currentPage={currentPage}
        />
      )}
    </div>
  );
}

function GalleryPagination({ currentPage, onPageUpdate }: any): any {
  const pages = Object.keys(data);
  return (
    pages.map(page => {
      const isCurrentPage = page === currentPage;
      return <div onClick={() => onPageUpdate(page)} className={`page ${isCurrentPage ? 'active-page' : ''}`}>{page}</div>
    })
  )
}

function getModalImages(activeSelection: string, currentPage: number): any {
  const images = data[currentPage]
    .map((pic: any) => {
      if (
        activeSelection === "all" ||
        (activeSelection === "quilts" && pic.type === "quilt") ||
        (activeSelection === "bags" && pic.type === "bag") ||
        (activeSelection === "other" && pic.type === "other")
      ) {
        return <img src={pic.imageLink} />;
      }
    })
    .filter((pic: any) => pic !== undefined);

  return images;
}

function Modal({ index, closeModal, activeSelection, currentPage }: any) {
  return (
    <div key={index}>
      <Carousel
        slideIndex={index}
        defaultControlsConfig={{ pagingDotsClassName: "pagingDots" }}
        renderTopRightControls={() => <div className="modal-close-button" onClick={closeModal}>X</div>}
      >
        {getModalImages(activeSelection, currentPage)}
      </Carousel>
      <div className="modal-backdrop" onClick={closeModal}></div>
    </div>
  );
}
