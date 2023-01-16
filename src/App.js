import './App.css';
import Home from './Components/Home';
import { Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import { QueryClient, QueryClientProvider } from 'react-query';
import RestaurantPage from './Components/RestaurantPage';
import Delivery from './Components/Delivery';
import DiningOut from './Components/DiningOut';
import NoMatch from './Components/NoMatch';
import Insights from './Components/Insights';
import { RecoilRoot } from 'recoil';
import LoginSignUp from './Components/LoginSignUp';
import React,{ useState,useContext } from "react";
import ProtectedRoute from './Components/ProtectedRoute';
const myContext=React.createContext();
export default function App() {
  
  const [user,setUser]=useState(null);
  const queryClient = new QueryClient();
  return (
    <div className='page'>
      <RecoilRoot>
      <myContext.Provider value={[user,setUser]}>
        <QueryClientProvider client={queryClient}>
          <Routes>
            <Route path='/' element={<LoginSignUp />}></Route>
            <Route path='/home' element={<ProtectedRoute Component={Home} />}>
              <Route path='delivery' element={<ProtectedRoute Component={Delivery} />}></Route>
              <Route path='diningOut' element={<ProtectedRoute Component={DiningOut} />}></Route>
            </Route>
            <Route path='/home/:type/:id' element={<ProtectedRoute Component={RestaurantPage} />}></Route>
            <Route path='insights' element={<Insights Component={Home} />}></Route>
            <Route path='*' element={<NoMatch />}></Route>
          </Routes>
        </QueryClientProvider>
        </myContext.Provider>
      </RecoilRoot>
    </div>
  );
}

export  {myContext};
