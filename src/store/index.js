import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    msg: 'Vuex desde cero.',
    nombre: 'Grover',
    apellido: 'Vasquez',
    amigos: [],
    amigo: null
  },
  mutations: {
    addAmigo( state){
      state.amigos= [state.amigo, ...state.amigos]
    }
  },
  actions: {
    addAmigoAction(context) {
      context.commit('addAmigo');
    }
  },
  getters: {
    mensaje (state){
      return state.msg;
    },
    nombreCompleto (state) {
      return `${state.nombre} ${state.apellido}`
    }
  },
  modules: {
  }
})
