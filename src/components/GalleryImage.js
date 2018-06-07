import React from 'react';
export default function GalleryImage({image, title, discription}) {
  return (
    <div className="gallery-image">
      <div className="selected-image">
        {image ? <img src={image} /> : null}
        <div className="img-info">
          <h2 className="title">{title}</h2>
          <div>{discription}</div>
        </div>
      </div>
    </div>
  )
}
 