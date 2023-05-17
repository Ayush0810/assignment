import Home from "./pages/Home/Home";
import Signup from "./pages/Signup/Signup";
import Navbar from "./components/Navbar/Navbar";
import Formpage from "./pages/UserData/Formpage";
import Login from "./pages/Login/Login";
import Footer from "./components/footer/Footer"
import Userprofile from "./pages/UserProfile/Userprofile";
import { Route, Routes } from 'react-router-dom';
function App() {

  return (
  <>
    <Navbar/>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/register"  element={<Formpage/>}/>
        <Route path="/me"  element={<Userprofile/>}/>
      </Routes>

     <Footer/>
</>
  );
}

export default App;
