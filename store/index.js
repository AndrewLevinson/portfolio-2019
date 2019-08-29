export const state = () => ({
  section: 'home',
  work: null,
  blog: null,
  name: null
})

export const mutations = {
  setSection(state, section) {
    state.section = section
  },
  setWork(state, data) {
    state.work = data
  },
  setBlog(state, data) {
    state.blog = data
  },
  setName(state, data) {
    state.name = data
  }
}

export const getters = {
  section: state => state.section,
  work: state => state.work,
  blog: state => state.blog,
  name: state => state.name
}
