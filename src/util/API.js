import axios from 'axios';

// Set config defaults when creating the instance

export const DataAPI = () => {
  let api = axios.create({
    baseURL: 'http://diskover.informaticsglobal.com/api/indexing/solr',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  api.defaults.timeout = 10000;

  return api;
};
