'use client'
import { useState } from 'react';
import styles from './PhotoGallery.module.css';

const PhotoGallery = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openLightbox = (image) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <div className={styles.container}>
        <h2 style={{width: '95%'}}>Gallery</h2> <br />
      {/* Image Grid */}
      <div className={styles.grid}>
        {images.map((image, index) => (
          <div
            key={index}
            className={styles.imageWrapper}
            onClick={() => openLightbox(image)}
          >
            <img
              src={image.src}
              alt={image.alt || `Gallery image ${index + 1}`}
              className={styles.image}
            />
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className={styles.lightbox}
          onClick={closeLightbox}
        >
          <div className={styles.lightboxContent}>
            <img
              src={selectedImage.src}
              alt={selectedImage.alt || 'Selected image'}
              className={styles.lightboxImage}
            />
            <button
              className={styles.closeButton}
              onClick={closeLightbox}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PhotoGallery;