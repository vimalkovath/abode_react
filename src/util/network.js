import axios from 'axios';
import axiosRetry from 'axios-retry';
axiosRetry(axios, {
  retries: 5,
  retryDelay: (retryCount) => {
    console.log(`retry attempt: ${retryCount}`);
    return retryCount * 2000;
  },
});

export const sendRequest = async (url, options = []) => {
  let search = axios.create({
    baseURL: url,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  search.defaults.timeout = 10000;

  const response = await search.get();

  return response.data;
};
