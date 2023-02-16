import axios from 'axios';
import API_SCORES_URL from './request.js';

const submitScore = async (score) => {
  try {
    const response = await axios.post(API_SCORES_URL, score);
    const responses = response.data;
    return responses;
  } catch (error) {
    return null;
  }
};

export default submitScore;
