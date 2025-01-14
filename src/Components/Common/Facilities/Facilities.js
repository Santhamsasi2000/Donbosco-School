import { CommonFacilities, EnglishFacilities, TamilFacilities } from './DataFacilities';
import './Facilities.css';

const Facilities = () => {
  return (
    <section className='common-bg p-3 p-sm-5'>
        <p className="title mb-3 mb-sm-5">Facilities That Enhance Education and Growth</p> 
        <div className='row'>
          {
            CommonFacilities.map(({id,title,image})=>(
              <div className='col-md-6 col-lg-4 mb-3 mb-sm-5' key={id}>
                <p className='text-center mb-1 fw-semibold'>{title}</p>
                <img src={image} alt='No-Image' className='w-100 facilities-img border border-2 border-success'/>
              </div>
            ))
          }
        </div>
        <p className='text-success text-center fw-bold fs-5'>TAMIL MEDIUM</p>
        <div className='row'>
          {
            TamilFacilities.map(({id,title,image})=>(
              <div className='col-md-6 col-lg-4 mb-3 mb-sm-5' key={id}>
                <p className='text-center mb-1 fw-semibold'>{title}</p>
                <img src={image} alt='No-Image' className='w-100 facilities-img border border-2 border-success'/>
              </div>
            ))
          }
        </div>
        <p className='text-success text-center fw-bold fs-5'>ENGLISH MEDIUM</p>
        <div className='row'>
          {
            EnglishFacilities.map(({id,title,image})=>(
              <div className='col-md-6 col-lg-4 mb-3 mb-sm-5' key={id}>
                <p className='text-center mb-1 fw-semibold'>{title}</p>
                <img src={image} alt='No-Image' className='w-100 facilities-img border border-2 border-success'/>
              </div>
            ))
          }
        </div>
    </section>
  )
}

export default Facilities
