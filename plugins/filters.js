import Vue from 'vue'
import { format } from 'date-fns'

Vue.filter('capitalize', val => val.toUpperCase())

Vue.filter('dateFormat', val => {
  return format(new Date(val.replace(/-/g, '/')), 'LLLL dd, yyyy')
})

Vue.filter('transformImage', function(image, option) {
  if (!image) return ''
  if (!option) return ''
  let imageService = '//img2.storyblok.com/'
  let path = image.replace('//a.storyblok.com', '')
  image.replace('https:', '')
  return 'https:' + imageService + option + path
})
