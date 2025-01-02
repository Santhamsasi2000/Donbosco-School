import { HigherSecTeachers, HighTeachers, KinderTeachers, NonTeachers } from "./EnglishList"

const EnglishTeacher = () => {
  return (
    <>
       <div>
           <p className="fw-semibold">Higher Secondary Teachers</p>
            <table>
              <tr>
                <th className="p-2">S.No</th>
                <th className="p-2">Name</th>
                <th className="p-2">Qualification</th>
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
           <p className="fw-semibold mt-5">High School and Primary Teachers</p>
            <table>
              <tr>
                <th className="p-2">S.No</th>
                <th className="p-2">Name</th>
                <th className="p-2">Qualification</th>
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
           <p className="fw-semibold mt-5">Kindergarten Teachers</p>
            <table>
              <tr>
                <th className="p-2">S.No</th>
                <th className="p-2">Name</th>
                <th className="p-2">Qualification</th>
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
           <p className="fw-semibold mt-5">Non-Teaching Staff</p>
            <table>
              <tr>
                <th className="p-2">S.No</th>
                <th className="p-2">Name</th>
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
    </>
  )
}

export default EnglishTeacher
