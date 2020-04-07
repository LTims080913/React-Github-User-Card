import React from 'react';
import axios from 'axios';
import './App.css';
import Follower from './Follower'


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: "",
      codeName: "",
      location: "",
      followers: "",
      following: "",
      avatar_url: ""
     

    }
  }

componentDidMount(){
  axios.get("https://api.github.com/users/LTims080913")
  .then(res => {
    console.log(res)
    this.setState({
      user: res.data.name,
      codeName: res.data.login,
      location: res.data.location,
      followers: res.data.followers,
      following: res.data.following,
      avatar_url: res.data.avatar_url
    })
    
  })

}

render(){
  return(
    <>
    <div>
      <h1>Welcome Git User, {this.state.user}</h1>
      <img src={this.state.avatar_url}/>
      <p>Code Name: {this.state.codeName}</p>
      <p>Location: {this.state.location}</p>
      <p>Current Followers: {this.state.followers} </p>
      <p>Currently Following: {this.state.following}</p>
    </div>
      <Follower/>
    </>
  )
}


}
export default App
