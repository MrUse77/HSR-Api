import axios from "axios";

const createService = () => {
  const url = import.meta.env.VITE_API_URL;
  const baseURL = url + "/personajes";
  const getPersonajes = async () => {
    const response = await axios.get(`${baseURL}/get`);
    return response.data;
  };
  const getByParams = async (params) => {
    const response = await axios.get(`${baseURL}/get/${params}`);
    return response.data;
  };
  return { getPersonajes, getByParams };
};
const personajesService = createService();
export default personajesService;
