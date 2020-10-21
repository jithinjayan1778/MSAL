const GetUserDetails = async (accesstoken) => {

    const resp = await fetch(`https://graph.microsoft.com/v1.0/me/`, {
     headers: {
      'Content-Type': 'application/json',
      "Accept": "application/json;odata.metadata=minimal;odata.streaming=true;IEEE754Compatible=false",
      "Authorization": `Bearer ${accesstoken}`
     },
    });
    const data = await resp.json();
    console.log("User data", data);
}

export default GetUserDetails;
