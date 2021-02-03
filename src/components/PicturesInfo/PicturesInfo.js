import { useState, useEffect } from "react";
import apiService from "../../services/apiService";
import ImageGallery from "../ImageGallery/";
import PicturesErrorView from "../PicturesErrorView/PicturesErrorView";
import Loader from "../Loader/Loader";
import Button from "../Button/Button";
import PropTypes from "prop-types";

export default function PicturesInfo({ searchQuery }) {
  const [pictures, setPictures] = useState([]);
  const [page, setPage] = useState(1);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState("idle");

  useEffect(() => {
    console.log("First render");
    if (!searchQuery) {
      return;
    }
    setStatus("pending");

    apiService
      .fetchPictures(searchQuery, page)
      .then((newPictures) => {
        if (newPictures.total !== 0) {
          setPictures(
            (prevPictures) => [...prevPictures, ...newPictures.hits],
            setStatus("resolved")
          );
          console.log("fetch pictures in Api Service");
          window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: "smooth",
          });
          return;
        }
        return Promise.reject(new Error("Invalid request"));
      })

      .catch((error) => {
        setError(error);
        setStatus("rejected");
      });
  }, [page, searchQuery]);

  const onLoadMore = () => {
    console.log("добавляем картинок :", onLoadMore);
    setPage((prevPage) => prevPage + 1);
    console.log("+1 page:", setPage);
  };

  if (status === "idle") {
    return <h1>Введите свой запрос</h1>;
  }
  if (status === "pending") {
    return <Loader />;
  }
  if (status === "rejected") {
    return <PicturesErrorView message={error.message} />;
  }
  if (status === "resolved") {
    return (
      <>
        <ImageGallery pictures={pictures} />
        <Button onClick={onLoadMore} page={page} />
      </>
    );
  }
}
PicturesInfo.propTypes = {
  message: PropTypes.string,
  onClick: PropTypes.func,
};
