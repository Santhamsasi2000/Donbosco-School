import "./Management.css";
import { ManagementList } from "./ManagementList";
const Management = () => {
  return (
    <section className="common-bg p-3 p-sm-5">
      <p className="title">The Management Team </p>
      {/*The Management Team and The Staff */}
      <div className="d-flex flex-column align-items-center">
        {/* <p className="fw-semibold text-primary">Management Team</p> */}
        <table>
          <tr>
            <th className="p-2">S.No</th>
            <th className="p-2">Name</th>
            <th className="p-2">Position</th>
          </tr>
          {ManagementList.map(({ id, name, position }) => (
            <tr>
              <td className="p-2">{id}</td>
              <td className="p-2">{name}</td>
              <td className="p-2">{position}</td>
            </tr>
          ))}
        </table>
      </div>
    </section>
  );
};

export default Management;
