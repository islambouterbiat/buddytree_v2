import axios from 'axios';

export const baseUrl = "https://buddytree-api-dev.herokuapp.com/api/topics_all";

export const fetchApi = async () => {
  const { data } = await axios.get(baseUrl);
  return data;
};
