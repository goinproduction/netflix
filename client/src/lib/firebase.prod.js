import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { seedDatabase } from '../seed';

const config = {
  apiKey: 'AIzaSyAusmTYHeJpmjZvgmZUGwNZc0X1hLTcqlg',
  authDomain: 'netflix2-4e52c.firebaseapp.com',
  projectId: 'netflix2-4e52c',
  storageBucket: 'netflix2-4e52c.appspot.com',
  messagingSenderId: '608524471262',
  appId: '1:608524471262:web:53fa4806246e23f40deb4f',
};

const firebase = Firebase.initializeApp(config);

seedDatabase(firebase);
export { firebase };
