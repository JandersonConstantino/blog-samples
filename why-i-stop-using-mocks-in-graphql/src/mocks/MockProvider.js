import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:333",
  cache: new InMemoryCache(),
});

export const MockProvider = ({ children }) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
