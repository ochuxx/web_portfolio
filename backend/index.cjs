const PORT = 8000
const express = require('express')
const cors = require('cors')
const axios = require('axios')
require('dotenv').config()

const app = express()
app.use(cors({
  origin: 'https://ochux-web.vercel.app/',
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type']
}))
app.use(express.json()); // Middleware

app.post('/do-post', (req, res) => {
  const dataToSend = req.body
  console.log(dataToSend)

  const options = {
    method: "POST",
    url: process.env.SECRET_API_URL,
    headers: {
      "Content-Type": "application/json",
    },
    data: {
      token: process.env.SECRET_TOKEN_GAS_KEY,
      origin: req.headers.origin,
      data: dataToSend
    }
  }

  axios.request(options)
  .then((resGas) => {
    console.log(resGas.data)
    if (resGas.data.success) {
      res.json({
        success: true,
        resGas: resGas.data,
      })

    } else {
      console.log(resGas.data.error)
      res.json({
        success: false,
        userMessage: resGas.data.error,
        error: resGas.data.error,
      })
    }
  })
  .catch((err) => {
    console.log(err)
    res.status(500).json({
      success: false,
      userMessage: 'Posiblemente en el servidor, vuelve a intentarlo más tarde...',
      error: err.message
    })
  })
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})