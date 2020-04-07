import React from 'react';
import axios from 'axios';
 

class Follower extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            person: []
        }

    }
    
componentDidMount(){
    axios.get("https://api.github.com/users/LTims080913/followers")
    .then(response => {
      console.log(response)
      this.setState({
        person: response.data
      })
    })
}
render() {
    return(
    <div>{this.state.person.map(p => <><p>{p.login}</p><img src={p.avatar_url}/></>)}</div>
    )
}
}
export default Follower