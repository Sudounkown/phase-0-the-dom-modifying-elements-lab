// //create element
// const newElement = document.createElement("div")
// //append it to the html
// document.body.append(newElement)

// //create and unordered list
// const ul = document.createElement("ul")
// //populate unordered list with for loop
// for (let i = 0; i < 3; i ++){
//     const li = document.createElement("li")
//     li.textContent = (i + 1).toString()
//     ul.append(li)
// }
// //append to ul to the div created before
// newElement.append(ul)


document.querySelector("main#main").remove()
let newHeader = document.createElement("h1")
newHeader.id = "victory"
newHeader.innerHTML = "Roy is the champion"
document.body.append(newHeader)
