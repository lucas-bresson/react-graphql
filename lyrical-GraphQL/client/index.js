import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import { HttpLink } from 'apollo-link-http';
import { ApolloProvider } from 'react-apollo';
import './style/style.css';
import { Route } from 'react-router';
import { HashRouter, Switch } from 'react-router-dom';
import App from './components/App';
import SongCreate from './components/SongCreate';
import SongList from './components/SongList';
import SongDetail from './components/SongDetail';

const client = new ApolloClient({
  dataIdFromObject: (o) => o.id,
  link: new HttpLink({
    uri: '/graphql',
    opts: {
      credentials: 'same-origin',
    },
  }),
});

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <HashRouter>
        <App>
          <Switch>
            <Route path="/songs/new" component={SongCreate}></Route>
            <Route path="/songs/:id" component={SongDetail} />
            <Route path="/" component={SongList} />
          </Switch>
        </App>
      </HashRouter>
    </ApolloProvider>
  );
};

ReactDOM.render(<Root />, document.querySelector('#root'));
