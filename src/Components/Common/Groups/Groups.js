import "./Groups.css";
import { GroupsData } from "./GroupsData";

const Groups = () => {
  return (
    <section className="common-bg p-3 p-sm-5">
       <p className="title">Groups & Movements</p>
        <div className='row'>
               {
                   GroupsData.map(({id,image,title,desc}) =>
                      <div className='col-lg-6 mb-5'>
                        <div className='card w-100 h-100' key={id}>
                           <img className='card-img-top' src={image} alt={title} aria-label={`Image of ${title}`} loading='lazy'/>
                           <div className='card-body'>
                               <p className='card-title fw-bold fs-5 text-center'>{title}</p>
                               <p className='card-text text-secondary'>{desc}</p>
                           </div>
                        </div>
                      </div>
                   )
               }
        </div>
    </section>
  )
}

export default Groups
