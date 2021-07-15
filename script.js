window.onload = () => {

function PointingTwo(){
    var pfeil = document.querySelector('#pfeil');
    var pony = document.querySelector('#pony');
    var position = pony.object3D.position;

    pfeil.object3D.lookAt(new THREE.Vector3(position.x, position.y, position.z));

}  

setInterval(function() { 
    PointingTwo(); 
}, 100);
}
