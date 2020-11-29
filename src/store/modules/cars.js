import carList from '../../assets/car-list'

const state = {
    cars: carList
}

const mutations = {}

const actions = {}

const getters = {
    getCars: state => {
        return state.cars
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}

