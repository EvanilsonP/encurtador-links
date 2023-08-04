function encurtarUrl() {
    // Validar se o link existe
    let url = document.getElementById('input-url').value;
    if(!url) {
        alert('É preciso inserir uma URL para encurtar.');
        return;
    };
    // api key = 'b02ea36baa5646c4bb44a12ada6eb89a';

    // encurtar o link

    //headers
    let headers = {
        "Content-Type": "application/json",
        "apiKey": "b02ea36baa5646c4bb44a12ada6eb89a";
    };

    // dados
    let linkRequest = {
        destination: url,
        domain: { fullName: 'rebrand.lu'};
    };

    fetch("https://api.rebrandly.com/v1/links", {
        method: "POST",
        headers: headers,
        body: JSON.stringify(linkRequest);
    })
    .then(response => response.json())
    .then(json => {
        console.log(json);
        let inputUrl = document.getElementById("input-url");
        inputUrl.value = json.shortUrl;
    })
};