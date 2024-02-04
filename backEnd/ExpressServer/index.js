import express from "express"; //importing Express Package //
const app = express(); //creating an app with this package //
const port =3000; //creating a port(location) for listening to client requests//

// app.listen(3000, ()=>{
//     console.log("Server running on Port 3000.")
// })

// [()=>{}] - an anonymus function that will be used as callback //
// .listen is a method that takes two arguments // x.listen (port, callbackFunction); 
app.listen(port, ()=>{ //the port will be used to listen to the requests from the client //
    console.log(`Server is running on Port ${port}`);
})
