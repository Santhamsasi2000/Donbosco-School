import {Tamiloffice,TamilPartTeachers,TamilTeachersList,} from "./TamilList";
import "./TamilTeachers.css";

const TamilTeachers = () => {
  return (
    <section className="common-bg p-3 p-sm-5">
      <p className="title mb-5">OUR STAFF</p>
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <p className="tamil-title">Teachers</p>
          <table>
            <tr>
              <th className="p-2">S.No</th>
              <th className="p-2">Name</th>
              <th className="p-2">Position</th>
            </tr>
            {TamilTeachersList.map(({ id, name, subject }) => (
              <tr>
                <td className="p-2">{id}</td>
                <td className="p-2">{name}</td>
                <td className="p-2">{subject}</td>
              </tr>
            ))}
          </table>
        </div>
        <div className="col-lg-6">
            <div>
              <p className="tamil-title">
                Office Staff & Workers
              </p>
              <table>
                <tr>
                  <th className="p-2">S.No</th>
                  <th className="p-2">Name</th>
                  <th className="p-2">Position</th>
                </tr>
                {Tamiloffice.map(({ id, name, subject }) => (
                  <tr>
                    <td className="p-2">{id}</td>
                    <td className="p-2">{name}</td>
                    <td className="p-2">{subject}</td>
                  </tr>
                ))}
              </table>
            </div>
            <div>
              <p className="mt-5 tamil-title">
                Part-Time Teachers
              </p>
              <table>
                <tr>
                  <th className="p-2">S.No</th>
                  <th className="p-2">Name</th>
                  <th className="p-2">Position</th>
                </tr>
                {TamilPartTeachers.map(({ id, name, subject }) => (
                  <tr>
                    <td className="p-2">{id}</td>
                    <td className="p-2">{name}</td>
                    <td className="p-2">{subject}</td>
                  </tr>
                ))}
              </table>
            </div>
        </div>
      </div>
    </section>
  );
};

export default TamilTeachers;
