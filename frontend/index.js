
//Footerin päivämääränäyttö
// let pvm = Date()
// let pvm = date.gethours()
// let pvmString = "<p>"+pvm+"</p>"
// document.getElementById("footer").innerHTML = pvmString

var pvm1 = new Date()
var pvm2 = pvm1.toLocaleDateString('fi-FI') //SUOMALAINEN PÄIVÄ
let pvmString = "<p>Copyright -"+pvm2+"</p>"
document.getElementById("footer").innerHTML = pvmString