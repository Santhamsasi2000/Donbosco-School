import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import HouseSystem from "./Components/Tamil/House/HouseSystem";
import ContactUs from "./Components/ContactUs/ContactUs";
import About from "./Components/Tamil/About/About";
import Facilities from "./Components/Common/Facilities/Facilities";
import Celebrations from "./Components/Tamil/Celebrations/Celebrations";
import Location from "./Components/ContactUs/Location/Location";
import Clubs from "./Components/Tamil/Clubs/Clubs";
import SchoolToppers from "./Components/Common/Toppers/SchoolToppers";
import ExtraCurricular from "./Components/English/ExtraCuri/ExtraCurricular";
import Groups from "./Components/Common/Groups/Groups";
import Header from "./Components/NavBar/Header/Header";
import Management from "./Components/Common/Managment/Management";
import TamilTeachers from "./Components/Tamil/Teachers/TamilTeachers";
import Home from "./Components/Home/Home";
import BeyondClass from "./Components/Home/BeyondClass/BeyondClass";
import Welcome from "./Components/Home/Welcome/Welcome";
import AboutEnglish from "./Components/English/About/AboutEnglish";
import Rules from "./Components/English/Rules/Rules";
import EnglishTeacher from "./Components/English/Staff/EnglishTeacher";
import Bus from "./Components/Common/Bus/Bus";
import Carousel from "./Components/Home/Carousel/Carousel";
import Footer from "./Components/Footer/Footer";
import ProcessDetails from "./Components/Admission/ProcessDetails";
import AdmissionProcess from "./Components/Admission/AdmissionProcess";
import Message from "./Components/Home/Message/Message";
import RulesHostel from "./Components/Common/Hostel/RulesHostel";
import Hostel from "./Components/Common/Hostel/Hostel";
import Sports from "./Components/Common/Sports/Sports";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <React.StrictMode>
       <App/>
    </React.StrictMode>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
