import axios from 'axios';

const BASE_URL = 'https://66bb8fe96a4ab5edd638c5b9.mockapi.io/';

const api = axios.create({
  baseURL: BASE_URL,
});

const resurseApi = resursa => {
  return {
    getAll: () => api.get(`${resursa}`),
    get: id => api.get(`${resursa}/${id}`),
    create: data => api.post(`${resursa}`, data),
    update: (id, data) => api.put(`${resursa}/${id}`, data),
    delete: id => api.delete(`${resursa}/${id}`),
  };
};

const tutorsApi = resurseApi('tutors');
const facultiesApi = resurseApi('faculties');

// const BASE_URL_LOGIN = 'https://connections-api.goit.global/';

// const userApi = {
//   signup: async (data) => {
//     const response = await
//   },
//   login: () => {},
//   logout: () => {},
// };

export { tutorsApi, facultiesApi };
