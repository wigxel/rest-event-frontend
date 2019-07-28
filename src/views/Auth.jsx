import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useForm from 'react-hook-form';

import Footer from '../components/Footer';
import { log } from '../libs/helpers';
import { H2, H3, P } from '../components/typography';
import LoginCard from '../components/cards/LoginCard';
import { Input, Button, Checkbox } from '../components/forms';

const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

const Auth = () => {
  const [activeTab, setTab] = useState(false);
  const { register, errors, handleSubmit } = useForm({
    defaultValues: {
      email: '',
      password: ''
    }
  });

  const onLogin = data => {
    log(data, 'The data');
    log(errors, 'Errors');
  };
  const toggle = () => setTab(!activeTab);

  return (
    <>
      <div className="flex justify-center h-screen items-center">
        <LoginCard className="flex-1">
          {activeTab === 3 ? (
            <>
              <H3>Forgot Password?</H3>
              <P small>We'll send you a help email. </P>
              <br />
              <Input type="email" placeholder="Enter Email" fullwidth />
              <Button primary className="mr-2">
                SEND
              </Button>
              <Button ghost onClick={() => setTab(false)}>
                No Thanks
              </Button>
            </>
          ) : activeTab ? (
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
            <form onSubmit={handleSubmit(onLogin)}>
              <H2 className="mb-0">Sign In</H2>
              <P small className="mb-5">
                Don’t have an account?{' '}
                <a href="#sign-up" onClick={toggle}>
                  Sign Up
                </a>
              </P>
              {errors.password && errors.email && (
                <P small className="text-red">
                  Provide a valid username and password
                </P>
              )}
              <Input
                type="text"
                name="email"
                placeholder="E-mail Address"
                ref={register({ required: true, pattern: emailRegex })}
                fullwidth
              />
              <Input
                type="password"
                name="password"
                placeholder="Password"
                ref={register({ required: true })}
                fullwidth
              />
              <P small className="mb-5 -mt-2">
                <a href="#forgot-password" onClick={() => setTab(3)}>
                  Forgot Password?
                </a>
              </P>
              <Button primary fullwidth>
                LOGIN
              </Button>
            </form>
          )}
        </LoginCard>
      </div>
      <Footer />
    </>
  );
};

export default Auth;
