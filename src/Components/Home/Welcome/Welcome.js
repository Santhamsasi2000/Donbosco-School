import { NavLink } from "react-router-dom";
import "./Welcome.css";
const Welcome = () => {
  return (
    <section className="row p-3 p-sm-5">
        <p className="title">Welcome to the DON BOSCO SCHOOL</p>
        <p>Don Bosco School, Sakayanagar, is run under the supervision of the Salesian Society, which has its headquarters in Trichy.The school was started as a high school on 10th June 1991. It was upgraded to a higher secondary school on 5th June 1993. From 13th June 2018, English medium education was started for classes 6 to 12.</p>
        <p className="text-center fw-semibold">Admission Open For 2025-2026:</p>
        <div className="d-flex flex-column flex-sm-row justify-content-center gap-3 gap-sm-5">
            <NavLink to="/admission-process" className="btn btn-success">Apply For Admission</NavLink>
            <NavLink to="/facilities" className="btn btn-outline-success">See Our Facilities</NavLink>
        </div>
    </section>
  )
}

export default Welcome
