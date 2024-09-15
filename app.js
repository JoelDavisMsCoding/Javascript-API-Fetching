//* API = Application Programming Interface
//? API is the middleman between the front and back end.

// JSON = Javascript Object Notation
// JSON is set up the same way as an object


// let url = `https://swapi.dev/api/people/1`;

// fetch(url)
//     .then(response => response.json())
//     .then(data =>{
//         console.log(data);
//     })
//     .catch(error => {
//         console.log(error)
//     });

//Fetching Manipulation
let currentCharacter = "";
let showButton = document.querySelector(".characterName button");
let counter = 1;
async function fetchData(currenCount)
{
    //this data may change so I made this variable inside of this function.
    let url = `https://swapi.dev/api/people/${currenCount}`;
    await fetch(url)
    .then(response => response.json())
    .then(data =>
    {
        currentCharacter = data;
        console.log(currentCharacter);
        pasteTraits(data.height, data.mass)
    })
    .catch(error =>
    {
        console.log(error)
    });
}

async function pasteDataToPage()
{
    showButton.disabled = "true"; //this is to keep them from clicking 
    await fetchData(counter);
    counter++
    let paragraph = document.createElement("p");
    paragraph.innerHTML = currentCharacter.name;
    let characterDivBox = document.querySelector(".characterName");
    console.log(characterDivBox);

    characterDivBox.append(paragraph);
    showButton.removeAttribute("disabled");
}

function pasteTraits(height, weight)
{
    console.log(height, weight);
}
pasteTraits();
showButton.addEventListener("click", pasteDataToPage)


let urlVehicle = `https://swapi.dev/api/vehicles`;
fetch(urlVehicle)
.then(response => response.json())
.then(info =>
{
    console.log(info);
})
.catch(error =>
{
    console.log(error)
});

let currentVehicle = "";
let vehicleButton = document.querySelector(".characterVehicles button");
async function fetchInfo()
{
    //this data may change so I made this variable inside of this function.
    let url = `https://swapi.dev/api/vehicles/`;
    await fetch(url)
    .then(response => response.json())
    .then(data =>
    {
        currentVehicle = data.results;
        console.log(currentVehicle);
    })
    .catch(error =>
    {
        console.log(error)
    });
    for (let i = 0; i < currentVehicle.length; i++)
    {
        let paragraph = document.createElement("p");
        paragraph.innerHTML = currentVehicle[i].name;
        let characterDivBox = document.querySelector(".characterVehicles");
        characterDivBox.append(paragraph);
    }
}
vehicleButton.addEventListener("click", fetchInfo);


async function fetchCatData()
{
    let url = `https://pokeapi.co/api/v2/pokemon/pikachu`;
    await fetch(url)
    .then(response => response.json())
    .then(data =>
    {
        console.log(data)
        pokeName = data.species.name
        console.log(pokeName);
        getID(data.id)
        let move = data.moves[25].move.name;
        let stat = data.stats[4].stat.name;
        putPikaOnWebsite(data.sprites.front_default);
        console.log(move);
        console.log(stat);
    })
    .catch(error =>
    {
        console.log(error)
    });
}
fetchCatData();

function getID(id)
{
    console.log(`ID: ${id}`);
}
getID()

function putPikaOnWebsite(pikaPicture)
{
    let picDisplay = document.querySelector(".pokePicDisplay");
    let imgSrc = document.createElement("img");
    imgSrc.src = pikaPicture;
    picDisplay.append(imgSrc);

}

