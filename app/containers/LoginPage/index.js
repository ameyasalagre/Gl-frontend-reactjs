/*
 * FeaturePage
 *
 * List all the features
 */

import React from 'react';
import { Helmet } from 'react-helmet';
// import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import H1 from 'components/H1';
import img from '../../images/SPOC-Background-Image.png';

const LoginCard = styled.div`
  padding: 2rem;
  width: 90%;
  height: 180%;
  opacity: 0.95;
  border-radius: 14px;
  box-shadow: 0 2px 14px 0 #02000e;
  border: solid 1px #0e44ff;
  background-image: linear-gradient(to bottom, #1c0296, #08003d);
  // background-image: url(${img});
`;

const OuterWrapper = styled.div`
  // background-image: url(${img});
  width: 100%;
  height: 100%;
  height: 100%;

  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
export default function LoginPage() {
  // const handleLogin = () => {

  // };

  let userName;

  const handleUsername = event => {
    // eslint-disable-next-line prefer-const
    userName = event.target.value;
    console.log(userName);
  };
  // const handlePassword = (event) => {};

  return (
    <div>
      <Helmet>
        <title>Login</title>
        <meta name="description" content="GL" />
      </Helmet>
      <OuterWrapper>
        {/* <H1>SPOC LOGIN</H1> */}
        <LoginCard>
          <div>
            <h3>username</h3>
            <input
              type="text"
              onChange={() => handleUsername(event)}
              placeholder="username"
            />
          </div>
          <div>
            <div>
              <h3>Password</h3>
            </div>
            <input type="password" placeholder="password" />
          </div>
          <div>
            <button type="button">Login</button>
          </div>
        </LoginCard>
      </OuterWrapper>
    </div>
  );
}
