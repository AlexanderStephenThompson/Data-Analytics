const HTTP = require('http')

// Create Server Object
HTTP.createServer((request, response)=>{

    response.write("I hear you")
    response.end()
}).listen(5000, ()=> console.log("Server running..."))