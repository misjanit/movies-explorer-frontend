class Api {
    constructor({ baseUrl, headers }) {
        this._baseUrl = baseUrl;
        this._headers = headers;
    };

    _checkStatus(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    };

    registration(name, email, password) {
        return fetch(`${this._baseUrl}/signup`, {
            method: 'POST',
            headers: {
                "Accept": 'application/json',
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, email, password })
        })
            .then(this._checkStatus);
    };

    authorization(email, password) {
        return fetch(`${this._baseUrl}/signin`, {
            method: 'POST',
            headers: {
                "Accept": 'application/json',
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
        })
            .then(this._checkStatus);
    };

    getUserInfo() {
        return fetch(`${this._baseUrl}/users/me`, {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('jwt')}`,
            },
        })
            .then(this._checkStatus);
    };

    getSavedMovies() {
        return fetch(`${this._baseUrl}/movies`, {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('jwt')}`,
            },
        })
            .then(this._checkStatus);
    };

    getAllData() {
        return Promise.all([this.getUserInfo(), this.getSavedMovies()]);
    };

    updateUserInfo(name, email) {
        return fetch(`${this._baseUrl}/users/me`, {
            method: 'PATCH',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('jwt')}`,
            },
            body: JSON.stringify({name: name, email: email}),
        })
            .then(this._checkStatus)
    }

    saveMovie(movie) {
        return fetch(`${this._baseUrl}/movies`, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                "Content-Type": "application/json",
                authorization: `Bearer ${localStorage.getItem('jwt')}`,
            },
            body: JSON.stringify({
                country: movie.country,
                director: movie.director,
                duration: movie.duration,
                year: movie.year,
                description: movie.description,
                image: `https://api.nomoreparties.co${movie.image.url}`,
                trailerLink: movie.trailerLink || 'https://youtube.com',
                thumbnail: `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`,
                movieId: movie.id,
                nameRU: movie.nameRU,
                nameEN: movie.nameEN,
            }),
        })
            .then(this._checkStatus);
    };

    deleteMovieFromFavourite(movie) {
        return fetch(`${this._baseUrl}/movies/${movie._id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                "Content-Type": "application/json",
                authorization: `Bearer ${localStorage.getItem('jwt')}`,
            },
        })
            .then(this._checkStatus);
    };
};

const mainApi = new Api({
    baseUrl: `${window.location.protocol}//kinosite.api.nomoredomains.xyz`,
    //baseUrl: `http://localhost:3000`,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('jwt')}`,
    }
});

export default mainApi;