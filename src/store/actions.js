export default {
  addPet: (context, payload) => {
    context.commit('appendPet', payload) /* this call to contxt.commit will create a new mutaion ('appendPet' in this case) */
    /* you can directly use commit as -> e.g. ({ commit }, pet) => { ... */
  }
}
