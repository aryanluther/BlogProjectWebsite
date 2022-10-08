import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://api-ca-central-1.hygraph.com/v2/cl6eduzyh1ajk01uney6ygsll/master",
  cache: new InMemoryCache(),
});

export default client;
