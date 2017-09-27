// (function() {
// 	// Initialize Firebase
// 	var config = {
// 	    apiKey: "AIzaSyAk7iwF1P3vbm8eV-pp0p5xOj5TLpJnwks",
// 	    authDomain: "developit-f4784.firebaseapp.com",
// 	    databaseURL: "https://developit-f4784.firebaseio.com",
// 	    projectId: "developit-f4784",
// 	    storageBucket: "developit-f4784.appspot.com",
// 	    messagingSenderId: "671569224248"
// 	};
// 	firebase.initializeApp(config);

// }());

// //add realtime listener
// firebase.auth().onAuthStateChanged(firebaseUser => {
// 	if (firebaseUser) {
// 		console.log('user is logged in');
// 	} else {
// 		console.log('user is not logged in');
// 	}
// })

// //logout
// var userEmail = document.getElementById('user-email');
// var userPassword = document.getElementById('user-password');

$('body').append('<script src="https://www.gstatic.com/firebasejs/4.2.0/firebase.js"></script>' +
	'<script src="https://cdn.bootcss.com/popper.js/1.9.3/umd/popper.min.js" integrity="sha384-knhBOwpf8/28D6ygAjJeb0STNDZqfPbKaWQ8wIz/xgSc0xXwKsKhNype8fmfMka2" crossorigin="anonymous"></script>' +
	'<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>');
