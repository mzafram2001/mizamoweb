//inst classes// --> crea las clases que vamos a usar
const ft = new Fetch(); // --> para hacer el fetch al web service
const ui = new UI(); // --> encargado de montar la interfaz html

//add event listeners// --> event listener al click del boton submit
const search = document.getElementById("searchUser"); // --> elemento html del index.html (weather)
const button = document.getElementById("submit"); // --> elemento html del index.html (weather)

button.addEventListener("click", () => {
  const currentVal = search.value; // --> coge el valor del input

  ft.getCurrent(currentVal).then((data) => {
    //call a UI method//
    ui.populateUI(data); // --> construye el html nuevo
    //call saveToLS
    ui.saveToLS(data); // --> lo guarda para futuras busquedas
  });
});

//event listener for local storage // --> cuando el documento de la pagina es cargado coge la info local y hace el html
window.addEventListener("DOMContentLoaded", () => {
  const dataSaved = ui.getFromLS();
  ui.populateUI(dataSaved);
});