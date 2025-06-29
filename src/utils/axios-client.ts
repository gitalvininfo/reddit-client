import axios, {
  AxiosError,
  type AxiosRequestConfig,
  type AxiosResponse,
} from 'axios';

const REDDIT_BASE_URL = import.meta.env.VITE_REDDIT_BASE_URL;

export const apiClient = axios.create({
  baseURL: REDDIT_BASE_URL,
});

export const apiRequest = async (options: AxiosRequestConfig) => {
  const onSuccess = (response: AxiosResponse) => response;
  const onError = (error: AxiosError<{ message: string }>) => {
    return Promise.reject(error);
  };

  return apiClient(options).then(onSuccess).catch(onError);
};
