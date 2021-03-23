import React, { useEffect, useState } from 'react';
import axios from 'axios';

// markup
const CallbackPage = () => {
  const [auth, setAuth] = useState();
  const location = useLocation();
  useEffect(() => {
    if (!location) {
      return;
    }
    const { search } = location;
    axios({
      method: 'GET',
      url: `http://localhost:1337/auth/google/callback?${search}`,
    })
      .then((res) => res.data)
      .then(setAuth);
  }, [location]);

  console.log(auth);

  return (
    <div>
      {auth && (
      <>
        <div>
          Jwt:
          {auth.jwt}
        </div>
        <div>
          User Id:
          {auth.user.id}
        </div>
        <div>
          Provider:
          {auth.user.provider}
        </div>
      </>
      )}
    </div>
  );
};

export default CallbackPage;
