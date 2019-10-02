import axios from 'axios'
export const fladmin = {
  async getQuotas () {
    const res = await axios.get('https://freelabel.net/API/Admin/Quotas')
    return res.data.data.quotas
  },
  async getNotifications () {
    const res = await axios.get('https://freelabel.net/API/Admin/Quotas')
    return res.data.data.status
  },
  async getUncuratedContent () {
    const res = await axios.get('https://freelabel.net/API/Discover/getUncuratedContent')
    return res.data.data.content
  },
  async searchProfile (query) {
    var options = new URLSearchParams()
    options.append('query', query)
    const res = await axios.post('https://freelabel.net/API/Profile/Search', options)
    return res.data.data.profiles
  },
  async getIncompleteChartingProfiles () {
    const res = await axios.get('https://freelabel.net/API/Admin/Function/getIncompleteChartingProfiles')
    let artists = res.data.data.content
    artists = Object.keys(artists).map(function (key) {
      return artists[key]
    })
    return artists
  }
}
