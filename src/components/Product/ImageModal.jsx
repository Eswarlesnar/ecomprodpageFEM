import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import CloseIcon from "@mui/icons-material/Close";
import { useEffect, useState } from "react";
import "./imageModal.css";
import IconButton from "@mui/material/IconButton";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "transparent",
  border: "none",
  borderRadius: "15px",
  boxShadow: 24,
};

const getImagefromThumbnail = (name) => {
  console.log(name, "thumb");
  console.log(name.split("_")[0].split("thumbnail")[0] + ".jpg");
  return name.split("_")[0].split("-thumbnail")[0] + ".jpg";
};

const ImageModal = (props) => {
  const { open, handleClose, arrOfImages, selectedIndex } = props;
  console.log(selectedIndex, "index");
  const [selectedImageIndex, setSelectedImageIndex] = useState(selectedIndex);

  const handleImageChange = (index) => {
    setSelectedImageIndex(index);
  };

  useEffect(() => {
    setSelectedImageIndex(selectedIndex);
  }, [selectedIndex]);

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
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'>
      <Box sx={style}>
        <div className='modal-image-container'>
          <img
            src={getImagefromThumbnail(arrOfImages[selectedImageIndex])}
            alt='prod-image'
          />
          <button className='close-icon' onClick={handleClose}>
            <CloseIcon />
          </button>
          <IconButton
            className='prev'
            onClick={handlePrevImage}
            disabled={selectedImageIndex === 0 ? true : false}>
            <ArrowBackIosIcon />
          </IconButton>
          <IconButton
            className='next'
            onClick={handleNextImage}
            disabled={
              selectedImageIndex === arrOfImages.length - 1 ? true : false
            }>
            <ArrowForwardIosIcon />
          </IconButton>
        </div>
        <div className='image-selector-modal'>
          {arrOfImages.map((item, index) => {
            return (
              <img
                src={item}
                className={`small-image ${
                  selectedImageIndex === index
                    ? "active-image"
                    : "not-active-image"
                }`}
                key={index}
                onClick={() => handleImageChange(index)}
              />
            );
          })}
        </div>
      </Box>
    </Modal>
  );
};

export default ImageModal;
