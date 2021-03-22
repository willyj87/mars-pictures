import axios from 'axios';
import cmsAuth from './cms-auth';

const nasaURL = process.env.NASA_API_URL;
const nasaKEY = process.env.NASA_API_KEY;
const { CMS_URL } = process.env;

export const nasaClient = () => {
  const client = axios.create({
    baseURL: nasaURL,
    params: {
      api_key: nasaKEY,
    },
  });

  return client;
};

export const cmsClient = () => {
  const client = axios.create({
    baseURL: CMS_URL,
    headers: {
      Authorization: `Bearer ${cmsAuth()}`,
    },
  });

  return client;
};

export default nasaClient;
