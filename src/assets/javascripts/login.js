
const userEmail = document.getElementById('user-email');
const userPassword = document.getElementById('user-password');
const btnLogin = document.getElementById('login-btn');

btnLogin.addEventListener('click', e => {
	//get email and pass
	const email = userEmail.value;
	const pass = userPassword.value;
	const auth = firebase.auth();

	//sign in
	const promise = auth.signInWithEmailAndPassword(email, pass);
	promise
		.then(user => window.location = 'dashboard.html')
		.catch(e => console.log(e.message));

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