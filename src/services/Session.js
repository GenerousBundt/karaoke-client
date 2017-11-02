  export async function getSession() {
    try {
      fetch('http://localhost:5000/api/Session')
      .then((response) => response.json())
      .then((responseJson) => {
        return responseJson
      })
    } catch(error) {
      console.error(error);
    }
  }