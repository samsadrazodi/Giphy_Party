console.log("Let's get this party started!");

// eventListener on form to get a new Giphy on submit
const form = document.querySelector('#form');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    getGiphy();
    form.reset();
})

// Clear the container div on the click of 'clear' button 
const clear = document.querySelector('#clear');
clear.addEventListener('click', function (e) {
    e.preventDefault();
    const container_div = document.querySelector('#container');
    container_div.innerHTML = '';
})

// use create and append giphy to container 
function createGiphy(src) {
    const container = document.querySelector('#container');
    const gif = document.createElement('img');
    gif.src = src;
    container.append(gif)
}

// get giphy from the API
async function getGiphy() {
    const searchText = document.querySelector('#type').value;
    const res = await axios.get('https://api.giphy.com/v1/gifs/search', { params: { q: `${searchText}`, api_key: 'GiIbmpBk8W1ddQS8b25zzUqk3fIhfVRC' } })
    let rand = Math.floor(Math.random() * (res.data.data.length));     // Get a random number from 0 to the length of the array that get brings back from API
    //console.log(rand);
    createGiphy(`${res.data.data[rand].images.original.url}`);         // use createGiphy() to append that gif to the container
    //console.log(searchText)
}

