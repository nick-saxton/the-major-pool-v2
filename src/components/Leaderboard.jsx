import React from "react";

import LeaderboardRow from "./LeaderboardRow";

const Leaderboard = ({ entries, filter, highScore, players }) => {
  let currentPlace = 0;

  const entriesWithTotal = Object.keys(entries)
    .map(entryName => {
      if (typeof entries[entryName] === "number") {
        return {
          name: entryName,
          total: entries[entryName]
        };
      } else {
        const picks = [];

        const total = entries[entryName].reduce((total, player) => {
          if (players[player] && players[player].active) {
            picks.push({
              name: player,
              total: players[player].total,
              active: true
            });
            return total + players[player].total;
          } else {
            picks.push({
              name: player,
              total: highScore + 1,
              active: false
            });
            return total + (highScore + 1);
          }
        }, 0);

        return {
          name: entryName,
          total,
          picks
        };
      }
    })
    .sort((a, b) => a.total - b.total)
    .map((entry, index, allEntries) => {
      let place = index + 1;

      if (index > 0 && entry.total === allEntries[index - 1].total) {
        place = currentPlace;
      } else {
        currentPlace = place;
      }

      return {
        ...entry,
        place
      };
    });

  return (
    <table className="table is-fullwidth is-narrow">
      <thead>
        <tr>
          <th>Position</th>
          <th>Entry Name</th>
          <th>Total Score</th>
        </tr>
      </thead>
      <tbody>
        {entriesWithTotal
          .filter(entry => entry.name.toLowerCase().indexOf(filter) !== -1)
          .map((entry, index) => (
            <LeaderboardRow key={entry.name} entry={entry} index={index} />
          ))}
      </tbody>
    </table>
  );
};

export default Leaderboard;
