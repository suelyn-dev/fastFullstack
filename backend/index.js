import express from "express"
import daten from "./data/data.json" with {type: "json"}
import cors from "cors"

const produkte = daten.produkte

const app = express()
const PORT = 9898

//wegen Same Origin Policy --> CORS Header Serverseitig lockern, dass von diesem host noch eine Anfrage kommt
/* function myCors(req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "http://127.0.0.1:5500")
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT,DELETE, OPTIONS")
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization")

    if (req.method === "OPTIONS") {
        return res.sendStatus(204) //204 -> no content
    }

    next()
}
 */
/* app.use(myCors) */

//oder einfach über import cors:
app.use(cors())

app.get("/produkte", (req, res) => {
    res.send(produkte)
})


app.listen(PORT, () => console.log(`Server runs on Port: ${PORT}`))