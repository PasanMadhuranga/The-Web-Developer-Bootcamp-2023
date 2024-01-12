const getResults = async (query) => {
    const res = await axios.get(`https://api.tvmaze.com/search/shows?q=${query}`)
    console.log(res.data)
    return res.data
}

const showResults = async (results) => {
    const resultsContainer = document.querySelector('#resultsContainer')
    const oldResults = document.querySelector('.row')
    oldResults && oldResults.remove()
    const newResultsContainer = document.createElement('div')
    newResultsContainer.classList.add('row', 'row-cols-1', 'row-cols-md-2', 'row-cols-xl-3', 'row-cols-xxl-4', 'mx-auto', 'g-4')
    resultsContainer.appendChild(newResultsContainer)
    for (let result of results) {
        const image = document.createElement('img')
        if (result.show.image) {
            image.src = result.show.image.medium
        }
        else {
            image.src = 'NoImage.jpg'
        }
        image.classList.add('card-img-top')

        const title = document.createElement('h5')
        title.innerText = result.show.name
        title.classList.add('card-title')

        const column = document.createElement('div')
        column.classList.add('col')

        const card = document.createElement('div')
        card.classList.add('card', 'mx-auto')
        column.appendChild(card)
        card.appendChild(image)

        const cardBody = document.createElement('div')
        cardBody.classList.add('card-body')
        cardBody.appendChild(title)

        card.appendChild(cardBody)

        newResultsContainer.appendChild(column)
    }
}

const searchbtn = document.querySelector("#searchBtn")
searchbtn.addEventListener('click', async (e) => {
    e.preventDefault()
    let titleField = document.querySelector("#title")
    let title = titleField.value
    let results = await getResults(title)
    showResults(results)
    titleField.value = ""

})
// searchbtn.addEventListener('click', getFirstResult)