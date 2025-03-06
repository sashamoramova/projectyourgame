import axios, {
    AxiosError,
    AxiosInstance,
    AxiosResponse,
    InternalAxiosRequestConfig,
  } from "axios";
  
  interface ExtendedAxiosRequestConfig extends InternalAxiosRequestConfig {
    sent?: boolean;
  }
  
  export const axiosInstance: AxiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API,
    withCredentials: true,
  });
  
  let accessToken = "";
  
  export function setAccessToken(token: string): void {
    accessToken = token;
  }
  
  axiosInstance.interceptors.request.use(
    (config: ExtendedAxiosRequestConfig): ExtendedAxiosRequestConfig => {
      if (config.headers && !config.headers.Authorization) {
        config.headers.Authorization = `Bearer ${accessToken}`;
      }
      return config;
    }
  );
  
  axiosInstance.interceptors.response.use(
    (response: AxiosResponse): AxiosResponse => response,
    async (error: AxiosError) => {
      const prevRequest: ExtendedAxiosRequestConfig | undefined = error.config;
      if (error.response?.status === 403 && prevRequest && !prevRequest.sent) {
        try {
          const response = await axiosInstance.get("/tokens/refresh");
  
          accessToken = response.data.accessToken;
  
          prevRequest.sent = true;
  
          if (prevRequest.headers) {
            prevRequest.headers.Authorization = `Bearer ${accessToken}`;
          }
  
          return axiosInstance(prevRequest);
        } catch (refreshError) {
          return Promise.reject(refreshError);
        }
      }
  
      return Promise.reject(error);
    }
  );
  