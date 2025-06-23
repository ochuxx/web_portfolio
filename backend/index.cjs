const PORT = 8000
const express = require('express')
const cors = require('cors')
const axios = require('axios')
require('dotenv').config()

const app = express()
app.use(cors())

app.post('/do-post', (req, res) => {
  const data = req.body

  const options = {
    method: "POST",
    url: process.env.SECRET_API_URL,
    headers: {
      "Content-Type": "application/json",
    },
    data: {
      token: process.env.SECRET_TOKEN_GAS_KEY,
      origin: req.headers.origin || "http://localhost:5173",
      data: data
    }
  }

  axios.request(options)
  .then((resGas) => {
    console.log(resGas)
    if (resGas.data.success) {
      res.json({
        success: true,
        resGas: resGas.data,
      })

    } else {
      res.json({
        success: false,
        userMessage: resGas.data.error,
        error: resGas.data.error,
      })
    }
  })
  .catch((err) => {
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