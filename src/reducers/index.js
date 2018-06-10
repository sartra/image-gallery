import { push } from 'connected-react-router'
import createHistory from 'history/createBrowserHistory'


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
      // let path = action.image.slice(-12, -4) 
      let image = action.image; 
      const images = {...state}.images  
      const metadata = { ...state }.metadata 
      let number = images.indexOf(image)+1; 
      let title = getTitle(image, images, metadata);
      let description = getDescription(image, images, metadata);
      let i = images.indexOf(image); // use as route
      let path = `image${i}`
      const history = createHistory()
      // Get the current location.
      const location = history.location
      // Listen for changes to the current location.
      const unlisten = history.listen((location, action) => {
        // location is an object like window.location
        console.log(action, location.pathname, location.state)
      })

      // Use push, replace, and go to navigate around.
      history.push(`/${path}`, { ...state,
        selectedImage: action.image,
        routePath: path,
        number: number,
        title: title,
        description: description
      })
      unlisten();
      //history.push(`/${i}`)
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