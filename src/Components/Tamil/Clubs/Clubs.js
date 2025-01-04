import './Clubs.css';
import { DataClub } from './DataClub';

const Clubs = () => {
  return (
    <section className="common-bg p-3 p-sm-5">
      <p className="title">Clubs and Responsibilities</p>
      <table className="table">
        <thead>
          <tr>
            <th>Club</th>
            <th>Responsibilities</th>
            <th>In-Charge</th>
          </tr>
        </thead>
        <tbody>
          {DataClub.map((club, index) => (
            <tr key={index}>
              <td>{club.name}</td>
              <td>
                <ul>
                  {club.responsibilities.map((task, idx) => (
                    <li key={idx}>{task}</li>
                  ))}
                </ul>
              </td>
              <td>{club.inCharge.join(', ')}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}

export default Clubs
