document.getElementById("nav").innerHTML = fetch('./components/nav.html')
    .then(response => response.text())
    .then(data => document.getElementById("main").innerHTML = data);

    document.addEventListener("DOMContentLoaded", inicial);

    function inicial() {
        slide();
    }
    
    function slide() {
        const slideTitle = document.getElementById("buscar");
        const titulos = ["Bienvenidos", "Nuestros Productos", "Verduras Frescas"];
        let index = 0;
    
        setInterval(() => {
            index = (index + 1) % titulos.length;
            slideTitle.placeholder = titulos[index]; 
        }, 3000);
    }
    