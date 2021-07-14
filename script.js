window.onload = () => {
    let places = staticLoadPlaces();
    renderPlaces(places);
};

function staticLoadPlaces() {
   return [
       {
           name: 'Pony',
           location: {
               lat: 50.8221227,
               lng: 12.9398857,
           }
       },
   ];
}

function renderPlaces(places) {
   let scene = document.querySelector('a-scene');

   places.forEach((place) => {
       let latitude = place.location.lat;
       let longitude = place.location.lng;

       let model = document.createElement('a-entity');
       model.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude};`);
       model.setAttribute('gltf-model', 'https://raw.githubusercontent.com/MariWe/ArSkulpturen/main/assets/pony.glb');
       model.setAttribute('rotation', '0 0 0');
       model.setAttribute('scale', '1 1 1');

       model.addEventListener('loaded', () => {
           window.dispatchEvent(new CustomEvent('gps-entity-place-loaded'))
           alert("I'm here!!!");
       });

       scene.appendChild(model);
   });
}
