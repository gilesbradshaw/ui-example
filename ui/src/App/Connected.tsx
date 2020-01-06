import React from 'react';
import { ApolloLink } from 'apollo-link'
import ApolloClient from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { onError } from 'apollo-link-error'
import { ApolloProvider } from 'react-apollo'
import { ApolloProvider as ApolloHooksProvider } from '@apollo/react-hooks'
import { WebSocketLink } from 'apollo-link-ws'
import { SubscriptionClient } from 'subscriptions-transport-ws'
import { ThemeProvider } from 'styled-components'
import { ModalProvider } from 'styled-react-modal'
import {
  Switch,
  Route,
  RouteComponentProps,
} from 'react-router-dom'

import { lifecycle, withState, compose } from 'recompose'

import Admin from './Breadcrumb/Admin'
import Lost from './Lost'
import Breadcrumb from './Breadcrumb'
import Null from './util/Null'
import Lib from 'ui-lib'

// import Lib from 'lib'


// import './App.css';
//import Zone from '../../../oldts/Zone'
import theme from './theme'

// const GRAPHQL_ENDPOINT = `wss://${window.location.host}/graphql/`;
// const GRAPHQL_ENDPOINT = `wss://www.zone4a.sigyl/graphql/`;
const GRAPHQL_ENDPOINT = `ws://localhost:4000/graphql/`;
//const GRAPHQL_ENDPOINT = `ws://zone4a.sigyl/graphql/`;

const Connected: React.FC<{ client: any } & RouteComponentProps> =
  ({
    client,
    match: {
      path,
    },
    history,
  }) => {
    // @ts-ignore
    window.rrHistory = history
    if (client) {
      return (
        <ThemeProvider theme={theme}>
          <ModalProvider>
            <ApolloProvider client={client}>
              <ApolloHooksProvider client={client}>
                <>
                  <Breadcrumb
                    {...{
                      path,
                    }}
                  />
                  <Lib
                    {...{
                      text: 'fart!',
                    }}
                  />
                  <Switch>
                    <Route
                      component={Null}
                      path={`${path}`}
                      exact
                    />
                    <Route
                      component={Admin}
                      path={`${path}admin`}
                    />
                    <Route
                      component={Lost}
                    />
                  </Switch>
                </>
              </ApolloHooksProvider>
            </ApolloProvider>
          </ModalProvider>
        </ThemeProvider>
      )
    }
    return null
  }

export default compose(
  withState<any, any, string, string>('client', 'setClient', null),
  lifecycle<{ client: any }, {}>({
    // @ts-ignore
    componentWillMount() {
      Promise.resolve()
        .then(
          () => {
            const l = sessionStorage
              .getItem(
                'login',
              )
            const login = l === 'undefined'
              ? {}
              : JSON.parse(
                l || '{}',
              )
            const link = new WebSocketLink(
              new SubscriptionClient(
                GRAPHQL_ENDPOINT,
                {
                  reconnect: true,
                  connectionParams: {
                    authToken: login.jwt,
                  },
                },
              ),
            )
            const client = new ApolloClient({
              link: ApolloLink.from([
                onError(({ graphQLErrors, networkError }) => {
                  if (graphQLErrors)
                    graphQLErrors.map(({ message, locations, path }) =>
                      console.error(
                        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
                      ),
                    );
                  if (networkError) {
                    console.error(`[Network error]`, networkError);
                  }
                }),
                link
              ]),
              cache: new InMemoryCache({
                dataIdFromObject: (o): string | undefined => {
                  if (o.id) {
                    return `${o.id}:${o.__typename}`
                  }
                }
              })
            })
            // @ts-ignore
            this.props.setClient(client)
          }
        )
    }
  }),
  // @ts-ignore
)(Connected);
