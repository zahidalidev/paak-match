import firebase from 'firebase'
import 'firebase/firestore'

import { firebaseConfig } from 'config/firebase'

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig)
}

const firestore = firebase.firestore()

const chatRef = firestore.collection('chats')

export const saveChat = async body => {
  const snapshot = await chatRef
    .where('user1', '==', body.user1)
    .where('user2', '==', body.user2)
    .get()
  if (snapshot.empty) {
    await chatRef.add(body)
  } else {
    const oldChats = await getChat(body.user1, body.user2)
    oldChats.chat.push(...body.chat)
    console.log('oldChats: ', oldChats)
    await chatRef.doc(oldChats.id).update(oldChats)
  }
}

export const getChat = async (user1, user2) => {
  const snapshot = await chatRef.where('user1', '==', user1).where('user2', '==', user2).get()
  if (snapshot.empty) {
    return false
  }

  let res = {}
  snapshot.forEach(doc => {
    res = doc.data()
    res.id = doc.id
  })

  return res
}

export const getChatRef = () => chatRef

// import { addDoc, collection, doc, deleteDoc, getDocs, updateDoc } from 'firebase/firestore'
// import { firebaseFirestore } from 'config/firebase'

// export const signup = async (name, title, email, contact, image) => {
//   await addDoc(collection(firebaseFirestore, 'chat'), {
//     uid: user.uid,
//     name,
//     title,
//     email,
//     contact,
//     image
//   })

//   return { email: user.email }
// }

// export const getUsers = async () => {
//   const snapshot = await getDocs(collection(firebaseFirestore, 'chat'))
//   const allUsers = []
//   snapshot.docs.map(doc => {
//     allUsers.push({ ...doc.data(), id: doc.id })
//   })

//   return allUsers
// }

// export const updateUser = async user => {
//   const { uid, name, title, email, contact, password } = user
//   const userRef = doc(firebaseFirestore, 'chat', uid)
//   return await updateDoc(userRef, {
//     uid,
//     name,
//     title,
//     email,
//     contact,
//     password
//   })
// }

// export const removeUser = async uid => {
//   const userRef = doc(firebaseFirestore, 'chat', uid)
//   return await deleteDoc(userRef)
// }
