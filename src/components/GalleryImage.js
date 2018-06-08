import React from 'react';
export default function GalleryImage({image, number, title, description}) {
  return (
    <div className="gallery-image">
      <div className="selected-image">
        {image ? <img src={image} /> : null}
        <div className="img-info">
          <h1 className="number">{number}</h1>
          <h2 className="title">{title}</h2>
          <div className="description">{description}</div>
        </div>
      </div>
    </div>
  )
}
 