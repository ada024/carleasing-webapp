// import carList from '../../assets/car-list'
import carsApi from "@/services/carsApi";

const SET_SEARCH = "SET_SEARCH"
const SET_SORT_BY = "SET_SORT_BY"
const ADD_CAR = 'ADD_CAR'
const DELETE_CAR = 'DELETE_CAR'
const SET_CARS = 'SET_CARS'
const state = {
    cars: [],
    search: '',
    sortType: {
        key: 'price',
        order: 'desc'
    }
}

const mutations = {
    [SET_SEARCH](state, search) {
        state.search = search
    },
    [SET_SORT_BY](state, sortType) {
        state.sortType = sortType
    },

    [ADD_CAR](state, car) {
        state.cars.push(car)
    },

    [DELETE_CAR](state, id) {
        //findIndex(index, Quantity to remove)
        state.cars.splice(state.cars.findIndex(car => car.id === id), 1)
    },
    [SET_CARS](state, cars) {
        state.cars = cars;
    }

}

const actions = {
    search({commit}, search) {
        commit(SET_SEARCH, search)
    },
    sortBy({commit}, sortType) {
        commit(SET_SORT_BY, sortType)
    },
    addCar({commit, state}, car) {
        carsApi.addCar(car)
            .then(res => commit(ADD_CAR, res)
            ).catch(err => console.log(err))
    },
    deleteCar({commit}, id) {
        carsApi.deleteCar(id).then(res => commit(DELETE_CAR, res))
            .catch(err => console.log(err))
    },
    fetchCars({commit}) {
        carsApi.getCars()
            .then(res => commit(SET_CARS, res))
            .catch(err => console.log(err))
    }
}

const getters = {
    getCars: state => {
        return state.cars.filter(car => car.title.toLowerCase().indexOf(state.search.toLowerCase()) > -1 || car.description.toLowerCase().indexOf(state.search.toLowerCase()) > -1)
            .sort(compare(state.sortType))
    }
}

const compare = ({key, order}) => {
    return (a, b) => {
        let result = 0; // equal

        if (a[key] > b[key]) {
            result = -1
        }
        if (a[key] < b[key]) {
            result = 1
        }

        if (order === 'asc') return result

        return result * -1
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}

