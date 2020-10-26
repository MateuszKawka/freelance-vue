import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

// firebase init - add your own config here
const firebaseConfig = {
    apiKey: "AIzaSyCnNUA7VGo9VZF4fR-o-Ubp6I5-7g2LrsU",
    authDomain: "freelance-3b4f5.firebaseapp.com",
    databaseURL: "https://freelance-3b4f5.firebaseio.com",
    projectId: "freelance-3b4f5",
    storageBucket: "freelance-3b4f5.appspot.com",
    messagingSenderId: "272746624072",
    appId: "1:272746624072:web:841e4480230e8c8030d47d"

}
firebase.initializeApp(firebaseConfig)

// utils
const db = firebase.firestore()
const auth = firebase.auth()
const usersCollection = db.collection('users')
// collection references
const notesCollection = db.collection('notes')
// const postsCollection = db.collection('posts')
// const commentsCollection = db.collection('comments')
// const likesCollection = db.collection('likes')

// export utils/refs
export {
    db,
    auth,
    notesCollection,
    usersCollection
}