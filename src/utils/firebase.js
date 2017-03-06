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
        id: userID,
        channelTitle: userID,
        thumbnail: {
          height: 90,
          width: 120,
          url: 'https://i.ytimg.com/vi/S3fTw_D3l10/hqdefault.jpg',
        },
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

export function addVideo(stationId, video) {
  return firebase.database().ref('stations/' + stationId + '/videos/').push(video)
}
