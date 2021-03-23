/* eslint-disable no-return-assign */
/* eslint-disable react/button-has-type */
import React from 'react';
// markup
const IndexPage = () => (
  <div>
    <button
      onClick={() => { if (window) window.location = 'http://localhost:1337/connect/google'; }}
    >
      Login via Google
    </button>
  </div>

);

export default IndexPage;
