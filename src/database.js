import firebase from 'firebase';

var config = {
	apiKey: "AIzaSyASLqf_vtKQQOgMNRZpoCfAKebtc7gf3FE",
	authDomain: "agility-3df3e.firebaseapp.com",
	databaseURL: "https://agility-3df3e.firebaseio.com",
	projectId: "agility-3df3e",
	storageBucket: "agility-3df3e.appspot.com",
	messagingSenderId: "241968433593"
};
var database = firebase.initializeApp(config);

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();

export default database;