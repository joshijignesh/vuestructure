<template>
  <div>
      Home
  </div>
</template>

<script>
export default {
  data(){
    return {
      user: null
    }
  },
  mounted(){
    this.getData()
  },
  methods: {
    async getData(){
      try {
        this.user = await this.$api.user.get()
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<style>

</style>