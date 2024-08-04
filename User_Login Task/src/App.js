import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Sign_up from "./Pages/Sign_up";
import Login_page from "./Pages/Login_page";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
      <BrowserRouter>
      <ToastContainer/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/signup" element={<Sign_up/>}/>
        <Route path="/login" element={<Login_page/>}/>
      </Routes>
      </BrowserRouter>
  );
}

export default App;
