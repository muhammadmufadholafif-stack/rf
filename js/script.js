console.log("Web Berhasil Dimuat");

function loadquotes() {
    fetch("https://v2.jokeapi.dev/joke/Any?type=single")
        .then(response => response.json())
        .then(data => {
            document.getElementById("quote").innerText = data.joke;
            console.log("Quote berhasil dimuat");
        })
        .catch(error => {
            document.getElementById("quote").innerText = "Gagal memuat quote";
            console.error(error);
        });
}
