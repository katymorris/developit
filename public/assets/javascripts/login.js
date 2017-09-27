'use strict';

var userEmail = document.getElementById('user-email');
var userPassword = document.getElementById('user-password');
var btnLogin = document.getElementById('login-btn');

btnLogin.addEventListener('click', function (e) {
	//get email and pass
	var email = userEmail.value;
	var pass = userPassword.value;
	var auth = firebase.auth();

	//sign in
	var promise = auth.signInWithEmailAndPassword(email, pass);
	promise.then(function (user) {
		return window.location = 'dashboard.html';
	}).catch(function (e) {
		return console.log(e.message);
	});
});

// var btnLogin = document.getElementById('login-btn');

// btnLogin.addEventListener('click', function (e) {
// 	//get email and pass
// 	var email = userEmail.value;
// 	var pass = userPassword.value;
// 	var auth = firebase.auth();

// 	//sign in
// 	var promise = auth.signInWithEmailAndPassword(email, pass);
// 	promise.then(function (user) {
// 		return window.location = 'dashboard.html';
// 	}).catch(function (e) {
// 		return console.log(e.message);
// 	});
// });


//const auth = firebase.auth();

// auth.signInWithEmailAndPassword(email, pass);

// auth.createUserWithEmailAndPassword(email, pass);

// auth.onAuthStateChanged(firebaseUser => { });