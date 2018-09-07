import firebase from 'firebase';
import config from './config';

var database = firebase.initializeApp(config);

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export var dbroot = firebase.database().ref();

export default database;