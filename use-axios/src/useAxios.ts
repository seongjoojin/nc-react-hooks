import defaultAxios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { useEffect, useState } from "react";

interface Istate {
  loading: boolean;
  error: any;
  data: any;
}

export const useAxios = (
  options: AxiosRequestConfig,
  axiosInstance: AxiosInstance = defaultAxios
) => {
  const [state, setState] = useState<Istate>({
    loading: true,
    error: null,
    data: null
  });
  const refetch = () => {
    setState({
      ...state,
      loading: true
    });
    setTrigger(Date.now());
  };
  const [trigger, setTrigger] = useState<number>(0);
  useEffect(() => {
    axiosInstance(options)
      .then(data => {
        setState({
          ...state,
          loading: false,
          data
        });
      })
      .catch(error => {
        setState({
          ...state,
          loading: false,
          error
        });
      });
  }, [trigger]);
  return { ...state, refetch };
};
