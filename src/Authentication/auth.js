import * as Msal from "msal";

  // Config object to be passed to Msal on creation
  const msalConfig = {
   auth: {
     clientId: "214b38ee-0244-4d01-8f41-13dc16846424", // this is a fake id
     authority: "https://login.microsoftonline.com/320d71c1-7b81-48ba-8117-cc2c3c1bb518",
     redirectUri: "http://localhost:3000/",
   },
   cache: {
     cacheLocation: "sessionStorage", // This configures where your cache will be stored
     storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
   }
 };



export default class auth  {

 myMSALObj = new Msal.UserAgentApplication(msalConfig);

   signInUser = async function (loginRequest) {
    this.myMSALObj.loginPopup(loginRequest)
    .then(async (loginResponse) => {
    //Login Success callback code here
    console.log("login response", loginResponse);
    return await loginResponse;
  }).catch(async function (error) {
    console.log(error);
    return await error;
  });
 }



 getAccessToken =  async (tokenRequest) =>{

 }


}
