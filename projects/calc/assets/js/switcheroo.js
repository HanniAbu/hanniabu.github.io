window.onload = disable;

function disable() {
	document.getElementById('default').style.display = "block";	
	document.getElementById('paint').style.display = "none";
	document.getElementById('drywall').style.display = "none";
	document.getElementById('tile').style.display = "none";

};

function paint() {
	document.getElementById('default').style.display = "none";
	document.getElementById('paint').style.display = "block";
	document.getElementById('drywall').style.display = "none";
	document.getElementById('tile').style.display = "none";

};

function drywall() {
	document.getElementById('default').style.display = "none";
	document.getElementById('paint').style.display = "none";
	document.getElementById('drywall').style.display = "block";
	document.getElementById('tile').style.display = "none";

};

function tile() {
	document.getElementById('default').style.display = "none";
	document.getElementById('paint').style.display = "none";
	document.getElementById('drywall').style.display = "none";
	document.getElementById('tile').style.display = "block";
};