import axios from 'axios';
import cmsAuth from './cms-auth';

const nasaURL = process.env.GATSBY_NASA_API_URL;
const nasaKEY = process.env.GATSBY_NASA_API_KEY;
const { GATSBY_CMS_URL } = process.env;

export const nasaClient = () => {
  const client = axios.create({
    baseURL: nasaURL,
    params: {
      api_key: nasaKEY,
    },
  });

  return client;
};

export const cmsClient = async () => {
  const jwt = await cmsAuth();
  const client = axios.create({
    baseURL: GATSBY_CMS_URL,
    headers: {
      Authorization: `Bearer ${jwt}`,
    },
  });

  return client;
};

export default nasaClient;
