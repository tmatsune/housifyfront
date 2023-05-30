import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import { apolloClient } from './graphql-apollo/graphql';
import { UserProvider } from './context/currentUserCtx';
import {Elements} from "@stripe/react-stripe-js"
import { stripePromise } from './utils/stripe';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>   
    <UserProvider>
      <ApolloProvider client={apolloClient}>
        <Elements stripe={stripePromise}>
          <App />
        </Elements>
      </ApolloProvider>
    </UserProvider>
  </BrowserRouter>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
