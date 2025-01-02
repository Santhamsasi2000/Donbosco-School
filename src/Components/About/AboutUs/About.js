import "./About.css";

const About = () => {
  return (
    <section className='common-bg p-3 p-sm-5'>
        <p className="title">About Us</p>
        <div className='row gy-3'>
          <div className='col-sm-6'>
             <img className='about-img w-100 rounded-3' src='/Images/About/About1.jpeg' alt='No-Image'/>
          </div>
          <div className='col-sm-6'>
             <img className='about-img w-100 rounded-3' src='/Images/About/About2.jpeg' alt='No-Image'/>
          </div>
        </div>
        <p className="text-center mt-4 fs-5">Motto - <span className="fw-semibold">"To Bloom, To Flourish, To Accomplish"</span></p>
        <div>
          <p className="lh-lg">Don Bosco School, Sakayanagar, is run under the supervision of the Salesian Society, which has its headquarters in Trichy.The school was started as a high school on 10th June 1991. It was upgraded to a higher secondary school on 5th June 1993. From 13th June 2018, English medium education was started for classes 6 to 12.</p>
        </div>
        <div>
           <p className="fw-bold">School Motto</p>
           <p>The Don Bosco system of education, based on the principles of Reason, Religion, and Love, aims to guide the students of Sakayanagar and its surrounding areas towards personal, intellectual, and spiritual growth. The school imparts quality education and training to help all students achieve a fulfilling life.</p>
        </div>
        <div>
          <p className="fw-bold">School Motto Seal</p>
          <p>"Reason" refers to education that helps dispel ignorance and foster learning. "Religion" emphasizes the importance of divine light to dispel inner darkness and spread compassion to society. "Love" promotes selflessness and altruism to uplift humanity and foster human dignity.</p>
        </div>
        <div>
           <p className="fw-bold">School Vision</p>
           <p>The school's vision is "To Bloom, Grow, and Soar."</p>
           <ul>
            <li>Cross: Symbolizing the grounding of all students in faith.</li>
            <li>Book: Representing the transformation from ignorance.</li>
            <li>Flower: Blooming with beautiful thoughts and spreading fragrance.</li>
            <li>Lamp: Illuminating the world.</li>
           </ul>
        </div>
        <div>
            <p className="fw-bold">Vision Statement</p>
            <p className="lh-lg">Don Bosco Nursery and Primary School aims at the holistic development of the pupil by making them Physically Sound, Intellectually Competent, Morally Upright, Emotionally Balanced, Spiritually Enlightened, and Socially Committed. Thus, shaping them as mentoring leaders of tomorrow, striving towards loving relationships, giving them integrity and excellence by following the footsteps of Don Bosco.</p>
        </div>
        <div>
            <p className="fw-bold">Mission Statement</p>
            <ul className="lh-lg">
                <li><span className="fw-semibold">Loving Relationship —</span> To bring out in the students the capability to love God, self, neighbor, and nature in building a peaceful world.</li>
                <li><span className="fw-semibold">Integrity —</span> To instill in the students a sense of truth and honesty which creates the atmosphere of trust that allows genuine relationships to flourish.</li>
                <li><span className="fw-semibold">Excellence —</span> To inspire the pupils to strive towards excellence in a joyful manner with the spirit of cooperation and interdependence.</li>
            </ul>
        </div>
        
    </section>
  )
}

export default About
