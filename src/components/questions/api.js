import axios from 'axios';

const token = process.env.REACT_APP_API_KEY;

const QuestionsAPI = {

  getQuestionsById: (id, page, count) => {
    const headers = {
      Authorization: token
    };

    return axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/qa/questions?product_id=${id}&count=${count + 1}`, { headers: headers }).then((res) => {
      return res.data.results;
    }).catch((err) => console.log(err));
  },

  updateHelpfulQuestion: (id) => {
    const url = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/qa/questions/${id}/helpful`;

    return axios.put(url, { question_id: id }, { headers: { Authorization: token } }).then((res) => {
      return res;
    }).catch((err) => console.log(err));
  },

  createQuestion: (data, id) => {
    const url = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/qa/questions?product_id=${id}`;

    const body = {
      name: data.name,
      email: data.email,
      body: data.body,
      product_id: id
    };

    return axios.post(url, body, { headers: { Authorization: token } }).then((res) => {
      return res;
    }).catch((err) => console.log('Error creating new question ' + err));

  },

  reportQuestion: (id) => {
    const url = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/qa/questions/${id}/report`;

    const headers = {
      Authorization: token,
    };

    return axios.put(url, { question_id: id }, { headers: { Authorization: token } }).then((res) => {
      return res;
    }).catch((err) => console.log(err));
  },

  // ANSWERS

  getAllAnswersById: (questionID, page = 1, count = 1) => {
    const url = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/qa/questions/${questionID}/answers?page=${page}&count=${count}`;

    const headers = {
      Authorization: token
    };

    return axios.get(url, { headers: headers }).then((res) => {
      return res.data.results;
    }).catch((err) => console.log('axios error retreiving answers'));
  },

  createAnswer: (id, data) => {
    const url = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/qa/questions/${id}/answers`;

    console.log(data.photos);

    const body = {
      body: data.body,
      name: data.username,
      email: data.email,
      photos: data.photos
    };

    const headers = {
      Authorization: token
    };

    return axios.post(url, body, { headers: headers }).then((res) => {
      return res;
    }).catch((err) => console.log('axios error creating new answer'));
  },

  reportAnswer: (id) => {
    const url = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/qa/answers/${id}/report`;

    return axios.put(url, { answer_id: id }, { headers: { Authorization: token } }).then((res) => {
      return res;
    }).catch((err) => console.log('Error reporting answer ' + err));
  },

  updateHelpfulAnswer: (id) => {
    const url = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/qa/answers/${id}/helpful`;

    const headers = {
      Authorization: token
    };

    return axios.put(url, { answer_id: id }, { headers: { Authorization: token } }).then((res) => {
      return res;
    }).catch((err) => console.log(err));
  },

};

export default QuestionsAPI;
