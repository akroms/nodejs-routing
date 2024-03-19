const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        fs.readFile("./index.html", (err, data) => {
            if (err) throw Error;
            return res.end(data)
        }); 
    } else {
        switch(req.url) {
            case "/about": fs.readFile("./about.html", (err, data) => {
                if (err) throw Error;
                return res.end(data);
            }); 
            break; 

            case "/contact": fs.readFile("./contact.html", (err, data) => {
                if (err) throw Error;
                return res.end(data)
            }); 
            break; 
        } 

        fs.readFile("./style.css", (err, data) => {
            return res.end(data);
        })
        
    }  
    
    fs.readFile("./style.css", (err, data) => {
        if (err) throw Error; 
        return res.end(data);
    })
   
});

server.listen(5000); 
