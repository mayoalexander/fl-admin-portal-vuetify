<template>
  <v-container
    fill-height
    fluid
    grid-list-xl
  >
    <!-- {{ quotas }} -->
    <v-layout
      v-if="quotas"
      wrap>

      <dashboard-graphs v-if="false"/>

      <v-flex
        sm6
        xs12
        md6
        lg4
      >
        <material-stats-card
          class="darkBlue"
          color="red"
          icon="mdi-wallet"
          title="Payments"
          :value="'$' + quotas.payments.daily.current"
          :small-value="'/' + quotas.payments.daily.quota"
          sub-icon="mdi-calendar"
          sub-text="Last 24 Hours"
        />
      </v-flex>
      <v-flex
        sm6
        xs12
        md6
        lg4
      >
        <material-stats-card
          class="darkBlue"
          color="blue"
          icon="mdi-content-copy"
          title="Services"
          :value="quotas.services.daily.current"
          :small-value="'/' + quotas.services.daily.quota"
          sub-icon="mdi-calendar"
          sub-text="Last 24 Hours"
        />
      </v-flex>
      <v-flex
        sm6
        xs12
        md6
        lg4
      >
        <material-stats-card
          class="darkBlue"
          color="purple"
          icon="mdi-upload"
          title="Uploads"
          :value="quotas.uploads.daily.current"
          :small-value="'/' + quotas.uploads.daily.quota"
          sub-icon="mdi-calendar"
          sub-text="Last 24 Hours"
        />
      </v-flex>
      <v-flex
        sm6
        xs12
        md6
        lg6
      >
        <material-stats-card
          class="darkBlue"
          color="teal"
          icon="mdi-pen"
          title="Signup"
          :value="quotas.signup.daily.current"
          :small-value="'/' + quotas.signup.daily.quota"
          sub-icon="mdi-calendar"
          sub-text="Last 24 Hours"
        />
      </v-flex>
      <v-flex
        sm6
        xs12
        md6
        lg6
      >
        <material-stats-card
          class="darkBlue"
          color="orange"
          icon="mdi-eye"
          title="Views"
          :value="quotas.views.daily.current"
          :small-value="'/' + quotas.views.daily.quota"
          sub-icon="mdi-alert"
          sub-icon-color="error"
          sub-text="Get More Space..."
          sub-text-color="text-primary"
        />
      </v-flex>

      <v-flex
        md12
        lg6
      >
        <profile-list
          :top_artists="top_artists"
          :headers="headers"
          class="darkBlue"
          />
      </v-flex>

    </v-layout>
  </v-container>
</template>

<script>
import axios from 'axios'
import DashboardGraphs from '@/components/Dashboard/Graphs'
import ProfileList from '@/components/Profile/List'
export default {
  components: {
    DashboardGraphs,
    ProfileList
  },
  data () {
    return {
      quotas: null,
      top_artists: null,
      dailySalesChart: {
        data: {
          labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
          series: [
            [12, 17, 7, 17, 23, 18, 38]
          ]
        },
        options: {
          lineSmooth: this.$chartist.Interpolation.cardinal({
            tension: 0
          }),
          low: 0,
          high: 50, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
          chartPadding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
          }
        }
      },
      dataCompletedTasksChart: {
        data: {
          labels: ['12am', '3pm', '6pm', '9pm', '12pm', '3am', '6am', '9am'],
          series: [
            [230, 750, 450, 300, 280, 240, 200, 190]
          ]
        },
        options: {
          lineSmooth: this.$chartist.Interpolation.cardinal({
            tension: 0
          }),
          low: 0,
          high: 1000, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
          chartPadding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
          }
        }
      },
      emailsSubscriptionChart: {
        data: {
          labels: ['Ja', 'Fe', 'Ma', 'Ap', 'Mai', 'Ju', 'Jul', 'Au', 'Se', 'Oc', 'No', 'De'],
          series: [
            [542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895]

          ]
        },
        options: {
          axisX: {
            showGrid: false
          },
          low: 0,
          high: 1000,
          chartPadding: {
            top: 0,
            right: 5,
            bottom: 0,
            left: 0
          }
        },
        responsiveOptions: [
          ['screen and (max-width: 640px)', {
            seriesBarDistance: 5,
            axisX: {
              labelInterpolationFnc: function (value) {
                return value[0]
              }
            }
          }]
        ]
      },
      headers: [
        // {
        //   sortable: false,
        //   text: 'ID',
        //   value: 'id'
        // },
        {
          sortable: false,
          text: 'Name',
          value: 'name'
        },
        {
          sortable: false,
          text: 'Instagram',
          value: 'instagram',
          align: 'right'
        },
        {
          sortable: false,
          text: 'Twitter',
          value: 'twitter',
          align: 'right'
        }
      ],
      items: [
        {
          name: 'Dakota Rice',
          country: 'Niger',
          city: 'Oud-Tunrhout',
          salary: '$35,738'
        },
        {
          name: 'Minerva Hooper',
          country: 'Curaçao',
          city: 'Sinaai-Waas',
          salary: '$23,738'
        }, {
          name: 'Sage Rodriguez',
          country: 'Netherlands',
          city: 'Overland Park',
          salary: '$56,142'
        }, {
          name: 'Philip Chanley',
          country: 'Korea, South',
          city: 'Gloucester',
          salary: '$38,735'
        }, {
          name: 'Doris Greene',
          country: 'Malawi',
          city: 'Feldkirchen in Kārnten',
          salary: '$63,542'
        }
      ],
      tabs: 0,
      list: {
        0: false,
        1: false,
        2: false
      }
    }
  },
  methods: {
    complete (index) {
      this.list[index] = !this.list[index]
    }
  },
  mounted () {
    console.log({
      asdlkj: this
    })
    axios.get('https://freelabel.net/API/Admin/Quotas').then((res) => {
      this.quotas = res.data.data.quotas
    })
    axios.get('https://freelabel.net/API/Admin/Function/getIncompleteChartingProfiles').then((res) => {
      let artists = res.data.data.content
      artists = Object.keys(artists).map(function(key) {
        return artists[key];
      });
      this.top_artists = artists
    })
  }
}
</script>
