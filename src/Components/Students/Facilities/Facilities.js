import { CommonFacilities, EnglishFacilities, TamilFacilities } from './DataFacilities';
import './Facilities.css';

const Facilities = () => {
  return (
    <section className='common-bg p-3 p-sm-5'>
        <p className="title">Our Facilities</p> 
        <div className='row'>
          {
            CommonFacilities.map(({id,title,image})=>(
              <div className='col-md-6 col-lg-4 mb-3 mb-sm-5' key={id}>
                <p className='text-center text-primary'>{title}</p>
                <img src={image} alt='No-Image' className='w-100 facilities-img'/>
              </div>
            ))
          }
        </div>
        <p className='text-success text-center'>Tamil Medium Students</p>
        <div className='row'>
          {
            TamilFacilities.map(({id,title,image})=>(
              <div className='col-md-6 col-lg-4 mb-3 mb-sm-5' key={id}>
                <p className='text-center text-primary'>{title}</p>
                <img src={image} alt='No-Image' className='w-100 facilities-img'/>
              </div>
            ))
          }
        </div>
        <p className='text-success text-center'>ENGLISH Medium Students</p>
        <div className='row'>
          {
            EnglishFacilities.map(({id,title,image})=>(
              <div className='col-md-6 col-lg-4 mb-3 mb-sm-5' key={id}>
                <p className='text-center text-primary'>{title}</p>
                <img src={image} alt='No-Image' className='w-100 facilities-img'/>
              </div>
            ))
          }
        </div>
    </section>
  )
}

export default Facilities
