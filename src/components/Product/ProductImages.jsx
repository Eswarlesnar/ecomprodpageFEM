import image1_thumbnail from "../../../public/assets/image-product-1-thumbnail.jpg";
import image2_thumbnail from "../../../public/assets/image-product-2-thumbnail.jpg";
import image3_thumbnail from "../../../public/assets/image-product-3-thumbnail.jpg";
import image4_thumbnail from "../../../public/assets/image-product-4-thumbnail.jpg";
import ImageModal from "./ImageModal";
import ProductImagesMobile from "./ProductImagesMobile";
import "./productImages.css";
import { useEffect, useState } from "react";

const arrOfImages = [
  image1_thumbnail,
  image2_thumbnail,
  image3_thumbnail,
  image4_thumbnail,
];

const getImagefromThumbnail = (name) => {
  return name.split("_")[0].split("-thumbnail")[0] + ".jpg";
};

const ProductImages = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [image, setImage] = useState(getImagefromThumbnail(arrOfImages[0]));
  const [openImageModal, setOpenImageModal] = useState(false);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 600);
  const handleOpen = () => setOpenImageModal(true);
  const handleClose = () => setOpenImageModal(false);
  const handleImageChange = (index) => {
    setSelectedImageIndex(index);
    setImage(getImagefromThumbnail(arrOfImages[index]));
  };

  // Adjust the breakpoint as needed

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsMobileView(true);
      } else {
        setIsMobileView(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {isMobileView ? (
        <ProductImagesMobile arrOfImages={arrOfImages} />
      ) : (
        <div>
          <div className='main-image-container'>
            <img src={image} alt='prod-image' onClick={handleOpen} />
          </div>
          <div className='image-selector'>
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
          <ImageModal
            arrOfImages={arrOfImages}
            image={image}
            open={openImageModal}
            handleClose={handleClose}
            selectedIndex={selectedImageIndex}
          />
        </div>
      )}
    </>
  );
};

export default ProductImages;
