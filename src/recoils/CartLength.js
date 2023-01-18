import { selector } from "recoil";
import CartState from "./CartState";
const CartLength = selector({
    key: "CartLength",
    get: ({ get }) => {
      const list = get(CartState);
      return list.length;
    }
  });
  export default CartLength