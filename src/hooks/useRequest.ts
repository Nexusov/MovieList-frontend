import axios, { AxiosError } from 'axios';
import useSWR, { SWRResponse } from 'swr';
import { FetchError } from '../types/types';

interface FetchResponse<T> extends SWRResponse<T, FetchError> {
  isLoading: boolean;
  isError: boolean;
}

const baseURL = import.meta.env.VITE_BASE_API_URL;

const _fetcher = async <T>(url: string): Promise<T> => {
  try {
    const response = await axios.get<T>(url);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError;
      throw {
        status: axiosError.response?.status || 500,
        message: axiosError.message
      };
    } else {
      throw new Error("An unexpected error occurred");
    }
  }
};

const useRequest = <T>(key: string): FetchResponse<T> => {
  const { data, error, mutate, isValidating, isLoading } = useSWR<T, FetchError>(baseURL + key, _fetcher);
  const isError = error !== undefined;

  return { data, error, mutate, isLoading, isError, isValidating };
}

export default useRequest;
