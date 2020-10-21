import * as Msal from "msal";
import MsalConfig from './AuthConfig.json'
 
const MSALObj = new Msal.UserAgentApplication(MsalConfig);
console.log(MsalConfig);
async function LoginService (loginRequest) {
  console.log("Login MSAL Obj", MSALObj);
  return MSALObj.loginPopup(loginRequest)
    .then((loginResponse) => {
       console.log("login response", loginResponse);
       return loginResponse;
  }).catch(function (error) {
       console.log(error);
  });
}
export default LoginService;

export async function GetAccessToken(tokenRequest){
 console.log("Access MSAL Obj", MSALObj);
 return MSALObj.acquireTokenSilent(tokenRequest)
    .then((tokenResponse) => {
        console.log(tokenResponse.accessToken);
        return tokenResponse.accessToken;
    }).catch((error) => {
        console.log(error);
    });
}