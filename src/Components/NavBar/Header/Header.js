import { NavLink } from "react-router-dom";
import "./Header.css";
import { LuPhoneCall } from "react-icons/lu";

const Header = () => {
  return (
    <section className='header-container p-3 row w-100'> 
      <div className='col-md-6 d-flex align-items-center gap-4'>
        <img className="header-logo1" src='/Images/Header/Tamil.jpg' alt='No-Image'/>
        <div className='mt-2'>
          <p className='header-title1'>DON BOSCO</p>
          <p className='header-subtitle mb-2'>Higher Secondary School</p>
          <p className='text-success medium'>TAMIL MEDIUM</p>
        </div>
        <div className="d-flex flex-column gap-3">
           <NavLink to="/admission-process"><button className="btn tamil-btn">Admission</button></NavLink>
           <a href={`tel:8098779596`} className="btn tamil-btn"><i className="me-2"><LuPhoneCall /></i>8098779596</a>
        </div>
      </div>
      <div className='col-md-6 d-flex align-items-center gap-4'>
        <img className="header-logo2" src='/Images/Header/English.jpg' alt='No-Image'/>
        <div className='mt-2'>
          <p className='header-title2'>DON BOSCO</p>
          <p className='header-subtitle mb-2'>School Of Merit</p>
          <p className='text-success medium'>ENGLISH MEDIUM</p>
        </div>
        <div className="d-flex flex-column gap-3">
           <NavLink to="/admission-process"><button className="btn english-btn">Admission</button></NavLink>
          <div>
             
             <a  href={`tel:6384994252`} className="btn english-btn" ><i className="me-2"><LuPhoneCall /></i>6384994252</a>
          </div> 
        </div>
      </div>
    </section>
  )
}

export default Header;
