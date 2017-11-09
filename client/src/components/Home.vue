<template lang="html">
  <div class="container-fluid">
    <Headers></Headers>
    <router-view></router-view>
  </div>
</template>

<script>
import Headers from '@/components/Headers'
export default {
  components: {
    Headers
  }
}
</script>

<style lang="css">
</style>
