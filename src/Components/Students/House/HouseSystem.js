import { HouseSystemData } from "./HouseSystemData"


const HouseSystem = () => {
  return (
    <section className="p-3 p-sm-5">
       <table>
          <thead>
            <tr>
              <th>S.No.</th>
              <th>Houses</th>
              <th>Responsibilities</th>
              <th>Team Animators</th>
              <th>Staff Members</th>
            </tr>
          </thead>
          <tbody>
            {/* {
              HouseSystemData.map(({id,houseName,houseColor,responsibilities,}, index)=>(
                <tr key={id}>
                  <td>{index+1}</td>
                  <td><img src={image} alt="No-Image" className="w-25"/></td>
                  <td>{houseName}</td>
                  <td>{houseColor}</td>
                </tr>
              ))
            } */}
          </tbody>
 
       </table>
       {/* <div className="row gy-4">
          {
            HouseSystemData.map(({id,image,houseName,houseColor})=>(
              <div className="col-md-6" key={id}>
                <p className="fw-bold fs-5 text-center mb-1 text-uppercase">{houseName} ({houseColor})</p>
                <img src={image} alt="No-Image" className="w-100 rounded-3"/>
              </div>
            ))
          }
       </div> */}
    </section>
  )
}

export default HouseSystem
