import './App.css';
import Home from './Components/Home';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import RestaurantPage from './Components/RestaurantPage';
import Delivery from './Components/Delivery';
import DiningOut from './Components/DiningOut';
import NoMatch from './Components/NoMatch';
import Insights from './Components/Insights';
import { RecoilRoot } from 'recoil';
import LoginSignUp from './Components/LoginSignUp';
import ProtectedRoute1 from './Components/ProtectedRoute1';
import ProtectedRoute2 from './Components/ProtectedRoute2';
import Profile from './Components/Profile';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Navbar from './Components/Navbar';
export default function App() {

  const queryClient = new QueryClient();
  return (

    <div className='page'>
      <RecoilRoot>
        <QueryClientProvider client={queryClient}>
          <Navbar/>
          <Routes>
            <Route path='/' element={<ProtectedRoute2 Component={LoginSignUp} />}>
              <Route path='login' element={<ProtectedRoute2 Component={Login} />}></Route>
              <Route path='signup' element={<ProtectedRoute2 Component={Signup} />}></Route>
            </Route>
            <Route path='/home' element={<ProtectedRoute1 Component={Home} />}>
              <Route path='delivery' element={<ProtectedRoute1 Component={Delivery} />}></Route>
              <Route path='diningOut' element={<ProtectedRoute1 Component={DiningOut} />}></Route>
            </Route>
            <Route path='/home/:type/:id' element={<ProtectedRoute1 Component={RestaurantPage} />}></Route>
            <Route path='insights' element={<ProtectedRoute1 Component={Insights} />}></Route>
            <Route path='profile' element={<ProtectedRoute1 Component={Profile} />}></Route>
            <Route path='*' element={<NoMatch />}></Route>
          </Routes>
        </QueryClientProvider>
      </RecoilRoot>
    </div>
  );

}

