/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-alert */
import React, { useState, useEffect } from 'react';

function Teams() {
  const [teams, setTeams] = useState(false);
  function getTeam() {
    fetch('http://localhost:3001')
      .then((response) => response.text())
      .then((data) => {
        setTeams(data);
      });
  }
  function createTeam() {
    const name = prompt('Enter team name');
    const wins = prompt('Enter team wins');
    const losses = prompt('Enter team losses');
    fetch('http://localhost:3001/teams', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, wins, losses }),
    })
      .then((response) => response.text())
      .then((data) => {
        alert(data);
        getTeam();
      });
  }
  function deleteTeam() {
    const id = prompt('Enter team id');
    fetch(`http://localhost:3001/teams/${id}`, {
      method: 'DELETE',
    })
      .then((response) => response.text())
      .then((data) => {
        alert(data);
        getTeam();
      });
  }
  useEffect(() => {
    getTeam();
  }, []);
  return (
    <div>
      {teams || 'There is no teams data available'}
      <br />
      <button type="button" onClick={createTeam}>Add team</button>
      <br />
      <button type="button" onClick={deleteTeam}>Delete team</button>
    </div>
  );
}

export default Teams;
