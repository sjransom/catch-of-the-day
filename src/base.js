import Rebase from 're-base'
import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDRXRSKiAXMsnQTMwrpI0zjk1EEbZrNGd4",
  authDomain: "catch-of-the-day-sjransom.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-sjransom.firebaseio.com"
})

const base = Rebase.createClass(firebaseApp.database())

export { firebaseApp }
export default base