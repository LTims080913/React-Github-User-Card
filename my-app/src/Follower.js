import React from 'react';
import axios from 'axios';
 

function Follower(props)  {
   
    


    return(
    <div>{props.person.map(p => <><p>{p.login}</p><img src={p.avatar_url}/></>)}</div>
    )

}
export default Follower