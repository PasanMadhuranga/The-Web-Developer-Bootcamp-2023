fetch('https://swapi.dev/api/people/1/')
    .then((response) => {
        console.log("FIRST REQUEST WORKED!!!");
        return response.json();
    })
    .then((data) => {
        console.log(data);
        return fetch('https://swapi.dev/api/planets/1/');
    })
    .then((response) => {
        console.log("SECOND REQUEST WORKED!!!");
        return response.json();
    })
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.log("ERROR!!!!");
        console.log(err);
    })


const getStarWarsNames = async () => {
    for (let i = 1; i <= 20; i++) {
        try {
            let res = await fetch(`https://swapi.dev/api/people/${i}/`);
            let data = await res.json();
            console.log(data.name);
        } catch (e) {
            console.log("SOMETHING WENT WRONG!!!");
            console.log(e);
        }
    }
}

getStarWarsNames();