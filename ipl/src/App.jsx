import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [seasons, setSeasons] = useState([]);
  const [teams, setTeams] = useState([]);
  const [players, setPlayers] = useState([]);
  const [statistics, setStatistics] = useState([]);
  const [selectedYear, setSelectedYear] = useState(null);
  const [winner, setWinner] = useState('');

  // Mock data fetching functions (replace with actual API calls)
  useEffect(() => {
    // Fetch seasons, teams, players, and statistics from your backend API
    // For example:
    // fetch('/api/seasons').then(res => res.json()).then(data => setSeasons(data));
    
    // Sample Data (replace with actual data fetching)
    setSeasons([{ year: 2023, winner_id: 1 }, { year: 2022, winner_id: 2 },{ year: 2021, winner_id: 3 },{ year: 2020, winner_id: 4 }]);
    setTeams([{ team_id: 1, team_name: 'Team A' }, { team_id: 2, team_name: 'Team B' }]);
    setPlayers([{ player_id: 1, player_name: 'Player 1', team_id: 1 }, { player_id: 2, player_name: 'Player 2', team_id: 2 }, { player_id: 3, player_name: 'Player 3', team_id: 3 }, { player_id: 4, player_name: 'Player 4', team_id: 4 }]);
    setStatistics([{ stat_id: 1, player_id: 1, runs_scored: 100 }, { stat_id: 2, player_id: 2, runs_scored: 50 }, { stat_id: 3, player_id: 3, runs_scored: 60 }, { stat_id: 4, player_id: 4, runs_scored: 70 }]);
  }, []);

  const handleYearChange = (e) => {
    const selected = seasons.find(season => season.year === parseInt(e.target.value));
    setSelectedYear(selected);
    const winningTeam = teams.find(team => team.team_id === selected.winner_id);
    setWinner(winningTeam ? winningTeam.team_name : '');
  };

  return (
    <div className="App">
      <h1>IPL Management System</h1>
      
      <div className="selection">
        <label htmlFor="season">Select IPL Season:</label>
        <select id="season" onChange={handleYearChange}>
          <option value="">Select a year</option>
          {seasons.map(season => (
            <option key={season.year} value={season.year}>{season.year}</option>
          ))}
        </select>
      </div>

      {selectedYear && (
        <div className="results">
          <h2>Season {selectedYear.year}</h2>
          <p>Winner: {winner}</p>
        </div>
      )}

      <h3>Teams</h3>
      <ul>
        {teams.map(team => (
          <li key={team.team_id}>
            {team.team_name}
            <ul>
              {players.filter(player => player.team_id === team.team_id).map(player => (
                <li key={player.player_id}>{player.player_name}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>

      <h3>Statistics</h3>
      <ul>
        {statistics.map(stat => (
          <li key={stat.stat_id}>Player ID: {stat.player_id} - Runs Scored: {stat.runs_scored}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;