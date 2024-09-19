var c = document.getElementById("rect");

function increase(){
    var prev_rad = parseInt(c.getAttribute('width')) 
    //  TODO : Update the code make into int
                    // "20" + 5 = 205px -> "205" + 5 -> 2055
                    // 20 + 5 => 25  
    var update_rad = prev_rad + 10
    c.setAttribute('width',update_rad)

}

function decrease(){

var prev_rad = parseInt(c.getAttribute('width')) 
//  TODO : Update the code make into int
        // "20" + 5 = 205px -> "205" + 5 -> 2055
        // 20 + 5 => 25  
var update_rad = prev_rad - 10
c.setAttribute('width',update_rad)
}