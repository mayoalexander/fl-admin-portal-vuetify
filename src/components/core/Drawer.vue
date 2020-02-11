<template>
  <v-navigation-drawer
    id="app-drawer"
    v-model="inputValue"
    app
    dark
    floating
    persistent
    mobile-break-point="991"
    width="260"
  >
    <v-img
      :src="image"
      :gradient="sidebarOverlayGradiant"
      height="100%"
    >
      <v-layout
        class="fill-height"
        tag="v-list"
        column
      >
        <v-list-tile avatar>
          <v-list-tile-avatar
            color="transparent"
          >
            <img
              :src="logo"
              height="34"
              contain
            >
          </v-list-tile-avatar>
          <v-list-tile-title class="title">
            FLADM.IN
          </v-list-tile-title>
        </v-list-tile>
        <v-divider/>
        <v-list-tile
          v-if="responsive"
        >
          <v-text-field
            v-model="searchQuery"
            class="purple-input search-input"
            label="Search..."
            color="purple"
            @keyup.enter="searchSite()"
          />
        </v-list-tile>
        <v-list-tile
          v-for="(link, i) in links"
          :key="i"
          :to="link.to"
          :active-class="color"
          avatar
          class="v-list-item"
        >
          <v-list-tile-action>
            <v-icon>{{ link.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-title
            v-text="link.text"
          />
        </v-list-tile>
        <!-- <v-list-tile
          disabled
          active-class="primary"
          class="v-list-item v-list__tile--buy"
          to="/upgrade"
        >
          <v-list-tile-action>
            <v-icon>mdi-package-up</v-icon>
          </v-list-tile-action>
          <v-list-tile-title class="font-weight-light">
            Upgrade To PRO
          </v-list-tile-title>
        </v-list-tile> -->
      </v-layout>
    </v-img>
  </v-navigation-drawer>
</template>

<script>
// Utilities
import {
  mapMutations,
  mapState
} from 'vuex'

import { fladmin } from '@/utils/fladmin'

export default {
  data: () => ({
    logo: 'https://freelabel.net/assets/img/fllogo.png',
    searchQuery: null,
    links: [
      {
        to: '/dashboard',
        icon: 'mdi-view-dashboard',
        text: 'Dashboard'
      },
      {
        to: '/curators/uncurated',
        icon: 'mdi-compass',
        text: 'Uncurated'
      },
      {
        to: '/marketing/queue',
        icon: 'mdi-filter',
        text: 'Buffer Queue'
      },
      // {
      //   to: '/marketing/exclusives',
      //   icon: 'mdi-star',
      //   text: 'Exclusives'
      // },
      {
        to: '/marketing/campaigns',
        icon: 'mdi-calendar',
        text: 'Campaigns'
      },
      {
        to: '/services',
        icon: 'mdi-star',
        text: 'Services'
      },
      {
        to: '/marketing/branding',
        icon: 'mdi-store',
        text: 'Branding'
      },
      {
        to: '/services/studios',
        icon: 'mdi-web',
        text: 'Studios'
      },
      // {
      //   to: '/admin/services',
      //   icon: 'mdi-ticket',
      //   text: 'Services'
      // },
      {
        to: '/profiles/top',
        icon: 'mdi-map-marker',
        text: 'Top Artists'
      }
    ],
    responsive: false
  }),
  computed: {
    ...mapState('app', ['image', 'color']),
    inputValue: {
      get () {
        return this.$store.state.app.drawer
      },
      set (val) {
        this.setDrawer(val)
      }
    },
    items () {
      return this.$t('Layout.View.items')
    },
    sidebarOverlayGradiant () {
      return `${this.$store.state.app.sidebarBackgroundColor}, ${this.$store.state.app.sidebarBackgroundColor}`
    }
  },
  mounted () {
    this.onResponsiveInverted()
    window.addEventListener('resize', this.onResponsiveInverted)
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.onResponsiveInverted)
  },
  methods: {
    ...mapMutations('app', ['setDrawer', 'toggleDrawer']),
    onResponsiveInverted () {
      if (window.innerWidth < 991) {
        this.responsive = true
      } else {
        this.responsive = false
      }
    },
    async searchSite () {
      const res = await fladmin.searchProfile(this.searchQuery)
      this.setDrawer(false)
      this.$store.commit('SET_SEARCH_RESULTS', res)
      if (this.$router.currentRoute.path !== '/search') {
        this.$router.push({ name: 'Search' })
      }
    }
  }
}
</script>

<style lang="scss">
  #app-drawer {
    .v-list__tile {
      border-radius: 4px;

      &--buy {
        margin-top: auto;
        margin-bottom: 17px;
      }
    }

    .v-image__image--contain {
      top: 9px;
      height: 60%;
    }

    .search-input {
      margin-bottom: 30px !important;
      padding-left: 15px;
      padding-right: 15px;
    }

    div.v-responsive.v-image > div.v-responsive__content {
      overflow-y: auto;
    }
  }
</style>
