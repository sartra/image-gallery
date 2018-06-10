import { LOCATION_CHANGE } from 'react-router-redux';

export default function images(state = { 
  images: [], 
  metadata: [{ title: 'Bamboo', description: 'Beautiful invasive species' }, { title: 'Tree in Lake', description: 'experimental photography' }, { title: 'Not a Rose', description: 'This is definitely not a rose' }, { title: 'Misty Mountains', description: 'Wish I were there' }, { title: 'Sunflower', description: 'Summertime smells like this' }  ]
}, action) {

  switch (action.type) {
    case 'IMAGES_RECEIVED':
      return {...state, images: action.images};
    case 'LOAD_IMAGES_FAILURE':
      return state;
    case 'SELECT_IMAGE':
      let path = action.image.slice(-12, -4) 
      let image = action.image; 
      const images = {...state}.images  
      const metadata = { ...state }.metadata 
      let number = images.indexOf(image)+1; 
      let title = getTitle(image, images, metadata)
      let description = getDescription(image, images, metadata)
      return {...state, selectedImage: action.image, routePath: path, number: number, title: title, description: description};
    case 'LOCATION_CHANGE':
      const pathname = action.payload.pathname;
      const [_, endpoint = ""] = pathname.split('/');
      return endpoint;
    default:
      return state;
  }
}

// get title from metadata
function getTitle (image, imagesArr, metaArr){
  let i = imagesArr.indexOf(image); 
  return metaArr[i].title
}

// get description from metadata
function getDescription (image, imagesArr, metaArr) {
  let i = imagesArr.indexOf(image);  
  return metaArr[i].description
}