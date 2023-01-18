import axios from 'axios'
import {useQuery} from 'react-query'
async function FetchData(){
    return await axios.get('http://localhost:4001/Delivery?_sort=Rating');
}
export default function useRestaurantsData() {
  return useQuery('Restaurant',async ()=>FetchData());
}
