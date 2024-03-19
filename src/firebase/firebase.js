const admin = require('firebase-admin');
const serviceAccount = require('../assets/firebase/lotteryresultfetcher-firebase-adminsdk-d6au7-20edf57e0a.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://lotteryresultfetcher-default-rtdb.firebaseio.com/',
});

module.exports = admin