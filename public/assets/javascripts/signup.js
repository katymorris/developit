'use strict';

var btnSignUp = document.getElementById('signup-btn');

btnSignUp.addEventListener('click', function (e) {
	//get email and pass
	var email = userEmail.value;
	var pass = userPassword.value;
	var auth = firebase.auth();
	//CHECK FOR REAL EMAIL
	//sign in
	var promise = auth.createUserWithEmailAndPassword(email, pass);
	promise.catch(function (e) {
		return console.log(e.message);
	});
});