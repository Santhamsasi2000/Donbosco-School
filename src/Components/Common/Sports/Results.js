import React from "react";

const sportsData = [
  {
    level: "Zonal Level",
    achievements: [
      { sport: "Volleyball", category: "17 boys", position: "First place" },
      { sport: "Ball Badminton", category: "19 boys", position: "Second place" },
      { sport: "Kho-Kho", category: "17 boys", position: "Third place" },
      { sport: "Kabaddi", category: "17 boys", position: "Third place" },
    ],
  },
  {
    level: "State Level",
    achievements: [
      { sport: "Kho-Kho", category: "19 boys", position: "Second place" },
      { sport: "Volleyball", category: "4th place", position: "4th place" },
      { sport: "Ball Badminton", category: "4th place", position: "4th place" },
      { sport: "Kabaddi", category: "4th place", position: "4th place" },
    ],
  },
];

const SportsTable = () => {
  return (
    <div>
      <p className="text-success fs-5 fw-bold">Sports Achievements :</p>
      {sportsData.map(({level,achievements}) => (
        <div>
          <p className="mb-1 fw-bold table-heading">{level}</p>
          <table className="mb-3 mb-sm-4">
          <thead>
            <tr>
              <th className="p-1 p-sm-3">Level</th>
              <th className="p-1 p-sm-3">Sport</th>
              <th className="p-1 p-sm-3">Category</th>
              <th className="p-1 p-sm-3">Position</th>
            </tr>
          </thead>
          <tbody>
              {achievements.map(({sport, category, position}) => (
                <tr>
                  <td className="p-1 p-sm-3">{level}</td>
                  <td className="p-1 p-sm-3">{sport}</td>
                  <td className="p-1 p-sm-3">{category}</td>
                  <td className="p-1 p-sm-3">{position}</td>
                </tr>
              ))}
          </tbody>
          </table>
        </div>
      ))}
     <p><span className="table-heading fw-bold">Overall: </span>  3 boys have been selected to represent the district in the state-level sports competition.</p>
    </div>
  );
};

export default SportsTable;
