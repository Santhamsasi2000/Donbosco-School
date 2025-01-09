import "./About.css";

const About = () => {
  return (
    <section className='common-bg p-3 p-sm-5'>
        <p className="title">Don Bosco: Shaping Minds, Enriching Souls</p>
        <div className='row gy-3 mb-4'>
          <div className='col-lg-6'>
             <img className='about-img w-100 rounded-3' src='/Images/Tamil/About/1.jpg' alt='No-Image'/>
          </div>
          <div className='col-lg-6'>
             <img className='about-img w-100 rounded-3' src='/Images/Tamil/About/2.jpg' alt='No-Image'/>
          </div>
        </div>
        <div>
           <p className="fw-bold text-success">Motto of the School :</p>
           <p>The Don Bosco system of education, based on the principles of Reason, Religion, and Love, aims to guide the students of Sakayanagar and its surrounding areas towards personal, intellectual, and spiritual growth. The school imparts quality education and training to help all students achieve a fulfilling life.</p>
        </div>
        <div>
          <p className="fw-bold text-success">Motto of the School Seal :</p>
          <p>"Reason" refers to education that helps dispel ignorance and foster learning. "Religion" emphasizes the importance of divine light to dispel inner darkness and spread compassion to society. "Love" promotes selflessness and altruism to uplift humanity and foster human dignity.</p>
        </div>
        <div>
           <p className="fw-bold text-success">School Vision :</p>
           <p>The school's vision is "To Bloom, Grow, and Soar."</p>
           <ul>
            <li>Cross: Symbolizing the grounding of all students in faith.</li>
            <li>Book: Representing the transformation from ignorance.</li>
            <li>Flower: Blooming with beautiful thoughts and spreading fragrance.</li>
            <li>Lamp: Illuminating the world.</li>
           </ul>
        </div>
    </section>
  )
}

export default About
