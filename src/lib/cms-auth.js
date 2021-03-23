/* eslint-disable no-console */
import axios from 'axios';

const { GATSBY_CMS_URL } = process.env;

const cmsAuth = async () => {
  console.log('CMS', GATSBY_CMS_URL);
  const { jwt } = await axios.post(`${GATSBY_CMS_URL}/auth/local`, {
    identifier: 'noubissiew@gmail.com',
    password: 'Titika01',
  }).then((response) => response.data).catch((error) => console.log('error while connecting to cms: ', error));
  return jwt;
};

export default cmsAuth;
