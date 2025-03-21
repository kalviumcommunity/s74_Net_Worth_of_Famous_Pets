import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/login";
import MyPage from "./pages/MyPage";
import Signup from "./pages/Signup";
import CreatePet from "./components/CreatePet";
import UpdatePet from "./components/UpdatePet";

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
