import firebase from 'firebase'
import config from '../config'
import { getUser } from '../selectors'

// Initialize Firebase
const firebaseApp = firebase.initializeApp(config.FIREBASE)
const db = firebase.database()

// Database resources references
const getStationsRef = () => db.ref('stations')
const getStationRef = stationId => db.ref(`stations/${stationId}`)
const getVideosRef = stationId => db.ref(`stations/${stationId}/videos`)

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
  return firebase.database().ref('stations/' + stationId + '/videos/').push(video)
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
