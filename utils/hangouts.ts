import axios from 'axios'

// export const baseUrl = "https://buddytree-api-dev.herokuapp.com/api/topics_all";
export const baseUrl =
  'https://buddytree-api-dev.herokuapp.com/api/containers_all/1'

export const fetchApi = async () => {
  const { data } = await axios.get(baseUrl)
  return data
}
