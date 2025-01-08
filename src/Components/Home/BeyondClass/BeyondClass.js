import './BeyondClass.css';
import { DataBeyond } from './DataBeyond';

const BeyondClass = () => {
  return (
    <section className='p-3 p-sm-5'>
        <p className='title'>Beyond the Classroom</p>
        <div className='row gap-5 justify-content-center'>
        {
          DataBeyond.map(({id,image,title})=>(
            <div className='col-sm-5 col-md-3 border border-success border-2 rounded-2' key={id}>
             <img src={image} alt='No-Image' className='w-100'/>
             <p className='text-center mt-2'>{title}</p>
             <div className='d-flex justify-content-center'>
                <button>View More</button>
             </div>
            </div>
          ))
        }
        </div>
    </section>
  )
}

export default BeyondClass
