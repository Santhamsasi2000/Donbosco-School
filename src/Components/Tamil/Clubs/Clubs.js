import './Clubs.css';
import { DataClub } from './DataClub';

const Clubs = () => {
  return (
    <section className="common-bg p-3 p-sm-5">
      <p className="title mb-3 mb-sm-5">Clubs and Responsibilities</p>
      <div>
      {DataClub.map(({id,image,name,responsibilities,inCharge}) => (
      <div className='row mb-3 mb-sm-5 justify-content-center gap-5' key={id}>
        <div className='col-lg-6'>
          <img src={image} alt='No-Image' className='w-100 clubs-img'/>
        </div>
        <div className='col-lg-5'>
           <p className='fs-5'><span className='fw-bold'>Club Name: </span>{name}</p>
           <p className='fs-5 fw-bold'>Responsibilities:</p>
           <ul className='fs-5 lh-lg'>
               {responsibilities.map((task, idx) => (
                 <li key={idx}>{task}</li>
               ))}
           </ul>
           <p className='fs-5 fw-bold'>InCharge :</p>
           <ol className='fs-5 lh-lg'>
            {inCharge.map(
            (person, index) => (
              <li key={index}>{person}</li>
            ))}
           </ol>
        </div>
      </div>
          ))}
      </div>
    </section>
  )
}

export default Clubs
