import "./ImageGallery.css";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";

export default function ImageGallery({ pictures }) {
  return (
    <ul className="ImageGallery">
      {pictures.map((picture, id) => (
        <ImageGalleryItem
          src={picture.webformatURL}
          alt={picture.tags}
          largePicture={picture.largeImageURL}
          key={id}
        />
      ))}
    </ul>
  );
}
