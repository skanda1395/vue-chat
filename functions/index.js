const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp();

exports.onMessageCreate = functions.firestore.document('messages/{userId}').onCreate((snap, context) => {
  const ref = admin.firestore().collection('messages').orderBy('timestamp');
  console.log('snap:', snap, 'context: ', context);

  ref.onSnapshot(snapshot => {
    let i = 0;
    let size = snapshot.size;
    let sizeToDelete = size - 10;
    console.log('Messages Count: ', size);

    snapshot.forEach((doc) => {
      if(i < sizeToDelete ) {
        doc.ref.delete().then(() => {
          console.log('Document deleted successfully');
        }).catch((error) => {
          console.log('Error removing document' + error);
        })
      }
      i++;
    })
  })
})
