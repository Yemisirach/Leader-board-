import axios from 'axios';
import API_SCORES_URL from './request.js';
import displayScores from './displayScore.js';

const getAllScores = async () => {
  try {
    const response = await axios.get(API_SCORES_URL);
    const respObject = response.data;
    if (respObject.result.length > 0) {
      displayScores(respObject.result);
    }
    return true;
  } catch (error) {
    return null;
  }
};

export default getAllScores;
