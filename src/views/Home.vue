<template>
  <div class="home">

    <Navbar/>
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
  display: flex;
  flex-direction: column;

  #main-section {
    display: flex;
    margin-top: 50px;
  }
}
</style>
