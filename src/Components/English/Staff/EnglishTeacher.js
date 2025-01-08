import { HigherSecTeachers, HighTeachers, KinderTeachers, NonTeachers } from "./EnglishList";
import "./EnglishStaff.css";

const EnglishTeacher = () => {
  return (
    <section className="common-bg p-3 p-sm-5">
       <p className="title">Our Dedicated Team: Teachers and Staff</p>
       <div className=" mb-3 mb-sm-4">
          <img src="/Images/English/Staff/Teachers.jpg" alt="No-Image" className="w-100 rounded-3"/>
       </div>
       <div className="d-flex flex-column align-items-center">
       <div>
                <p className="english-title">Higher Secondary Teachers</p>
                  <table>
                    <tr>
                      <th className="english-subtitle p-2">S.No</th>
                      <th className="english-subtitle p-2">Name</th>
                      <th className="english-subtitle p-2">Qualification</th>
                    </tr>
                        {
                        HigherSecTeachers.map(({id,name,position})=>(
                            <tr>
                              <td className="p-2">{id}</td>
                              <td className="p-2">{name}</td>
                              <td className="p-2">{position}</td>
                            </tr>
                        ))
                        }
                  </table>
       </div>
       <div>
                <p className="english-title mt-5">High School and Primary Teachers</p>
                  <table>
                    <tr>
                      <th className="english-subtitle p-2">S.No</th>
                      <th className="english-subtitle p-2">Name</th>
                      <th className="english-subtitle p-2">Qualification</th>
                    </tr>
                        {
                        HighTeachers.map(({id,name,position})=>(
                            <tr>
                              <td className="p-2">{id}</td>
                              <td className="p-2">{name}</td>
                              <td className="p-2">{position}</td>
                            </tr>
                        ))
                        }
                  </table>
       </div>
      <div>
  <p className="english-title mt-5">Kindergarten Teachers</p>
    <table>
      <tr>
        <th className="english-subtitle p-2">S.No</th>
        <th className="english-subtitle p-2">Name</th>
        <th className="english-subtitle p-2">Qualification</th>
      </tr>
          {
          KinderTeachers.map(({id,name,position})=>(
              <tr>
                <td className="p-2">{id}</td>
                <td className="p-2">{name}</td>
                <td className="p-2">{position}</td>
              </tr>
          ))
          }
    </table>
      </div>
      <div>
        <p className="english-title mt-5">Non-Teaching Staff</p>
          <table>
            <tr>
              <th className="english-subtitle p-2">S.No</th>
              <th className="english-subtitle p-2">Name</th>
            </tr>
                {
                NonTeachers.map(({id,name,position})=>(
                    <tr>
                      <td className="p-2">{id}</td>
                      <td className="p-2">{name}</td>
                    </tr>
                ))
                }
          </table>
      </div>
       </div>
    </section>
  )
}

export default EnglishTeacher
