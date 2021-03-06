import firebase from 'firebase'
import 'firebase/firestore'

import { firebaseConfig } from 'config/firebase'
import { getChatUserProfileDetails } from './profile'

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig)
}

const firestore = firebase.firestore()

const chatRef = firestore.collection('chats')

export const saveChat = async body => {
  const q1 = chatRef.where('user1', '==', body.user1).where('user2', '==', body.user2).get()

  const q2 = chatRef.where('user2', '==', body.user1).where('user1', '==', body.user2).get()

  const [snapshot1, snapshot2] = await Promise.all([q1, q2])

  if (snapshot1.empty && snapshot2.empty) {
    await chatRef.add(body)
  } else {
    const oldChats = await getChat(body.user1, body.user2)
    oldChats.chat.push(...body.chat)
    console.log('oldChats: ', oldChats)
    await chatRef.doc(oldChats.id).update(oldChats)
  }
}

export const getChat = async (user1, user2) => {
  const q1 = chatRef.where('user1', '==', user1).where('user2', '==', user2).get()
  const q2 = chatRef.where('user2', '==', user1).where('user1', '==', user2).get()
  const [snapshot1, snapshot2] = await Promise.all([q1, q2])

  if (snapshot1.empty && snapshot2.empty) {
    return false
  }

  const usersArray1 = snapshot1.docs
  const usersArray2 = snapshot2.docs

  const sumArray = usersArray1.concat(usersArray2)
  let res = {}
  sumArray.forEach(doc => {
    res = doc.data()
    res.id = doc.id
  })

  return res
}

export const getCurrentUserFriends = async userId => {
  const q1 = chatRef.where('user1', '==', userId).get()
  const q2 = chatRef.where('user2', '==', userId).get()
  const [snapshot1, snapshot2] = await Promise.all([q1, q2])

  if (snapshot1.empty && snapshot2.empty) {
    return false
  }

  const usersArray1 = snapshot1.docs
  const usersArray2 = snapshot2.docs

  const sumArray = usersArray1.concat(usersArray2)

  let res = []
  sumArray.forEach(doc => {
    let tempRes = doc.data()
    tempRes.docId = doc.id
    res.push(tempRes)
  })

  let userIds = []
  res.forEach(item => {
    userIds.push(item.user1)
    userIds.push(item.user2)
  })

  userIds = userIds.filter(item => item !== userId)
  let userIdsSet = '('
  userIds.forEach((item, index) => {
    if (index == 0) {
      userIdsSet += `${item}`
    } else {
      userIdsSet += `, ${item}`
    }
  })
  userIdsSet += ')'

  const { data } = await getChatUserProfileDetails(userIdsSet)
  let dataWithMess = []
  data.forEach((item, index) => {
    dataWithMess.push({ ...item, message: res[index].chat[res[index].chat.length - 1].message })
  })
  return dataWithMess
}

export const getChatRef = () => chatRef
