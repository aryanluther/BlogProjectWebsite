import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://api-ca-central-1.hygraph.com/v2/cl90idf0h1lpb01tcha645bfz/master",
  cache: new InMemoryCache(),
});
export default client;
