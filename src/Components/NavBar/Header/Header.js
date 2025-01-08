import "./Header.css";

const Header = () => {
  return (
    <section className='p-3 row w-100'>
      <div className='col-md-6 d-flex align-items-center gap-3'>
        <img className="header" src='/Images/Header/Tamil.jpg' alt='No-Image'/>
        <div className='mt-2'>
          <p className='header-title'>DON BOSCO</p>
          <p className='header-subtitle1'>Higher Secondary School</p>
          <p className='text-success'>TAMIL MEDIUM</p>
        </div>
      </div>
      <div className='col-md-6 d-flex align-items-center gap-3'>
        <img className="header" src='/Images/Header/English.jpg' alt='No-Image'/>
        <div className='mt-2'>
          <p className='header-title'>DON BOSCO</p>
          <p className='header-subtitle2'>School Of Merit</p>
          <p className='text-success'>ENGLISH MEDIUM</p>
        </div>
      </div>
    </section>
  )
}

export default Header;
