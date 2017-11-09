<template>
 <div class="list-group">

    <div v-if="getUser == getDetails.author" class="list-group-item">
      <div class="form-group">
          <input v-bind:value="getDetails.title" type="text" class="form-control" placeholder="Username" required>
      </div>
      <div class="form-group">
          <input v-bind:value="getDetails.content" type="text" class="form-control" placeholder="Content" required>
      </div>
      <div class="form-group">
          <input v-bind:value="getDetails.category" type="text" class="form-control" placeholder="Category" required>
      </div>
      <div class="form-group">
        <button class="btn btn-success" type="button" name="button">Edit</button>
      </div>
    </div>

  <div v-else class="list-group-item">
      <h4 class="list-group-item-heading">Title: {{ getDetails.title }}</h4>
      <p class="list-group-item-text">Content: {{ getDetails.content }} </p>
      <p class="list-group-item-text">Category:  {{ getDetails.category }} </p>
    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  props: ['id'],
  data () {
    return {
      fromEdit: {
        title: '',
        content: '',
        category: ''
      }
    }
  },
  computed: {
    getUser () {
      return this.$store.state.id
    },
    getDetails () {
      return this.$store.state.article
    }
  },
  methods: {
    ...mapActions([
      'getOneArticle'
    ])
  },
  mounted () {
    this.getOneArticle(this.id)
  }
}
</script>

<style lang="css">

</style>
