import './App.css';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import Signup from './Components/Signup';
import { QueryClient, QueryClientProvider } from 'react-query';
import RestaurantPage from './Components/RestaurantPage';
function App() {
  const queryClient = new QueryClient();
  return (
    <div className='page'>
      <QueryClientProvider client={queryClient}>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='Restaurant' element={<RestaurantPage />}></Route>
          <Route path='Login' element={<Login />}></Route>
          <Route path='Signup' element={<Signup />}></Route>
        </Routes>
      </QueryClientProvider>

    </div>
  );
}

export default App;
