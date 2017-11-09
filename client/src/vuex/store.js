import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const initialState = {
  articles: [],
  article: '',
  username: localStorage.getItem('username'),
  id: localStorage.getItem('id')
}

export default new Vuex.Store({
  state: {
    ...initialState
  },
  mutations: {
    setArticles (state, payload) {
      state.articles = payload
    },
    setArticle (state, payload) {
      state.article = payload
    },
    pushArticle (state, payload) {
      state.articles.push(payload)
    },
    setUser (state, payload) {
      state.username = payload
    },
    setId (state, payload) {
      state.id = payload
    },
    clearState (state) {
      state.id = ''
      state.username = ''
      localStorage.clear()
    },
    setNewData (state, id) {
      const newData = state.articles.filter(function (article) {
        return article._id !== id
      })

      state.articles = newData
    }
  },
  actions: {
    getAllArticles ({ commit }) {
      axios
        .get('http://localhost:3000/articles')
        .then(response => {
          commit('setArticles', response.data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    getOneArticle ({ commit }, id) {
      axios
        .get(`http://localhost:3000/articles/${id}`)
        .then(response => {
          commit('setArticle', response.data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    postNewArticle ({ commit }, payload) {
      axios
        .post('http://localhost:3000/articles', {
          title: payload.title,
          content: payload.content,
          category: payload.category,
          author: payload.author
        })
        .then(response => {
          commit('pushArticle', response.data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    loginBlog ({ commit }, payload) {
      axios
        .post('http://localhost:3000/user/login', {
          username: payload.username,
          password: payload.password
        })
        .then(response => {
          if (response.data) {
            localStorage.setItem('token', response.data.token)
            localStorage.setItem('id', response.data.id)
            localStorage.setItem('username', response.data.username)
            commit('setUser', response.data.username)
            commit('setId', response.data.id)
          }
          console.log(response)
        })
        .catch(err => {
          console.log(err)
        })
    },
    register ({ commit }, payload) {
      axios
        .post('http://localhost:3000/user/register', {
          username: payload.username,
          password: payload.password
        })
        .then(response => {
          console.log('register success')
        })
        .catch(err => {
          console.log(err)
        })
    },
    logout ({ commit }) {
      commit('clearState')
    },
    deleteArticle ({ commit }, id) {
      axios
        .delete(`http://localhost:3000/articles/${id}`, {
          headers: {
            token: localStorage.getItem('token')
          }
        })
        .then(response => {
          console.log(response)
          commit('setNewData', id)
        })
        .catch(err => {
          console.log(err)
        })
    },
    editArticl ({ commit }, payload) {
      axios
        .edit(`http://localhost:3000/articles/${payload.id}`, {
          title: payload.title,
          content: payload.content,
          category: payload.category
        })
        .then(response => {
          console.log('edited')
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
})
