export default function images(state = { 
  images: [], 
  metadata: [{ title: 'Tall trees', description: 'Green trees in the north west' }, { title: 'Tree in Lake', description: 'experimental photography' }, { title: 'Not a Rose', description: 'This is definitely not a rose' }, { title: 'Misty Mountains', description: 'Wish I were there' }, { title: 'Sunflower', description: 'Summertime' }  ]
}, action) {

  switch (action.type) {
    case 'IMAGES_RECEIVED':
      return {...state, images: action.images};
    case 'LOAD_IMAGES_FAILURE':
      return state;
    case 'SELECT_IMAGE':
      let path = action.image.slice(-12, -4) // unique path for routes 
      let image = action.image; // selected image url 
      const images = {...state}.images  // array of all images 
      const metadata = { ...state }.metadata // array of titles 
      // get index of action.image in the state.images array and then set titles[index] as the title prop 
      let number = images.indexOf(image)+1; 
      let title = getTitle(image, images, metadata)
      console.log('number', number, 'title: ', title)
      let description = getDescription(image, images, metadata)
      console.log('description:', description)
     console.log('path', path)
      return {...state, selectedImage: action.image, routePath: path, number: number, title: title, description: description};
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