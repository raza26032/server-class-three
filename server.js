// var http = require("http");

// function requestHandler(request, response) {

//     console.log("In comes a request to: " + request.url);

//     response.end("Hello, world!");
// }

// var server = http.createServer(requestHandler);

// server.listen(3000);

// let express = require("express");

// let app = express();

// app.use("/bulb", function(req, res, next) {
//     console.log("Method Is: ", req.method)
//     console.log("URL Is: ", req.url)
//     console.log("req.baseUrl Is: ", req.baseUrl)
//     console.log("req.connection.remoteAddress Is: ", req.connection.remoteAddress)
//     console.log("req.connection.remotePort Is: ", req.connection.remotePort)
//     // res.send("some response")
//     next();
// });
// app.get("/bulb", function(req, res, next) {

//     res.send("Bulb Is On")
// });
// app.post("/bulb", function(req, res, next) {

//     res.send("Bulb Is Created")
// });
// app.put("/bulb", function(req, res, next) {

//     res.send("Bulb state is changed")
// });
// app.delete("/bulb", function(req, res, next) {

//     res.send("Bulb Is Deleted")
// });

// app.listen(3000, () => {
//     console.log("server is running on 30000")
// })

function Post() {

    const Http = new XMLHttpRequest();
    const url = 'http://192.168.50.210:3000/bulb';
    Http.open("POST", url);

    Http.setRequestHeader("Content-Type", "application/json");
    Http.send(JSON.stringify({ name: "Ahmed Raza", time: "Sheikh" }));

    Http.onreadystatechange = (e) => {
        console.log(Http.responseText)
    }

    // const Http = new XMLHttpRequest();
    // const url = 'http://192.168.50.210:3000/bulb';
    // Http.open("GET", url);
    // Http.send();

    // Http.onreadystatechange = (e) => {
    //     console.log(Http.responseText)
    // }
}

// function Post() {
//     const Http = new XMLHttpRequest();
//     const url = 'http://192.168.50.177:3000/bulb';
//     Http.open("POST", url);
//     Http.send();

//     Http.onreadystatechange = (e) => {
//         console.log(Http.responseText)
//     }
// }

// function Put() {
//     const Http = new XMLHttpRequest();
//     const url = 'http://192.168.50.177:3000/bulb';
//     Http.open("PUT", url);
//     Http.send();

//     Http.onreadystatechange = (e) => {
//         console.log(Http.responseText)
//     }
// }

// function Delete() {
//     const Http = new XMLHttpRequest();
//     const url = 'http://192.168.50.177:3000/bulb';
//     Http.open("DELETE", url);
//     Http.send();

//     Http.onreadystatechange = (e) => {
//         console.log(Http.responseText)
//     }
// }