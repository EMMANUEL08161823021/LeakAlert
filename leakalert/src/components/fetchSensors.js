import axios from 'axios';

const axios = require('axios');

exports.handler = async (event, context) => {
  try {
    const response = await axios.get('https://leak-d9yr.onrender.com/api/v1/app/sensors/status');
    return {
      statusCode: 200,
      body: JSON.stringify(response.data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to fetch data" }),
    };
  }
};
