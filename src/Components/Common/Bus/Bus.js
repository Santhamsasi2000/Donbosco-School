import './Bus.css';
import { DataBus } from './DataBus';
const Bus = () => {
  return (
  <section className='common-bg p-3 p-sm-5'>
    <p className='title'>Bus Schedule</p>
    {/* {DataBus.map(({image,busNo,shift,startingPoint,stops,endingPoint}) => (
     <div className='row'>
        <div className='col-6'>
              <img src={image} alt='No-Image' className='w-100'/>
        </div>
        <div className='col-6'>
          <div>
            <span>Bus No:</span>
            <span>{busNo}</span>
          </div>
          <table>
              <tr>
                <th>Shift</th>
                <th>Starting Point</th>
                <th>Stops</th>
                <th>Ending Point</th>
              </tr>
              <tr>
                <td>{shift}</td>
                <td>{startingPoint}</td>
                <td>{stops.join(", ")}</td>
                <td>{endingPoint}</td>
              </tr>
          </table>
        </div>
     </div>
        ))} */}
         {DataBus.map(({image,busNo,shift,startingPoint,stops,endingPoint}) => (
     <div className='row'>
        <div className='col-6'>
              <img src={image} alt='No-Image' className='w-100'/>
        </div>
        <div className='col-6'>
          <div className='d-flex gap-3'>
            <span>Bus No :</span>
            <span>{busNo}</span>
          </div>
            <div className='d-flex gap-3'>
            <span>Shift :</span>
            <span>{shift}</span>
            </div>
            <div className='d-flex gap-3'>
            <span>Starting Point :</span>
            <span>{startingPoint}</span>
            </div>
            <div className='d-flex gap-3'>
            <span>Stops :</span>
            <span>{stops.join(", ")}</span>
            </div>
            <div className='d-flex gap-3'>
            <span>Ending Point :</span>
            <span>{endingPoint}</span>
            </div>
          </div>
        </div>
        ))}
  </section>
  )
}

export default Bus
