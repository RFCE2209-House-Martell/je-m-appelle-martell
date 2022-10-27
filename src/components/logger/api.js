import axios from 'axios';

const token = process.env.REACT_APP_API_KEY;

const loggerAPI = {
  logUserInteraction: (data) => {
    const date = new Date(Date.now());
    const url = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/interactions/`;

    const body = {
      element: data.target.id,
      widget: data.target.id.split('-')[1] || 'main-app',
      time: new Date(Date.now()).toString()
    };

    return axios.post(url, body, { headers: { Authorization: token } }).then((res) => {
      return res;
    }).catch((err) => 'Error logging user interaction in api ' + err);
  }
};

export default loggerAPI;