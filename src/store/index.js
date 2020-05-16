import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        counter: 0,
        booked: [],
        total_price: 0,
        latest_name: ""
    },
    mutations: {
        updateBooking(state, payload){
            console.log('updateBooking() on progress...')
            console.log(state.counter)
            state.booked.push({ id: state.counter, 
                                name: payload.name, 
                                price: payload.price,
                                job: payload.job,
                                imageUrl: payload.imageUrl,
                                date: payload.date })
            state.total_price += payload.price
            state.counter += 1
            state.latest_name = payload.name
            console.log('Successfully push a new booking!')
            console.log('payload: ' + payload)
            console.log('state: '+ state.booked)
        }
    },
    actions: {
        addBooking({commit}, payload){
            console.log('addBooking() is called')
            commit('updateBooking', payload)
        }
    },
    getters: {
        getBookings(state){
            return state.booked
        },
        getTotalPrice(state){
            return state.total_price
        },
        getLatestBooking(state){
            return state.latest_name
        }
    }
})