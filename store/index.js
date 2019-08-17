import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      section: 'all',
      stories: null
    }),
    mutations: {
      setSection(state, section) {
        state.section = section
      },
      setStories(state, data) {
        state.stories = data
      }
    },
    getters: {
      section: state => state.section,
      stories: state => state.stories
    }
  })
}

export default createStore
