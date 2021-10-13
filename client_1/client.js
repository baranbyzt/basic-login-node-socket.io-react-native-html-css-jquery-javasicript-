
    $(document).ready(function(){

    const socket = io.connect('http://localhost:3000/');

        $("button").click(function(){
            var email = $(".email_input").val();
            var password = $(".pasworld_input").val();


            socket.emit('Login_information', {
            email:email,
            password:password
            });



    
    
        });

 socket.on('passwordcorrect', (data) => {
     
    if(data.Login === 'true'){
        window.location.href = "http://127.0.0.1:5500/client_1/login.html";
    }
   }); 

  });


