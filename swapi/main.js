
const newDiv = document.querySelector("#new-div")
const button = document.querySelector("#getResidents")


function buttonClick (evt){
    console.log("The button was clicked")
}

function populate(evt){
    axios
        .get(`https://swapi.dev/api/planets/2`)
        .then(response => {response.data.residents
            // console.log(response.data.residents)
            for(i=0; i< response.data.residents.length; i++){
                axios.get(response.data.residents[i]).then(res =>{
                    const plantResident = document.createElement(`h2`)
                    plantResident.textContent = res.data.name
                    newDiv.appendChild(plantResident)
                })
          }
})
}
button.addEventListener(`click`,populate)