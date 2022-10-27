import axios from 'axios';

const loggerAPI = {
  logUserInteraction: (data) => {
    const body = {
      element: data.ele,
      widget: data.widget,
      date: new Date()
    };

    console.log(body);
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