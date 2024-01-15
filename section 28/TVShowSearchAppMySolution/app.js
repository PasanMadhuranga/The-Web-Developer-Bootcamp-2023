const getResults = async (query) => {
    const res = await axios.get(`https://api.tvmaze.com/search/shows?q=${query}`)
    console.log(res.data)
    return res.data
}

const showResults = async (results) => {
    const resultsContainer = document.querySelector('#resultsContainer')
    const oldResults = document.querySelector('#results')
    oldResults && oldResults.remove()

    const newResultsContainer = document.createElement('div')
    newResultsContainer.id = 'results'
    newResultsContainer.classList.add('row', 'row-cols-1', 'row-cols-md-2', 'row-cols-xl-3', 'row-cols-xxl-4', 'mx-auto', 'g-4')
    resultsContainer.appendChild(newResultsContainer)

    if (!results.length) {
        newResultsContainer.innerHTML = `<p class="lead text-center mx-auto">No Results Found</p>`
        return
    }


    for (let result of results) {
        let imageSrc = result.show.image ? result.show.image.medium : 'NoImage.jpg'

        const column = document.createElement('div')
        column.classList.add('col')

        column.innerHTML = `
            <div class="card mx-auto">
                <div class="front">
                    <img src=${imageSrc} alt="Image of the TV Show" class="card-img-top">
                    <div class="card-body">
                        <h3 class="card-title">${result.show.name}</h3>
                        <p class="card-text mb-0"><span class="h6">Rating</span> : ${result.show.rating.average || "Not Available"}</p>
                        <p class="card-text"><span class="h6">Runtime</span>: ${result.show.runtime || "Not Available"}</p>
                    </div>
                </div>
                <div class="back">
                    ${result.show.summary || "No Summary Available"}
                </div>
            </div>`

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
