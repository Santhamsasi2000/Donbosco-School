import { NavLink } from 'react-router-dom';
import './BeyondClass.css';
import { DataBeyond } from './DataBeyond';

const BeyondClass = () => {
  return (
    <section className='p-3 p-sm-5'>
        <p className='title'>Beyond the Classroom</p>
        <div className='row gap-5 justify-content-center'>
        {
          DataBeyond.map(({id,image,title,link})=>(
            <div className='col-5 col-md-3 border border-success border-2 rounded-2 p-0' key={id}>
             <img src={image} alt='No-Image' className='w-100 beyond-img'/>
             <p className='text-center mt-2 fw-semibold'>{title}</p>
             <div className='d-flex justify-content-center'>
                <NavLink to={link} className='btn btn-outline-success mb-3'>View More</NavLink>
             </div>
            </div>
          ))
        }
        </div>
    </section>
  )
}

export default BeyondClass
