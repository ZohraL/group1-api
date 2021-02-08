const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
<<<<<<< HEAD
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
=======
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
>>>>>>> 1c258fd74ef509ded9ff5b39deafbb44d37d92d9
})