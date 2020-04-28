import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    msg: 'Vuex desde cero.',
    nombre: 'Grover',
    apellido: 'Vasquez',
    amigos: []
    //amigo: null                   sin argumentos
  },
  mutations: {
    addAmigo( state, amigo){          // con argumentos
      state.amigos= [amigo, ...state.amigos]
    },
    delAmigo(state, index){
      state.amigos.splice(index, 1);  //borra el elemento indicado por el índice que viene desde HelloWorld.vue
    }
  },
  actions: {
    //addAmigoAction(context) {           sin argumentos
      //context.commit('addAmigo');       sin argumentos
    addAmigoAction(context, amigo){     // con argumentos
      context.commit('addAmigo', amigo);
    },
    delAmigoAction(context, index){
      context.commit('delAmigo', index);    //llama a mutations pasando el index
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
