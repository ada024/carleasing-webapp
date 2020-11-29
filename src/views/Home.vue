<template>
  <div class="home">
    <Navbar></Navbar>
    <div id="main-section">
      <Sidebar></Sidebar>
      <CarList></CarList>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import CarList from '@/components/CarList'

export default {
  name: 'Home',
  components: {
    Navbar,
    Sidebar,
    CarList
  }
}
</script>

<style lang="scss" scoped>
.home {

  #main-section {
    display: flex;
    margin-top: 0px;
    width: 80%;
    padding: 10px 0 0 10px;
    font-family: "Roboto Light";
  }

}
</style>
