import './Menus.css';
import { NavLink } from 'react-router-dom';

const Menus = () => {
  return (
    <section className='menus p-2 p-md-4  d-flex gap-md-5 gap-4 justify-content-center flex-wrap mw-100'>
      <NavLink to="/" className="navlink px-sm-4 py-sm-1">HOME</NavLink>
      <div className="nav-item dropdown">
          <a className="nav-link dropdown-toggle navlink px-sm-4 py-sm-1" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">ABOUT US</a>
          <ul className="dropdown-menu">
            <li><NavLink to="/about" className="dropdown-item">ABOUT US</NavLink></li>
            <li><NavLink to="/management" className="dropdown-item">MANAGEMENT</NavLink></li>
          </ul>
      </div>
      <div className="nav-item dropdown">
          <a className="nav-link dropdown-toggle navlink px-sm-4 py-sm-1" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            COMMON
          </a>
          <ul className="dropdown-menu">
            <li> <NavLink to="/facilities" className="dropdown-item">FACILITIES</NavLink></li>
            <li><NavLink to="/achievers" className="dropdown-item">ACHIEVERS</NavLink></li>
            <li><NavLink to="/hostel" className="dropdown-item">HOSTEL</NavLink></li>
            <li><NavLink to="/extracurricular" className="dropdown-item">Co-Curricular</NavLink></li>
            <li><NavLink to="/groups" className="dropdown-item">GROUPS</NavLink></li>
            <li><NavLink to="/bus-stops" className="dropdown-item">SCHOOL BUS</NavLink></li>
          </ul>
      </div>
      <div className="nav-item dropdown">
          <a className="nav-link dropdown-toggle navlink px-sm-4 py-sm-1" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">TAMIL MEDIUM</a>
          <ul className="dropdown-menu">
            <li><NavLink to="/house" className="dropdown-item">HOUSE</NavLink></li>
            <li><NavLink to="/tamilteachers" className="dropdown-item">STAFF</NavLink></li>
            <li><NavLink to="/tamil-celebrations" className="dropdown-item">EVENTS</NavLink></li>
            <li><NavLink to="/tamil-clubs" className="dropdown-item">CLUBS</NavLink></li>
          </ul>
      </div>
      <div className="nav-item dropdown">
          <a className="nav-link dropdown-toggle navlink px-sm-4 py-sm-1" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">ENGLISH MEDIUM</a>
          <ul className="dropdown-menu">
            <li><NavLink to="/english-staff" className="dropdown-item">STAFF</NavLink></li>
          </ul>
      </div>
      <NavLink to="/contact" className="navlink px-sm-4 py-sm-1">CONTACT US</NavLink>
    </section>
  )
}
export default Menus
