import './ContactUs.css';
import ContactUsForm from "./ContactForm/ContactUsForm";
import Location from "./Location/Location";

const ContactUs = () => {
  return (
    <section className="common-bg p-3 p-sm-5">
      <p className="title">CONTACT AND LOCATION</p>
      <div className='row justify-content-between'>
        <div className='col-lg-5'>
          <Location/>
        </div>
        <div className='col-lg-5'>
          <ContactUsForm/>
        </div>
      </div>
    </section>
  )
}

export default ContactUs
