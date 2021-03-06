import React from "react";

import Leaderboard from "./Leaderboard";

import entries from "../entries";

const tournamentIDs = {
  "014": "Masters",
  "033": "PGA",
  "026": "US",
  "100": "British"
};

class Tournament extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      filter: "",
      loading: true,
      players: [],
      year: ""
    };

    this.clearFilter = this.clearFilter.bind(this);
    this.updateFilter = this.updateFilter.bind(this);
  }

  componentDidMount() {
    if (typeof this.props.id === "string") {
      fetch(
        `https://statdata.pgatour.com/r/${
          this.props.id
        }/leaderboard-v2mini.json`
      )
        .then(res => res.json())
        .then(data => {
          let entriesForTournament = {};

          Object.keys(entries).forEach(entryName => {
            entriesForTournament[entryName] =
              entries[entryName][tournamentIDs[this.props.id]];
          });

          let highScore = -99;

          data.leaderboard.players.forEach(player => {
            if (player.total > highScore && player.status === "active") {
              highScore = player.total;
            }
          });

          let players = {};

          data.leaderboard.players.forEach(player => {
            players[
              `${player.player_bio.short_name}. ${
                player.player_bio.last_name
              }`.toUpperCase()
            ] = {
              total: player.total,
              active: player.status === "active"
            };
          });

          this.setState({
            entries: entriesForTournament,
            highScore,
            loading: false,
            players,
            year: data.debug.setup_year
          });
        });
    } else {
      let entryTotals = {};

      fetch(
        `https://statdata.pgatour.com/r/${
          this.props.id[0]
        }/leaderboard-v2mini.json`
      )
        .then(res => res.json())
        .then(data => {
          if (data.debug.setup_year === "2019") {
            const { highScore, players } = this.getHighScoreAndPlayerScores(
              data
            );

            Object.keys(entries).forEach(entryName => {
              entryTotals[entryName] = entries[entryName][
                tournamentIDs[this.props.id[0]]
              ].reduce((total, playerName) => {
                const player = players[playerName];
                if (player && player.active) {
                  return (total += player.total);
                } else {
                  return (total += highScore + 1);
                }
              }, 0);
            });
          }

          return fetch(
            `https://statdata.pgatour.com/r/${
              this.props.id[1]
            }/leaderboard-v2mini.json`
          );
        })
        .then(res => res.json())
        .then(data => {
          if (data.debug.setup_year === "2019") {
            const { highScore, players } = this.getHighScoreAndPlayerScores(
              data
            );

            Object.keys(entries).forEach(entryName => {
              entryTotals[entryName] += entries[entryName][
                tournamentIDs[this.props.id[1]]
              ].reduce((total, playerName) => {
                const player = players[playerName];
                if (player && player.active) {
                  return (total += player.total);
                } else {
                  return (total += highScore + 1);
                }
              }, 0);
            });

            return fetch(
              `https://statdata.pgatour.com/r/${
                this.props.id[2]
              }/leaderboard-v2mini.json`
            );
          }
        })
        .then(res => res.json())
        .then(data => {
          if (data.debug.setup_year === "2019") {
            const { highScore, players } = this.getHighScoreAndPlayerScores(
              data
            );

            Object.keys(entries).forEach(entryName => {
              entryTotals[entryName] += entries[entryName][
                tournamentIDs[this.props.id[2]]
              ].reduce((total, playerName) => {
                const player = players[playerName];
                if (player && player.active) {
                  return (total += player.total);
                } else {
                  return (total += highScore + 1);
                }
              }, 0);
            });
          }

          return fetch(
            `https://statdata.pgatour.com/r/${
              this.props.id[3]
            }/leaderboard-v2mini.json`
          );
        })
        .then(res => res.json())
        .then(data => {
          if (data.debug.setup_year === "2019") {
            const { highScore, players } = this.getHighScoreAndPlayerScores(
              data
            );

            Object.keys(entries).forEach(entryName => {
              entryTotals[entryName] += entries[entryName][
                tournamentIDs[this.props.id[3]]
              ].reduce((total, playerName) => {
                const player = players[playerName];
                if (player && player.active) {
                  return (total += player.total);
                } else {
                  return (total += highScore + 1);
                }
              }, 0);
            });
          }

          this.setState({
            entries: entryTotals,
            loading: false,
            year: "2019"
          });
        });
    }
  }

  clearFilter() {
    this.setState({
      filter: ""
    });
  }

  getHighScoreAndPlayerScores(data) {
    let highScore = -99;

    data.leaderboard.players.forEach(player => {
      if (player.total > highScore && player.status === "active") {
        highScore = player.total;
      }
    });

    let players = {};

    data.leaderboard.players.forEach(player => {
      players[
        `${player.player_bio.short_name}. ${
          player.player_bio.last_name
        }`.toUpperCase()
      ] = {
        total: player.total,
        active: player.status === "active"
      };
    });

    return {
      highScore,
      players
    };
  }

  updateFilter(event) {
    this.setState({
      filter: event.target.value.toLowerCase()
    });
  }

  render() {
    const { name } = this.props;
    const { filter, highScore, loading, players, year } = this.state;

    return (
      <>
        <div className="columns">
          <div className="column is-three-fifths">
            <h1 className="title">{name}</h1>
          </div>
          <div className="column">
            <div className="columns">
              <div className="column is-three-quarters">
                <input
                  className="input is-rounded"
                  type="text"
                  value={filter}
                  placeholder="Filter by entry name"
                  onChange={this.updateFilter}
                />
              </div>
              <div className="column is-flex">
                <button
                  className="button is-text is-small"
                  onClick={this.clearFilter}
                >
                  Clear
                </button>
              </div>
            </div>
          </div>
        </div>
        {year !== "2019" ? (
          loading ? (
            <p>Loading...</p>
          ) : (
            <p>This tournament has not started yet.</p>
          )
        ) : (
          <Leaderboard
            entries={this.state.entries}
            filter={filter}
            highScore={highScore}
            players={players}
          />
        )}
      </>
    );
  }
}

export default Tournament;
