import firebase from 'firebase'
import config from '../config'

// Initialize Firebase
const firebaseApp = firebase.initializeApp(config.FIREBASE)
const db = firebase.database()

firebase.auth().signInAnonymously()
  .then(() => console.log('Firebase authentication ok'))
  .catch((error) => console.log(`Firebase authentication failed: ${error}`))

export const getUser = () => ({
  userID: firebase.auth().currentUser.uid,
  name: 'testName',
})

// Database resources references
const getStationsRef = () => db.ref('stations')
const getStationRef = stationId => db.ref(`stations/${stationId}`)
const getVideosRef = stationId => db.ref(`stations/${stationId}/videos`)
const getVideoRef = (stationId, key) => db.ref(`stations/${stationId}/videos/${key}`)

export function createStation() {
  const { name, userID } = getUser()
  station = {
    title: `Station by ${name}`,
    id: userID,
    createdBy: name,
    thumbnail: {
      height: 90,
      width: 120,
      url: 'https://unsplash.it/240/180/?random',
    },
    videos: [],
  }
  return firebase.database().ref('stations/' + userID).set(station)
    .then(() => station)
}

export function listAllStations(callback) {
  getStationsRef().on('value', (snapshot) => {
    var stations = []
    snapshot.forEach((station) => {
      const stationObj = station.val()
      const videosObj = stationObj.videos
      var videos = []
      if (videosObj) {
        videos = Object.keys(videosObj).map(k => videosObj[k])
      }
      stations.push({ ...stationObj, videos })
    })
    callback(stations)
  })
}

export function listAllVideos(stationId, callback) {
  getVideosRef(stationId).on('value', (snapshot) => {
    var videos = []
    snapshot.forEach((snap) => {
      videos.push(snap.val())
    })
    if (videos) {
      callback(videos)
    }
  })
}

export function addVideo(stationId, video) {
  var newVideoRef = getVideosRef(stationId).push()
  var newVideo = {
    ...video,
    key: newVideoRef.key,
    nbLikes: 0,
  }
  newVideoRef.set(newVideo)
}

export function getStation(stationId) {
  return firebase.database().ref('stations/' + stationId).once('value')
    .then(snapshot => console.log(snapshot.val()))
}

export function removeFirstVideo(stationId) {
  getVideosRef(stationId).once('value')
    .then(snapshot => Object.keys(snapshot.val())[0])
    .then(firstVideoKey => getVideosRef(stationId).child(firstVideoKey).remove())
}

export function addLikeToVideo(stationId, video) {
  const { userID } = getUser()
  const videoRef = getVideoRef(stationId, video.key)
  var userAlreadyLiked = false
  videoRef.child('likes').once('value')
    .then(snap => {
      if (snap.child(userID).exists()) {
      } else {
        videoRef.child('likes').child(userID).set(userID)
        videoRef.child('nbLikes').transaction(currentVal => currentVal + 1)
      }
    })
}
