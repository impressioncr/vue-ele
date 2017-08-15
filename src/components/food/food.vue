<template>
  <div v-show="showFlag" class="food">

  </div>
</template>

<script>
  export default {
    props:{
      food:{
        type: Object
      }
    },
    data() {
      return {
        showFlag: false,
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .food
    position: fixed
    left: 0
    top: 0
    z-index: 30
    width: 100%
    background: #fff
</style>