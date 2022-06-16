import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";

const cache = new InMemoryCache();
const token =
  "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NTAxLCJ0eXBlIjoiQUNDRVNTIiwiaWF0IjoxNjU1Mzc2NzE4LCJleHAiOjE2NTU5ODE1MTh9.tRYakx0ja7wZJs3_EdRxXh1J-VHzJqc-eMT9etjDGhkaCWYHl2I4m2szgKTeDMz1yjrDCv9nDWBdlU3bE42a0Sxm3mvkEZH5u0yGxCuEljzdklP5-uw8r4kERviuMtKNyFbVuSJZClnC7XgWKwXXL_8N3Wusp51M585yq4G3mOj81gWlpgNIm9DZk1aAZsWCHVmLLP-_oGkGnsmYm2boh6mY-B-MGkQ_RMfma1Vnmb2V_v3dZDDG-whtImcVggXAlcmkeJLnpxWhfsKNsq74hKmWqL7NvtkXMdGPTl2UaGY_CZxnBcPvjuutVve8OeSG5mBIakJR1-cQm7XKlplP2w";
const BaseURL = "https://api-dev.foodstyles.com/graphql";

export const client = new ApolloClient({
  uri: BaseURL,
  cache,
  defaultOptions: { watchQuery: { fetchPolicy: "cache-and-network" } },
  connectToDevTools: true,
  headers: {
    authorization: `Bearer ${token}`,
    "client-name": "WidgetX Ecom [web]",
    "client-version": "1.0.0",
  },
});
