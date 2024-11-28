document.getElementById("producto").innerHTML = fetch('./components/card.html')
    .then(response => response.text())
    .then(data => document.getElementById("tipo").innerHTML = data);