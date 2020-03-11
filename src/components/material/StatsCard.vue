<template>
  <material-card
    v-bind="$attrs"
    class="v-card--material-stats"
    v-on="$listeners"
  >
    <div class="white--text text-capitalize">
      {{ currentView }}
    </div>

    <v-card
      slot="offset"
      :class="`elevation-${elevation}`"
      :color="color"
      class="pa-4"
      dark
    >
      <v-icon
        size="40"
      >
        {{ icon }}
      </v-icon>
    </v-card>
    <div class="text-xs-right">
      <p
        class="display-1 category grey--text font-weight-light lightGrey--text"
        v-text="title"
      />
      <h3
        class="title display-1 font-weight-light lightGrey--text">
        {{ currentData.current }} <small>/{{ currentData.quota }}</small>
      </h3>
    </div>

    <template slot="actions">
      <v-tabs
        color="darkBlue"
        dark
        slider-color="red"
      >
        <v-tab
          v-for="type in options"
          :key="type"
          ripple
          @click="setStatSetting(type)"
        >
          <span class="text-capitalize">{{ type }}</span>

        </v-tab>
      </v-tabs>
      <v-spacer />
      <v-btn
        v-if="link"
        small
        flat
        class="stat-action"
        @click="cardAction()">
        <span
          :class="subTextColor"
          class="caption font-weight-light"
          v-text="'Details'"
        />
      </v-btn>
      <!--
      <v-btn small flat class="stat-action" @click="setStatSetting('monthly')">
        <span
          :class="subTextColor"
          class="caption font-weight-light"
          v-text="'This Month'"
        />
      </v-btn> -->
    </template>
  </material-card>
</template>

<script>
import Card from './Card'

export default {
  inheritAttrs: false,
  props: {
    ...Card.props,
    quota: {
      type: Object,
      default: undefined
    },
    icon: {
      type: String,
      required: true
    },
    subIcon: {
      type: String,
      default: undefined
    },
    subIconColor: {
      type: String,
      default: undefined
    },
    subTextColor: {
      type: String,
      default: undefined
    },
    subText: {
      type: String,
      default: undefined
    },
    title: {
      type: String,
      default: undefined
    },
    value: {
      type: String,
      default: undefined
    },
    smallValue: {
      type: String,
      default: undefined
    },
    link: {
      type: String,
      default: undefined
    }
  },
  data () {
    return {
      currentView: 'daily',
      options: ['daily', 'monthly']
    }
  },
  computed: {
    currentData () {
      return this.quota[this.currentView]
    }
  },
  mounted () {
    this.setStatSetting('daily')
  },
  methods: {
    setStatSetting (setting) {
      this.currentView = setting
    },
    cardAction () {
      if (this.link) {
        this.$router.push(this.link)
      }
    }
  }
}
</script>

<style lang="scss">
.v-card--material-stats {
  display: flex;
  flex-wrap: wrap;
  position: relative;

  .v-offset {
    display: inline-block;
    flex: 0 1;
    margin-top: 0;
    margin-left: 0;
    margin-right: auto;
    margin-bottom: 0 !important;
    max-width: auto;
    padding: 0 16px 0;
  }

  .v-card {
    border-radius: 4px;
    flex: 0 1 auto;
  }

  .v-card__text {
    display: inline-block;
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
  }

  .v-card__actions {
    flex: 1 0 100%;
  }
}
</style>
