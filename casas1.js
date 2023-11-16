(async () => {
    traercasa();
})()
function traercasa() {

    const jhttp = new XMLHttpRequest();

    jhttp.open('GET', "casas1.json", true);
    jhttp.send();

    jhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let datos = JSON.parse(this.responseText);
            let resultado = document.querySelector(".jsoncard");
            resultado.innerHTML = '';
            for (item in datos) {
                resultado.innerHTML += `
                <div calss=datosjson>
                   <a class="link" href="depto1.html">
                   <img class="cardimage" src="${datos[item].imagen}" alt="">
                   </a>
                   <p>${datos[item].Precio}</p>
                   <p>${datos[item].Ubicacion}</p>
                   <p>${datos[item].Superficie}</p>
                   <p>${datos[item].Descripcion}</p>
                </div>
                `             
            }
        }
    }
}
