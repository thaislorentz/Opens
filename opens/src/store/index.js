import Vue from 'vue'
import Vuex from 'vuex'

// import customer from './customer'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    name: '',
    phone: '',
    address: {
      postalCode: '',
      street: '',
      number: '',
      complement: '',
      neighborhood: '',
      city: '',
    },
  },
  getters: {
    getCustomer(state) {
      return state
    }
  },
  mutations: {
    updateCustomer(state, customer) {
      if (customer.name) {
        state.name = customer.name
      }
      if (customer.phone) {
        state.phone = customer.phone
      }
      if (customer.address) {
        state.address.postalCode = customer.address.postalCode
        state.address.street = customer.address.street
        state.address.number = customer.address.number
        state.address.complement = customer.address.complement
        state.address.neighborhood = customer.address.neighborhood
        state.address.city = customer.address.city
      }
    },

    clearCustomer(state) {
      state.address.postalCode = ''
      state.address.street = ''
      state.address.number = ''
      state.address.complement = ''
      state.address.neighborhood = ''
      state.customer.address.city = ''
      state.customer.name = ''
      state.customer.phone = ''
    }
  },
  actions: {
    setCustomer({ commit }, customer) {
      commit('updateCustomer', customer)
    },

    clearCustomer({ commit }) {
      commit('clearCustomer')
    }
  }
})
