import axios from 'axios';

const token = process.env.REACT_APP_API_KEY;

const loggerAPI = {
  logUserInteraction: (data) => {
    const url = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/interactions`;

    // const body = {
    //   element: data.target,
    //   widget: data.target.parentNode.id,
    //   date: new Date(Date.now())
    // };

    const body = {
      element: 'div#qa-widget.qa-main-container',
      widget: 'feature',
      date: new Date(Date.now()).toString().split(' ')[4]
    };


    console.log(body, 'API');

    return axios.post(url, body, { headers: { Authorization: token } }).then((res) => {
      return res;
    }).catch((err) => 'Error logging user interaction in api ' + err);
  }
};

export default loggerAPI;


// POST /interactions

// Body Parameters
// Parameter 	Type 	Description
// element 	string 	Required. Selector for the element which was clicked
// widget 	string 	Required. Name of the module/widget in which the click occured
// time 	string 	Required. Time the interaction occurred

// Response:

// Success: Status: 201 CREATED

// Invalid parameters: Status: 422 UNPROCESSABLE ENTITY