import './Bus.css';
import { DataBus } from './DataBus';
const Bus = () => {
  return (
  <section className='common-bg p-3 p-sm-5'>
    <p className='title'>Bus Schedule</p>
    <table>
      <thead>
        <tr>
          <th className='p-3'>Bus No.</th>
          <th className='p-3'>Shift</th>
          <th className='p-3'>Starting Point</th>
          <th className='p-3'>Stops</th>
          <th className='p-3'>Ending Point</th>
        </tr>
      </thead>
      <tbody>
        {DataBus.map((bus, index) => (
          <tr key={index}>
            <td className='p-3'>{bus.busNo}</td>
            <td className='p-3'>{bus.shift}</td>
            <td className='p-3'>{bus.startingPoint}</td>
            <td className='p-3'>{bus.stops.join(", ")}</td>
            <td className='p-3'>{bus.endingPoint}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </section>
  )
}

export default Bus
