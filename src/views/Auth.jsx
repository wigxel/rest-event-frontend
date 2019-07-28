import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import { trace } from '../libs/helpers';
import { H2, P } from '../components/typography';
import LoginCard from '../components/cards/LoginCard';
import { Input, Button, Checkbox } from '../components/forms';

const Auth = () => {
  const [form, setForm] = useState({});
  const [activeTab, setTab] = useState(false);

  const updateForm = key => ({ target }) => {
    setForm({ ...form, [key]: target.value });
  };
  const login = () => {
    trace('The form')(form);
  };
  const toggle = () => setTab(!activeTab);

  return (
    <>
      <div className="flex justify-center h-screen items-center">
        <LoginCard className="flex-1">
          {activeTab ? (
            <>
              <H2>Join In</H2>
              <P small className="mb-5">
                Already have an account?{' '}
                <a href="#sign-in" onClick={toggle}>
                  Sign In
                </a>
              </P>
              <Input type="text" fullwidth placeholder="First Name" />
              <Input type="text" fullwidth placeholder="Last Name" />
              <Input type="email" fullwidth placeholder="E-mail Address" />
              <Input type="password" fullwidth placeholder="Password" />
              <P className="mb-5 text-center">
                <Checkbox name="agree" />
                <span>I agree to the terms and policies</span>
              </P>
              <Button primary fullwidth>
                Register
              </Button>
            </>
          ) : (
            <>
              <H2 className="mb-0">Sign In</H2>
              <P small className="mb-5">
                Don’t have an account?{' '}
                <a href="#sign-up" onClick={toggle}>
                  Sign Up
                </a>
              </P>
              <Input
                type="text"
                onChange={updateForm('username')}
                placeholder="E-mail Address"
                fullwidth
              />
              <Input
                type="password"
                onChange={updateForm('password')}
                placeholder="Password"
                fullwidth
              />
              <P small className="mb-5 -mt-2">
                <Link to="">Forgot Password?</Link>
              </P>
              <Button primary fullwidth onClick={login}>
                LOGIN
              </Button>
            </>
          )}
        </LoginCard>
      </div>
      <Footer />
    </>
  );
};

export default Auth;
