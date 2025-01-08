import './BeyondClass.css';
import { DataBeyond } from './DataBeyond';

const BeyondClass = () => {
  return (
    <section className='p-3 p-sm-5'>
        <p className='text-center'>Beyond the Classroom</p>
        <div className='row gap-5 justify-content-center'>
        {
          DataBeyond.map(({id,image,title})=>(
            <div className='col-3 border border-success border-2 rounded-2' key={id}>
             <img src={image} alt='No-Image' className='w-100'/>
             <p>{title}</p>
             <button>View More</button>
            </div>
          ))
        }
        </div>
    </section>
  )
}

export default BeyondClass
