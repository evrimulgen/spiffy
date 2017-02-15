import ApiUtils from './ApiUtils'

const API_URL = ""

export default {
  getItems: function() {
    return fetch(API_URL)
      .then(ApiUtils.checkStatus)
      .then(response => response.json())
      .catch(e => e)
  },
}
