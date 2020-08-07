import React, { useState, useEffect } from "react";

function Teams() {
  const [teams, setTeams] = useState(false);
  useEffect(() => {
    getTeam();
  }, []);
  function getTeam() {
    fetch("http://localhost:3001")
      .then((response) => {
        return response.text();
      })
      .then((data) => {
        setTeams(data);
      });
  }
  function createTeam() {
    let name = prompt("Enter team name");
    let wins = prompt("Enter team wins");
    let losses = prompt("Enter team losses");
    fetch("http://localhost:3001/teams", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, wins, losses }),
    })
      .then((response) => {
        return response.text();
      })
      .then((data) => {
        alert(data);
        getTeam();
      });
  }
  function deleteTeam() {
    let id = prompt("Enter team id");
    fetch(`http://localhost:3001/teams/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        return response.text();
      })
      .then((data) => {
        alert(data);
        getTeam();
      });
  }
  return (
    <div>
      {teams ? teams : "There is no teams data available"}
      <br />
      <button onClick={createTeam}>Add team</button>
      <br />
      <button onClick={deleteTeam}>Delete team</button>
    </div>
  );
}

export default Teams;
