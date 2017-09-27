"use strict";

(function () {
	// Initialize Firebase
	var config = {
		apiKey: "AIzaSyAk7iwF1P3vbm8eV-pp0p5xOj5TLpJnwks",
		authDomain: "developit-f4784.firebaseapp.com",
		databaseURL: "https://developit-f4784.firebaseio.com",
		projectId: "developit-f4784",
		storageBucket: "developit-f4784.appspot.com",
		messagingSenderId: "671569224248"
	};
	firebase.initializeApp(config);
})();

var greeting = document.getElementById('greeting');
var submitBtn = document.getElementById('submit-btn');
var heading = document.getElementById('page-heading');

var firebaseHeadingRef = firebase.database().ref().child("Heading");
// submitBtn.onclick = sendAlert;

firebaseHeadingRef.on('value', function (data) {
	heading.innerText = data.val();
});

// If the user clicks in the window, set the background color of <body> to yellow
function sendAlert() {

	// var userId = Math.floor(Math.random() * 100);  

	var firebaseRef = firebase.database().ref();

	// firebaseRef.child("User_" + userId).set("Katy");

	firebaseRef.push().set("Katy");
}

//add realtime listener
firebase.auth().onAuthStateChanged(function (firebaseUser) {
	if (firebaseUser) {
		console.log('user is logged in');
		window.location = 'views/tasks.html';
	} else {
		console.log('user is not logged in');
		window.location = 'views/dashboard.html';
	}
});