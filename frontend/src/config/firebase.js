// import { getAuth } from 'firebase/auth'
// import { getDatabase } from 'firebase/database'
// import { initializeApp } from 'firebase/app'
// import { getFirestore } from 'firebase/firestore'

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_API_KEY,
//   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_STORGAE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSANGER_SENDER_ID,
//   appId: process.env.REACT_APP_APP_ID,
//   measurementId: process.env.REACT_APP_MEASUREMENT_ID
// }

// const app = initializeApp(firebaseConfig)
// const firebaseAuth = getAuth(app)
// const firebaseDatabase = getDatabase(app)
// const firebaseFirestore = getFirestore(app)

// export { firebaseAuth, firebaseDatabase, firebaseFirestore }
export const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORGAE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSANGER_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID
}
