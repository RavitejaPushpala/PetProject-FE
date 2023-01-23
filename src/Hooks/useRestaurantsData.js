import axios from 'axios'
import { useQuery } from 'react-query'
const FetchData = async () => {
  return await axios.get('http://localhost:4001/Delivery?_sort=Rating');
}
const useRestaurantsData = () => {
  return useQuery('Restaurant', async () => FetchData());
}

export default useRestaurantsData