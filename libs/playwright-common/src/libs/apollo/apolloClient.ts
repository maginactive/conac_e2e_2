import {
  ApolloClient,
  ApolloLink,
  concat,
  createHttpLink,
  InMemoryCache,
} from '@apollo/client';
import { Cookie } from 'playwright';

export const createClient = (cookies: Cookie[]) => {
  const createLink = () => {
    const httpLink = createHttpLink({
      uri: process.env['BASE_API_URL'] + '/graphql',
      credentials: 'include',
    });

    const authLink = new ApolloLink((operation, forward) => {
      operation.setContext(({ headers }) => ({
        headers: {
          ...headers,
          cookie: cookies
            .map(({ name, value }) => `${name}=${value}`)
            .join('; '),
        },
      }));
      return forward(operation).map((response) => response);
    });
    return concat(authLink, httpLink);
  };
  return new ApolloClient({
    link: createLink(),
    cache: new InMemoryCache(),
    defaultOptions: {
      watchQuery: {
        fetchPolicy: 'network-only',
      },
      query: {
        errorPolicy: 'all',
      },
      mutate: {
        errorPolicy: 'all',
      },
    },
  });
};
