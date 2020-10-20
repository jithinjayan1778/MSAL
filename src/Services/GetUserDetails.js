const GetUserDetails = async (acesstoken) => {
    var bearer = "Bearer " + acesstoken;
    const headers =  {
     'Content-Type': 'application/json',
     "Accept": "application/json; odata=verbose",
     "Authorization":bearer
    };
   //headers.append("Authorization", bearer);
    const resp = await fetch(`https://graph.microsoft.com/v1.0/me/`, headers);
    const data = await resp.json();
    console.log("User data", data);
    //return JSON.parse(data);
}
export default GetUserDetails;
