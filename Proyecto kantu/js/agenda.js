document.getElementById("nav").innerHTML = fetch('./components/nav.html')
    .then(response => response.text())
    .then(data => document.getElementById("main").innerHTML = data);
//fecha
    function showDate() {
        const date = new Date();
        const day = addLeadingZero(date.getDate());
        const month = addLeadingZero(date.getMonth() + 1); 
        const year = date.getFullYear();
      
        const formattedDate = `${day}-${month}-${year}`;
        document.getElementById('fecha').textContent = formattedDate;
      }