import "./App.css";
import { Route, Routes } from "react-router";
import Header from "./Components/NavBar/Header/Header";
import Menus from "./Components/NavBar/Menus/Menus";
import ContactUs from "./Components/ContactUs/ContactUs";
import ExtraCurricular from "./Components/Students/ExtraCuri/ExtraCurricular";
import About from "./Components/About/AboutUs/About";
import Home from "./Components/Home/Home";
import ThisFees from "./Components/Fees/ThisFees";
import Groups from "./Components/Students/Groups/Groups";
import HouseSystem from "./Components/Students/House/HouseSystem";
import Staff from "./Components/About/Staff/Staff";
import Celebrations from "./Components/About/Celebrations/Celebrations";
import Facilities from "./Components/Students/Facilities/Facilities";


function App() {
  return (
    <>
      <Header/>
      <Menus/>
      <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/about" element={<About/>}/>
         <Route path="/staff" element={<Staff/>}/>
         <Route path="/events" element={<Celebrations/>}/>
         <Route path="/house" element={<HouseSystem/>}/>
         <Route path="/groups" element={<Groups/>}/>
         <Route path="/facilities" element={<Facilities/>}/>
         <Route path="/extracurricular" element={<ExtraCurricular/>}/>
         <Route path="/fees" element={<ThisFees/>}/>
         <Route path="/contact" element={<ContactUs/>}/>
      </Routes>
    </>
  );
}

export default App;
