<template lang="html">
  <div class="col-md-6">
    <form class="form-horizontal">
      <div class="form-group">
        <div class="col-sm-12">
          <input v-model="formRegis.username" type="text" class="form-control" placeholder="Username" required>
        </div>
      </div>
      <div class="form-group">
        <div class="col-sm-12">
          <input v-model="formRegis.password" type="password" class="form-control" placeholder="Password" required>
        </div>
      </div>
      <div class="form-group text-right">
        <div class="col-sm-12">
          <button type="button" @click="regis" class="btn btn-danger" data-dismiss="modal">Register</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      formRegis: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    ...mapActions([
      'register'
    ]),
    regis () {
      this.register(this.formRegis)
      this.formRegis.username = ''
      this.formRegis.password = ''
    }
  }
}
</script>

<style lang="css">
</style>
