import { SlLocationPin } from "react-icons/sl";
import { IoMailOpenOutline } from "react-icons/io5";
import { LuPhoneCall } from "react-icons/lu";
import Direction from "./Direction";
import { DataLocation } from "./DataLocation";

const Location = () => {
  return (
    <section>
      <div className='d-flex flex-column gap-5'>
        {
            DataLocation.map(({id,title,subtitle,location,emailId,mobileNumber})=>
            (
              <div className="p-3 rounded-3 shadow border border-primary border-2" key={id}>
                  <p className="fw-semibold fs-4 title-address">{title}</p>
                  <p>{subtitle}</p>
                  <div className="pb-2">
                    <i className="fs-5 label-color"><SlLocationPin /></i>
                    <a href=""
                  target="_blank" 
                  rel="noopener noreferrer" className="email text-decoration-none text-secondary"><span className="ps-2 ms-2">{location}</span></a>
                    
                  </div>
                  <div className="pb-2">
                    <i className="fs-5 label-color"><IoMailOpenOutline /></i>
                    <a href={`mailto:${emailId}`} className="email text-secondary ps-2 ms-2 text-decoration-none ">{emailId}</a>
                  </div>
                  <div className="pb-2">
                    <i className="fs-5 label-color"><LuPhoneCall /></i>
                    <a  href={`tel:${mobileNumber}`} className="email text-secondary ps-2 ms-2 text-decoration-none ">{mobileNumber}</a>
                  </div>
              </div>
            )
            )
        }
      </div>
      <Direction/>
    </section>
  )
}

export default Location
