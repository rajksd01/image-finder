import React, { useEffect } from "react";
import  './components/ImageCard.css';

function ImageCard(props) {
 // Useeffect because we need to update only when the component is changed
  useEffect(() => {
    props.imageList.map((image) => console.log(image.src.small));
  }, [props.imageList]);

  return (
    <div className="imageBox">
      {props.imageList.map((image) => (
        <img className="image" src={image.src.medium} alt={image.src.key} />
      ))}
      
    </div>
  );
}

export default ImageCard;
