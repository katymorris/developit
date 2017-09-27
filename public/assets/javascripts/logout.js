'use strict';

var btnLogout = document.getElementById('logout-btn');
console.log('what');
btnLogout.addEventListener('click', function (e) {
	firebase.auth().signOut();
	console.log('user has logged out');
	window.location = 'index.html';
});

// //add realtime listner
// firebase.auth().onAuthStateChanged(firebaseUser => {
// 	if (firebaseUser) {
// 		btnLogout.classList.remove('hide');
// 	} else {
// 		console.log('not logged in');
// 		btnLogout.classList.add('hide');
// 	}
// })