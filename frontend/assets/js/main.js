/* async function getData() {
    const response = await fetch("http://localhost:9898/produkte")
    return response.json()
} 

async function showProucts() {
    const products = await getData()
    console.log(products)
}

showProucts() */

const res = await fetch('http://127.0.0.1:9898/produkte')
const data = await res.json()
console.log(data)
