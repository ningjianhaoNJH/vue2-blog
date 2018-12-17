import { login, register, homeData } from '@/api/user';
import { setToken, removeToken } from '@/utils/auth';

const user = {
  state: {
    userInfo: {},
    homeData: {},
  },

  mutations: {
    SET_USER_INFO: (state, payload) => {
      state.userInfo = payload;
    },
    SET_HOME_DATA: (state, payload) => {
      state.homeData = payload;
    },
  },

  actions: {
    postRegister({ commit }, payload) {
      return new Promise((resolve, reject) => {
        register(payload).then(() => {
          resolve();
        }).catch((error) => {
          reject(error);
        });
      });
    },
    postLogin({ commit }, payload) {
      return new Promise((resolve, reject) => {
        login(payload).then((res) => {
          setToken(res.data.token);
          commit('SET_USER_INFO', res.data.userInfo);
          window.localStorage.setItem('userInfo', JSON.stringify(res.data.userInfo));
          resolve();
        }).catch((error) => {
          reject(error);
        });
      });
    },
    logoutHandler({ commit }) {
      removeToken();
      commit('SET_USER_INFO', {});
      window.localStorage.clear();
    },
    getHomeData({ commit }, payload) {
      return new Promise((resolve, reject) => {
        homeData(payload).then((res) => {
          commit('SET_HOME_DATA', res.data);
          resolve();
        }).catch((error) => {
          reject(error);
        });
      });
    },
  },
};

export default user;
