import SocialMedia from './SocialMedia';
import "./Footer.css";
import { SlLocationPin } from "react-icons/sl";
import { IoMailOpenOutline } from "react-icons/io5";
import { LuPhoneCall } from "react-icons/lu";
import { NavLink} from 'react-router-dom';

const Footer = () => {
  return (
    <section className='footer mt-0 p-3 p-sm-5 row gy-4 gy-sm-5 gx-0 justify-content-between'>
       <div className='col- col-sm-6 col-lg-3'>
        <p className='fw-bold fs-4 mb-1 mt-2 text-decoration-underline text-white'>FOLLOW US</p>
        <p className='fw-semibold fs-6 mt-3 text-white'>Get Involved with DON BOSCO School Online</p>
        <SocialMedia/>
       </div>
       <div className='col-6 col-lg-4 d-none d-sm-flex flex-column align-items-end align-items-center'>
            <div className='fw-semibold fs-5 d-flex flex-column align-items-start'>
              <p className='fw-bold fs-4 text-decoration-underline text-white'>Quick Links</p>
              <NavLink className="menu-Links" to="/admissionprocess">Admission Process</NavLink>
              <NavLink className="menu-Links" to="/admissionform">Online Admission Form</NavLink>
              <NavLink className="menu-Links" to="/fees24-25">Fees Structure</NavLink>
              <NavLink className="menu-Links" to="/facilities">Facilities</NavLink>
              <NavLink className="menu-Links" to="/academics">Academics</NavLink>
              <NavLink className="menu-Links" to="/toppers">Achievers of Public Exams</NavLink>
            </div>
       </div>
       <div className='col- col-lg-5 col-xl-4'>
         <p className='fw-bold fs-4 text-decoration-underline d-none d-sm-block text-white'>Contact Us</p>
         <div className="mb-2 d-flex gap-3 align-items-center">
          <i className="fs-1 text-white"><SlLocationPin /></i>
          <a href="https://maps.app.goo.gl/NGvbH4CHJNWceHhy7"
          target="_blank" 
          rel="noopener noreferrer" className="contact-links lh-lg fw-semibold"><span className="">Sagaya Nagar, Pallithammam(Post), Kalaiyarkoil, Sivaganga(Dt), Tamil Nadu 630551</span></a>
         </div>
         <div className="mb-3 d-flex gap-3 align-items-center">
              <i className="fs-1 text-white"><IoMailOpenOutline /></i>
              <a href={`mailto:dbpallithamam@gmail.com`} className="contact-links mt-1 fw-semibold">dbpallithamam@gmail.com</a>
         </div>
         <div className="d-flex gap-3 align-items-center">
              <i className="fs-2 text-white"><LuPhoneCall /></i>
              <a  href={`tel:8098779596`} className="contact-links ms-sm-2 fw-semibold">8098779596</a>
              <a  href={`tel:6384994252`} className="contact-links fw-semibold">6384994252</a>
         </div>
       </div>
       <p className='text-start text-sm-center mt-5 text-white'>Developed By <a href='https://pogowebsolutions.com/' target="_blank" 
          rel="noopener noreferrer" className='fw-bold'> POGO WEB SOLUTIONS</a></p>
    </section>
  ) 
}

export default Footer
