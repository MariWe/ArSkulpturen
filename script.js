window.onload = () => {
    let places = staticLoadPlaces();
    renderPlaces(places);
};

function getLocation(){
    navigator.geolocation.getCurrentPosition(staticLoadPlaces);
}

function staticLoadPlaces(position) {
    return [
        {
            name: 'Pfeil',
            location: {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
            },
        },
    ];
}

var models = [
    {
        url: 'https://raw.githubusercontent.com/MariWe/ArSkulpturen/main/assets/pfeil.gltf',
        scale: '1 1 1',
        rotation: '0 0 0',
        position: '0 0 5'
    },
];

var setModel = function (model, entity) {
    if (model.scale) {
        entity.setAttribute('scale', model.scale);
    }

    if (model.rotation) {
        entity.setAttribute('rotation', model.rotation);
    }

    if (model.position) {
        entity.setAttribute('position', model.position);
    }

    entity.setAttribute('obj-model', model.objurl, model.mtlurl);

};

function renderPlaces(places) {
    let scene = document.querySelector('a-scene');

    places.forEach((place) => {
        let latitude = place.location.lat;
        let longitude = place.location.lng;

        let model = document.createElement('a-entity');
        model.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude};`);

            var entity = document.querySelector('[gps-entity-place]');    
       

        scene.appendChild(model);
    });
}
