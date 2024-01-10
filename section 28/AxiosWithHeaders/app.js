const jokesList = document.querySelector('#jokes');
const addButton = document.querySelector('button');

const getDadJoke = async () => {
    try {
        const config = { headers: { Accept: 'application/json' } };
        const res = await axios.get('https://icanhazdadjoke.com/', config);
        return res.data.joke;
    } catch (e) {
        return "NO JOKES AVAILABLE! SORRY :("
    }
}

const addNewJoke = async () => {
    const newJoke = document.createElement('li');
    newJoke.innerText = await getDadJoke();
    jokesList.append(newJoke);
}

addButton.addEventListener('click', addNewJoke);