import "./Admissions.css";
import { NavLink } from 'react-router-dom';
import { IoMdCall } from "react-icons/io";

const ProcessDetails = () => {
  const forms = [
    { href: '/Images/Admission/Tamil Admission Form.pdf', label: 'Tamil Medium (6-12th)', fileName: 'Tamil Medium Admission Form' },
    { href: '/Images/Admission/English Admission Form.pdf', label: 'English Medium (6-12th)', fileName: 'English Medium Admission Form (6-12th)' },
    { href: '/Images/Admission/Primary Admission Form.pdf', label: 'English Medium (LKG - V)', fileName: 'English Medium Admission Form (6-12th)' },
  ];
  const phoneNumber = '6382174912';

  return (
    <div className="">
      <p className="title">ADMISSION PROCESS</p>
      <p className="fw-bold fs-5">Choose One Your Admission Path</p>
      <p className="mb-4">
        Here are three ways you can begin the admissions process in the best school.
      </p>

      {/* Way 1 */}
      <p className="fw-bold">Way 1: MANUAL ADMISSION</p>
      <div className="d-flex gap-3 gap-sm-5 flex-wrap">
        {forms.map((form, index) => (
          <a
            key={index}
            className="btn btn-success"
            href={form.href}
            download={form.fileName}
          >
            {form.label}
          </a>
        ))}
      </div>
      <ol className="mt-4">
        <li>Download the form.</li>
        <li>Print 2 or 3 copies in case corrections are needed.</li>
        <li>Complete all required fields in the form.</li>
        <li>Bring the completed form along with the required documents listed below.</li>
        <li>Visit our school campus to learn more about DON BOSCO School.</li>
        <li>Contact our admission team for assistance and submit the form with documents.</li>
        <li>Take the entrance exam.</li>
        <li>Secure your spot at DON BOSCO School!</li>
      </ol>
      <hr />

      {/* Way 2 */}
      <p className="fw-bold mt-4 mt-sm-5">Way 2: ONLINE ADMISSION</p>
      <div>
        <NavLink
          to="/admissionform"
         className="btn btn-success"
        >
          CLICK IT
        </NavLink>
        <ol className="mt-4">
          <li>Fill out the online admission form and submit it.</li>
          <li>We will contact you within 2 business days.</li>
          <li>Prepare the required documents listed below.</li>
          <li>Visit our school campus to learn more about DON BOSCO School.</li>
          <li>Contact our admission team and submit the form with documents.</li>
          <li>Take the entrance exam.</li>
          <li>Secure your spot at DON BOSCO School!</li>
        </ol>
      </div>
      <hr />

      {/* Way 3 */}
      <p className="fw-bold mt-4 mt-sm-5">Way 3: GUIDED ADMISSION</p>
      <a
        href={`tel:${phoneNumber}`}
        className="btn btn-success"
        aria-label="Call 6382174912 for admission guidance"
      >
        <IoMdCall className="fs-5 me-1" />
        {phoneNumber}
      </a>
      <ol className='mt-4'>
        <li>Call this number for personalized admission guidance.</li>
      </ol>
      <hr />
    </div>
  );
};

export default ProcessDetails;
