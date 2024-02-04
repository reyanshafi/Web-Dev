// Node Native Modules //

const fs = require("fs"); // require is a function that imports the modules passed to it as an argument // (here fileSystem fs)
// writeFile used to write Files in Js //
fs.writeFile("meessage.txt", "Hello Reyan, How are you!", (err)=> {
    if (err) throw err;
    console.log("File save successfully");
});

// readFIle used to read the files //
// readFile((path(string, url etc), options, callback)// callback(function) is what actually we want to do after reading file //
fs.readFile("./message.txt", "utf8", (err, data)=>{ // (utf8 - if no encoding is specified , then raw buffer is returned //)
    if(err) throw err;
    console.log(data);
}); 
