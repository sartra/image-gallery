import { push } from 'connected-react-router'
import createHistory from 'history/createBrowserHistory'

const history = createHistory();
// Get the current location.
const location = history.location;


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
      let image = action.image; 
      const images = {...state}.images  
      const metadata = { ...state }.metadata 
      let number = images.indexOf(image)+1; 
      let title = getTitle(image, images, metadata)
      let description = getDescription(image, images, metadata)
      let path = `image${number}`

      // Listen for changes to the current location.
      const unlisten = history.listen((location, action) => {
        // location is an object like window.location
        console.log(action, 'LOC PATH', location.pathname, 'LOC STATE', location.state)
      })
      // Use push, replace, and go to navigate around.
      history.push(`/${path}`, { ...state })

      unlisten();

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