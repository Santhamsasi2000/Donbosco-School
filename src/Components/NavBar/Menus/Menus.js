import './Menus.css';
import { NavLink } from 'react-router-dom';

const Menus = () => {
  return (
    <section className='menus p-2 p-md-4  d-flex gap-md-5 gap-4 justify-content-center flex-wrap mw-100'>
      <NavLink to="/" className="navlink px-sm-4 py-sm-1">HOME</NavLink>
      <div className="nav-item dropdown">
          <a className="nav-link dropdown-toggle navlink px-sm-4 py-sm-1" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">ADMISSIONS</a>
          <ul className="dropdown-menu">
            <li><NavLink to="/admissionprocess" className="dropdown-item">Admission Process</NavLink></li>
            <li><NavLink to="/admissionform" className="dropdown-item">Admission Enquiry Form</NavLink></li>
          </ul>
      </div>
      <div className="nav-item dropdown">
          <a className="nav-link dropdown-toggle navlink px-sm-4 py-sm-1" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">ABOUT US</a>
          <ul className="dropdown-menu">
            <li><NavLink to="/about" className="dropdown-item">ABOUT US</NavLink></li>
            <li><NavLink to="/staff" className="dropdown-item">STAFF</NavLink></li>
            <li><NavLink to="/events" className="dropdown-item">EVENTS</NavLink></li>
          </ul>
      </div>
      <div className="nav-item dropdown">
          <a className="nav-link dropdown-toggle navlink px-sm-4 py-sm-1" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            STUDENTS
          </a>
          <ul className="dropdown-menu">
            <li><NavLink to="/academics" className="dropdown-item">ACADEMICS</NavLink></li>
            <li><NavLink to="/toppers" className="dropdown-item">TOPPERS</NavLink></li>
            <li> <NavLink to="/facilities" className="dropdown-item">FACILITIES</NavLink></li>
            <li> <NavLink to="/house" className="dropdown-item">HOUSE</NavLink></li>
          </ul>
      </div>
      <div className="nav-item dropdown">
          <a className="nav-link dropdown-toggle navlink px-sm-4 py-sm-1" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            FEES
          </a>
          <ul className="dropdown-menu">
            <li><NavLink to="/fees" className="dropdown-item">2024-2025</NavLink></li>
          </ul>
      </div>
      <NavLink to="/contact" className="navlink px-sm-4 py-sm-1">CONTACT US</NavLink>
    </section>
  )
}
export default Menus
