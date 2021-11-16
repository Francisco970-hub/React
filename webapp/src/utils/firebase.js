import firebase from "firebase/compat/app";
//import messaging from "firebase/compat/messaging";
import firebaseConfig from "./firebaseConfig";

const app = firebase.initializeApp(firebaseConfig);
export const fMessaging = app.messaging();

export const subscribeToTopic = (topicName, handler = () => {}) =>
  fMessaging.getToken().then((currentToken) => {
    if (currentToken) {
      //const FIREBASE_API_KEY = `AAAAJkP2TWg:APA91bFdRVo_T3PdUbgJxhEGGqokBANiShIv8yF6b1j0KA8F4BdQP7z7f1D4OOe31rUSfw2f8JW4-xYm1sAHeSmA86PJ59ODxtkA9VIMaymsOBYmILU2Mc1ATj5jOwYQIdyM_XSNebym`;
      // Subscribe to the topic
      const topicURL = `https://iid.googleapis.com/iid/v1/${currentToken}/rel/topics/`;
      return fetch({
        url: topicURL,
        method: "POST",
        headers: {
          Authorization: `key=${'AAAAJkP2TWg:APA91bFdRVo_T3PdUbgJxhEGGqokBANiShIv8yF6b1j0KA8F4BdQP7z7f1D4OOe31rUSfw2f8JW4-xYm1sAHeSmA86PJ59ODxtkA9VIMaymsOBYmILU2Mc1ATj5jOwYQIdyM_XSNebym'}`,
        },
      })
        .then((response) => {
          /*fMessaging.onMessage(
            (payload) => {
              handler(payload);
            },
            (error) => {
              console.log(error);
            }
          );*/
        })
        .catch(() => {
          console.error(`Can't subscribe to ${topicName} topic`);
        });
    }
  });

  export default firebase;

  //'egV7ttGiP-ifiNnppI70CN:APA91bF741ZldL21fNjjXKgKOLtJ6wBEaqq-uWYXxgCICT-BRL6HpvLtvrRMPDkydB0KER0DNfENy6vgeCTaLLKjdwFvCh1rCYlveJL1yj2yxjJ-qVwt5kQZYA1P1PewEN17cSvxdHMd
