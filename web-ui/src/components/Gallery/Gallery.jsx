import React from "react";
import "./Gallery.scss";
import i1 from "../../assets/img/1.jpg";
import i2 from "../../assets/img/2.jpg";
import i3 from "../../assets/img/3.png";
import i4 from "../../assets/img/4.jpg";
import i5 from "../../assets/img/5.jpeg";
import i6 from "../../assets/img/6.jpeg";
import i7 from "../../assets/img/7.jpg";

export default function Gallery() {
  const images = [i1, i2, i3, i4, i5, i6, i7];
  return (
    <div className="galleryPage">
      <div className="galleryContainer">
        {images.map((image) => (
          <img className="images" src={image}></img>
        ))}
      </div>
    </div>
  );
}
