import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { Route } from 'react-router';
import { HashRouter } from 'react-router-dom';

import App from './components/App';

const client = new ApolloClient({
  dataIdFromObject: (o) => o.id,
});

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <HashRouter>
        <Route path="/" component={App} />
      </HashRouter>
    </ApolloProvider>
  );
};

ReactDOM.render(<Root />, document.querySelector('#root'));
