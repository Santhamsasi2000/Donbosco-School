import "./App.css";
import { Route, Routes } from "react-router";
import Header from "./Components/NavBar/Header/Header";
import Menus from "./Components/NavBar/Menus/Menus";
import ContactUs from "./Components/ContactUs/ContactUs";
import ExtraCurricular from "./Components/English/ExtraCuri/ExtraCurricular";
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
import Management from "./Components/Common/Managment/Management";
import Bus from "./Components/Common/Bus/Bus";
import AboutEnglish from "./Components/English/About/AboutEnglish";
import About from "./Components/Tamil/About/About";
import Footer from "./Components/Footer/Footer";
import ScrollToTop from "./Components/ScrollToTop";
import AdmissionProcess from "./Components/Admission/AdmissionProcess";
import Sports from "./Components/Common/Sports/Sports";

function App() {
  return (
    <>
      <ScrollToTop/>
      <Header />
      <Menus />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Admission */}
        <Route path="/admission-process" element={<AdmissionProcess/>} />
        {/* About - Common */}
        <Route path="/management" element={<Management/>} />
        <Route path="/facilities" element={<Facilities />} />
        <Route path="/achievers" element={<SchoolToppers />} />
        <Route path="/hostel" element={<Hostel />} />
        <Route path="/groups" element={<Groups />} />
        <Route path="/bus-stops" element={<Bus />} />
        <Route path="/sports" element={<Sports/>}/>
        {/* Tamil Medium */}
        <Route path="/tamil-about" element={<About/>} />
        <Route path="/house" element={<HouseSystem />} />
        <Route path="/tamilteachers" element={<TamilTeachers />} />
        <Route path="/tamil-celebrations" element={<Celebrations />} />
        <Route path="/tamil-clubs" element={<Clubs />} />
        {/* English Medium */}
        <Route path="/english-about" element={<AboutEnglish />} />
        <Route path="/english-staff" element={<EnglishTeacher />} />
        <Route path="/extracurricular" element={<ExtraCurricular />} />

        <Route path="/contact" element={<ContactUs />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
