export default function images(state = { 
  images: [], 
  titles:['image 1', 'image 2', 'image 3', 'image 4', 'image 5']
}, action) {
  switch (action.type) {
    case 'IMAGES_RECEIVED':
      return {...state, images: action.images};
    case 'LOAD_IMAGES_FAILURE':
      return state;
    case 'SELECT_IMAGE':
      console.log('action.images', JSON.stringify(action.image));
      let path = action.image.slice(-12) // unique path for routes 
      let image = JSON.stringify(action.image); // selected image url 
      const images = {...state}.images  // array of all images 
      console.log(images)
      // get index of action.image in the state.images array and then set titles[index] as the title prop 
      let i = idx(images, image)
      console.log(i)
      return {...state, selectedImage: action.image, routePath: path};
    default:
      return state;
  }
}


const idx = (arr, image) => {
  return arr.indexOf(image);
}