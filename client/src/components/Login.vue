<template lang="html">
  <div class="col-md-6">
    <form class="form-horizontal">
      <div class="form-group">
        <div class="col-sm-12">
          <input v-model="formLogin.username" type="text" class="form-control" placeholder="Username" required>
        </div>
      </div>
      <div class="form-group">
        <div class="col-sm-12">
          <input v-model="formLogin.password" type="password" class="form-control" placeholder="Password" required>
        </div>
      </div>
      <div class="form-group text-right">
        <div class="col-sm-12">
          <button @click="login" type="button" class="btn btn-danger" data-dismiss="modal">Login</button>
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
      formLogin: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    ...mapActions([
      'loginBlog'
    ]),
    login () {
      this.loginBlog(this.formLogin)
    }
  }
}
</script>

<style lang="css">
</style>
