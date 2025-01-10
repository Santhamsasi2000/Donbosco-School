// import './AboutEnglish.css';

const AboutEnglish = () => {
  return (
    <section className="p-3 p-sm-5 common-bg">
        <p className="title">Vision and Mission of Don Bosco School of Merit</p>
        <div className="row">
           <img src="/Images/English/About/English.jpg" alt="No-Image" className="col-lg-6 rounded-3"/>
           <img src="/Images/English/About/English2.jpg" alt="No-Image" className="d-none d-lg-block col-lg-6 rounded-3"/>
        </div>
        <p className="text-center mt-4 fs-5">Motto - <span className="fw-semibold">"To Bloom, To Flourish, To Accomplish"</span></p>
        <div>
            <p className="fw-bold text-success">GENERAL INFORMATION</p>
            <p className="lh-lg">Don Bosco School of Merit was founded in the year 2018 for the primary sections with the motto "To Bloom, To Flourish, To Accomplish" by the Salesians of Don Bosco, INT Province.</p>
        </div>
        <div>
            <p className="fw-bold text-success">Vision Statement</p>
            <p className="lh-lg">Don Bosco Nursery and Primary School aims at the holistic development of the pupil by making them Physically Sound, Intellectually Competent, Morally Upright, Emotionally Balanced, Spiritually Enlightened, and Socially Committed. Thus, shaping them as mentoring leaders of tomorrow, striving towards loving relationships, giving them integrity and excellence by following the footsteps of Don Bosco.</p>
        </div>
        <div>
            <p className="fw-bold text-success">Mission Statement</p>
            <ul className="lh-lg">
                <li><span className="fw-semibold">Loving Relationship —</span> To bring out in the students the capability to love God, self, neighbor, and nature in building a peaceful world.</li>
                <li><span className="fw-semibold">Integrity —</span> To instill in the students a sense of truth and honesty which creates the atmosphere of trust that allows genuine relationships to flourish.</li>
                <li><span className="fw-semibold">Excellence —</span> To inspire the pupils to strive towards excellence in a joyful manner with the spirit of cooperation and interdependence.</li>
            </ul>
        </div>
    </section>
  )
}

export default AboutEnglish
