const express = require('express')
const app = express()

// Heroku dynamically sets a port
const PORT = process.env.PORT || 5000

app.use(express.static('dist'))

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log('server started on port 5000')
})

app.get('/version', (req, res) => {
  res.send('1.01') // change this string to ensure a new version deployed
})

app.get('/health', (req, res) => {
  // res.status(500).send({ error: 'error!!!' })
  res.status(200).send('"ok! :3')
  // eslint-disable-next-line no-unreachable
})
