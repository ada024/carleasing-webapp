import carList from '../../assets/car-list'
const  SET_SEARCH = "SET_SEARCH"
const state = {
    cars: carList,
    search: ''
}

const mutations = {
    [SET_SEARCH](state, search){
        state.search = search
    }
}

const actions = {
    search({commit}, search){
        commit(SET_SEARCH,search)
    }
}

const getters = {
    getCars: state => {
        return state.cars.filter(car =>car.title.toLowerCase().indexOf(state.search.toLowerCase()) > -1 || car.description.toLowerCase().indexOf(state.search.toLowerCase()) > -1)
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}

