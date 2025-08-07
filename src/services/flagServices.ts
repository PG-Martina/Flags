import { publicAxiosInstance } from "./axios";

export const getAllFlags = async () => {
  const response = await publicAxiosInstance.get(
    "/all?fields=name,population,region,capital,flags,cca3"
  );
  return response.data;
};

export const getCountryByName = async (name: string) => {
  const response = await publicAxiosInstance.get(`/name/${name}?fullText=true`);
  return response.data[0];
};
