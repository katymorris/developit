const btnSignUp = document.getElementById('signup-btn');

btnSignUp.addEventListener('click', e => {
	//get email and pass
	const email = userEmail.value;
	const pass = userPassword.value;
	const auth = firebase.auth();
	//CHECK FOR REAL EMAIL
	//sign in
	const promise = auth.createUserWithEmailAndPassword(email, pass);
	promise.catch(e => console.log(e.message));
});
