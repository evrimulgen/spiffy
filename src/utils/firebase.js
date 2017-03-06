import firebase from 'firebase'

export function getFirebaseUid() {
  return firebase.auth().currentUser.uid
}

export function getUserID() {
  return firebase.database().ref('users/' + getFirebaseUid()).once('value')
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

export function createStation() {
  return getUserID()
    .then(userID => {
      station = {
        title: userID,
        videos: [],
      }
      firebase.database().ref('stations/' + userID).set(station)
      return station
    })
}

export function listAllStations(callback) {
  firebase.database().ref('stations').on('value', (snapshot) => {
    var stations = snapshot.val()
    stations = Object.keys(stations).map(k => stations[k])
    callback(stations)
  })
}
