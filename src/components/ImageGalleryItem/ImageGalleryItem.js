import { useState } from "react";
import Modal from "../Modal/Modal";
import "./ImageGalleryItemStyles.css";

export default function ImageGalleryItem({ src, alt, largePicture }) {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal((showModal) => !showModal);
  };

  return (
    <li className="ImageGalleryItem">
      <img
        onClick={toggleModal}
        src={src}
        alt={alt}
        className="ImageGalleryItemImage"
      />
      {showModal && (
        <Modal onClose={toggleModal} src={largePicture} alt={alt} />
      )}
    </li>
  );
}
