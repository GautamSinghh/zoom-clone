const express = require('express');
// const { Socket } = require('socket.io');
const app = express();
// const PORT = process.env.PORT || 1020;
const server = require('http').Server(app)
const io = require('socket.io')(server)
const {v4: uuidv4} = require('uuid')



app.set('view engine', 'ejs')
app.use(express.static('public'))




app.get('/', (req, res) => {
    res.redirect(`/${uuidV4()}`)
  })
  
  app.get('/:room', (req, res) => {
    res.render('room', { roomId: req.params.room })
  })

  io.on('connection', socket => {
    socket.on('join-room', (roomId) => {
      socket.join(roomId)
      socket.to(roomId).broadcast.emit('user-connected');
    })
  })

//  app.listen(PORT, () =>{
//     console.log(`port is run in ${PORT}`)
// })

server.listen(3010)