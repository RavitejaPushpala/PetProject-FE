import { atom } from "recoil";
const UserDetails = atom({
    key: "user",
    default: localStorage.getItem('token')
  });

  export default UserDetails;