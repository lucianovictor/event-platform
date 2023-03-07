import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.hygraph.com/v2/cleykm9z80dff01td3vrq5x2x/master', 
  cache: new InMemoryCache()
})