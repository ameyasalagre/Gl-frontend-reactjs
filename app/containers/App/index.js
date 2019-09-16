/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';
import Footer from 'components/Footer';
import img from '../../images/SPOC-Background-Image.png';


import GlobalStyle from '../../global-styles';
import LoginPage from '../LoginPage';

const AppWrapper = styled.div`
  width: 100%;
  // background-image: url(${img});
`;

export default function App() {
  return (
    <AppWrapper>
      <Helmet
        titleTemplate="%s - Single Point of Contact"
        defaultTitle="React.js"
      >
        <meta name="description" content="Single Point of Contact" />
      </Helmet>
      {/* <Header /> */}
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/login" component={LoginPage} />
        <Route path="" component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </AppWrapper>
  );
}
