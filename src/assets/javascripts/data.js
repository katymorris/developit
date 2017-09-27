(function() {
	// Initialize Firebase
	var config = {
		apiKey: "AIzaSyDoG1yqdS5AqFoxhaeQAtopgAbAs7Tbi_g",
		authDomain: "developit-d3935.firebaseapp.com",
		databaseURL: "https://developit-d3935.firebaseio.com",
		projectId: "developit-d3935",
		storageBucket: "developit-d3935.appspot.com",
		messagingSenderId: "908627381471"
	};
	firebase.initializeApp(config);

	//add realtime listener
	firebase.auth().onAuthStateChanged(firebaseUser => {
		if (firebaseUser) {
			console.log('user is logged in');
			window.location = 'views/tasks.html'
		} else {
			console.log('user is not logged in');
			window.location = 'views/dashboard.html'
		}
	});
}());