import "./App.css";
import { Route, Routes } from "react-router";
import Header from "./Components/NavBar/Header/Header";
import Menus from "./Components/NavBar/Menus/Menus";
import ContactUs from "./Components/ContactUs/ContactUs";
import ExtraCurricular from "./Components/Common/ExtraCuri/ExtraCurricular";
import About from "./Components/About/AboutUs/About";
import Home from "./Components/Home/Home";
import Groups from "./Components/Common/Groups/Groups";
import HouseSystem from "./Components/Tamil/House/HouseSystem";
import Celebrations from "./Components/Tamil/Celebrations/Celebrations";
import Facilities from "./Components/Common/Facilities/Facilities";
import Clubs from "./Components/Tamil/Clubs/Clubs";
import SchoolToppers from "./Components/Common/Toppers/SchoolToppers";
import TamilTeachers from "./Components/Tamil/Teachers/TamilTeachers";
import Hostel from "./Components/Common/Hostel/Hostel";
import EnglishTeacher from "./Components/English/Staff/EnglishTeacher";
import Management from "./Components/About/Staff/Management";
import Bus from "./Components/Common/Bus/Bus";

function App() {
  return (
    <>
      <Header />
      <Menus />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/management" element={<Management/>} />
        {/* Common */}
        <Route path="/facilities" element={<Facilities />} />
        <Route path="/achievers" element={<SchoolToppers />} />
        <Route path="/hostel" element={<Hostel />} />
        <Route path="/groups" element={<Groups />} />
        <Route path="/bus-stops" element={<Bus/>} />
        {/* Tamil Medium */}
        <Route path="/house" element={<HouseSystem />} />
        <Route path="/extracurricular" element={<ExtraCurricular />} />
        <Route path="/tamilteachers" element={<TamilTeachers />} />
        <Route path="/tamil-celebrations" element={<Celebrations />} />
        <Route path="/tamil-clubs" element={<Clubs />} />
        {/* English Medium */}
        <Route path="/english-staff" element={<EnglishTeacher />} />

        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </>
  );
}

export default App;
