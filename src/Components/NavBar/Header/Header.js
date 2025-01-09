import "./Header.css";

const Header = () => {
  return (
    <section className='header-container p-3 row w-100'> 
      <div className='col-md-6 d-flex align-items-center gap-3'>
        <img className="header-logo1" src='/Images/Header/Tamil.jpg' alt='No-Image'/>
        <div className='mt-2'>
          <p className='header-title1'>DON BOSCO</p>
          <p className='fw-semibold'>Higher Secondary School</p>
          <p className='text-success'>TAMIL MEDIUM</p>
        </div>
        <div className="d-flex flex-column gap-3">
           <button className="btn btn-outline-success tamil-btn">Admission</button>
           <button className="btn btn-outline-success tamil-btn">Admission</button>
        </div>
      </div>
      <div className='col-md-6 d-flex align-items-center gap-3'>
        <img className="header-logo2" src='/Images/Header/English.jpg' alt='No-Image'/>
        <div className='mt-2'>
          <p className='header-title2'>DON BOSCO</p>
          <p className='fw-semibold'>School Of Merit</p>
          <p className='text-success'>ENGLISH MEDIUM</p>
        </div>
        <div className="d-flex flex-column gap-3">
           <button className="btn btn-outline-success english-btn">Admission</button>
           <button className="btn btn-outline-success english-btn">Admission</button>
        </div>
      </div>
    </section>
  )
}

export default Header;
