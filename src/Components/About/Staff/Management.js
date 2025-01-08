import "./Management.css";
import { ManagementList } from "./ManagementList";
const Management = () => {
  return (
    <section className="common-bg p-3 p-sm-5">
      <p className="title">The Management Team </p>
      {/*The Management Team and The Staff */}
      <div className="row gap-5 justify-content-center">
        {/* <p className="fw-semibold text-primary">Management Team</p> */}
        
          {ManagementList.map(({ id, image,name, position }) => (
            <div className="col-md-5 col-lg-3 border border-success border-2 rounded-2" key={id}>
              <img src={image} alt="No-Image" className="mt-3 w-100 management-img"/>
              <p className="mt-3 fw-semibold">{name}</p>
              <p className="fw-semibold">{position}</p>
            </div>
          ))}
      </div>
    </section>
  );
};

export default Management;
