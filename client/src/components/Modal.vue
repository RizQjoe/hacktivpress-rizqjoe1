<template lang="html">
  <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
          <h5 class="text-center" >Login or Join</h5>
          <hr>
          <!-- LOGIN FORM -->
          <login></login>
          <!-- END LOGIN FORM -->
          <!-- REGISTER FROM -->
          <register></register>
          <!-- END REGISTER FROM -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Login from '@/components/Login'
import Register from '@/components/Register'
export default {
  components: {
    Login,
    Register
  }
}
</script>

<style lang="css">
</style>
