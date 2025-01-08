import { HouseSystemData } from "./HouseSystemData";
import "./House.css";

const HouseSystem = () => {
  return (
    <section className="p-3 p-sm-5">
       <p className="title mb-3 mb-sm-4">House Spirit: Colors, Teams, and Excellence</p>
            {
              HouseSystemData.map(({id,image,houseName,houseColor,teamAnimators,Staff,responsibilities})=>(
                 <div className="row mb-3 mb-sm-5 justify-content-between gy-3 gy-sm-5" key={id}>
                   <div className="col-lg-6">
                       <img src={image} alt="No-Image" className="w-100 house-img"/>
                   </div>
                   <div className="col-lg-6">
                      <p className=""><span className="fw-bold ">House Name :</span> {houseName}</p>
                      <p className=""><span className="fw-bold ">House Colour:</span> {houseColor}</p>
                      <p className=""><span className="fw-bold ">Team Animators:</span> {teamAnimators}</p>
                      <p className="fw-bold ">Staff Members:</p>
                      <ol className="">
                        {
                          Staff.map((person,index)=>(
                            <li key={index}>{person}</li>
                          ))
                        }
                      </ol>
                      <p className="fw-bold ">Responsibilities:</p>
                      <ul className="">
                        {
                          responsibilities.map((person,index)=>(
                            <li key={index}>{person}</li>
                          ))
                        }
                      </ul>
                   </div>
                 </div>
              ))
            }
    </section>
  )
}

export default HouseSystem
