import axios from 'axios'
export const fladmin = {
  async getQuotas () {
    const res = await axios.get('https://freelabel.net/API/Admin/Quotas')
    return res.data.data.quotas
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
