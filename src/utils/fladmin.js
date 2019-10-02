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
  async getFeaturedPlaylists () {
    const res = await axios.get('https://freelabel.net/API/Discover/getFeaturedPlaylists')
    return res.data.data.content
  },
  async searchProfile (query) {
    var options = new URLSearchParams()
    options.append('query', query)
    const res = await axios.post('https://freelabel.net/API/Profile/Search', options)
    return res.data.data.profiles
  },
  async addToBufferQueue (data) {
    var options = new URLSearchParams()
    options.append('media_id', data.id)
    options.append('media_type', data.type)
    options.append('status', 0)
    options.append('data', data)
    const res = await axios.post('https://freelabel.net/API/Admin/Marketing/Buffer/AddToQueue', options)
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
