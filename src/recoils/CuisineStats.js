import { atom } from "recoil";
let arry;
if(localStorage.getItem('token')){
  arry=JSON.parse(localStorage.getItem('cuisine'+(localStorage.getItem('token'))));
}
else{
  arry=[0,0,0,0];
}
const CuisineStats = atom({
    key: "cuisines",
    default: arry
  });

  export default CuisineStats;