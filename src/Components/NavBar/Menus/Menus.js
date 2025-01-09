import './Menus.css';
import { NavLink } from 'react-router-dom';

const Menus = () => {
  return (
    <section className='menus p-2 p-md-4  d-flex gap-md-5 gap-4 justify-content-center flex-wrap mw-100'>
      <NavLink to="/" className="navlink px-sm-4 py-sm-1">HOME</NavLink>
      {/* Admission */}
      <div className="nav-item dropdown">
          <a className="nav-link dropdown-toggle navlink px-sm-4 py-sm-1" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            ABOUT US
          </a>
          <ul className="dropdown-menu">
            <li><NavLink to="/admission-process" className="dropdown-item">Admission Process</NavLink></li>
          </ul>
      </div>
      {/* About Us - Common*/}
      <div className="nav-item dropdown">
          <a className="nav-link dropdown-toggle navlink px-sm-4 py-sm-1" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            ABOUT US
          </a>
          <ul className="dropdown-menu">
            <li><NavLink to="/management" className="dropdown-item">MANAGEMENT</NavLink></li>
            <li> <NavLink to="/facilities" className="dropdown-item">FACILITIES</NavLink></li>
            <li><NavLink to="/achievers" className="dropdown-item">ACHIEVERS</NavLink></li>
            {/* <li><NavLink to="/hostel" className="dropdown-item">HOSTEL</NavLink></li> */}
            <li><NavLink to="/groups" className="dropdown-item">GROUPS</NavLink></li>
            <li><NavLink to="/bus-stops" className="dropdown-item">SCHOOL BUS</NavLink></li>
          </ul>
      </div>
      {/* Tamil */}
      <div className="nav-item dropdown">
          <a className="nav-link dropdown-toggle navlink px-sm-4 py-sm-1" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">TAMIL</a>
          <ul className="dropdown-menu">
          <li><NavLink to="/tamil-about" className="dropdown-item">ABOUT</NavLink></li>
            <li><NavLink to="/house" className="dropdown-item">HOUSE</NavLink></li>
            <li><NavLink to="/tamilteachers" className="dropdown-item">STAFF</NavLink></li>
            <li><NavLink to="/tamil-celebrations" className="dropdown-item">EVENTS</NavLink></li>
            <li><NavLink to="/tamil-clubs" className="dropdown-item">CLUBS</NavLink></li>
          </ul>
      </div>
      {/* English */}
      <div className="nav-item dropdown">
          <a className="nav-link dropdown-toggle navlink px-sm-4 py-sm-1" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">ENGLISH</a>
          <ul className="dropdown-menu">
            <li><NavLink to="/english-about" className="dropdown-item">ABOUT</NavLink></li>
            <li><NavLink to="/extracurricular" className="dropdown-item">CO-CURRICULAR</NavLink></li>
            <li><NavLink to="/english-staff" className="dropdown-item">TEACHERS</NavLink></li>
          </ul>
      </div>
      <NavLink to="/contact" className="navlink px-sm-4 py-sm-1">CONTACT</NavLink>
    </section>
  )
}
export default Menus
