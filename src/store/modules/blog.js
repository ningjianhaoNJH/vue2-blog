import { blogRequest } from '@/api/blog';

const blogModules = {
  state: {
  },

  mutations: {
  },

  actions: {
    postBlog({ commit }, payload) {
      return new Promise((resolve, reject) => {
        blogRequest(payload).then(() => {
          resolve();
        }).catch((error) => {
          reject(error);
        });
      });
    },
  },
};

export default blogModules;
