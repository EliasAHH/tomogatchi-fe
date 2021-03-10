class User {
    constructor(name) {
        this.name = name;
        User.all.push(this)
    }


    static all = []

    renderProfile() {
        main.innerHTML =  "";
        header.hidden = "hidden";
        nav.hidden = "";

        document.getElementById("logout").addEventListener("click", handleLogout)
        tomoGatchiAdapter.getUsersGatchis()
        .then(data => {
            if(data.message) {
                // render out an adoptionForm
                Tomogatchi.adoptionForm();
            }else {
                // create a container for all the tomogatchi's to live in and display immedeatley 
            }
        })

    }
}