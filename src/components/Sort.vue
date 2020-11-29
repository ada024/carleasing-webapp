<template>
<div id="sort">
  <h3>Sort by: </h3>
  <p>Price low</p>
  <p>Price high</p>
  <p>Persons few</p>
  <p>Persons many</p>
</div>
</template>

<script>
export default {
name: "Sort"
}
</script>

<style lang='scss' scoped>
#sort {
  text-align: left;
  color: rgb(143, 143, 143);
  cursor: pointer;

  p {
    margin-left: 10px;
  }
}
</style>