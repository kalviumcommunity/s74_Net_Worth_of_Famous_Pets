import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import MyPage from "./pages/MyPage.jsx";
import Signup from "./pages/Signup.jsx";
import CreatePet from "./components/CreatePet.jsx";
import UpdatePet from "./components/UpdatePet.jsx";

const App = () => {
  return (
    <BrowserRouter>  {/* ✅ Wrap the entire app inside BrowserRouter */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path ='/my-page' element={<MyPage />} />
        <Route path='my-page/create-pet' element={<CreatePet />} />
        <Route path="my-page/update/:id" element={<UpdatePet />} />
        
      </Routes>
    </BrowserRouter>
  );
};

export default App;
