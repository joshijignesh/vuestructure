<template>
  <div class="dashboard">
    <Header></Header>
    <Drawer></Drawer>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Drawer from '@/components/Drawer'
export default {
  components: {
    Footer,
    Header,
    Drawer
  }
};
</script>

<style>
</style>