
const http = require('http');
const socketio = require('socket.io');

// default email and password
const real_email = "admin";
const real_password = "admin";

const server = http.createServer((req, res) => {
    res.end('Hello world');
});


const io = socketio.listen(server);

io.sockets.on('connection', (socket) => {

    console.log('User is connected..');

    // email and password checker
    socket.on('Login_information', (data) => {

   if(real_email === data.email && real_password === data.password){
   console.log("Email and password are correct. you can login..")

   socket.emit('passwordcorrect', {
    Login: 'true'
     });

  } else {
   console.log("Password or email is wrong.. ")
  }
   });


  


 

    socket.on('disconnect', () => {
        console.log('User left..');
    });

});



server.listen(3000);

