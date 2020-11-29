<template>
<div id="car-container">
  Car list
</div>
</template>

<script>
export default {
name: "CarList"
}
</script>

<style lang='scss' scoped>
#car-container {
  padding-top: 1rem;
  display: flex;
  flex-wrap: wrap;
  flex-grow: 2;
  color: red;
  justify-content: center;
}
</style>