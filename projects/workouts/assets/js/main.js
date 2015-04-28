var hideExercise = document.getElementsByClassName('exercise');
var title = document.getElementById('select-workout');
var dropdown = document.getElementById('dropdown');
var randomButton = document.getElementById('random-button');
var nextRandomButton = document.getElementById('next-random-button');
var abs = document.getElementById('abs');
var randomNumber;


// Ab Workouts
var crunch = document.getElementById('crunch');
var toeTouch = document.getElementById('toe-touch');
var crunchMachine = document.getElementById('crunch-machine');
var ballCrunch = document.getElementById('ball-crunch');
var ballLegLift = document.getElementById('ball-leg-lift');
var situpBallPass = document.getElementById('situp-ball-pass');
var situpKneeHug = document.getElementById('situp-knee-hug');
var countdownKick = document.getElementById('countdown-kick');
var sidePlank = document.getElementById('side-plank');
var obliqueWeightedLean = document.getElementById('oblique-weighted-lean');
var obliquePreacherCrunch = document.getElementById('oblique-preacher-crunch');
var obliqueToeTouch = document.getElementById('oblique-toe-touch');
var obliqueBallCrunch = document.getElementById('oblique-ball-crunch');
var obliqueMachine = document.getElementById('oblique-machine');
var obliqueBallPass = document.getElementById('oblique-ball-pass');
var plank = document.getElementById('plank');
var flutterKick = document.getElementById('flutter-kick');
var declineReverseCrunch = document.getElementById('decline-reverse-crunch');
var declineCrunch = document.getElementById('decline-crunch');
var pushupKneeCrunch = document.getElementById('pushup-knee-crunch');
var crunchWeightLift = document.getElementById('crunch-weight-lift');
var situp = document.getElementById('situp');


function showTitle() {
	title.style.display = 'block';
}
function hideTitle() {
	title.style.display = 'none';
}
function showDropdown() {
	dropdown.style.display = 'block';
}
function hideDropdown() {
	dropdown.style.display = 'none';
}
function showRandomButton() {
	randomButton.style.display = 'block';
}
function hideRandomButton() {
	randomButton.style.display = 'none';
}
function showNextRandomButton() {
	nextRandomButton.style.display = 'block';
}
function hideNextRandomButton() {
	nextRandomButton.style.display = 'none';
}



function hideExercises() {
	for (var i = 0; i < hideExercise.length; i += 1) {
	  hideExercise[i].style.display = 'none';
	}
}
function randomize(exerciseOptions) {
	randomNumber = Math.floor(Math.random(exerciseOptions)*exerciseOptions + 1);
}
function randomWorkout() {
	var workoutCategory = abs.options[abs.selectedIndex].value;
	
	switch(workoutCategory) {
		case 'upper-abs':
			randomize(7);
			switch(randomNumber) {
				case 1:
					crunch.style.display = 'block';
					break;
				case 2:
					toeTouch.style.display = 'block';
					break;
				case 3:
					crunchMachine.style.display = 'block';
					break;
				case 4:
					ballCrunch.style.display = 'block';
					break;
				case 5:
					countdownKick.style.display = 'block';
					break;
				case 6:
					declineReverseCrunch.style.display = 'block';
					break;
				case 7:
					crunchWeightLift.style.display = 'block';
					break;
				default: 
					plank.style.display = 'block';
					break;
			}
			break;
		case 'lower-abs':
			randomize(8);
			switch(randomNumber) {
				case 1:
					ballLegLift.style.display = 'block';
					break;
				case 2:
					situpBallPass.style.display = 'block';
					break;
				case 3:
					situpKneeHug.style.display = 'block';
					break;
				case 4:
					plank.style.display = 'block';
					break;
				case 5:
					flutterKick.style.display = 'block';
					break;
				case 6:
					declineReverseCrunch.style.display = 'block';
					break;
				case 7:
					declineCrunch.style.display = 'block';
					break;
				case 8:
					situp.style.display = 'block';
					break;
				default: 
					situp.style.display = 'block';
					break;
			}
			break;
		case 'obliques':
			randomize(9);
			switch(randomNumber) {
				case 1:
					obliquePreacherCrunch.style.display = 'block';
					break;
				case 2:
					obliqueToeTouch.style.display = 'block';
					break;
				case 3:
					obliqueBallCrunch.style.display = 'block';
					break;
				case 4:
					obliqueMachine.style.display = 'block';
					break;
				case 5:
					obliqueBallPass.style.display = 'block';
					break;
				case 6:
					obliqueWeightedLean.style.display = 'block';
					break;
				case 7:
					sidePlank.style.display = 'block';
					break;
				case 8:
					countdownKick.style.display = 'block';
					break;
				case 9:
					pushupKneeCrunch.style.display = 'block';
					break;
				default: 
					sidePlank.style.display = 'block';
					break;
			}
			break;
		case 'core':
			randomize(6);
			switch(randomNumber) {
				case 1:
					plank.style.display = 'block';
					break;
				case 2:
					pushupKneeCrunch.style.display = 'block';
					break;
				case 3:
					situpKneeHug.style.display = 'block';
					break;
				case 4:
					sidePlank.style.display = 'block';
					break;
				case 5:
					obliqueBallPass.style.display = 'block';
					break;
				case 6:
					declineReverseCrunch.style.display = 'block';
					break;
				default: 
					plank.style.display = 'block';
					break;
			}
			break;
		case 'all-abs':
			randomize(22);
			switch(randomNumber) {
				case 1:
					crunch.style.display = 'block';
					break;
				case 2:
					toeTouch.style.display = 'block';
					break;
				case 3:
					crunchMachine.style.display = 'block';
					break;
				case 4:
					ballCrunch.style.display = 'block';
					break;
				case 5:
					ballLegLift.style.display = 'block';
					break;
				case 6:
					situpBallPass.style.display = 'block';
					break;
				case 7:
					situpKneeHug.style.display = 'block';
					break;
				case 8:
					countdownKick.style.display = 'block';
					break;
				case 9:
					sidePlank.style.display = 'block';
					break;
				case 10:
					obliqueWeightedLean.style.display = 'block';
					break;
				case 11:
					obliquePreacherCrunch.style.display = 'block';
					break;
				case 12:
					obliqueToeTouch.style.display = 'block';
					break;
				case 13:
					obliqueBallCrunch.style.display = 'block';
					break;
				case 14:
					obliqueMachine.style.display = 'block';
					break;
				case 15:
					obliqueBallPass.style.display = 'block';
					break;
				case 16:
					plank.style.display = 'block';
					break;
				case 17:
					flutterKick.style.display = 'block';
					break;
				case 18:
					declineReverseCrunch.style.display = 'block';
					break;
				case 19:
					declineCrunch.style.display = 'block';
					break;
				case 20:
					pushupKneeCrunch.style.display = 'block';
					break;
				case 21:
					crunchWeightLift.style.display = 'block';
					break;
				case 22:
					situp.style.display = 'block';
					break;
				default: 
					plank.style.display = 'block';
					break;
			}
			break;
		default:
			plank.style.display = 'block';
			break;
	};
}


function clickRandomButton() {
	hideTitle();
	hideDropdown();
	hideRandomButton();
	showNextRandomButton();
	randomWorkout();
};
function clickNextRandom() {
	hideExercises();
	randomWorkout();
};
function restart() {
	hideExercises();
	showTitle();
	showDropdown();
	showRandomButton();
	hideNextRandomButton();
}

