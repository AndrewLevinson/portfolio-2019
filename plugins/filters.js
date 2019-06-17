import Vue from 'vue'
import moment from 'moment'

Vue.filter('capitalize', val => val.toUpperCase())

Vue.filter('dateFormat', val => moment(val).format('LL'))
