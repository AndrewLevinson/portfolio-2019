import Vue from 'vue'
import { format } from 'date-fns'

Vue.filter('capitalize', val => val.toUpperCase())

Vue.filter('dateFormat', val =>
  format(new Date(val.replace(/-/g, '/')), 'LLLL dd, yyyy')
)
