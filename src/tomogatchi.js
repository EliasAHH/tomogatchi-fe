class Tomogatchi {
    constructor(name) {

    }


    static adoptionForm() {
        main.innerHTML += `
        <div id="adoptionDiv">
            <form id="adoptionForm">
                <label> Name </label>
                <input type="text" id="tomoName">
                <input type="submit" value="Adopt a Tomogatchi">
            </form>   
        </div>
        `
        document.getElementsById("adoptionForm").addEventListener("submit", (e) => this.handleAdoption)
    }


    static handleAdoption(e) {
        tomogatchiAdapter.adoptTomogatchi();
    }
}