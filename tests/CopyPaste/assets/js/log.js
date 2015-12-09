//
// Author: Hanni Abu
// URL: http://hanniabu.com
//


// Log testing messages in different colors
function log(msg, color) {
    var color = color || "#777";
    var bgc = "#fff";
    switch (color) {
        case "success":  color = "Green";		break;
        case "info":     color = "DodgerBlue";	break;
        case "error":    color = "Tomato";			break;
        case "start":    color = "OliveDrab";	break;
        case "warning":  color = "Orange";		break;
        case "end":      color = "DarkGreen";		break;
        default: color = color;
    }
    if (msg == undefined) {
    	color = "Tomato";
    }
    if (typeof msg == "object") {
        console.log(msg);
    } else if (typeof color == "object") {
        console.log("%c" + msg, "color: PowderBlue;font-weight:bold; background-color: RoyalBlue;");
        console.log(color);
    } else {
        console.log("%c" + msg, "color:" + color + ";font-weight:bold; background-color: " + bgc + ";");
    }
}