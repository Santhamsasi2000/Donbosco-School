import "./Header.css";
import { NavLink } from 'react-router-dom';
import { IoMdCall } from "react-icons/io";

const Header = () => {
  return (
    <section className='d-flex align-items-center justify-content-around'>
      <div className='d-flex align-items-center justify-content-center gap-2'>
        <img className="header rounded-circle" src='/Images/Header/Logo.jpg' alt='No-Image'/>
        <div className='mt-2'>
          <p className='mb-0 fw-bold fs-3 title'>DON BOSCO</p>
          <p className='fw-semibold mb-1'>Higher Secondary School</p>
          <p className=''>TAMIL MEDIUM</p>
        </div>
      </div>
      <div className='d-flex align-items-center justify-content-center gap-2'>
        <img className="header rounded-circle" src='/Images/Header/Logo.jpg' alt='No-Image'/>
        <div className='mt-2'>
          <p className='mb-0 fw-bold fs-3 title'>DON BOSCO</p>
          <p className='fw-semibold mb-1'>School Of Merit</p>
          <p className=''>ENGLISH MEDIUM</p>
        </div>
      </div>
    </section>
  )
}

export default Header;
