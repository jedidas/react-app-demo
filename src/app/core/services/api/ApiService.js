class ApiService {
  get(url) {
    return fetch(url).then(this.callBack);
  }
  post({ url, data, headers = { "Content-Type": "application/json" } }) {
    return fetch(url, {
      method: "POST",
      headers,
      body: JSON.stringify(data),
    }).then(this.callBack);
  }

  callBack = function (response) {
    if (!response.ok) {
      throw new Error(`${response.status} ${response.statusText}`);
    }
    return response.json();
  };
}

export default ApiService;
