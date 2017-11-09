<template lang="html">
  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <div class="navbar-header">
        <a class="navbar-brand" href="#">Hacktiv Press</a>
      </div>

      <div class="collapse navbar-collapse">
        <ul class="nav navbar-nav navbar-right">
          <li v-if="getUser"><a  @click="keluar" href="#">Hai, {{getUser}} | Logout</a></li>
          <li v-else ><a href="#" data-toggle="modal" data-target="#myModal">Login or Join</a></li>
        </ul>
      </div>
    </div>
    <modal></modal>
  </nav>
</template>

<script>
import Modal from '@/components/Modal'
import { mapActions } from 'vuex'
export default {
  components: {
    Modal
  },
  computed: {
    getUser () {
      return this.$store.state.username
    }
  },
  methods: {
    ...mapActions([
      'logout'
    ]),
    keluar () {
      this.logout()
    }
  }
}
</script>

<style lang="css">
</style>
