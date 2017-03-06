import firebase from 'firebase'

export function getFirebaseUid() {
  return firebase.auth().currentUser.uid
}

export function getUserID() {
  return firebase.database().ref('users/' + getFirebaseUid())
    .once('value')
    .then(snapshot => snapshot.val().userID)
}

export function registerUser(user) {
  firebase.database().ref('users/' + getFirebaseUid()).set({
    userID: user.userID,
  })
}

export function registerStation(stationID) {
  getUserID()
    .then(userID => firebase.database().ref('playlists/' + userID).set({ stationID }))
}
