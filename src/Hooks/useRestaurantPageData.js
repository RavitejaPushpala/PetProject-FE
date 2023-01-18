import axios from 'axios'
import {useQuery} from 'react-query'
async function FetchData(type,id){
    return await axios.get('http://localhost:4001/'+type+'/'+id);
}
export default function useRestaurantPageData(type,id) {
  return useQuery('type',async ()=>FetchData(type,id));
}
