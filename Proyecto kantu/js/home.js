 document.addEventListener("DOMContentLoaded", () => {
     Page('bienvenido');
});

 function Page(page) {
    fetch(`./pages/${page}.html`)
        .then(response => response.text())
         .then(data => document.getElementById("main").innerHTML = data);
}
