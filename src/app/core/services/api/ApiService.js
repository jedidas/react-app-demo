class ApiService {
  get(url) {
    return fetch(url).then((response) => response.json());
  }
  async post(url, data) {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return response.json();
  }
}

export default ApiService;
