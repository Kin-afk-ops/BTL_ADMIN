import { createStore } from "vuex";

const store = createStore({
  state: {
    staff: null,
  },

  getters: {
    staff: (state) => {
      return state.staff;
    },
  },

  actions: {
    staff(context, staff) {
      context.commit("staff", staff);
    },
  },
  mutations: {
    staff(state, staff) {
      state.staff = staff;
    },
  },
});

export default store;
