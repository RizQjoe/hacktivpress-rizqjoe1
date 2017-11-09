<template lang='html'>
  <div class='container'>
    <post></post>
    <div class='list-group'>
      <div v-for='article in articles' class='list-group-item'>
        <h4 class='list-group-item-heading'>{{article.title}}</h4>
        <p class='list-group-item-text'>ini ....</p>
        <p>By: {{article.author.username}}</p>

          <router-link :to="{ name: 'Details', params: { id: article._id } }"><button class='btn btn-info' type='button' name='button'>Details</button></router-link>
          <button v-if='user == article.author._id' class='btn btn-danger' type='button' @click='deleteArt(article._id)' name='button'>Delete</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Post from '@/components/Post'
export default {
  components: {
    Post
  },
  computed: {
    articles () {
      return this.$store.state.articles
    },
    user () {
      return this.$store.state.id
    }
  },
  methods: {
    ...mapActions([
      'getAllArticles',
      'deleteArticle'
    ]),
    deleteArt (id) {
      this.deleteArticle(id)
    }
  },
  created () {
    this.getAllArticles()
  }
}
</script>

<style lang='css'>
</style>
