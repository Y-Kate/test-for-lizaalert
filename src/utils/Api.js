class Api {
  constructor(option) {
    this._baseUrl = option.baseUrl;
    this._headers = option.headers;
  }

  _handleResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Произошла ошибка ${res.status}`);
  }

  getNewsIds() {
    return fetch(`${this._baseUrl}/newstories.json?print=pretty`, {
      method: 'GET',  
      headers: this._headers,
    })
    .then(this._handleResponse)
  }

  getOneNews(id) {
    return fetch(`${this._baseUrl}/item/${id}.json`, {
      method: 'GET',  
      headers: this._headers,
    })
    .then(this._handleResponse)
  }
}

const api = new Api({
  baseUrl: 'https://hacker-news.firebaseio.com/v0',
  headers: {
    'Content-Type': 'application/json'
  }});

export default api;