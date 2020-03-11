<template>
  <v-container
    fill-height
    fluid
    grid-list-xl
  >

    <loading-spinner v-if="!quotas" />

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
        <!-- color="red" -->
        <material-stats-card
          :quota="quotas.payments"
          :value="'$' + quotas.payments.daily.current.toString()"
          :small-value="'/' + quotas.payments.daily.quota"
          class="darkBlue"
          color="grey"
          icon="mdi-wallet"
          title="Payments"
          sub-icon="mdi-calendar"
          sub-text="Today"
        />
      </v-flex>
      <v-flex
        sm6
        xs12
        md6
        lg4
      >
        <material-stats-card
          :quota="quotas.services"
          :value="quotas.services.daily.current.toString()"
          :small-value="'/' + quotas.services.daily.quota"
          class="darkBlue"
          color="blue"
          icon="mdi-content-copy"
          title="Services"
          sub-icon="mdi-calendar"
          sub-text="Today"
          link="/services"
        />
      </v-flex>
      <v-flex
        sm6
        xs12
        md6
        lg4
      >
        <material-stats-card
          :quota="quotas.uploads"
          :value="quotas.uploads.daily.current.toString()"
          :small-value="'/' + quotas.uploads.daily.quota"
          class="darkBlue"
          color="purple"
          icon="mdi-upload"
          title="Uploads"
          sub-icon="mdi-calendar"
          sub-text="Today"
        />
      </v-flex>
      <v-flex
        sm6
        xs12
        md6
        lg6
      >
        <material-stats-card
          :quota="quotas.signup"
          :value="quotas.signup.daily.current.toString()"
          :small-value="'/' + quotas.signup.daily.quota"
          class="darkBlue"
          color="teal"
          icon="mdi-pen"
          title="Signups"
          sub-icon="mdi-calendar"
          sub-text="Today"
          link="/admin/clients"
        />
      </v-flex>
      <v-flex
        sm6
        xs12
        md6
        lg6
      >
        <material-stats-card
          :quota="quotas.views"
          :value="quotas.views.daily.current.toString()"
          :small-value="'/' + quotas.views.daily.quota"
          class="darkBlue"
          color="orange"
          icon="mdi-eye"
          title="Views"
          sub-icon="mdi-alert"
          sub-text="Get More Space..."
          link="/profiles/top"
        />
      </v-flex>
      <v-flex
        v-if="quotas.scans"
        sm6
        xs12
        md6
        lg6
      >
        <material-stats-card
          :quota="quotas.scans"
          :value="quotas.scans.daily.current.toString()"
          :small-value="'/' + quotas.scans.daily.quota"
          class="darkBlue"
          color="green"
          icon="mdi-qrcode"
          title="Scans"
          sub-icon="mdi-alert"
          sub-text="Get More Space..."
        />
      </v-flex>

      <v-flex
        md12
        lg6
      >
        <profile-list
          v-if="topArtists"
          :top_artists="topArtists"
          :headers="headers"
          class="darkBlue"
        />
      </v-flex>

    </v-layout>
  </v-container>
</template>

<script>
import DashboardGraphs from '@/components/Dashboard/Graphs'
import ProfileList from '@/components/Profile/List'
import { fladmin } from '@/utils/fladmin'
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
  computed: {
    topArtists () {
      return this.top_artists
    }
  },
  async mounted () {
    const quotas = await fladmin.getQuotas()
    this.quotas = quotas
  },
  methods: {
    complete (index) {
      this.list[index] = !this.list[index]
    }
  }
}
</script>
