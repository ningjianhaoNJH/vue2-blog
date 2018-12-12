import { login } from '@/api/user';

const user = {
  state: {
    userInfo: {},
  },

  mutations: {
    SET_USER_INFO: (state, payload) => {
      state.userInfo = payload;
    },
  },

  actions: {
    postLogin({ commit }, payload) {
      return new Promise((resolve, reject) => {
        login(payload).then((res) => {
          console.log(res);
          // commit('SET_USER_INFO', res.data);
          resolve();
        }).catch((error) => {
          reject(error);
        });
      });
    },
  },
};

export default user;
