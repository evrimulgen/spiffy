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

export function registerStation(station) {
  getUserID()
    .then(userID => firebase.database().ref('stations/' + userID).set(station))
}

export function getSpiffyStations() {
  return firebase.database().ref('stations')
    .once('value')
    .then(stations => stations.val())
    .then(stations => Object.keys(stations).map(k => stations[k]))
}
