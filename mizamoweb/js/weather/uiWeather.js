class UI {
    constructor() {
      this.uiContainer = document.getElementById("content");
      this.city;
      this.defaultCity = "London";
    }
  
    // --> hace el html
    populateUI(data) {
      this.uiContainer.innerHTML = `
          
          <div class="card mx-auto mt-5 bg-primary text-secondary" style="width: 18rem;">
              <div class="card-body justify-content-center">
                  <h5 class="card-title">${data.name}, ${data.sys.country}</h5>
                  <p class="card-text ">Max temp: ${data.main.temp_max} °C</p>
                  <p class="card-text ">Min temp: ${data.main.temp_min} °C</p>
                  <p class="card-text ">Weather conditions are described as: ${data.weather[0].description}</p>
                  <p class="card-text ">Latitude: ${data.coord.lat} °</p>
                  <p class="card-text ">Longitud: ${data.coord.lon} °</p>
                  <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}.png">
              </div>
          </div>
          
          
          `;
    }
  
    // --> limpia
    clearUI() {
      uiContainer.innerHTML = "";
    }
  
    // --> lo guarda en el local storage (consola --> aplicacion --> almacenamiento local)
    saveToLS(data) {
      localStorage.setItem("city", JSON.stringify(data));
    }
  
    // --> coge la info del almacenamiento local
    getFromLS() {
      if (localStorage.getItem("city" == null)) {
        return this.defaultCity;
      } else {
        this.city = JSON.parse(localStorage.getItem("city"));
      }
  
      return this.city;
    }
  
    // --> limpia almacenamiento local
    clearLS() {
      localStorage.clear();
    }
  }