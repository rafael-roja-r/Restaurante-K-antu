document.getElementById("footer").innerHTML = fetch('./components/footer.html')
    .then(response => response.text())
    .then(data => document.getElementById("footer").innerHTML = data);
    