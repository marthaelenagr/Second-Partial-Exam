/*
For every listed item: 
    i. Complete meal name
    ii. Meal area/cuisine
    iii. Meal’s instructions of preparation.
    iv. Meal’s picture

Search meal by name
https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata

*/

//event listener for GET

API_KEY = "1";

function displayMeals(data){
    let res = document.querySelector('.js-search-results'); //class name '.'

    for(let i=0; i<data.meals.length; i++){
        res = innerHTML += 
        `
        <div>
            <h2>
                ${data.meals[i].s}
            </h2>
            <h2>
                ${data.meals[i].a}
            </h2>
            <p>
                ${data.meals[i].i}
            </p>
            <div>
                <img src="${data.meals[i].preview}"/>
            </div>
    
        `
    }
}

function fetchMeals(searchTerm){
    let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`;

    let settings = {
        method: 'GET',
        header: {
            'Authorization': `Bearer ${API_KEY}`
        }
    }

    fetch(url, settings)
        .then(response => {
            if(response.ok){
                return response.json();
            }
            throw new Error (response.statusText);
        })
        .then(responseJSON =>{
            displayMeals(responseJSON);
        })

        .catch( err =>{
            console.log("Meal not found");
        })
}

function watchForm(){
    let submitButton = document.querySelector('button'); //by element name

    submitButton.addEventListener('click', (event) => {
        event.preventDefault();
        let searchTerm = document.querySelector('#query').value;  //by id
        fetchMeals(searchTerm);
    });

}

function init(){
    whatchForm();
}

init();

