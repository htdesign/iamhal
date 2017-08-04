//tiltjs
// $('.js-tilt').tilt({
//     scale: 1.2
// })

//rellax parallax --------- var rellax = new Rellax('.rellax', {center: true});
// var rellax = new Rellax('.rellax');

$.stellar({
    positionProperty: 'transform',
    hideDistantElements: false
});


let hotel = {
    name: 'Park',
    rooms: 120,
    booked: 77,
    checkAvailability: function () {
        return this.rooms - this.booked;
    }
}


var today = new Date();
var year = today.getFullYear();

var el = document.getElementById('footer');
el.innerHTML = '<p>Copyright &copy;' + year + '</p>';