import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      section: 'all',
      work: null,
      blog: null
    }),
    mutations: {
      setSection(state, section) {
        state.section = section
      },
      setWork(state, data) {
        state.work = data
      },
      setBlog(state, data) {
        state.blog = data
      }
    },
    getters: {
      section: state => state.section,
      work: state => state.work,
      blog: state => state.blog
    }
  })
}

export default createStore
