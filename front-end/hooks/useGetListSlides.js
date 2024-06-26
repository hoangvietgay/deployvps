import SlideService from "@/services/SlideService";
import { useEffect } from "react";
import { useQuery } from "react-query";
const useGetListSlides = () => {
  const getData = async () => {
    try {
      const response = await SlideService.getListSlides({});
      const data = response.data.data;
      return data;
    } catch (error) {
      throw error;
    }
  };

  const { data, error, isLoading, isError } = useQuery(["get-list-slide"], () => getData());
  useEffect(() => {
    if (isError) {
      throw new Error(error);
    }
  }, [isError]);

  return {
    data,
    isLoading,
    isError,
    error,
  };
};
export default useGetListSlides;
