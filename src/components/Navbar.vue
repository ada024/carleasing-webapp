<template>
  <div id="navbar-wrap" class="card-shadow">
    <div id="navbar">
      <h2>Cars2go</h2>
      <div>
        <h2>Add new Car</h2>
        <input type="text" placeholder="Search for cars">
      </div>
    </div>

  </div>
</template>


<script>


</script>

<style lang='scss' scoped>
#navbar-wrap {
  position: absolute;
  width: 100%;
  z-index: 100;

  #navbar {
    display: flex;
    padding: 15px;
    justify-content: space-between;
    background-color: #22313F;

    h2 {
      margin: 0 1rem 0 0;
      color: white;
      cursor: pointer;
    }

    & > div {
      display: flex;
      flex-grow: 2;
      justify-content: flex-end;

      input {
        width: 20%;
        border: none;
        height: 25px;
        border-radius: 10px;
        box-sizing: border-box;
        outline: none;
        padding: 5px;
      }
    }
  }
}
</style>