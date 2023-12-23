import { useQuery } from "@tanstack/react-query";
export const backendURL = "https://equi-juris-associates-backend.vercel.app";
const useGetData = (url) => {
  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: [backendURL + url],
    queryFn: async () => {
      const res = await fetch(backendURL + url, {
        headers: {
          Authorization: localStorage.getItem("access_token"),
        },
      });
      const resData = await res.json();
      return resData;
    },
  });
  return { data, isLoading, isError, refetch };
};

export default useGetData;
