const API_KEY = 'a46a979f39c49975dbdd23b378e6d3d5';

const API_ENDPOINT = `https://api.flickr.com/services/rest/?method=flickr.galleries.getPhotos&api_key=${API_KEY}&gallery_id=72157667808054427&format=json&nojsoncallback=1&per_page=5`


export const fetchImages = () => {
  return fetch(API_ENDPOINT).then(function (response) {
    return response.json().then(function (json) {
      console.log(json)
      return json.photos.photo.map(
        ({ farm, server, id, secret }) => `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`
      );
    })
  })
};
