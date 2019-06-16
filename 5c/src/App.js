import React from 'react';
import './App.css';
import RepoBox from './RepoBox';
import RepoPage from './RepoPage';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      repos: [],
      selectedrepo : {}
    };
  }

  fetchRepos = () => {
    var that = this;
    fetch('https://api.github.com/users/mralexgray/repos').then(function (response) {
      return response.json();
    }).then(function (result) {

    that.setState({
        repos: result
      });
    });
  }

  componentWillMount() {
    this.fetchRepos();
  }    

  openRepo = (repo) => {
    this.setState({
      selectedrepo: repo
    });
    console.log(repo);
  }

  render () {
    if (this.state.selectedrepo) {
      return (
        <RepoPage
          repo={this.state.selectedrepo}
        />
      );
    }
    let repo = this.state.repos.map((repo) => {
       return (
        <RepoBox 
          repo={repo}
          openRepo={this.openRepo}
       />
       );
    });
    return (
      <div>
          {repo}
      </div>
    );
  }
}

export default App;
