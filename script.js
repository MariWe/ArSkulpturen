window.onload = () => {
    function pfPosition(){
        let oldPosition = document.querySelector('#camera').getAttribute('position');
        let newPosition = {x: oldPosition.x, y: oldPosition.y, z: -4};

        document.querySelector('#pfeil').setAttribute('position', newPosition);
        console.log(document.querySelector('#pfeil').getAttribute('position'));
        }

    setInterval(function() { 
    pfPosition(); 
}, 500);

}
