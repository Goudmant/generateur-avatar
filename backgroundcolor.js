//    // Add function to pick random rgb values
//function getRandomRGB() {
//    var r = Math.floor(Math.random() * 255);
//    var g = Math.floor(Math.random() * 255);
//    var b = Math.floor(Math.random() * 255);
//    return "rgb(" + r + "," + g + "," + b + ")";
//}
//    
//    // You may want to add this other function to simplify your code, too
//function addFilledRect(arg1, arg2, arg3, arg4) {
//    // Inside this function, we're using the ctx variable from outside
//    ctx.fillStyle = getRandomRGB();       // Call the function to get a random rgv color
//    ctx.fillRect(arg1, arg2, arg3, arg4); // Create the filled rectangle
//
//
//}
//     
//var canvas = document.getElementById("canvas");
//var ctx = canvas.getContext("2d");
//
//    // Then, you can call the above function multiple times // POSITION X, Y ET DIMENSION DU CARRE DE COULEUR 
//addFilledRect(0, 0, 800, 800);

// Javascript 
function randomColor(){
    var color = "#";
    var randomHex = "123456ABCDEF";  
    for(var i = 0; i<6;i++){
        color+= randomHex[Math.floor(Math.random()*40)]
    }

    return color;
}

var mytimer ;

function setColor(){
    
    $("canvas").css("background-color", randomColor);
}

var mytimer = setInterval(setColor, .1);

