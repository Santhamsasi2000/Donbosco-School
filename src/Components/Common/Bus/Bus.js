import './Bus.css';
import { DataBus } from './DataBus';

const Bus = () => {
  return (
    <section className="common-bg p-3 p-sm-5">
      <p className="title">Bus Schedule</p>
      {DataBus.map(({ image, busNo, shift, startingPoint, stops, endingPoint }, index) => (
        <div className="row mb-4" key={index}>
          {/* Image Section */}
          <div className="col-12 col-md-6 mb-3 mb-md-0">
            <img src={image} alt={`Bus ${busNo}`} className="w-100 rounded" />
          </div>
          
          {/* Details Section */}
          <div className="col-12 col-md-6">
            <div className="d-flex gap-3">
              <span className="fw-bold">Bus No:</span>
              <span>{busNo}</span>
            </div>
            <div className="d-flex gap-3">
              <span className="fw-bold">Shift:</span>
              <span>{Array.isArray(shift) ? shift.join(", ") : shift}</span>
            </div>
            <div className="d-flex gap-3">
              <span className="fw-bold">Starting Point:</span>
              <span>{Array.isArray(startingPoint) ? startingPoint.join(", ") : startingPoint}</span>
            </div>
            <div className="mb-2">
              <span className="fw-bold">Stops:</span>
              <ul className="mb-0">
                {Array.isArray(stops) &&
                  stops.map((stopGroup, stopIndex) => (
                    <li key={stopIndex}>
                      {Array.isArray(stopGroup) ? stopGroup.join(", ") : "Invalid stop data"}
                    </li>
                  ))}
              </ul>
            </div>
            <div className="d-flex gap-3">
              <span className="fw-bold">Ending Point:</span>
              <span>{endingPoint}</span>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Bus;
