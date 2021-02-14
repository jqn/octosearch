// import { queryCache } from "react-query";
// import * as auth from "auth-provider";
import axios from "axios";

const apiURL = "https://api.github.com";

const delay = (interval) =>
  new Promise((resolve) => setTimeout(resolve, interval));

async function apiClient(
  endpoint,
  { requestData, token, headers: customHeaders, ...customConfig } = {}
) {
  const config = {
    method: requestData ? "POST" : "GET",
    body: requestData ? JSON.stringify(requestData) : undefined,
    headers: {
      Accept: "application/vnd.github.v3+json",
      "Content-Type": requestData ? "application/json" : undefined,
      ...customHeaders,
    },
    ...customConfig,
  };

  // Github rate limit is 10 requests/minute
  // so we have to slow down things a bit
  await delay(1000);

  let result = await axios({
    method: config.method,
    url: `${apiURL}/${endpoint}`,
    headers: config.headers,
  });
  const { status, data } = result;
  if (status === 200) {
    return data;
  }
  return Promise.reject(data);
}

export { apiClient };
