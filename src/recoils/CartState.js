import { atom } from "recoil";
const arry=(localStorage.getItem('token'))?JSON.parse(localStorage.getItem(localStorage.getItem('token'))):[];
const CartState = atom({
    key: "cartState",
    default: arry
  });

  export default CartState;