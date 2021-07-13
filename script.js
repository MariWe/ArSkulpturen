window.onload = () => {
    let places = staticLoadPlaces();
    renderPlaces(places);
};

function staticLoadPlaces() {
    return [
        {
            name: 'Elefant',
            location: {
                    lat: 50.82208,
                    lng: 12.93978,
            },
        },
    ];
}

var models = [
    {
        objurl: 'https://raw.githubusercontent.com/MariWe/ArSkulpturen/main/assets/Fisch/Skulptur.obj',
        mtlurl: 'https://raw.githubusercontent.com/MariWe/ArSkulpturen/main/assets/Fisch/Texturemap.mtl',
        scale: '0.5 0.5 0.5',
        rotation: '0 180 0',
        position: '0 0 0'
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
