<template>

  <li>
    <div class="car-element">
      <img :src="car.img" alt="Image car">
      <div class="car-info">
        <h3>{{ car.title }}</h3>
        <h4>Description</h4>
        <h5>{{ car.description }}</h5>
        <p>${{ car.price }}</p>
      </div>
      <a href="book.html">
        <button>Book Now</button>
      </a>
    </div>
  </li>

</template>

<script>
export default {
  name: "Car",
  props: {
    car: {
      type: Object,
      default: () => {
      }
    }
  },methods:{

  }
}
</script>

<style lang='scss' scoped>
.car-element {
  display: block;
  margin: 1em;
  padding: 1em;
  border: 2px solid #ccc;
  background: #f7f7f7;

  &:hover {
    background: lightgray;
    color: green;
  }

  img {
    width: 16%;
    float: left;
    cursor: pointer;
  }

  .car-info {
    width: 30%;
    display: inline-block;
  }


}

button {
  width: auto;
  padding: 9px 15px;
  background: #22313F;
  border: 0;
  font-size: 14px;
  color: #F6F6F6
}
</style>