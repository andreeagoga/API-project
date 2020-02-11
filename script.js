fetch("https://swapi.co/api/people/")
    .then(result => result.json())
    .then(printToHTML)
    .catch(err => {
        console.log("Error", err);
    });

function printToHTML(responseFromAPI) {
    const {results} = responseFromAPI;
    results.forEach(currentHuman => {
        let body = document.getElementsByTagName("body");
        let div = document.createElement("div");
        let currentHumanName = currentHuman.name;
        let content = document.createTextNode(currentHumanName);
        div.appendChild(content);
        body[0].appendChild(div);
    });
}
