let command = prompt("What would you like to do?")
let todos = []

while (command !== "quit") {
    if (command === "new") {
        let todo = prompt("Enter new todo")
        todos.push(todo)
        console.log(`${todo} added to the list`)
    } else if (command === "list") {
        console.log("******************************")
        todos.forEach((todo, i) => console.log(`${i}: ${todo}`))
        console.log("******************************")
    } else if (command === "delete") {
        let deleteIndex = parseInt(prompt("Enter index of todo to delete"))
        const deleted = todos.splice(deleteIndex, 1)
        console.log(`${deleted[0]} Deleted`)
    }
    command = prompt("What would you like to do?")
}

console.log("QUIT THE APP")