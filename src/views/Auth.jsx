import React from 'react';
import { Link } from 'react-router-dom';

import { Input, Button } from '../components/forms';
import { H2, P } from '../components/typography';
import LoginCard from '../components/cards/LoginCard';

const Auth = () => {
  return (
    <div className="flex justify-center">
      <LoginCard className="flex-1">
        <H2 className="mb-0">Sign In</H2>
        <P small className="mb-5">
          Don’t have an account? <Link to="/">Sign Up</Link>
        </P>
        <Input type="text" placeholder="E-mail Address" fullwidth />
        <Input type="password" placeholder="Password" fullwidth />
        <P small className="mb-5 -mt-2">
          <Link to="">Forgot Password?</Link>
        </P>
        <Button primary fullwidth>
          LOGIN
        </Button>
      </LoginCard>
    </div>
  );
};

export default Auth;
