import { CommonFacilities, EnglishFacilities, TamilFacilities } from './DataFacilities';
import './Facilities.css';

const Facilities = () => {
  return (
    <section className='common-bg p-3 p-sm-5'>
        <p className="title">Our Facilities</p> 
        <p className='facility-title'>Common Facilities</p>
        <div className='row'>
          {
            CommonFacilities.map(({id,title,image})=>(
              <div className='col-md-6 col-lg-4 mb-3 mb-sm-5' key={id}>
                <p className='facility-subtitle'>{title}</p>
                <img src={image} alt='No-Image' className='w-100 facilities-img'/>
              </div>
            ))
          }
        </div>
        <p className='facility-title'>Tamil Medium Students</p>
        <div className='row'>
          {
            TamilFacilities.map(({id,title,image})=>(
              <div className='col-md-6 col-lg-4 mb-3 mb-sm-5' key={id}>
                <p className='facility-subtitle'>{title}</p>
                <img src={image} alt='No-Image' className='w-100 facilities-img'/>
              </div>
            ))
          }
        </div>
        <p className='facility-title'>English Medium Students</p>
        <div className='row'>
          {
            EnglishFacilities.map(({id,title,image})=>(
              <div className='col-md-6 col-lg-4 mb-3 mb-sm-5' key={id}>
                <p className='facility-subtitle'>{title}</p>
                <img src={image} alt='No-Image' className='w-100 facilities-img'/>
              </div>
            ))
          }
        </div>
    </section>
  )
}

export default Facilities
