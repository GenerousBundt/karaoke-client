  export async function getSession() {
    try {
      let response = await fetch('http://localhost:5000/api/Session');
      let responseJson = await response.json();
      return responseJson.sessionId;
    } catch(error) {
      console.error(error);
    }
  }