import Axios from 'axios';

const axios = Axios.create({
  baseURL: 'http://localhost:3000/api',
});

const AuthRequestInterceptor = (config) => {
  const token = localStorage.getItem('jwt');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
};

const SuccessResponseInterceptor = (res) => {
  const { jwt } = res.data;

  if (jwt) {
    localStorage.setItem('jwt', jwt);
  }

  return res.data;
};

const ErrorResponseInterceptor = (err) => {
  /* No internet connection */
  if (err.message.includes('Network')) {
    throw new Error('Network error');
  }

  const { response } = err;
  const { status } = response;

  if (status === 401) {
    localStorage.clear();
    window.location.assign(window.origin);
    throw new Error('Unauthorized');
  }

  if (status === 400) {
    throw new Error('Unauthorized');
  }

  if (status >= 500) {
    throw new Error('Server error');
  }

  throw err;
};

axios.interceptors.request.use(AuthRequestInterceptor);
axios.interceptors.response.use(
  SuccessResponseInterceptor,
  ErrorResponseInterceptor
);

export { axios };
