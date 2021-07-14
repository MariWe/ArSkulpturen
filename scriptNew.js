window.addEventListener('load', () => {
    const camera =  document.querySelector('[gps-camera]');
    const pony = document.querySelector('[gltf-model]');
    let check;

    pony.addEventListener('ponyFound', () => {
        let cameraPosition = camera.object3D.position;
        let ponyPosition = pony.object3D.position;
        let distance = cameraPosition.distanceTo(ponyPosition)

        check = setInterval(() => {
            cameraPosition = camera.object3D.position;
            ponyPosition = pony.object3D.position;
            distance = cameraPosition.distanceTo(ponyPosition)

            console.log(distance);
        }, 100);
    });

    pony.addEventListener('ponyLost', () => {
        clearInterval(check);
    })
})
