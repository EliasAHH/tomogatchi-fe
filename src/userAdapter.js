class UserAdapter {


    constructor(baseUrl) {
        this.baseUrl =  baseUrl
    }


    login(userObj) {
        return fetch(baseUrl + "login", {
            method: "POST",
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(userObj)
        })
        .then(r => r.json())
    }


    signup(userObj) {
        return fetch(baseUrl + "users", {
            method: "POST",
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(userObj)
        })
        .then(r => r.json());
    }

    autoLogin() {
        return fetch(baseUrl + "autoLogin", {
            method: "GET",
            headers: {
              'Content-Type': 'application/json',
              'Authorization': localStorage.jwt
            }
        })
        .then(r => r.json())
    }
        



}