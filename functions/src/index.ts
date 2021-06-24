import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

const app = admin.initializeApp();

exports.cleanMessages = functions.pubsub
  .schedule('1st monday of month 11:00')
  .onRun(async () => {
    const messagesRef = app.database().ref('mails');
    await messagesRef.remove();
  });
