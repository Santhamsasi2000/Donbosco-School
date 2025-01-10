import "./Management.css";
import { ManagementList, OthersList } from "./ManagementList";
const Management = () => {
  return (
    <section className="common-bg p-4 p-sm-5">
      <p className="title">The Management Team</p>
      <div className="row gap-5 justify-content-center mb-4">
        {ManagementList.map(({ id, image,name, position }) => (
            <div className="col-md-5 col-lg-3 border border-success border-2 rounded-2" key={id}>
              <img src={image} alt="No-Image" className="mt-3 w-100 management-img"/>
              <p className="mt-3 fw-semibold">{name}</p>
              <p className="fw-semibold">{position}</p>
            </div>
          ))}
      </div>
       <p className="title">Others</p>
       <div className="d-flex justify-content-center">
        <table>
          <tr>
            <th className="p-2 text-success">S.No</th>
            <th className="p-2 text-success">Name</th>
            <th className="p-2 text-success">Position</th>
          </tr>
          {OthersList.map(({ id, name, position }) => (
            <tr>
              <td className="p-2">{id}</td>
              <td className="p-2">{name}</td>
              <td className="p-2">{position }</td>
            </tr>
          ))}
        </table>
       </div>
    </section>
  );
};

export default Management;
