import "./ExtraCurricular.css";
import { ExtraData } from "./ExtraData";
const ExtraCurricular = () => {
  return (
    <section className="common-bg p-3 p-sm-5">
       <p className="title">ExtraCurricular Activities</p>
       <div className="row gy-5">
         {
            ExtraData.map(({id,image,title})=>(
             <div className="col-sm-6">
                <div className="fw-bold fs-5 text-center">{id}. {title}</div>
                <img className="w-100 extra-img" src={image} alt="No-Image"/>
             </div>
            ))
         }
       </div>
    </section>
  )
}

export default ExtraCurricular
