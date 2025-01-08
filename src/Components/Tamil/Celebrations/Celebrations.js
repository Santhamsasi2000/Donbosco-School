import "./Celebrations.css";
import { DataCelebrations } from "./DataCelebrations";

const Celebrations = () => {
  return (
    <section className="common-bg p-3 p-sm-5">
        <p className="title mb-3 mb-sm-4">Capturing Smiles: School Events of 2024</p>
        <div className="row">
          {
            DataCelebrations.map(({id,title,date,image})=>(
                <div key={id} className="col-lg-6 mb-3 mb-sm-5">
                  <div className="d-flex justify-content-center gap-5">
                    <p className="celebrations-title">{title}</p>
                    <p className="celebrations-subtitle">{date}</p>
                  </div>
                  <img src={image} alt="No-Image" className="w-100 rounded-2 height-cele"/>
                </div>
            ))
          }
        </div>
    </section>
  )
}

export default Celebrations
