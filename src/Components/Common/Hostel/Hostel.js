import './Hostel.css';
import RulesHostel from './RulesHostel';
import Timetable from './TimeTable';

const Hostel = () => {
  return (
    <section className='p-3 p-sm-5 common-bg'>
      <Timetable/>
      <RulesHostel/>
    </section>
  )
}

export default Hostel
