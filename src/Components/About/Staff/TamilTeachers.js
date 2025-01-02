import { Tamiloffice, TamilPartTeachers, TamilTeachersList } from "./TamilList"

const TamilTeachers = () => {
  return (
    <>
        <div>
            <p className="fw-semibold text-primary text-center">Teachers</p>
            <table>
                <tr>
                    <th className="p-2">S.No</th>
                    <th className="p-2">Name</th>
                    <th className="p-2">Position</th>
                </tr>
                    {
                    TamilTeachersList.map(({id,name,subject})=>(
                        <tr>
                            <td className="p-2">{id}</td>
                            <td className="p-2">{name}</td>
                            <td className="p-2">{subject}</td>
                        </tr>
                    ))
                    }
            </table>
        </div>
        <div>
            <p className="fw-semibold mt-5 text-primary text-center">Office Staff & Workers</p>
            <table>
                <tr>
                    <th className="p-2">S.No</th>
                    <th className="p-2">Name</th>
                    <th className="p-2">Position</th>
                </tr>
                    {
                    Tamiloffice.map(({id,name,subject})=>(
                        <tr>
                            <td className="p-2">{id}</td>
                            <td className="p-2">{name}</td>
                            <td className="p-2">{subject}</td>
                        </tr>
                    ))
                    }
            </table>
        </div>
        <div>
            <p className="fw-semibold mt-5 text-primary text-center">Part-Time Teachers</p>
            <table>
                <tr>
                    <th className="p-2">S.No</th>
                    <th className="p-2">Name</th>
                    <th className="p-2">Position</th>
                </tr>
                    {
                    TamilPartTeachers.map(({id,name,subject})=>(
                        <tr>
                            <td className="p-2">{id}</td>
                            <td className="p-2">{name}</td>
                            <td className="p-2">{subject}</td>
                        </tr>
                    ))
                    }
            </table>
        </div> 
    </>
  )
}

export default TamilTeachers
