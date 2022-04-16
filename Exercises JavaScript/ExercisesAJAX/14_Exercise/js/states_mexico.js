const d = document;
const $selectPrimary = d.getElementById('select-primary');
const $selectSecondary = d.getElementById('select-secondary');
const $selectThird = d.getElementById('select-third');


// Subrutina para cargar los estados
function loadStates(){
    fetch("https://api.copomex.com/query/get_estados?token=156b9cdf-c23a-4c81-90a6-35cfc2cd146c")
        .then(response => response.ok ? response.json() : Promise.reject(response))
        .then(json =>{
            // console.log(json);

            let $options = `<option value="">Elige un Estado</option>`;

            json.response.estado.forEach(state => {
                $options += `<option value="${state}">${state}</option>`
                // console.log(state);
            });

            $selectPrimary.innerHTML = $options;
        })
        .catch(error => {
            let message = error.statusText || "Ocurrio un error";
            $selectPrimary.nextElementSibling.innerHTML = `<h3>Error ${error.status}: ${message}</h3>`;
        })
}

// Subrutina para cargar los municipios dependiendo de el estado 
function loadTowns(state){  
    
    fetch(`https://api.copomex.com/query/get_municipio_por_estado/${state}?token=156b9cdf-c23a-4c81-90a6-35cfc2cd146c`)
        .then(response => response.ok ? response.json() : Promise.reject(response))
        .then(json =>{
            // console.log(json);

            let $options = `<option value="">Elige un Municipio</option>`;

            json.response.municipios.forEach(town => {
                $options += `<option value="${town}">${town}</option>`
                // console.log(state);
            });

            $selectSecondary.innerHTML = $options;
        })
        .catch(error => {
            let message = error.statusText || "Ocurrio un error";
            $selectSecondary.nextElementSibling.innerHTML = `<h3>Error ${error.status}: ${message}</h3>`;
        })
        .finally( ()=> console.warn("Code Love"));
}


// Subrutina para cargar las colonias dependiendo de el municipio
function loadSuburbs(town){  
    
    fetch(`https://api.copomex.com/query/get_colonia_por_municipio/${town}?token=156b9cdf-c23a-4c81-90a6-35cfc2cd146c`)
        .then(response => response.ok ? response.json() : Promise.reject(response))
        .then(json =>{
            console.log(json);

            let $options = `<option value="">Elige una Colonia</option>`;

            json.response.colonia.forEach(suburb => {
                $options += `<option value="${suburb}">${suburb}</option>`
                console.log(suburb);
            });

            $selectThird.innerHTML = $options;
        })
        .catch(error => {
            let message = error.statusText || "Ocurrio un error";
            $selectThird.nextElementSibling.innerHTML = `<h3>Error ${error.status}: ${message}</h3>`;
        })
        .finally( ()=> console.warn("Code Love"));
}



// Evento para cargar los estados cuando la documento termine de cargar
d.addEventListener('DOMContentLoaded', loadStates());

// Event cuando el estado cambio y necesitemos obtener los municipios
$selectPrimary.addEventListener('change', e => loadTowns(e.target.value));

// Event cuando el municipio cambie y necesitemos obtener las colonias
$selectSecondary.addEventListener('change', e => loadSuburbs(e.target.value));