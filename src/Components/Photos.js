import React from "react";
import { useDispatch } from "react-redux";
import { loadNewPhotos } from "../store/photos";
import { PhotosContent } from "./PhotosContent";
import { PhotosLoadMore } from "./PhotosLoadMore";

export const Photos = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(loadNewPhotos(1));
  }, [dispatch]);
  return (
    <section>
      <PhotosContent />
      <PhotosLoadMore />
    </section>
  );
};
