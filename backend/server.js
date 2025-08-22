import express from "express"
import cors from "cors"

const app = express()
app.use(cors()) // allows all origins by default
// or restrict:
app.use(cors({ origin: "http://localhost:5173" }))

app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" })
})

app.listen(4000)
