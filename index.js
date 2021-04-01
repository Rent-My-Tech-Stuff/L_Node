require('dotenv').config();

const server = require('./api/server')


const port = process.env.PORT || 6969


server.get('/', (req,res) => {
  res.send('<h1>What is life</h1>')
})

server.listen(port , () => {
  console.log(`server running on ${port}`)
})