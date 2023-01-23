import axios from 'axios'
import { useQuery } from 'react-query'
const FetchData = async (type, id) => {
  return await axios.get('http://localhost:4001/' + type + '/' + id);
}
const useRestaurantPageData = (type, id) => {
  return useQuery('type', async () => FetchData(type, id));
}

export default useRestaurantPageData