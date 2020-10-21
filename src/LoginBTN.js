import React, { Component } from 'react';
import LoginService from './Authentication/LoginService';
import {GetAccessToken} from './Authentication/LoginService';
import GetUserDetails from './Services/GetUserDetails';

const  signInStyle = {
 backgroundColor:"green",
 padding:'10px',
 margin:"10px",
 color:"white",
 border:"0px",
 width:"100px",
 borderRadius:"5px",
 float:"right"
};

const loginRequest = {
 scopes: ["openid", "profile", "User.Read"],
};

const tokenRequest = {
 scopes: ["User.Read"]
};

class LoginBTN extends Component {
  
 handleLogin = ()=>{
  LoginService(loginRequest).then( r => {
    console.log("returned",r)
    GetAccessToken(tokenRequest).then( t =>
     {
         console.log("access token m",t); 
         GetUserDetails(t);
     });
  });
  //  .then(d => 
  //  {
  //     myMSALObj.acquireTokenSilent(tokenRequest)
  //     .then((tokenResponse) => {
  //         // Callback code here
  //         console.log("access token m",tokenResponse.accessToken); 
  //         GetUserDetails(tokenResponse.accessToken);
  //     }).catch((error) => {
  //         console.log(error);
  //     });
    
  // });
   
 }

 render() {
  return (
   <div>
     <button style={signInStyle} type="button" onClick={this.handleLogin}>Sign In</button>
   </div>
  );
 }
}

export default LoginBTN;