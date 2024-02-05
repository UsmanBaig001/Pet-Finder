import axios from "axios";

const fetchAccessToken = async () => {
  const clientId = "jIGqi9BJAWtWin2bKL06sZVg4WfOBQHyCQ0Nidm1aeNLJy69wh";
  const clientSecret = "c5POxzDIXbSda7aYBdw5cCsh9ipJyHQ9VsMx0JRi";

  try {
    const response = await axios.post(
      "https://api.petfinder.com/v2/oauth2/token",
      {
        grant_type: "client_credentials",
        client_id: clientId,
        client_secret: clientSecret,
      }
    );

    return response.data.access_token;
  } catch (error) {
    return error;
  }
};

const petFinderInstance = axios.create({
  baseURL: "https://api.petfinder.com/v2",
  timeout: 10000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

const addAuthorizationHeader = async () => {
  const accessToken = await fetchAccessToken();

  petFinderInstance.defaults.headers.common[
    "Authorization"
  ] = `Bearer ${accessToken}`;
};

export { petFinderInstance, addAuthorizationHeader };
