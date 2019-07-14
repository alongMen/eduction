<template>
  <div>
    <header-common/>
    <main-common/>
    <footerCommon/>
  </div>
</template>

<script>
  import headerCommon from '@/components/common/header-common'
  import mainCommon from '@/components/common/main-common'
  import footerCommon from '@/components/common/footer-common'
  export default {
    name: 'index',
    components: {headerCommon, mainCommon, footerCommon},
    data () {
      return {

      }
    },

    mounted () {

    },

    methods: {

    }
  }
</script>

<style scoped>

</style>
