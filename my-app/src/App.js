import React from 'react';
import axios from 'axios';
import './App.css';
import Follower from './Follower'


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: {},
      person: []
      // codeName: "",
      // location: "",
      // followers: "",
      // following: "",
      // avatar_url: ""
     

    }
  }

componentDidMount(){
  axios.get("https://api.github.com/users/LTims080913")
  .then(res => {
    console.log(res)
    this.setState({
      user: res.data
      // codeName: res.data.login,
      // location: res.data.location,
      // followers: res.data.followers,
      // following: res.data.following,
      // avatar_url: res.data.avatar_url
    })
    
  })
  .catch(error => {
    console.log("Houston we have a problem", error)
  })
  axios.get("https://api.github.com/users/LTims080913/followers")
  .then(response => {
    console.log(response)
    this.setState({
      person: response.data
    })
  })
  .catch(error => {
    console.log("Houston we have a problem", error)
  })
}

render(){
  return(
    <>
    <div>
      <h1>Welcome Git User, {this.state.user.name}</h1>
      <img src={this.state.user.avatar_url}/>
      <p>Code Name: {this.state.user.login}</p>
      <p>Location: {this.state.user.location}</p>
      <p>Current Followers: {this.state.user.followers} </p>
      <p>Currently Following: {this.state.user.following}</p>
    </div>
      <Follower person={this.state.person}/>
    </>
  )
}


}
export default App
