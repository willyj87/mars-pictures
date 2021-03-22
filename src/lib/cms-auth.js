/* eslint-disable no-console */
import axios from 'axios';

const { CMS_URL } = process.env;

const cmsAuth = async () => {
  const { jwt } = await axios.post(`${CMS_URL}/auth/local`, {
    identifier: 'willyjunior91@gmail.com',
    password: 'Titika01',
  }).then((response) => response.data).catch((error) => console.log('error while connecting to cms: ', error));
  return jwt;
};

export default cmsAuth;
