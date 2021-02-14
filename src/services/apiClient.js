// import { queryCache } from "react-query";
// import * as auth from "auth-provider";
import axios from "axios";

const apiURL = "https://api.github.com";

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
