window.onload = () => {
    function Rotation(){
        document.querySelector('#pfeil').setAttribute('look-at', document.querySelector('#pony'));
        console.log(document.querySelector('#pfeil').getAttribute('rotation'));
        }

    setInterval(function() { 
    Rotation(); 
}, 500);
}
