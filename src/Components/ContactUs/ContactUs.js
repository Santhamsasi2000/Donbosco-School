import './ContactUs.css';
import ContactUsForm from "./ContactForm/ContactUsForm";
import Location from "./Location/Location";
import Direction from './Direction/Direction';

const ContactUs = () => {
  return (
    <section className="common-bg p-3 p-sm-5">
      <p className="title mb-3 mb-sm-5">CONTACT AND LOCATION</p>
      <div className='row justify-content-between gy-3 gy-sm-5'>
        <div className='col-lg-5'>
          <Location/>
          <Direction/>
        </div>
        <div className='col-lg-5'>
          <ContactUsForm/>
        </div>
      </div>
    </section>
  )
}

export default ContactUs
