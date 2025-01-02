import "./Staff.css"
import TamilTeachers from "./TamilTeachers";
import EnglishTeacher from "./EnglishTeacher";
import { ManagementList } from "./ManagementList";
const Staff = () => {
  return (
    <section className='common-bg p-3 p-sm-5'>
      <p className="title">The Management Team and The Staff</p>
      <div className="d-flex flex-column align-items-center">
        <p className="fw-semibold text-primary">Management Team</p>
        <table>
          <tr>
            <th className="p-2">S.No</th>
            <th className="p-2">Name</th>
            <th className="p-2">Position</th>
          </tr>
            {
            ManagementList.map(({id,name,position})=>(
                  <tr>
                    <td className="p-2">{id}</td>
                    <td className="p-2">{name}</td>
                    <td className="p-2">{position}</td>
                  </tr>
              ))
            }
        </table>
      </div>
      <div className="row">
        <div className="col-lg-6 d-flex flex-column align-items-center">
          <p className="text-success">TAMIL MEDIUM</p>
          <TamilTeachers/>
        </div>
        <div className="col-lg-6  d-flex flex-column align-items-center">
           <p className="text-success">ENGLISH MEDIUM</p>
           <EnglishTeacher/>
        </div>
      </div>
    </section>
  )
}

export default Staff
