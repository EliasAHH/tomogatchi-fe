class TomogatchiAdapter {
    constructor(baseUrl) {
        this.baseUrl =  baseUrl;
    }



    getUsersGatchis(){
        return fetch(baseUrl + "tomogatchis", {
            method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': localStorage.jwt
                  }
        })
        .then(r => r.json())
    }



    adoptTomogatchi(tomogatchiObj){
        return fetch(baseUrl +"tomogatchis", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.jwt
              },
              body: JSON.stringify(tomogatchiObj)
        })
        .then(r => r.json())
    }
}


