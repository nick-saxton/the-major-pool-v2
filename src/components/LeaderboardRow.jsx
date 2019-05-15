import React, { useState } from "react";

const LeaderboardRow = ({ entry, index }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <tr
        className={`entry-row ${index % 2 ? "has-background-light" : ""}`}
        onClick={() => setExpanded(!expanded)}
        title="Click to view picks"
      >
        <td>{entry.place}</td>
        <td>{entry.name}</td>
        <td>{`${entry.total > 0 ? "+" : ""}${
          entry.total === 0 ? "E" : entry.total
        }`}</td>
      </tr>
      <tr
        className={`${expanded ? "" : "is-hidden"} ${
          index % 2 ? "has-background-light" : ""
        }`}
      >
        {entry.picks && (
          <td colSpan="3">
            <div className="columns is-centered">
              <div className="column is-three-fifths">
                <table className="table is-fullwidth is-bordered is-narrow">
                  <thead>
                    <tr>
                      <th>Player Name</th>
                      <th>Score</th>
                    </tr>
                  </thead>
                  <tbody>
                    {entry.picks
                      .sort((a, b) => a.total - b.total)
                      .map(pick => (
                        <tr
                          key={entry.name + pick.name}
                          className={pick.active ? "" : "has-background-danger"}
                        >
                          <td>{pick.name}</td>
                          <td>{`${pick.total > 0 ? "+" : ""}${
                            pick.total === 0 ? "E" : pick.total
                          }`}</td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </td>
        )}
      </tr>
    </>
  );
};

export default LeaderboardRow;
