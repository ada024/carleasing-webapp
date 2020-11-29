<template>
<div id="sidebar">
  <Sort/>



</div>
</template>

<script>
import Sort from './Sort'

export default  {
  components:{
    Sort
  }
};

</script>


<style lang='scss' scoped>
#sidebar {
  padding-top: 3rem;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  min-width: 150px;
  max-width: 150px;
  flex-grow: 1;
  background-color: #191c1f;
  justify-content: left;

  & > button {
    margin-top: 20px;
    height: 30px;
    background-color: #5eb85e;
    border: none;
    text-transform: uppercase;
    font-weight: 600;
    border-radius: 10px;
    outline: none;
    cursor: pointer;
  }

  #car-form {
    display: flex;
    flex-direction: column;
    text-align: left;

    & > div {
      display: flex;
      flex-direction: column;

      #car-input {
        display: flex;
        justify-content: space-between;
      }
    }

    .add-car {
      background-color: green;
      text-align: center;
      color: white;
      margin-left: 5px;
      height: 100%;
      padding: 2px 10px;
      font-size: 20px;
      padding: 1re;
      align-self: center;
      cursor: pointer;
    }
  }

  #add-car {
    background-color: #5eb85e;
    border: none;
    padding: 5px;
    width: 70px;
    color: white;
    border-radius: 10px;
    cursor: pointer;
    text-transform: uppercase;
    outline: none;
  }
}
</style>


