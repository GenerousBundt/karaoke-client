  export async function getSession() {
    try {
      let response = await fetch('http://localhost:5000/api/Session');
      let responseJson = await response.json();
      console.log("interior session id: ", responseJson.sessionId);
      return responseJson.sessionId;
    } catch(error) {
      console.error(error);
    }
  }