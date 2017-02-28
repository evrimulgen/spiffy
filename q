[1mdiff --git a/src/actions/CreateStationActions.js b/src/actions/CreateStationActions.js[m
[1mindex b04e454..849922c 100644[m
[1m--- a/src/actions/CreateStationActions.js[m
[1m+++ b/src/actions/CreateStationActions.js[m
[36m@@ -15,7 +15,14 @@[m [mexport function stationCreated(title) {[m
       type: t.CREATE_STATION_REQUEST,[m
     })[m
     createPlaylist(title, accessToken)[m
[31m-      .then(res => console.log(res))[m
[31m-      .catch(err => console.log(err))[m
[32m+[m[32m      .then(response => dispatch({[m
[32m+[m[32m        type: t.CREATE_STATION_SUCCESS,[m
[32m+[m[32m        payload: response,[m
[32m+[m[32m      }))[m
[32m+[m[32m      .catch(error => dispatch({[m
[32m+[m[32m        type: t.CREATE_STATION_FAILURE,[m
[32m+[m[32m        payload: error,[m
[32m+[m[32m        error: true,[m
[32m+[m[32m      }))[m
   }[m
 }[m
[1mdiff --git a/src/reducers/CreateStationReducer.js b/src/reducers/CreateStationReducer.js[m
[1mindex a4c6a56..c281c39 100644[m
[1m--- a/src/reducers/CreateStationReducer.js[m
[1m+++ b/src/reducers/CreateStationReducer.js[m
[36m@@ -8,6 +8,8 @@[m [mfunction CreateStationReducer(state = initialState, action) {[m
   switch (action.type) {[m
     case t.TITLE_CHANGED:[m
       return { ...state, title: action.payload }[m
[32m+[m[32m    case t.CREATE_STATION_SUCCESS:[m
[32m+[m[32m      return { ...state, ...action.payload }[m
     default:[m
       return state[m
   }[m
