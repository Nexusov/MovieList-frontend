import axios, { AxiosError } from 'axios';
import useSWR, { SWRResponse } from 'swr';
import { baseURL } from '../config';

interface FetchResponse<T> extends SWRResponse<T, AxiosError> {
  isLoading: boolean;
  isError: boolean;
}

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
  const { data, error, mutate, isValidating, isLoading } = useSWR<T, AxiosError>(baseURL + key, _fetcher);
  const isError = error !== undefined;

  return { data, error, mutate, isLoading, isError, isValidating };
}

export default useRequest;
