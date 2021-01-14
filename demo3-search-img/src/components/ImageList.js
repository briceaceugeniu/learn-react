import React from "react";
import "../style/ImageList.css";
import ImageCard from "./ImageCard";

const ImageList = (props) => {
  const images = props.list.map((img) => {
    return <ImageCard key={img.id} image={img} />;
  });
  return <div id={`img-list`}>{images}</div>;
};

export default ImageList;
