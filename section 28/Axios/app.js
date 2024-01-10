axios.get('https://swapi.dev/api/planets/1/')
    .then(res => {
        console.log("RESPONSE", res);
        console.log(res.data);
    })
    .catch(err => {
        console.log(err);
    })

const getStarWarsNames = async (id) => {
    try {
        const res = await axios.get(`https://swapi.dev/api/people/${id}/`);
        console.log(res.data.name);
    } catch (e) {
        console.log("ERROR!!!", e);
    }
}

for (let i = 1; i <= 10; i++) {
    getStarWarsNames(i);
}


