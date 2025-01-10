import './Hostel.css';

const Timetable = () => {
  const weekdays = [
    { time: '05:30 a.m.', activity: 'Rising' },
    { time: '06:00', activity: 'Study' },
    { time: '06:45', activity: 'Chaplaincy' },
    { time: '07:00', activity: 'Mass (Catholic Boys)' },
    { time: '07:25', activity: 'Morning Jobs (Groups)' },
    { time: '08:00', activity: 'Breakfast' },
    { time: '08:25', activity: 'To School' },
    { time: '09:10', activity: 'Assembly Begins' },
    { time: '12:30 p.m.', activity: 'Lunch (First group)' },
    { time: '12:40', activity: 'Lunch (Second group)' },
    { time: '04:15', activity: 'Change, Games' },
    { time: '05:15', activity: 'Bath Assisting' },
    { time: '06:00', activity: 'Study' },
    { time: '08:00', activity: 'Rosary' },
    { time: '08:15', activity: 'Supper & Recreation' },
    { time: '09:00', activity: 'Night Prayers, Good night, Night Study' },
  ];

  const saturday = [
    { time: '06:15 a.m.', activity: 'Rising' },
    { time: '06:45 a.m.', activity: 'Study' },
    { time: '08:00 a.m.', activity: 'Breakfast' },
    { time: '08:30 a.m.', activity: 'Games' },
    { time: '09:30 a.m.', activity: 'Wash' },
    { time: '09:45 a.m.', activity: 'Study' },
    { time: '11:00 a.m.', activity: 'Break' },
    { time: '11:15 a.m.', activity: 'Study' },
    { time: '12:30 p.m.', activity: 'Lunch' },
    { time: '01:00 p.m.', activity: 'Washing' },
    { time: '02:00 p.m.', activity: 'Rest/Study' },
    { time: '02:30 p.m.', activity: 'Good Manners Class' },
    { time: '03:00 p.m.', activity: 'Work' },
    { time: '04:00 p.m.', activity: 'Games' },
    { time: '05:00 p.m.', activity: 'Bath, Snacks' },
    { time: '05:30 p.m.', activity: 'Towards the St. Antony’s Church' },
    { time: '07:30 p.m.', activity: 'Supper (Movie, Family Circle, Party Games)' },
    { time: '10:00 p.m.', activity: 'To Bed' },
  ];

  const sunday = [
    { time: '06:30 a.m.', activity: 'Rising' },
    { time: '07:00 a.m.', activity: 'Study' },
    { time: '08:00 a.m.', activity: 'Breakfast' },
    { time: '08:20 a.m.', activity: 'Towards the Shrine of St. Antony' },
    { time: '09:45 a.m.', activity: 'Games' },
    { time: '10:45 a.m.', activity: 'Wash' },
    { time: '11:00 a.m.', activity: 'Study' },
    { time: '12:30 p.m.', activity: 'Lunch, Indoor Games' },
    { time: '02:00 p.m.', activity: 'Good Manners Class' },
    { time: '02:30 p.m.', activity: 'Singing class (Catholic Students)/ Personal Work' },
    { time: '03:00 p.m.', activity: 'Work' },
    { time: '04:00 p.m.', activity: 'Tea & Games' },
    { time: '05:15 p.m.', activity: '1st Batch Bath' },
    { time: '05:30 p.m.', activity: '2nd Batch Bath' },
    { time: '06:00 p.m.', activity: 'Study' },
    { time: '08:00 p.m.', activity: 'Supper, Recreation' },
    { time: '08:45 p.m.', activity: 'Rosary & Good Night talk in Groups' },
    { time: '09:20 p.m.', activity: 'To Bed' },
  ];

  const renderTimetable = (title, data) => (
    <div>
      <p className='fw-semibold mb-1 fs-5 text-uppercase table-heading'>{title}</p>
      <table>
        {data.map((item, index) => (
          <tr key={index}>
            <td className='p-3'>{item.time}</td> 
            <td className='p-3'>{item.activity}</td>
          </tr>
        ))}
      </table>
    </div>
  );

  return (
    <section className='mb-3 mb-sm-5'>
      <p className='title'>ST. CHRISTOPHER’S HOSTEL (Only Boys)</p>
      <p className='fw-bold text-success fs-5'>Hostel Timetable :</p>
     <div className='mb-3 mb-sm-5'>
       {renderTimetable('Weekdays', weekdays)}
     </div>
      <div className='d-flex flex-column flex-lg-row justify-content-center gap-5'>
        {renderTimetable('Saturday', saturday)}
        {renderTimetable('Sunday', sunday)}
      </div>
    </section>
  );
};

export default Timetable;
