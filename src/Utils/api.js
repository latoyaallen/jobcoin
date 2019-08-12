const api = {
  getAddress(name) {
    const url = `http://jobcoin.gemini.com/prototype/api/addresses/${name}`
    return fetch(url).then((res) => res.json());
  },
};
export default api
