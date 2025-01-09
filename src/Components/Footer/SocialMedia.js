import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { SiWhatsapp } from "react-icons/si";

const SocialMedia = () => {
  return (
    <div>
      <div className='d-flex gap-4 mt-4'>
        <div className='media-icons bg-white d-flex justify-content-center align-items-center'>
          <a className='fs-5 navcolor pb-1' href='https://www.facebook.com/profile.php?id=100084199154415' 
          target='_blank'  rel="noopener noreferrer"><FaFacebookF /></a>
        </div>
        <div className='media-icons bg-white d-flex justify-content-center align-items-center'>
          <a className='fs-5 navcolor pb-1'><FaInstagram /></a>
        </div>
        <div className='media-icons bg-white d-flex justify-content-center align-items-center'>
          <a className='fs-5 navcolor pb-1'  href='https://www.youtube.com/@donboscoschoolboscomaiyamp6270'
          target='_blank' rel='noopener noreferrer'> <FaYoutube /></a>
        </div>
        <div className='media-icons bg-white d-flex justify-content-center align-items-center'>
          <a href="https://wa.me/918098779596" className='fs-5 navcolor pb-1' target="_blank" rel="noopener noreferrer">
            <SiWhatsapp />
          </a>
        </div>
      </div>
    </div>
  )
}

export default SocialMedia
