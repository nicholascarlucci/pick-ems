/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-alert */
import React from 'react';

export default class TeamsOps extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      teams: [],
      showNew: false,
      showEdit: false,
    };
  }

  componentDidMount() {
    this.getTeams();
  }

  handleDelete = (event) => {
    this.deleteTeam(event.target.id);
  };

  handleEdit = (event) => {
    this.setState({ showEdit: true });
  };

  async getTeams() {
    const url = 'http://localhost:3001';
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ teams: data });
  }

  deleteTeam = (id) => {
    fetch(`http://localhost:3001/teams/${id}`, {
      method: 'DELETE',
    })
      .then((response) => response.text())
      .then((data) => {
        this.getTeams();
      });
  };

  //idea - show/hide edit/new forms on button click, hide on submit/save

  render() {
    return (
      <div>
        <ul>
          {this.state.teams.map((team) => (
            <li key={team.id}>
              {team.name}
              <button
                id={team.id}
                type="button"
                onClick={this.handleEdit}
                style={{ margin: '0 1em' }}
              >
                edit
              </button>
              <button
                id={team.id}
                type="button"
                onClick={this.handleDelete}
                style={{ margin: '0 1em' }}
              >
                delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

// function Teams() {
//   const [teams, setTeams] = useState(false);
//   function getTeam() {
//     fetch('http://localhost:3001')
//       .then((response) => response.text())
//       .then((data) => {
//         setTeams(data);
//       });
//   }
//   function createTeam() {
//     const name = prompt('Enter team name');
//     const wins = prompt('Enter team wins');
//     const losses = prompt('Enter team losses');
//     fetch('http://localhost:3001/teams', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ name, wins, losses }),
//     })
//       .then((response) => response.text())
//       .then((data) => {
//         alert(data);
//         getTeam();
//       });
//   }
//   function deleteTeam() {
//     const id = prompt('Enter team id');
//     fetch(`http://localhost:3001/teams/${id}`, {
//       method: 'DELETE',
//     })
//       .then((response) => response.text())
//       .then((data) => {
//         alert(data);
//         getTeam();
//       });
//   }
//   useEffect(() => {
//     getTeam();
//   }, []);
//   return (
//     <div>
//       {teams || 'There is no teams data available'}
//       <br />
//       <button type="button" onClick={createTeam}>
//         Add team
//       </button>
//       <br />
//       <button type="button" onClick={deleteTeam}>
//         Delete team
//       </button>
//     </div>
//   );
// }

// export default Teams;
