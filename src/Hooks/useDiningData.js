import axios from 'axios'
import { useQuery } from 'react-query'
const FetchData = async () => {
  return await axios.get('http://localhost:4001/DiningOut?_sort=Rating');
}
const useDiningData = () => {
  return useQuery('Dining', async () => FetchData());
}
export default useDiningData
