import axios from "axios";
import i18next from "i18next";
// ----------------------------------------------------------------------

const axiosInstance = axios.create({});

axiosInstance.interceptors.request.use(
  (config: any) => {
    // Do something before request is sent
    const lang = i18next.language ||"en";
    const headers = {
      ...config.headers,
      "x-lang": lang,

      "x-os": "dapp",
    };
    let newConfig = {
      ...config,
      headers,
    };
    //console.log(newConfig);
    return newConfig;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status == 403) {
      // Expire or invalid token --> logout
      // TODO: clear token and go back to login home page
      localStorage.removeItem("user");
      // delete axios.defaults.headers.common.Authorization;

      // goto home page
      window.location.replace(window.location.origin);

      return Promise.reject(error);
    } else {
      return Promise.reject(error);
    }
  }
);

export function setBearerToken(token: string | null) {
  if (token) {
    //console.log(`setBearerToken: ${token}`)
    axiosInstance.interceptors.request.use(
      (config) => {
        // @ts-ignore
        config.headers["Authorization"] = `Bearer ${token}`;
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
  } else {
    axiosInstance.interceptors.request.use(
      (config) => {
        // @ts-ignore
        config.headers["Authorization"] = null;
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
  }
}

export default axiosInstance;
