let contenido = document.getElementById("contenido");
fetch('https://digimon-api.vercel.app/api/digimon')
  .then(response => response.json())
  .then(resp => {
    crearTabla(resp)
  });

function crearTabla(resp) {
  for (let datoTemporal of resp) {
    contenido.innerHTML +=
      `
        <tbody>
          <tr>
            <th>${datoTemporal.name}</th>
            <td><img src="${datoTemporal.img}"</td>
            <td>${datoTemporal.level}</td>
          </tr>
        </tbody>
        `
  }
}
const circleButton = document.getElementById('circle');

circleButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

function capturaDato() {
  var nombre = document.getElementById("inputBusqueda").value;
  nombre = nombre.toLowerCase();

  fetch('https://digimon-api.vercel.app/api/digimon/name/' + nombre)
    .then(response => response.json())
    .then(resp => {
      crearTarjeta(resp)
    })
};

function crearTarjeta(resp) {
  table.innerHTML = "";
  contenido.innerHTML = "";
  tarjeta.innerHTML = "";
  for (let datoTemporal of resp) {
    tarjeta.innerHTML +=
      `
        <div class="card " style="width: 20rem;">
          <img src="${datoTemporal.img}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${datoTemporal.name}</h5>
            <p class="card-text">${datoTemporal.level}</p>
          </div>
        </div>
          `
  }
}
let refresh = document.getElementById('circle');
refresh.addEventListener('click', _ => {
  location.reload();
})
