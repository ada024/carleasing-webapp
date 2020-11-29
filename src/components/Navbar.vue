<template>
  <div id="navbar-wrap" class="card-shadow">
    <div id="navbar">
      <h2 @click="$router.push('/')">Cars2go</h2>
      <div>
        <h2 @click="showModal =true">Add new Car</h2>
        <input v-model="search" type="text" placeholder="Search... (name/description)">
      </div>

      <modal v-if="showModal" @cancel="showModal = !showModal">
        <template v-slot:header>
          <h3 class="m-0" style="color: white">Add new car</h3>
        </template>
        <template v-slot:body>
          <form
              @submit.prevent="addCar"
              ref="carForm"
              id="car-form">
            <label>Title</label>
            <input
                required
                v-model="form.title"
                type="text"
                placeholder="Title"
            />
            <br>
            <label>Price</label>
            <input
                required
                v-model="form.price"
                type="number"
                placeholder="Price"
            />
            <br>
            <label>Image URL</label>
            <input
                required
                v-model="form.img"
                type="text"
                placeholder="Image URL"
            />
            <br>
            <div id="form-inline">
              <label>Persons</label>
              <input
                  required
                  v-model="form.persons"
                  type="text"
                  placeholder="Persons"
              />
              <label>Doors</label>
              <input
                  required
                  v-model="form.doors"
                  type="text"
                  placeholder="Doors"
              />
              <label>Liters per 100 km</label>
              <input
                  required
                  v-model="form.liters_per"
                  type="text"
                  placeholder="Liters per 100 km"
              />
            </div>

            <hr/>
            <label>Description</label>
            <textarea
                required
                v-model="form.description"
                placeholder="Description..."
                rows="6"
            />
          </form>
        </template>
        <template v-slot:footer>
          <button id="add-car" @click="$refs.carForm.requestSubmit()">
            Submit
          </button>
        </template>

      </modal>
    </div>

  </div>
</template>


<script>
import Modal from './Modal';


export default {
  components: {Modal},
  data() {
    return {
      search: '',
      showModal: false,
      form: {
        id: 1,
        title: '',
        price: null,
        img: "",
        persons: null,
        doors: null,
        liters_per: null,
        description: '',
      }
    }
  }, watch: {
    search() {
      this.$store.dispatch("search", this.search)
    }
  }, methods: {
    addCar(evt) {
      console.log(evt)
      evt.preventDefault()

      this.$store.dispatch('addCar', this.form);
      this.showModal = false;

    }
  }
};
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


      }

      .form-innline {
        display: flex;
        flex-flow: row wrap;
        align-items: center;
      }

      .form-inline label {
        margin: 5px 10px 5px 0;
      }

      .form-inline input {
        vertical-align: middle;
        margin: 5px 10px 5px 0;
        padding: 10px;
        background-color: #fff;
        border: 1px solid #ddd;
      }

      @media (max-width: 318px) {
        .form-inline input {
          margin: 10px 0;
        }
      }
    }


    #add-car {
      background-color: #22313F;
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


}
</style>