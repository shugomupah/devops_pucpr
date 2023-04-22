import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAubCn8PV8WfGx80El03g0ycHzkWXOj_UY2",
    authDomain: "pucpr-9735b.firebaseapp.com",
    projectId: "pucpr-9735b",
    storageBucket: "pucpr-9735b.appspot.com",
    messagingSenderId: "47829678757",
    appId: "1:47829678757:web:02960533c0bfb0c6756b4c"
  };

  if (!firebase.apps.length) firebase.initializeApp(firebaseConfig);

  export default firebase;