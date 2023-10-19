import IconButton from "@mui/material/IconButton";
import { useState } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import "./productImagesMobile.css";

const getImagefromThumbnail = (name) => {
  return name.split("_")[0].split("-thumbnail")[0] + ".jpg";
};

const ProductImagesMobile = (props) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const { arrOfImages } = props;

  const handlePrevImage = () => {
    if (selectedImageIndex === 0) {
      return;
    } else {
      setSelectedImageIndex((prev) => prev - 1);
    }
  };

  const handleNextImage = () => {
    if (selectedImageIndex === arrOfImages.length - 1) {
      return;
    } else {
      setSelectedImageIndex((prev) => prev + 1);
    }
  };

  return (
    <div className='mobile-image-container'>
      <img
        src={getImagefromThumbnail(arrOfImages[selectedImageIndex])}
        alt='prod-image'
      />
      <IconButton
        className='prev'
        onClick={handlePrevImage}
        disabled={selectedImageIndex === 0 ? true : false}>
        <ArrowBackIosIcon />
      </IconButton>
      <IconButton
        className='next'
        onClick={handleNextImage}
        disabled={selectedImageIndex === arrOfImages.length - 1 ? true : false}>
        <ArrowForwardIosIcon />
      </IconButton>
    </div>
  );
};

export default ProductImagesMobile;
