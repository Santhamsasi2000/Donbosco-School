import { HouseSystemData } from "./HouseSystemData";
import "./House.css";


const HouseSystem = () => {
  return (
    <section className="p-3 p-sm-5">
       <p className="title">House</p>
            {
              HouseSystemData.map(({id,image,houseName,houseColor,teamAnimators,Staff,responsibilities})=>(
                 <div className="row mb-3 mb-sm-5 justify-content-between" key={id}>
                   <div className="col-6">
                       <img src={image} alt="No-Image" className="w-100"/>
                   </div>
                   <div className="col-6">
                      <p><span className="house-color">House Name :</span> {houseName}</p>
                      <p><span className="house-color">House Colour:</span> {houseColor}</p>
                      <p><span className="house-color">Team Animators:</span> {teamAnimators}</p>
                      <p className="house-color">Staff Members:</p>
                      <ol>
                        {
                          Staff.map((person,index)=>(
                            <li key={index}>{person}</li>
                          ))
                        }
                      </ol>
                      <p className="house-color">Responsibilities:</p>
                      <ul>
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
