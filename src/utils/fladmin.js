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
  async getCampaigns () {
    const res = await axios.get('https://freelabel.net/API/Admin/Marketing/Campaigns/GetAll')
    return res.data.data.content
  },
  async getCampaign (campaignId) {
    var options = new URLSearchParams()
    options.append('campaign_id', campaignId)
    const res = await axios.post(
      'https://freelabel.net/API/Admin/Marketing/Campaigns/GetCampaign',
      options
    )
    return res.data.data.content
  },
  async getFeaturedPlaylists () {
    const res = await axios.get('https://freelabel.net/API/Discover/getFeaturedPlaylists')
    return res.data.data.content
  },
  async getBufferQueue () {
    const res = await axios.get('https://freelabel.net/API/Admin/Marketing/GetBufferQueue')
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
  async addToExclusives (data) {
    var options = new URLSearchParams()
    options.append('media_id', data.id)
    options.append('media_type', data.type)
    const res = await axios.post('https://freelabel.net/API/Admin/Marketing/AddToExclusives', options)
    return res.data.data.profiles
  },
  async approveBufferQueuePost (data) {
    var options = new URLSearchParams()
    options.append('queue_id', data.id)
    return await axios.post('https://freelabel.net/API/Admin/Marketing/Buffer/Approve', options)
  },
  async declineBufferQueuePost (data) {
    var options = new URLSearchParams()
    options.append('queue_id', data.id)
    return await axios.post('https://freelabel.net/API/Admin/Marketing/Buffer/Decline', options)
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
