import React from 'react';
import { Route, Routes } from "react-router-dom";
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import ServicesDetails from './components/ServiceDetails/ServicesDetails';
import AuthContext from './context/AuthContext';
import { ServiceContextProvider } from './Context/ServicesContext';
import Home from './pages/Home/Home';
import Service from './pages/Service/Service';
const App = () => {
  return (
    <main>
      <ServiceContextProvider>
        <AuthContext>
       <Header />
         <Routes>
           <Route path='/' element={<Home />} />
           <Route path ='/services' element={<Service />} />
           <Route path='/services/:slug' element={<ServicesDetails />} />
           <Route path ='/login' element={<Login />} />
           <Route path ='/register' element={<Register />} />
         </Routes>
         <Footer />
         </AuthContext>
         </ServiceContextProvider>
    </main>
  )
}

export default App
